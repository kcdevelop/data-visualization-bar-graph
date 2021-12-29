import { currentURL } from "./variables.js";

//Get JSON data
const getDataSet = async () => {
    let dataSet = fetch(`${currentURL}/data/data.json`),
         response = await dataSet.then((data) => data.json());

    response = JSON.stringify(response);
    response = JSON.parse(response);

    return response;
}

//Save parsed JSON data
export const data = await getDataSet();