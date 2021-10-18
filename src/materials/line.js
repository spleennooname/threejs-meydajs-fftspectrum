
export const vs = `
    precision highp float;
    precision highp int;
  
    // three
    uniform mat4 viewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat4 modelMatrix;
   
    // 
    attribute vec3 position;
    // instance attrib
    //attribute vec3 ipos;
  
    uniform vec4 color;
  
    varying vec4 vColor;
  
    void main(){
      
      gl_Position = projectionMatrix * viewMatrix * // THREE.Camera
        modelMatrix * // THREE.Mesh
        vec4( position, 1.0 ); // from THREE.BufferGeometry
  
      vColor = color;
    }
  `
export const fs = `
    precision highp float;
  
    varying vec4 vColor;
  
    void main(){
      gl_FragColor = vColor;
    }
  `