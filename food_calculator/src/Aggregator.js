// Input: A list of items (ex: items, cart)
// Output: A list of length 2, with the raw values at index 0 and the labelled output at index 1
export function aggregateList(itemList, isCart){
   let aggregated = [0, 0, 0, 0, 0];
   for(let i = 0; i < itemList.length; i++){
        // parseInt || 0 indicates to assume 0 if parseInt fails
        if(isCart){
            aggregated[0] += parseInt(itemList[i][0].energy) * itemList[i][1] || 0;
            aggregated[1] += parseInt(itemList[i][0].protein) * itemList[i][1] || 0;
            aggregated[2] += parseInt(itemList[i][0].carbohydrate) * itemList[i][1] || 0;
            aggregated[3] += parseInt(itemList[i][0].fat) * itemList[i][1] || 0;
            aggregated[4] += parseInt(itemList[i][0].cost) * itemList[i][1] || 0;   
        } else{

        aggregated[0] += parseInt(itemList[i].energy) || 0;
        aggregated[1] += parseInt(itemList[i].protein) || 0;
        aggregated[2] += parseInt(itemList[i].carbohydrate) || 0;
        aggregated[3] += parseInt(itemList[i].fat) || 0;
        aggregated[4] += parseInt(itemList[i].cost) || 0;
        }
    }
   let labelledAggregate = ["Energy: " + aggregated[0] + "kcal", 
                           "Protein: " + aggregated[1] + "g",
                           "Carbohydrates: " + aggregated[2] + "g",
                           "Fat: " + aggregated[3] + "g",
                           "Cost: $" + aggregated[4]];
   return [aggregated, labelledAggregate];
 }