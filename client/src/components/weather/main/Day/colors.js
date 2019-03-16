export const MAX = 40;
export const MIN = -30;

/*
    Linear gradient with the folling structure from top to bottom: background | colored border | color
*/
const backGradient = (percent, r, g, b) => `linear-gradient(to bottom, 
    white 0%,
    white ${100 - percent}%,
    rgba(${r}, ${g}, ${b}, 0.7) ${100 - percent}%,
    rgba(${r}, ${g}, ${b}, 0.7) ${100 - percent + 3}%,
    rgba(${r}, ${g}, ${b}, 0.5) ${100 - percent + 3}%,
    rgba(${r}, ${g}, ${b}, 0.5) 100%)`;

/*
    This code is a pentagone path on hue diagram from red to blue colors replacing green part with minty colors
*/
export function getTemperatureColor(percent) {
    if (percent >= 80) {
        return backGradient(percent,
            255,
            (103 - percent) * 10,
            0);
    } else if (percent >= 60) {
        return backGradient(percent,
            255,
            (264 - percent) * 1.25,
            (100 - percent) * 2.5);
    } else if (percent >= 40) {
        return backGradient(percent,
            (27.1 - percent) * -7.75,
            (-144 - percent) * -1.25,
            (72.9 - percent) * 7.75);
    } else {
        return backGradient(percent,
            (0 - percent) * -2.5,
            (0 - percent) * -5.75,
            255);
    }
}
