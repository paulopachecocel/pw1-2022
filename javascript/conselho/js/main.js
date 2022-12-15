var url = "https://api.adviceslip.com/advice";
let xhr = new XMLHttpRequest();

function aconselhar(){
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                var conselho = JSON.parse(xhr.responseText);
                document.getElementById("conselho").innerHTML = conselho.slip.advice;

                //console.log(JSON.parse(xhr.responseText));
            }
        }
    }
    xhr.send();
}