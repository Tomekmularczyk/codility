/**

0. declare 
   prevCharacter = binary[0];
   maxCount = 0;
   currentCount = 0;
   isInGap = false;
1. iterate over all elements starting with 1.
3. check it character is "0"
   YES) check if isInGap
      YES) currentCount += 1
      NO) check if prevCharacter === "1"
         YES) isInGap = true
   NO) isInGap === true;
     YES) isINGap === false; if currentCoung > maxCount, currentCOunt =  0
4. prevCharacter = binary[i]
*/


function longestBinary(binary) {
    binary = binary.split('');
    if(binary.length < 3) return 0;

    let prevCharacter = binary[0];
    let currentCount = 0;
    let maxCount = 0;
    let isInGap = false;
    for(let i = 1; i < binary.length; i++) {
        if(binary[i] === '0') {
            if(isInGap) {
                currentCount += 1;
            } else {
                if(prevCharacter === '1') {
                    isInGap = true;
                    currentCount = 1;
                }
            }
        } else {
            if(isInGap) {
                isInGap = false;
                maxCount = currentCount > maxCount ? currentCount : maxCount;
                currentCount = 0;
            }
        }
        prevCharacter = binary[i];
    }

    return maxCount;
}

module.exports.longestBinaryGap = longestBinary;
