
export const vs = `
    precision highp float;
    precision highp int;
  
    // three
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
  
    // 
    attribute vec3 position;
  
    uniform vec4 color;
  
    varying vec4 vColor;
  
    void main(){
      vec4 pos = vec4( position, 1.0 );
      
      gl_Position = projectionMatrix * modelViewMatrix * pos;
  
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