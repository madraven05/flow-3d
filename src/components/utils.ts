import { Camera, Vector3 } from "three";

export const pxTo3DPos = (
  x: number,
  y: number
): Vector3 => {

  const xi = ((x/window.innerWidth) * 2 - 1);
  const zi = -((y/window.innerHeight) * 2 - 1);
  
  console.log(xi, zi)

  const vec = new Vector3(
    xi+zi,
    0,
    xi-zi
  )
  return vec;
};
