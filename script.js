function solution(){
document.getElementById("display").value=eval(document.getElementById("display").value)
}


function backspace(){
    document.getElementById("display").value=document.getElementById("display").value.slice(0,-1)
}