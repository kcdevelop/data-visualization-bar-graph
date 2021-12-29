import { setBarHeight } from "./bars.js";
import { setLabelSize } from "./set-label-size.js";
import { currentURL } from "./variables.js";

//Set handle for "data-bar" elements' container 
const graphBars = document.querySelector('.graph-bars');

//Build the bar graph using the "dataSet"
export const buildGraph = (data) => {
    //Set graph title
    let graphTitle = document.querySelector('.graph-title'),
         titleText = document.createTextNode(data[0].title);

    graphTitle.append(titleText);

    /*Iterate through the "dataSet" to create 
    "bar-label" and "data-bar" elements*/
    data.forEach((item, barCount) => {
        if(barCount > 0) {
            let dataBar = document.createElement('div'),
                totalLabel = document.createElement('i'),
                totalText = document.createTextNode(item.total),
                nameLabel = document.createElement('div'),
                nameText = document.createTextNode(item.label);

            //Set "total-label" and "name-label" classes
            totalLabel.setAttribute('class', `total-label ${parseInt(item.total.replace(',', '')) < 5000 ? 'highlight' : ''}`);
            nameLabel.setAttribute('class', 'name-label');

            //Append "total-label" and "name-label" elements
            totalLabel.append(totalText);
            nameLabel.append(nameText);
            dataBar.append(totalLabel, nameLabel);
            
            //Set "data-bar" element classes and title
            dataBar.setAttribute('class', `data-bar bar${barCount + 1}`);
            dataBar.setAttribute('title', `${item.total}`);

            //Set "data-bar" element background styles
            dataBar.style.background = `
                url('${currentURL}images/${item.background}') ${item.color}
            `;

            //Append "data-bar" elements
            graphBars.append(dataBar);
            
            //Animate "data-bar" heights
            let increaseBarHeight = setInterval(() => {
                //Set each "data-bar" height incrementally
                setBarHeight(dataBar, item.number, item.unit);
                
                //Set label font size
                setLabelSize();
            }, 100, 
            setTimeout(() => {
                clearInterval(increaseBarHeight);
            }, 2500));
        }
    });
}