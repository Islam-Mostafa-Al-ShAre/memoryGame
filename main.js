let blocks =document.querySelectorAll(".block")
let gameContainer =document.querySelector(".game-Blocks")
let numberOfTraies =document.querySelector(".details .tries")
let numberOfBlocks=blocks.length;

let arrOfNumber=[...Array(numberOfBlocks).keys()]
randomArray(arrOfNumber)



function randomArray(arrOfNumber){
 
    let counter =numberOfBlocks;

      while(counter>=0) 
    {
        counter--
        let randomNumber =Math.floor(Math.random()*counter)

        let copy =arrOfNumber[counter]
            arrOfNumber[counter] =   arrOfNumber[randomNumber]
            arrOfNumber[randomNumber]= copy;
           
    }
    

}

blocks.forEach(function(block,index){
    block.style.order=arrOfNumber[index]
    block.addEventListener("click",function(){
        this.classList.add("fliping")

        stopClicking()
    })

})


function stopClicking(){
   blocks=[...blocks]
    flipingBlocks=blocks.filter(block=>block.classList.contains("fliping")) 

    if(flipingBlocks.length===2){
        gameContainer.classList.add("stopClick")
        setTimeout(function(){},1000)
        check(flipingBlocks[0],flipingBlocks[1])
    }
}


function check(first,second){
    if(first.getAttribute("kind")===second.getAttribute('kind')){
       first.classList.remove("fliping")
       second.classList.remove("fliping")
       gameContainer.classList.remove("stopClick")
        first.classList.add("same");
        second.classList.add("same")
    }
    else {
        
        setTimeout(()=>{
            first.classList.remove("fliping")
            second.classList.remove("fliping")
            gameContainer.classList.remove("stopClick")
        },500)
      numberOfTraies.innerHTML=parseInt(numberOfTraies.innerHTML)+1
    }
}