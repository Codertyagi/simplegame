let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let hide = document.querySelector(".hide");
let win = document.querySelector(".winner");
let turn = true;
const winnerPattern = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
const restartgame=()=>{
    turn = turn;
    enablebtn();
}
const enablebtn=()=>{
    for(let box of boxs){
        box.innerText = "";
        box.disabled = false;
        hide.classList.add("hide");
    }
}
const disablebtn=()=>{
    for(let box of boxs){
        box.disabled = true;
    }
}
const showwinner=(winner)=>{
    win.innerText = `Congratulation winner is ${winner}`;
}
boxs.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "x";
            turn = false;
        }else{
            box.innerText = "o";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    }
)})
const checkWinner=() =>{
 for(let pattern of winnerPattern){
let pos1 = boxs[pattern[0]].innerText;
let pos2 = boxs[pattern[1]].innerText;
let pos3 = boxs[pattern[2]].innerText;
if(pos1 != "" && pos2 != "" && pos3 != ""){
if(pos1 == pos2 && pos2 == pos3){
    console.log("winner",pos1);
    showwinner(pos1);
    hide.classList.remove("hide");
    disablebtn();    

}
}
 }
}
reset.addEventListener("click",restartgame);