// Input: A list of items (ex: items, cart)
// Output: A list of length 2, with the raw values at index 0 and the labelled output at index 1
export function aggregateList(itemList){
   let aggregated = [0, 0, 0, 0];
   for(let i = 0; i < itemList.length; i++){
    // parseInt || 0 indicates to assume 0 if parseInt fails
     aggregated[0] += parseInt(itemList[i].energy) || 0;
     aggregated[1] += parseInt(itemList[i].protein) || 0;
     aggregated[2] += parseInt(itemList[i].carbohydrate) || 0;
     aggregated[3] += parseInt(itemList[i].fat) || 0;
   }
   let labelledAggregate = ["Energy: " + aggregated[0] + "kcal", 
                           "Protein: " + aggregated[1] + "g",
                           "Carbohydrates: " + aggregated[2] + "g",
                           "Fat: " + aggregated[3] + "g"];
   return [aggregated, labelledAggregate];
 }