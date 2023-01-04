"use strict";


//FUNCTIONALITY FOR DARK MODE 

const darkMode = document.getElementById('moon');
const lightMode = document.getElementById('sun');
const bgSection = document.getElementById('overall-section');
const todoContainer = document.getElementById('todo');
const searchInput = document.getElementById('search');
const dragAndDropMsg = document.getElementById('d&dmesg');
const mobileDiv = document.getElementById('mobile-div');
const di = document.getElementById('di')

function Dark(params) {
  bgSection.classList.remove('bg-mobilelightmode');
  bgSection.classList.remove('lg:bg-lightmode');
  bgSection.classList.add('bg-mobiledarkmode');
  bgSection.classList.add('lg:bg-darkmode');
  darkMode.classList.add('hidden');
  lightMode.classList.remove('hidden');
  todoContainer.classList.remove('bg-white');
  todoContainer.classList.add('bg-vdarkgrayblue');
  document.body.classList.add('bg-blackblue');
  searchInput.classList.remove('bg-white');
  searchInput.classList.add('bg-vdarkgrayblue');
  searchInput.classList.add('text-white');
  todoContainer.classList.add('text-white');
  dragAndDropMsg.classList.add('text-white');
  mobileDiv.classList.add('bg-vdarkgrayblue');
  di.classList.remove('bg-white')
  di.classList.add('bg-vdarkgrayblue');
}

darkMode.addEventListener(
    'click', Dark
)



//FUNCTIONALITY FOR LIGHT MODE 

function light(params) {
    bgSection.classList.add('bg-mobilelightmode');
    bgSection.classList.add('lg:bg-lightmode');
    bgSection.classList.remove('bg-mobiledarkmode');
    bgSection.classList.remove('lg:bg-darkmode');
    darkMode.classList.remove('hidden');
    lightMode.classList.add('hidden');
    todoContainer.classList.add('bg-white');
    todoContainer.classList.remove('bg-vdarkgrayblue');
    document.body.classList.remove('bg-blackblue');
    searchInput.classList.add('bg-white');
    searchInput.classList.remove('bg-vdarkgrayblue');
    todoContainer.classList.remove('text-white');
    dragAndDropMsg.classList.remove('text-white');
    mobileDiv.classList.remove('bg-vdarkgrayblue');
    di.classList.add('bg-white')
    di.classList.remove('bg-vdarkgrayblue');
} 

lightMode.addEventListener(
    'click', light
) 




//FUNCTIONALITY OF ADDING TO DO TASKS
const todo_wrapper = document.getElementById('todo');
const newTodo = document.getElementById('search');
const toDo = []
const todoList = []
const countingNum = document.getElementById('counter')
const cC = document.getElementById('clear-completed')

function todoGen(){
}

function handleAddTodo(params) {
   
    let del = document.createElement('button')
    let newTod = document.createElement('div')
    let checkingbox = document.createElement('input')

    //let newTod = document.createElement('div')
 //THIS CREATED ANOTHER DIV BOX ON THE WEB PAGE THORUGH JS   
   if (newTodo.value != '') {
    toDo.push(newTodo.value)

    let newTodo_list = newTod
    newTodo_list.className = "flex flex-row  border-b w-72 border-b-gray-400 text-xl space-x-4 pb-2 pt-2 rounded-t-md  bg-whit text-center mx-auto justify-center w-full"

    //TO REMOVE ELEMENT AFTER IT SURPASSES 5 TIMES
      for (let i = 0; i < toDo.length; i++) {
     if (i <= 4) {
        newTodo_list.innerHTML = newTodo.value;
      todo_wrapper.appendChild(newTodo_list);
      } else {
       newTodo_list.remove()
      }
 }
 ///////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////


 //let del = document.createElement('button')
 //THIS IS USED TO BUILD ANOTHER DIV BUTTON
     if (toDo.length > 0) {
        
       for (let j = 0; j < toDo.length; j++) {
        let delete_todo = del
         delete_todo.className = "flex  right-1 absolute lg:hidde lg:text-black text-gray-400"
         delete_todo.innerHTML = "X"
          newTodo_list.appendChild(delete_todo)  

         function todoo(params) {
            todo_wrapper.removeChild(newTodo_list);
           // counter++;
           // counter = Math.max(counter, 0) ;
           // countingNum.innerHTML = counter;
            
         }

         delete_todo.addEventListener('click',todoo)
        }
      }
/////////////////////////////////////////////////////////////////////////////////
      

 //THIS IS USED TO CREATE A CHECKBOX ON THE HTML WEB PAGE 
 //let checkingbox = document.createElement('input')   
      if (toDo.length > 0 ) {
        for (let b = 0; b < toDo.length; b++) {
            let checkBox = checkingbox;
            checkBox.type = "checkbox";
           checkBox.className = "flex absolute left-0";
          newTodo_list.appendChild(checkingbox);


          function checkboxChanged(params) {
            if (checkBox.checked) {
              counter--
              countingNum.innerHTML = counter
              console.log(countingNum)
              newTodo_list.className = "line-through flex flex-row  border-b  border-b-gray-400  text-xl space-x-4 pb-2 pt-2 rounded-t-md  bg-whit text-center mx-auto justify-center w-full";
            console.log(countingNum.value)
            } else {
              newTodo_list.className = 'flex flex-row  border-b  border-b-gray-400   text-xl space-x-4 pb-2 pt-2 rounded-t-md  bg-whit text-center mx-auto justify-center';
            }
          }
/////////////////////////////////////////////////////////////////

//ThIS IS FOR THE CLEAR COMPLETED FUNCTIONALITY
          function clearCompleted(params) {
            if (checkBox.checked) {
            // counter--
            //counter = Math.max(counter, 0) 
            //countingNum.innerHTML = counter
              newTodo_list.remove()
            } 
            
        }
       
        cC.addEventListener(
          'click', clearCompleted
       )

        
          checkBox.addEventListener('change',checkboxChanged);
          } 
/////////////////////////////////////////////////////////////////////////////////
        
     }
 


    } 
    
    
}

  

     



//EVENT LISTENER 
newTodo.addEventListener(
    'change', addToDo
)

