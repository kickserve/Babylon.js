import { Constants } from "../../Engines/constants";
import type { AbstractEngine } from "../../Engines/abstractEngine";
import type { Scene } from "../../scene";
import { Texture } from "../../Materials/Textures/texture";
import { ProceduralTexture } from "../../Materials/Textures/Procedurals/proceduralTexture";
import type { IProceduralTextureCreationOptions } from "../../Materials/Textures/Procedurals/proceduralTexture";
import { Vector4 } from "../../Maths/math.vector";
// import { Logger } from "../Misc/logger";
import "../../Shaders/iblShadowSpatialBlur.fragment";
import "../../Shaders/iblShadowDebug.fragment";
import { PostProcess } from "../../PostProcesses/postProcess";
import type { IblShadowsRenderPipeline } from "./iblShadowsRenderPipeline";

/**
 * This should not be instanciated directly, as it is part of a scene component
 */
export class IblShadowsSpatialBlurPass {
    private _scene: Scene;
    private _engine: AbstractEngine;
    private _renderPipeline: IblShadowsRenderPipeline;
    private _outputPT: ProceduralTexture;
    private _worldScale: number = 1.0;

    public getTexture(): ProceduralTexture {
        return this._outputPT;
    }
    public setWorldScale(scale: number) {
        this._worldScale = scale;
    }

    private _debugPass: PostProcess;
    private _debugSizeParams: Vector4 = new Vector4(0.0, 0.0, 0.0, 0.0);
    public setDebugDisplayParams(x: number, y: number, widthScale: number, heightScale: number) {
        this._debugSizeParams.set(x, y, widthScale, heightScale);
    }
    private _debugEnabled: boolean = false;

    public get debugEnabled(): boolean {
        return this._debugEnabled;
    }

    public set debugEnabled(enabled: boolean) {
        if (this._debugEnabled === enabled) {
            return;
        }
        this._debugEnabled = enabled;
        if (enabled) {
            this._debugPass = new PostProcess(
                "Shadow Spatial Blur Pass Debug",
                "iblShadowDebug",
                ["sizeParams"], // attributes
                ["debugSampler"], // textures
                1.0, // options
                this._scene.activeCamera, // camera
                Texture.BILINEAR_SAMPLINGMODE, // sampling
                this._engine // engine
            );
            this._debugPass.onApply = (effect) => {
                // update the caustic texture with what we just rendered.
                effect.setTexture("debugSampler", this._outputPT);
                effect.setVector4("sizeParams", this._debugSizeParams);
            };
        }
    }

    /**
     * Instanciates the importance sampling renderer
     * @param scene Scene to attach to
     * @param iblShadowsRenderPipeline The IBL shadows render pipeline
     * @returns The importance sampling renderer
     */
    constructor(scene: Scene, iblShadowsRenderPipeline: IblShadowsRenderPipeline) {
        this._scene = scene;
        this._engine = scene.getEngine();
        this._renderPipeline = iblShadowsRenderPipeline;
        this._createTextures();
    }

    private _createTextures() {
        const outputOptions: IProceduralTextureCreationOptions = {
            generateDepthBuffer: false,
            generateMipMaps: false,
            format: Constants.TEXTUREFORMAT_RGBA,
            type: Constants.TEXTURETYPE_UNSIGNED_BYTE,
            samplingMode: Constants.TEXTURE_NEAREST_SAMPLINGMODE,
        };

        this._outputPT = new ProceduralTexture(
            "shadowPassTexture2",
            { width: this._engine.getRenderWidth(), height: this._engine.getRenderHeight() },
            "iblShadowSpatialBlur",
            this._scene,
            outputOptions
        );
        this._outputPT.autoClear = false;
        this._outputPT.refreshRate = 0;
    }

    public update() {
        if (!this._scene.activeCamera) {
            return;
        }

        const iterationCount = 1;
        this._outputPT.setVector4("blurParameters", new Vector4(iterationCount, this._worldScale, 0.0, 0.0));
        this._outputPT.setTexture("shadowSampler", this._renderPipeline!.getRawShadowTexture());

        const prePassRenderer = this._scene.prePassRenderer;
        if (prePassRenderer) {
            const wnormalIndex = prePassRenderer.getIndex(Constants.PREPASS_WORLD_NORMAL_TEXTURE_TYPE);
            const depthIndex = prePassRenderer.getIndex(Constants.PREPASS_DEPTH_TEXTURE_TYPE);
            if (wnormalIndex >= 0) this._outputPT.setTexture("worldNormalSampler", prePassRenderer.getRenderTarget().textures[wnormalIndex]);
            if (depthIndex >= 0) this._outputPT.setTexture("linearDepthSampler", prePassRenderer.getRenderTarget().textures[depthIndex]);
        }
    }

    private _disposeTextures() {
        this._outputPT.dispose();
    }

    /**
     * Checks if the pass is ready
     * @returns true if the pass is ready
     */
    public isReady() {
        return this._outputPT.isReady();
    }

    /**
     * Resizes the output texture to match the engine render size
     */
    public resize() {
        this._outputPT.resize({ width: this._engine.getRenderWidth(), height: this._engine.getRenderHeight() }, false);
    }

    /**
     * Disposes the associated resources
     */
    public dispose() {
        this._disposeTextures();
    }
}
