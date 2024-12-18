export const vertexShader = /* glsl */`
varying vec2 vUv;
varying vec4 worldPos;
void main() {
    vUv = uv;
    worldPos = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export const fragmentShader = /* glsl */ `
uniform vec2 iResolution;
uniform vec3 uPointerPos;
uniform float uSearchingNode;
uniform float uWrongPos;
uniform float interval;
uniform float lineThickness;
uniform vec3 color;
varying vec2 vUv;
varying vec4 worldPos;


void main() {
    vec2 uv = vUv;
    vec3 col = color;
    
    vec4 boundaryBoxColor = vec4(0.0, 0.0, 0.0, 0.0);
    
    if(uSearchingNode > 0.0) {
        if(worldPos.x < uPointerPos.x + 1.0 && worldPos.x > uPointerPos.x - 1.0 && worldPos.z < uPointerPos.z + 1.0 && worldPos.z > uPointerPos.z - 1.0) {
            boundaryBoxColor = vec4(0.2, 1.0, 0.2, 1.0);
            if(uWrongPos > 0.0) {
                boundaryBoxColor = vec4(1.0, 0.0, 0.1, 0.3);
            }
        }
    }

    
    
    // Calculate offset to center the grid
    float offset = (lineThickness / 2.0) - ((1.0 - interval) / 2.0);

    // Draw grid lines
    if (mod(uv.x + offset, interval) < lineThickness || mod(uv.y + offset, interval) < lineThickness) {
        col = vec3(0.4); 
    }

    gl_FragColor = vec4(col, 0.5) + boundaryBoxColor;  // Output color with full opacity
}
`