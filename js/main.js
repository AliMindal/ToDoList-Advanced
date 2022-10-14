let input = document.querySelectorAll("#input-area");
let submitTask = document.getElementById("click-create");
let notasks = document.getElementById("notasks");
let newtaskarea = document.getElementById("newtaskarea");
let deleteit = document.getElementById("close");
let validationMessage = document.getElementById("validationMessage");
let closeVlaidationMessageBtn = document.getElementById("closeVlaidationMessageBtn");
let darkLighMode = document.getElementById("dark-light");
let clickBulb = document.getElementById("bulb");
let body = document.querySelector("body");
let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");
let cont1 = document.getElementById("cont1");
let cont2 = document.getElementById("cont2");




// dark light modeeeeeeeeeeeeeee


darkLighMode.onclick = function (){
    if (darkLighMode.classList.contains("btn-dark")) {
        alert("بتطفي النور ليه ؟؟؟سايب كل الانوار شغالة في بيتك وحاي توفر في دي؟؟ امري لله دوس اوكي يا ابني")
        clickBulb.classList.replace("fa-solid", "fa-regular");
        clickBulb.classList.remove("yellow");
        darkLighMode.classList.replace("btn-dark", "btn-light");
        display1.classList.replace("display-5", "displayswitch");
        display2.classList.replace("display-5", "displayswitch");
        cont1.classList.add("backgroundswitch");
        body.classList = ("dark");
    }else{
        alert("يووووووه بقي... هنقعد نلعب ؟ امري لله. عارف هتدوس علي ايه يلا خلصنا يا عم")
        clickBulb.classList.replace("fa-regular", "fa-solid");
        clickBulb.classList.add("yellow");
        darkLighMode.classList.replace("btn-light", "btn-dark");
        display1.classList.replace("displayswitch", "display-5");
        display2.classList.replace("displayswitch", "display-5");
        cont1.classList.remove("backgroundswitch");
        
        body.classList = ("");
    }
}


// End dark light modeeeeeeeeeeeeeee

// add the notasks added alert after remove it function to recall when delete tasks

let noTasksShow = () =>{
    if (newtaskarea.childElementCount == 0) {
        notasks.classList.remove("data-error");
    }
}



// add new taskssssssssssssssss


let addTask = (name, date, image) => {
    
    

    if (name.trim() == "" || date.trim() == "" || image.trim() == ""){
        validationMessage.classList.remove("data-error");
        if (name.trim() == "") {
            validationMessage.innerHTML = "You must input a name first"
        }
        else if (date.trim() == "") {
            validationMessage.innerHTML = "You must input a date"
        }
        else if (image.trim() == "") {
            validationMessage.innerHTML = "You must input an image url"
        }
        
    }else{
        notasks.classList.add("data-error");
        validationMessage.classList.add("data-error");
        newtaskarea.innerHTML += ` 
        
        <div class="card mb-3">
        <img src="${image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title alert-warnig">${name}</h5>
          <p class="card-text">Date of birth: ${date}</p>
          <button type="button" class="close" id="deleteTask" aria-label="Close">
        <span aria-hidden="true" class="deleteit">&times;</span>
        </button>
        </div>
        `;

        // clear input area

        input[0].value = "";
        input[1].value = "";
        input[2].value = "";

    }
    
}

let renderTask = () =>{
    let allTask = {
        name : input[0].value,
        date : input[1].value,
        image : input[2].value,
    }
    addTask(allTask.name, allTask.date, allTask.image);
}


submitTask.addEventListener('click', (e) => {
    e.preventDefault();
    renderTask();
});

// delete closeVlaidationMessageBtnnnnnnn

let validationMessageFunction = function(){
    validationMessage.classList.add("data-error");
}

closeVlaidationMessageBtn.addEventListener('click', validationMessageFunction)



// delete a taskkkkkkkkkk

document.addEventListener('click', function(t){
    if (t.target.classList.contains("deleteit")) {
        t.target.closest("div.card").remove();
        noTasksShow();
    }
})

// line through wordsssss

document.addEventListener('click', function (t) {
    if (t.target.classList.contains("alert-warnig")) {
        t.target.classList.toggle("toggle-line");
        
    }
})


