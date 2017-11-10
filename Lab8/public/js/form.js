let staticForm = document.getElementById("static-form");

if(staticForm){

    let firstElement = document.getElementById("inputString");
    staticForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        try{
            let val = firstElement.value;
            if(!val){
                document.getElementById('result').innerHTML = "";
                throw "Invalid input";
            }
            else{
                document.getElementById('error').innerHTML = "";
                let result="";
                let inp = firstElement.value;
                let vb = firstElement.value;
                vb = vb.toLowerCase();
                vb = vb.replace(/\s+/g,'');
                vb = vb.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=|')/g,"");
                let splitvb = vb.split("");
                let revA = splitvb.reverse();
                let joinA = revA.join("");
                if(vb == joinA){
                    result = "The text entered is pallindrome";
                    document.getElementById('result').innerHTML = result;
                    var li = document.createElement('li');
                    li.innerHTML = inp;
                    li.classList.add('is-pallindrome');
                    li.style.color = "blue";
                    document.getElementById('list').appendChild(li);
                }
                else{
                    result = "The text entered is not pallindrome";
                    document.getElementById('result').innerHTML = result;
                    var lix = document.createElement('li');
                    lix.innerHTML = inp;
                    lix.classList.add('not-pallindrome');
                    lix.style.color = "red";
                    document.getElementById('list').appendChild(lix);
                }
                }
        }
        catch(e){
             document.getElementById('error').innerHTML = e;
        }
            
});
}
