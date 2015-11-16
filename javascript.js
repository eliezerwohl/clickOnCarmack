// var john = document.getElementsByClassName("john");

// john.addEvent("click, hooray");

// function hooray() {
//   prompt('hey soul sister');
// 

// document.getElementsByClassName("john").addEventListener("click", prompt("got it"));



// get all of the delete buttons
var john = document.getElementsByClassName("john");


// loop over delete buttons and add event listener
for(i = 0; i < john.length; i++){
  john[i].addEventListener("click", hello);
}


// function to delete row
function hello(){
  prompt('sure plays a mean');
}
