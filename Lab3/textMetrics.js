let self = module.exports = {
    simplify : function(text){

        if(!text){
            throw "Text not specified for simplifying text";
        }
        else if(typeof text !== 'string'){
            throw "Text must be a string";
        }
        else{
            let lowerText = text.toLowerCase();
            let textString = "";
            textString = lowerText.replace(/[^\w\s]/gi, '');
            textString = textString.replace(/\s+/g, ' ');
            textString = textString.trim();
            return textString;
        }
    },
    createMetrics : function(text){

        if(!text){
            throw "Text not specified for creating metrics";
        }
        else if(typeof text !== 'string'){
            throw "Text must be a string";
        }
        else{
            let simplified = self.simplify(text);
            let totalLetters = 0;
            for(let i = 0 ; i < simplified.length ; i++){
                if(simplified.charAt(i).match(/[0-9a-z]/gi)){
                    totalLetters++;
                }
            }
            let words = simplified.split(" ");
            let totalWords = words.length;
            let newWords = [];
            for(let j = 0 ; j< words.length ; j++){

                if(!newWords.includes(words[j])){
                    newWords.push(words[j]);
                }
            }
            let uniqueWords = newWords.length;
            let longWords =0;
            for(let j = 0 ; j<words.length ; j++){
                if(words[j].length>=6){
                    longWords++;
                }
            }
            let numOfLetters = words.map(function (num){
                    return num.length;
            });
            let sum = 0;
            for(let j=0 ; j< numOfLetters.length; j++){
                sum = sum + numOfLetters[j];
            }
            let avgWordLength = sum / numOfLetters.length;
            let dict = {};
            for(let i = 0 ; i < newWords.length ; i++){
                let wcount =0;
                    for(let j = 0; j<words.length ; j++){
                        if(newWords[i]==words[j]){
                            wcount++;
                        }
                    }
                    dict[newWords[i]] = wcount;
            }
            let metricDisplay ={
                totalLetters : totalLetters,
                totalWords : totalWords,
                uniqueWords : uniqueWords,
                longWords : longWords,
                averageWordLength : avgWordLength,
                wordOccurences : dict
            };
            return metricDisplay;
            }  
        }
};