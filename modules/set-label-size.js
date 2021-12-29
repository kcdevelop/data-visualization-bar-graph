const labelFontSize = [11, 12, 14]; //Font sizes

//Set "bar-label" font size
export const setLabelSize = () => {
    let barNumber = document.querySelectorAll('.data-bar'),
         totalBars = barNumber.length,
         pixelSize = `${labelFontSize[0]}px`;

        //Set "bar-label" font  based on the number of "data-bar" elements
        if(totalBars <= 3) { pixelSize = `${labelFontSize[2]}px`; }
        if(totalBars == 4) { pixelSize = `${labelFontSize[1]}px`; }

    //Iterate through"data-bar" elements and set the "data-label" font size
    barNumber.forEach((barLabel) => {
        barLabel.style.fontSize = pixelSize;
    });
}