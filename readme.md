Babylon.js
==========

Getting started? Play directly with the Babylon.js API via our [playground](http://www.babylonjs.com/playground). It contains also lot of simple samples to learn how to use it. 

## CDN
- http://cdn.babylonjs.com/2-1/babylon.js 
- http://cdn.babylonjs.com/2-1/babylon.max.js 
- http://cdn.babylonjs.com/2-1/babylon-noworker.js 

## Preview release
You can help by testing or contributing to the next version.
- 2.2-alpha can be found [here](https://github.com/BabylonJS/Babylon.js/tree/master/Preview%20release)
- [Creating the minified version](http://doc.babylonjs.com/page.php?p=22641)

## Documentation
- [Documentation](http://doc.babylonjs.com)
- [Roadmap](http://doc.babylonjs.com/page.php?p=22681)
- [Samples](https://github.com/BabylonJS/Samples)
- [Video overview (1 hour) of BabylonJS features](http://www.youtube.com/watch?v=z80TYMqsdEM)
- [Complete course (8 hours)](http://www.microsoftvirtualacademy.com/training-courses/introduction-to-webgl-3d-with-html5-and-babylon-js)

## Useful links

Official web site: [www.babylonjs.com](http://www.babylonjs.com/) 

Official [forum](http://www.html5gamedevs.com/forum/16-babylonjs/) on www.html5gamedevs.com

Online [sandbox](http://www.babylonjs.com/sandbox) where you can test your .babylon scenes with a simple drag'n'drop

Online [shader creation tool](http://www.babylonjs.com/cyos/) where you can learn how to create GLSL shaders

3DS Max [exporter](https://github.com/BabylonJS/Babylon.js/tree/master/Exporters/3ds%20Max) can be used to generate a .babylon file from 3DS Max

Blender [exporter](https://github.com/BabylonJS/Babylon.js/tree/master/Exporters/Blender) can be used to generate a .babylon file from Blender 3d

Unity 5 [exporter](https://github.com/BabylonJS/Babylon.js/tree/master/Exporters/Unity%205) can be used to export your geometries from Unity 5 scene editor

Online [asset converter](http://www.babylonjs.com/converter.html) where you can generate .babylon file from .OBJ, .FBX, .DAE

## Features
- Complete scene graph with lights, cameras, materials and meshes
- Collisions engine
- Physics engine (thanks to [oimo.js](https://github.com/lo-th/Oimo.js))
- Scene picking
- Antialiasing
- Animations engine
- Audio engine
- Particles Systems
- Sprites and 2D layers
-  Optimizations engines: 
 - Frustum clipping
 - Sub-meshes clipping
 - Hardware scaling
 - Selection octrees
 - Offline mode via IndexedDB (Assets are saved locally to prevent reloading them)
 - Incremental loading 
 - Binary compressed format
 - Hardware accelerated instances
 - Level of details (LOD)
 - Automatic scene optimizer
 - Debug layer to help you optimize and debug scenes
 - SIMD.js support
 - Collisions can be offloaded on webworkers
- Standard material is a per pixel material that supports:
 - Diffuse lightning and texture
 - Ambient lightning and texture
 - Specular lightning
 - Opacity texture
 - Reflection texture (Spheric, planar, cubic and projection)
 - Mirror texture
 - Emissive texture
 - Specular texture
 - Bump texture
 - Fresnel term for diffuse, opacity, emissive and reflection
 - Up to 4 lights (points, directionals, spots, hemispherics)
 - Custom materials
 - Custom shaders
 - Skybox
 - Vertex color
 - Bones (Animations and shadows are supported)
 - Procedural textures
-  Special FX
 - Fog
 - Alpha blending
 - Alpha testing
 - Billboarding
 - Fullscreen mode
 - Shadow Maps and Variance Shadow Maps (with support for blurred shadows)
 - Rendering layers
 - Post-processes (blur, refraction, black'n'white, fxaa, customs...)
 - SSAO
 - Volumetric Light Scattering 
 - Depth of field and lens effects
 - Lens flares
 - Multi-views
-  Textures:
 - Render target textures
 - Dynamic textures (canvas)
 - Video textures
 - Compressed (DDS) textures
 - TGA textures
-  Cameras (Perspective and orthographic):
 - Arc rotate camera
 - Free camera
 - Touch camera
 - Anaglyph camera
 - Virtual Joysticks camera
 - Stereoscopic camera
 - Gamepad camera
 - VR Device Oriention camera
 - WebVR camera
 - Follow camera
-  Meshes: 
 - Mesh cloning
 - Dynamic meshes
 - Height maps
 - Constructive solid geometries
 - Parametric shapes (Ribbon, tube, etc.)
 - Hardware instances
-  Import: 
 - Babylon scene file can be converted from .OBJ, .FBX
 - Exporter for Blender
 - Exporter for Cheetah3d
 - Exporter for 3ds Max
 - Exporter for Unity 5
 - STL importer
 - Assets manager

[![Build Status](https://travis-ci.org/BabylonJS/Babylon.js.svg)](https://travis-ci.org/BabylonJS/Babylon.js)

## Apache License 2.0 (Apache)

Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

### Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

### Grant of Copyright License.

Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

### Grant of Patent License.

Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

### Redistribution.

You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

1. You must give any other recipients of the Work or Derivative Works a copy of this License; and

2. You must cause any modified files to carry prominent notices stating that You changed the files; and

3. You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

4. If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.

You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

### Submission of Contributions.

Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

### Trademarks.

This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

### Disclaimer of Warranty.

Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

### Limitation of Liability.

In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

### Accepting Warranty or Additional Liability.

While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

## External dependencies
- hand.js: http://handjs.codeplex.com






