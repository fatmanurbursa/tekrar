const form=document.querySelector("form");
const input=document.querySelector("#txtTaskName");
const btnAddNewTask=document.querySelector("#btnAddTask");
const btnDeleteAll=document.querySelector("#btnDeleteAll");
const taskList=document.querySelector("#task-list");



eventListeners();
function eventListeners(){
    //submit
    form.addEventListener("submit",addNewItem);
    //console.log("submit");

taskList.addEventListener("click",deleteItem);

btnDeleteAll.addEventListener("click",deleteAllItems);

}



function addNewItem(e){
    if(input.value===''){
        alert("add new item");
        console.log("submit");
    }else{

const li=document.createElement('li');
li.className = "list-group-item list-group-item-secondary";
li.appendChild(document.createTextNode(input.value));
const a=document.createElement("a");
a.classList="delete-item float-right";
a.setAttribute("href","#");
a.innerHTML='<li class="fas fa-times"></li>';

li.appendChild(a);
taskList.appendChild(li);

input.value=" ";





} e.preventDefault();}; 

function deleteItem(e){

if(confirm("Are you sure you want to delete?")){



    if(e.target.className==="fas fa-times"){
        console.log(e.target)
        e.target.parentElement.parentElement.remove()
    }
}e.preventDefault();};

function deleteAllItems(e){
    if(confirm("Are you sure you want to delete all items?")){
        taskList.childNodes.forEach(function(item){
            console.log(item);
            if(item.nodeType===1){
                item.remove();
            }
        })
}};