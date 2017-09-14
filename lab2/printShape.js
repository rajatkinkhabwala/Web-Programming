module.exports = {
    triangle: function (lines) {

        if(lines === undefined || isNaN(lines)){
            throw "input is not a number";
        }
        else if(lines<=0){
            throw "number of lines must be non-zero positive number";
        }
        else{
            let outputstr = "";
            for(let i=0; i < lines ;i++){

                for(let j = 0 ; j <(lines-(i+1));j++){

                    outputstr = outputstr + " ";
                }
            outputstr = outputstr + "/";
            for(let k = 0 ; k<(i*2); k++){

                if(i != lines-1){
                    outputstr = outputstr + " ";
                }
                else{
                    outputstr = outputstr + "-";
                } 
            }
            outputstr = outputstr + "\\"+"\n"; 
        }
            console.log(outputstr);
        }
    },
    square: function (lines){
        if(lines === undefined || isNaN(lines)){
            throw "input is not a number";
        }
        else if(lines<=0){
            throw "number of lines must be positive non-zero number";
        }
        else if(lines < 2){
            throw "Number of lines must be atleast 2";
        }
        else{
            let output = "";
            for(let i = 0; i<lines ; i++){

                if(i == 0 || i == lines -1){
                    output = output + "|";
                    for(let r = 0 ; r < lines ; r++){
                        output = output + "-";
                    }
                    output = output + "|\n";
                }
                else{
                    output = output + "|";
                    for(let r = 0 ; r < lines ; r++){
                        output = output + " ";
                    }
                    output = output + "|\n";
                }
            }
            console.log(output);
        }
    },
    rhombus : function(lines){
         if(lines === undefined || isNaN(lines)){
            throw "input is not a number";
        }
        else if(lines<=0){
            throw "number of lines must be positive non-zero number";
        }
        else if(lines < 2){
            throw "Number of lines must be at least 2";
        }
        else if(lines%2 != 0){
            throw "Number of lines must be even";
        }
        else{
            let op  = "";
            for(let i=0; i < lines/2 ;i++){

                for(let j = 0 ; j <(lines-(i+1));j++){

                    op = op + " ";
                }
                if(i == 0){
                    op = op + "/-";
                }
                else{
                    op = op + "/";
                }
                for(let k = 0 ; k<((i*2)+1); k++){

                    if(i!=0){
                        op = op + " ";  
                    }
                }
                op = op + "\\"+"\n";
            }
            for(let i=lines/2 - 1;i>=0;i--){
                for(let a=0;a<(lines-(i+1));a++){
                    op = op + " ";
                }
                op = op + "\\";
                for(let b=0; b<((i*2)+1);b++)
                {
                    if(i!=0){
                        op = op +" ";   
                    }
                }
                if(i==0){
                    op = op + "-/"+"\n";
                }
            else{
                op = op + "/"+"\n";
            }
        }
        console.log(op);
        }
    }
};
