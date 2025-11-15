export const vs = `
    precision highp float;
    precision highp int;
  
    uniform mat4 viewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;
   
    attribute vec3 position;
  
    uniform vec4 uColor;
  
    varying vec4 vColor;
  
    void main(){
      
      gl_Position = projectionMatrix * viewMatrix * // THREE.Camera
        modelMatrix * // THREE.Mesh
        vec4( position, 1.0 ); // from THREE.BufferGeometry
  
      vColor = uColor;
    }
  `;
export const fs = `
    precision highp float;
  
    varying vec4 vColor;
  
    void main(){
      gl_FragColor =vColor;
    }
  `;
