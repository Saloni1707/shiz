
function AddTodo(){
    const inputEl = document.querySelector("input");
    const value =inputEl.value;
    const element = document.createElement("div");
    element.innerHTML="<div id='del'>" + value + "<button onclick='Delete()'>Remove</button></div>";
    const app = document.querySelector("body").appendChild(element);
    
    //inputEl.parentElement.appendChild("element");
}


// function remove1(){
//     const element = document.querySelector("#del");
//     document.querySelector("body").removeChild(element);
//     element.remove();
    
// }
function Delete(){
    const del1 = document.querySelector("#del");
    del1.remove();
      
  }
