export const changeColor = () => {

    const randomNumber = (min, max) => {
        min= Math.ceil(min);
        max= Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min );
    };

    let R = randomNumber(0,150);
    let G = randomNumber(0,150);
    let B  = randomNumber(0,150);
    const color = `rgb(${R},${G},${B})`
    return color;
};
