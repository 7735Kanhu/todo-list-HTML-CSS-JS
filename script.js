let inputs = document.getElementById("inp");
let task = document.querySelector(".task");


function add() {
    if(inputs.value == ""){
        alert("Enter Your Task");
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value}<i class="fa-solid fa-trash-can"></i>`;
        task.appendChild(newEle);
        inputs.value='';
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove();
        }
        
    }
}