const input = document.querySelector('.box-display-input-1') ;
const ans = document.querySelector('.box-display-ans-1') ;
const cancel = document.querySelector('.cancel') ;
const equal = document.querySelector('.equal-btn') ;
const press = document.querySelectorAll('.press') ;
const cross = document.querySelector('.cross') ;

let inputDataDisplay = "" ;
let inputDataCalc = "";

cancel.onclick = function(){
    input.innerHTML = "" ;
    ans.innerHTML = "" ;
    inputDataDisplay = "" ;
    inputDataCalc = "" ;
}

cross.onclick = function(){
    if(inputDataCalc.length !== 0){
        // let check = inputDataCalc.slice()
        inputDataDisplay = inputDataDisplay.slice(0 , inputDataDisplay.length - 1) ;
        inputDataCalc = inputDataCalc.slice(0 , inputDataCalc.length - 1) ;
        input.innerHTML = inputDataDisplay ;
    }
}



press.forEach(box =>{
       box.addEventListener('click' , () => print(box.innerHTML)) ;
});

function print(content){
    if(content === '^'){
        inputDataDisplay = inputDataDisplay + '^' ;
        input.innerHTML = inputDataDisplay;
        inputDataCalc = inputDataCalc + '**' ;
    }
    else{
        inputDataDisplay = inputDataDisplay + content ;
        inputDataCalc = inputDataCalc + content ;
        input.innerHTML = inputDataDisplay;
    }

}


equal.onclick = function(){
    
    equal.style.backgroundColor = "rgb(35, 32, 32)";
     try{  

       let value = eval(inputDataCalc) ;
       if(!Number.isInteger(value)){
          value = value.toFixed(3) ;
        
        }
         ans.innerHTML = value ;        
         inputDataDisplay = "";
         inputDataCalc = "" ;
     }catch(error){
        console.log(`error is ${error}`) ;
         ans.innerHTML = "ERROR" ;
         inputDataDisplay = "";
         inputDataCalc = "" ;
     }

     setTimeout(()=>{
         equal.style.backgroundColor = "black" ;
     } , 170) ;
}









