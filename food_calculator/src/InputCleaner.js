// Input: input string directly from user input
// Output: Return string matching database capitalization
// Database has first letter capitalized, as well as every letter following a space.
//  All other letters are lowercase
//  Some characters may not be alphabetic / space (ex: 2% Milk)
export function cleanQuery(rawQuery){
    // Notably, character.toUpperCase() of a non-alphabetic value does not change the value.
    let safeQuery = rawQuery.trim(); // remove leading and trailing whitespace
    safeQuery = safeQuery.charAt(0).toUpperCase() + safeQuery.substring(1); // First character is always uppercase
    for( let i = 1; i < safeQuery.length; i++ ){
        if(safeQuery.charAt(i).toUpperCase() != safeQuery.charAt(i).toLowerCase()){
            // Character is a letter
            if(safeQuery.charAt(i-1) == ' '){
                // Letter follows a space
                // Capitalize this letter
                if(i < safeQuery.length-1){
                    safeQuery = safeQuery.substring(0, i) + safeQuery.charAt(i).toUpperCase() + safeQuery.substring(i+1);
                } else{
                    safeQuery = safeQuery.substring(0, i) + safeQuery.charAt(i).toUpperCase();
                }
            } else{
                // Letter follows a non-space character
                // Lowercase this letter
                if(i < safeQuery.length-1){
                    safeQuery = safeQuery.substring(0, i) + safeQuery.charAt(i).toLowerCase() + safeQuery.substring(i+1);
                } else{
                    safeQuery = safeQuery.substring(0, i) + safeQuery.charAt(i).toLowerCase();
                }            
            }
        } else{
            //Character is not a letter, do nothing
        }
    }
    return safeQuery;
}