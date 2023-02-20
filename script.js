//          CREATE MODAL
var mymodal = document.getElementById("myModal");
var mybut = document.getElementById("myBtn");
var span = document.getElementsByClassName("closeModal")[0]; //zemanje na close buttonot

//otvaranje na modal
mybut.onclick = function () {
    mymodal.style.display = "block";
    console.log("prikaz na modal");
};
//zatvranje na modalot so klik na x
span.onclick = function () {
    mymodal.style.display = "none";
    console.log("zatvori modal so klik na x");
};
//zatvaranje na modalot so klik bilo kade na ekranot
window.onclick = function (event) {
    if (event.target == mymodal) {
        mymodal.style.display = "none";
        console.log("zatvori modal so klik nadvor od modalot");
    }
};

//          DRAG ELEMENTS
//make each element draggable with asign draggable = true
let sections = document.querySelectorAll(".section");
let draggableItem = document.querySelectorAll("LI"); //zemi go elementot koj treba da se drag
let draggableEl = null;

function dragStart() {
    draggableEl = this; //pokazuva kon elementot sto treba da se drag
    //draggableEl.style.marginLeft = "50px";
}
function dragEnd() {
    draggableEl = null; //od koga ke se dropne elementot da se stavi da ne pokazuva kon nikoj element
}

draggableItem.forEach((item) => {
    item.addEventListener("dragstart", dragStart); //pocetok na dragot
    item.addEventListener("dragend", dragEnd); //koga zavrsuva so vlecenje e drag end
});

function dragOver(e) {
    //dragover e drag targetot potocno nasite sekcii kade sto moze da se dropne itemot
    e.preventDefault();
}

function droping() {
    //se ostava vo drop targetot
    //  this.style.marginLeft = "50px";
    this.style.border = "none";
    this.appendChild(draggableEl);
}

sections.forEach((section) => {
    section.addEventListener("dragover", dragOver);
    section.addEventListener("drop", droping);
});

//          CREATING NEW TASK

// Kreiranje na nov task so klik na Submit button
function addNewElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputTask").value;
    var t = document.createTextNode(inputValue);
    /*var prior = document.createTextNode(
      document.getElementById("priority").value
    ); */
    var desc = document.createTextNode(
        document.getElementById("description").value
    );
    li.appendChild(t); //se dodava vneseniot tekst na listata
    //console.log(prior);
    console.log("add new task");
    if (inputValue === "") {
        alert("Can't add empty task!");
    } else {
        document.getElementById("myUL").appendChild(li);
        //console.log(inputValue);
    }
    document.getElementById("inputTask").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    document.getElementById("myUL").appendChild(desc);
    // document.getElementById("myUL").appendChild(prior);

    //console.log(span);
    //console.log(li);

    span.addEventListener("click", () => {
        span.parentElement.style.display = "none";
    });
    // console.log(span);

    li.addEventListener("dragstart", dragStart);
    li.addEventListener("dragend", dragEnd);
    li.classList.add("taskslist");
    li.setAttribute("draggable", "true");
    li.setAttribute("id", "myLi");
    document.getElementById("inputTask").value = "";

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
    mymodal.style.display = "none";
    /*
    var getel = document.getElementById("myLi");
    var lastel = getel.lastChild;
    console.log(lastel); */
    span.innerText = "\u00D7";
    /*
    document.getElementById("inputTask").addEventListener("click", function () {
      var name = document.getElementById("nameoftask");
      name.innerHTML = inputValue;
      console.log("vlaga u funk");
    });
  */
}
//          MODAL 2
var list1 = document.querySelector("ul");
var inputValue = document.getElementById("inputTask").value;
list1.addEventListener("click", function () {
    var name = document.getElementById("nameoftask");
    name.innerText = inputValue;
    console.log("za modal 2");

    var mymodal1 = document.getElementById("myModal1");
    //otvaranje na modal
    name.onclick = function () {
        mymodal1.style.display = "block";
        console.log("prikaz na modal1");
    };
});

//da se dodava nov task so klik na enter
var inputValue = document.getElementById("inputTask");

inputValue.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("doneBtn").click();
    }
});

// Kreiranje na close button
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    console.log("kreiran e close button");
}

// Dodavanje na checked na elementot
var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

// Za brisenje na element od listata
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

/*
//so klik na taskot da se otvori modal so site stvari
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("openmodal");
    //  console.log("modalot e otvoren");
    var priorityel = document.getElementById("priority").value;
    //  console.log(priorityel);
    var p = document.createElement("p");
    // div.className = "openmodal";
    p.innerHTML = document.getElementById("priority").value;
    document.body.appendChild(p);
  }
});*/
