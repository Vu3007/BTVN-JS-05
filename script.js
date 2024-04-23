function updateUI(){
    const input=document.querySelector("input.todo-content");
    input.value="";
    const list=document.querySelector(".todo-list");
    //dem so cong viec chua hoan thanh
    const items=list.querySelectorAll(".todo-item");
    let pendingTasks=0;
    items.forEach(function(item){
        if(!item.classList.contains("completed")){
            pendingTasks++;
        }
    })
    if(pendingTasks>0){
        document.querySelector(".todo-summary").style.display="block";
        document.querySelector(".todo-count").textContent=pendingTasks;
    }else{
        document.querySelector(".todo-summary").style.display="none";
    }
}
function createTodo(content){
    //tao the
    const li=document.createElement("li");
    li.classList.add("todo-item");
    //tao check box
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.addEventListener("change",handleUpdateStatus);
    //tao noi dung
    const span=document.createElement("span");
    span.textContent=content;
    //taonut edit
    const editButton=document.createElement("button");
    editButton.classList.add("todo-edit");
    editButton.textContent="Edit";
    editButton.addEventListener("click",handleEditTodo)
    //tao nut xoa
    const deleteButton=document.createElement("button");
    deleteButton.classList.add("todo-delete");
    deleteButton.textContent="Delete";
    deleteButton.addEventListener("click",deleteTodo)
    //tao cau truc
    li.append(checkbox,span,editButton,deleteButton);
    //chen vao list
    document.querySelector(".todo-list").prepend(li);
    updateUI();
}
function handleUpdateStatus(e){
    const checkbox=e.target;
    const status=e.target.checked;
    const li=checkbox.parentElement;
    if(status){
        li.classList.add("completed")
    }else{
        li.classList.remove("completed")
    }
    updateUI();

}



function deleteTodo(e){
    const button=e.target;
    const li=button.parentElement;
    if(confirm("Xoa cong viec?")){
        li.remove();
        updateUI();
    }
}
function handleEditTodo(e){
    const button=e.target;
    const li=button.parentElement;
    const span=button.previousElementSibling;
    const newContent=prompt("Thay do noi dung cong viec",span.textContent);
    span.textContent=newContent;


}


function editTodo(){}



function handleSubmit(e){
        //chan hanh vi mac ding cua form
        //gui du lieu di va reload
        e.preventDefault();
        //lay du lieu tu form
        const input =document.querySelector("input.todo-content");
        const value=input.value;
        //kiem tra du lieu
        if(value.trim()==""){
            return;
        }
        createTodo(value);
    
    }


const form=document.querySelector("form.todo-form");
form.addEventListener("submit",handleSubmit)


