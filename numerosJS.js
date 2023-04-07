console.log("----Esta es la prueba en JAVASCRIPT----")
let maximo=100
for(i=1;i<=maximo;i++){
  if(i%5==0 && i%3==0){
    console.log("BuzzFizz")
  }
  else if(i%3==0){
    console.log("Fizz")
  }
  else if(i%5==0){
    console.log("Buzz")
  }
  else{
    console.log(i)
  }
  
}