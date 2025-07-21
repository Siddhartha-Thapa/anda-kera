let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let counter = 0;
const winpatt = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],

];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO)
        {
            box.style.color = "brown";
            box.innerText ="🥚";
            turnO = false;
            count();
        }
        else{
            box.style.color = "#13293D";
            box.innerText = "🍌";
            turnO = true;
            count();
        }
        box.disabled = true;  
        checkwinner();           
    })
})
const disableboxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const showwinner = (winner) =>{
    msg.innerText = `Congratulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner= () =>{
    for(let pattern of winpatt)
    {
        let pos1 = boxes[pattern[0]].innerText;

        let pos2 = boxes[pattern[1]].innerText;

        let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 !="")
    {
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner = ", pos1);
            showwinner(pos1);
        }
    }


    }
};


const resetgame = () => {
    turnO = true;
    counter = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
    
}
 const enableboxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }


 newgamebtn.addEventListener("click", resetgame);
 resetbtn.addEventListener("click", resetgame)
 const count = () => {
    counter++;
    if(counter === 9)
    {
        msg.innerText = `ANDA and KERA DRAW happen`;
        msgcontainer.classList.remove("hide");
    }
 }