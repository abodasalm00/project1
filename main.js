let inpEle = document.getElementById("input");
let btnEle = document.getElementById("click");
let msg = document.getElementById("msg");

btnEle.onclick = ()=>{
    let inpValue = inpEle.value;
    msg.innerHTML = inpValue;
    inpEle.value = "";
    localStorage.setItem("text", inpValue )
    if (msg.innerHTML === "black") {
        document.body.style.backgroundColor = "black";
    }
    if (msg.innerHTML === "red") {
        document.body.style.backgroundColor = "red";
    }
    if (msg.innerHTML === "green") {
        document.body.style.backgroundColor = "green";
    }
    if (msg.innerHTML == "blue") {
        document.body.style.backgroundColor = "blue";
    }
    if (msg.innerHTML == "aqua") {
        document.body.style.backgroundColor = "aqua";
    }
 
}
// msg.innerHTML = localStorage.getItem("text")






