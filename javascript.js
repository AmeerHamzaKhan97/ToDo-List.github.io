
//localStorage.tasks=  JSON.stringify([]);

updateList();

function addEvent()  {
    console.log("adding event");
    //console.log(localStorage.tasks);
    let input = document.getElementById("Task_input");

    let tasksArr = JSON.parse(localStorage.tasks);

    tasksArr.push(input.value);

    localStorage.tasks = JSON.stringify(tasksArr);

    input.value = "";

    updateList();
}

function updateList(){
    console.log("updating ");
    let ul = document.getElementById("list-item");

     let tasksArr = JSON.parse(localStorage.tasks);

     let length  =tasksArr.length-1;
     let text = "";

     for(let i = length;i>=0;i--){
          text +=
            '<li class="list-group-item" id = "'+ i + '">' 
            + tasksArr[i] +
            '<span class="btn btn-danger btn-sm sub-item"  onclick ="removeItem(this)">Remove</span>  </li>';
           
        
         
     }
     ul.innerHTML=text;
}

function removeItem(span_tag){
    console.log("remove item");
    //console.log(obj);
    let index_num= span_tag.parentElement.id;

    let tasksArr = JSON.parse(localStorage.tasks);

    tasksArr.splice(index_num,1);

    localStorage.tasks = JSON.stringify(tasksArr);

    updateList();




}

