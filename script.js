const boxes = document.querySelectorAll('.box');
const resetBtn = document.getElementById('reset-btn');
const msg_container= document.querySelector('.msg-container');
const msg = document.getElementById('msg');
const newGameBtn = document.getElementById('newGame');

let turnO = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [2,4,6],
    [6,7,8]
];

const showWinner = (winner)=>{
   msg.innerText=`Congratulation winner is ${winner}`
   msg_container.style.cssText=`display:flex`
};

const enableBoxes = () => {
for (let box of boxes) {
box.disabled = false;
box.innerText = '';
}
};

const disableBoxes = () => {
for (let box of boxes) {
box.disabled = true;
}
};

const checkWinner = () =>{

console.log('radhe radhe')
for(let pattern of winPatterns){

    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
   
    if(posVal1 != '' && posVal1 === posVal2 && posVal2 === posVal3){
          showWinner(posVal1);
          return
    };
};

if(isDraw()){
  msg.innerText=`It's a Draw!`;
  msg_container.style.display='flex';
  disabledBox();
}
}


const isDraw = () => {
return [...boxes].every(box => box.innerText !== '');
};

const resetGame = ()=>{
turnO = true;
msg_container.style.display='none';
enableBoxes();
}


boxes.forEach((box) => {
    box.addEventListener('click',()=>{
         if(turnO){
            box.innerText='O';
            box.classList.add('o')
            box.classList.remove('x')
            turnO = false;
         } else{
            box.innerText='X';
            box.classList.add('x')
            box.classList.remove('o')
            turnO = true;
         }

         box.disabled = true;

         checkWinner();
    });
});

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click',resetGame);


