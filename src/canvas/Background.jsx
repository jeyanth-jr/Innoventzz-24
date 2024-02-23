import { useRef } from 'react';
import * as THREE from 'three'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { shaderMaterial, Preload } from "@react-three/drei";
import { useControls } from 'leva'

// import { MathUtils } from 'three'
// import { DepthOfField, EffectComposer, Noise } from '@react-three/postprocessing'

export const Plane = () => {
  const ref = useRef()
  const { backgroundColor } = useControls({ backgroundColor: '#160924' })

  useFrame((state, delta) => {
    ref.current.uColor = new THREE.Color(backgroundColor)
  })

  const ColorShiftMaterial = shaderMaterial(
    { time: 0, uColor: new THREE.Color(backgroundColor) },
        // vertex shader
        /*glsl*/`
          varying vec2 vUv;
          void main() {
           
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            vUv = uv;
          }
        `,
        // fragment shader
    /*glsl*/`
    uniform float time;
    uniform vec3 uColor;
    varying vec2 vUv;

      vec2 cubic(vec2 p) {
        return p * p * (3.0 - 2.0 * p);
      }
      
      vec2 quintic(vec2 p) {
        return p * p * p * (10.0 + p * (-15.0 + p * 6.0));
      }
      
      float whiteNoise2x1(vec2 p) {
        // return p.x;
      
        // return fract(p.x * p.y * 1000.0123);
      
        // generic noise function - replace with something better
        // float random = dot(p, vec2(12.9898, 78.233));
        float random = dot(p, vec2(12., 78.));
        random = sin(random);
        random = random * 43758.5453;
        random = fract(random);
        return random;
      }
      
      float valueNoiseFn(vec2 uv) {
        vec2 gridUv = fract(uv);
        vec2 gridId = floor(uv);
      
        gridUv = quintic(gridUv);
      
        float botLeft = whiteNoise2x1(gridId);
        float botRight = whiteNoise2x1(gridId + vec2(1.0, 0.0));
        float b = mix(botLeft, botRight, gridUv.x);
      
        float topLeft = whiteNoise2x1(gridId + vec2(0.0, 1.0));
        float topRight = whiteNoise2x1(gridId + vec2(1.0, 1.0));
        float t = mix(topLeft, topRight, gridUv.x);
      
        float noise = mix(b, t, gridUv.y);
      
        return noise;
      }
      
          void main() {
            vec2 uv= vUv;
        
            for(float i=1.;i<10.;i++){
                uv.x+=.2/i*cos(i*1.0*uv.y+time);
                uv.y+=.2/i*cos(i*10.0*uv.x+time);
            }

            uv += time / 10.0;
            float vn = valueNoiseFn(uv * 4.0) * 1.0;
            vn += valueNoiseFn(uv * 8.0) * 0.5;
            vn += valueNoiseFn(uv * 16.0) * 0.25;
            vn += valueNoiseFn(uv * 32.0) * 0.125;
            vn += valueNoiseFn(uv * 64.0) * 0.0625;
            vn /= 4.0;

           vec3 color=mix(vec3(0.),uColor, vn * 0.5);
            gl_FragColor=vec4(color/abs(sin(time-uv.y-uv.x)),1.);
          }
        `
  )


  extend({ ColorShiftMaterial })

  useFrame((state, delta) => (ref.current.time += delta))
  return (
    <mesh rotation={[0, 2, 0]} position={[-20, 0, 0]} dispose={null}>
      <planeGeometry args={[70, 70, 1]} />
      <colorShiftMaterial ref={ref} />

    </mesh>
  )
}


const BackgroundCanvas = () => {
  return (
    <Canvas
      style={{ position: 'absolute', zIndex: -1 }}
      gl={{ preserveDrawingBuffer: true }}
      frameloop='always'
      dpr={[1, 2]}
      camera={{ position: [100, 2, 0], fov: 25 }}
    >
      <pointLight intensity={10} />
      <Plane />
      <Preload all />
    </Canvas >
  )
};


export default BackgroundCanvas