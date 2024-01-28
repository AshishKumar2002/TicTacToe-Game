let box = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset");

let newbtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

box.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        } else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
       let isWinner=checkWinner();
       if(count===9&&!isWinner){
        gameDraw();
       }
    })
})

const gameDraw = () => {
  msg.innerText = "Game was a draw ";
  msgContainer.classList.remove("hide");
  disableBox();
}; 

const resetGame = () => {
  turnO = true;
  enableBox();
  msgContainer.classList.add("hide");
}

const disableBox = () =>{
    for(let boxes of box){
        boxes.disabled=true;
    }
}
const enableBox = () => {
  for (let boxes of box) {
    boxes.disabled = false;
    boxes.innerText="";
  }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}


const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if(pos1Val!=" "&&pos2Val!=" "&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val==pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
}

newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);