
import colormap from 'colormap'

export const getFFTs = (number, pointCount) => {
    let ffts = [];
    for (let i = 0; i < number; i++) {
        ffts.push(
            Array(pointCount).fill(0)
        );
    }
    return ffts;
};

export const getPalette = (name, num) => {
    return colormap({
        colormap: name,
        nshades: num,
        format: 'float',
        alpha: 1
    })
}

//https://www.trysmudford.com/blog/linear-interpolation-functions/

// a compreso tra 0..1 -> x..y
export const lerp = (x, y, a) => x * (1 - a) + y * a;

export const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
//  a x..y -> 0..1
export const invlerp = (x, y, a) => clamp((a - x) / (y - x));

export const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));