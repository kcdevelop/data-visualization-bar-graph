var barHeight = 0;

//Set each "data-bar" elements' height
export const setBarHeight = (barElm, number, unit) => {
    barElm.style.height = barHeight <= number ? `${barHeight}${unit}` : false;
    ++barHeight;
}