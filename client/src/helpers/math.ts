/**
 * @returns B(t) as [x, y] where 0 <= t <= 1
 */
export function buildCSSBezierCurve(
  x0: number,
  x1: number,
  y0: number,
  y1: number
) {
  return function (t: number): [number, number] {
    // clamp
    if (t < 0) t = 0;
    if (t > 1) t = 1;

    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;
    const uuu = uu * u;
    const ttt = tt * t;

    const p0 = [0, 0];
    const p1 = [x0, x1];
    const p2 = [y0, y1];
    const p3 = [1, 1];

    const vector: [number, number] = [0, 0];
    for (let i = 0; i < 2; i++) {
      vector[i] =
        uuu * p0[i] + 3 * uu * t * p1[i] + 3 * u * tt * p2[i] + ttt * p3[i];
    }
    return vector;
  };
}

export function degreeToRadian(degree: number) {
  return degree * (Math.PI / 180);
}

export function radianToDegree(radian: number) {
  return radian * (180 / Math.PI);
}