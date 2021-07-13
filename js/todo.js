const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];


//saveToDo가 할일은 toDos array를 localSorage에 집어넣는것.
function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
/* console.dir(event.target.parentElement); //target은 클릭된 HTML element. 모든 HTML element에는 하나 이상의 property가 존재. parentElement는 클릭된 element의 부모 */
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button")
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span); //li는 span이라는 자식을 가지게 됐다.
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}


//밑에 있는 함수는 greetings에 있는 함수랑 똑같다
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사   
    toDoInput.value ="";
    toDos.push(newTodo);
    paintToDo(newTodo);  
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)