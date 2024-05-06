const btn=document.querySelectorAll(".btn")
const resetbtn=document.querySelector(".resetbtn")
const newbtn=document.querySelector(".newbtn")
const heading=document.querySelector('.heading')

let start=true;

const results=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(start){
            box.innerHTML="O"
            start=false
        }else{
            box.innerHTML="X"
            start=true
        }
        box.disabled=true;
        winnerCheck();
    })
})

function disableBtns(){
    for(let bt of btn){
        bt.disabled=true
    }
}

function enableBtns(){
    for(let bt of btn){
        bt.disabled=false
        bt.innerHTML=""
        start=true
    }
}

function resetGame(){
    newbtn.classList.add("hidden")
    heading.innerHTML="Tic Tac Toe"
    enableBtns()
}

function showWinner(one){
    heading.innerHTML=`Winner is ${one}`
    newbtn.classList.remove("hidden")
    disableBtns()
}

function winnerCheck(){
    for(result of results){
        let position1=btn[result[0]].innerHTML
        let position2=btn[result[1]].innerHTML
        let position3=btn[result[2]].innerHTML

        if(position1 != "" && position2 !="" && position3 !=""){
            if(position1 === position2 && position2 === position3){
                showWinner(position1)
            }
        }
    }
}

resetbtn.addEventListener("click", resetGame)
newbtn.addEventListener("click", resetGame)