window.onload = main;

let list = []

function main() {
    //make list empty
}

function addEntry() {
    //get the value 
    let entry = document.getElementById("entry").value;
    list.push(entry);
    let key = list.indexOf(entry);

    document.getElementById("entry-list").innerHTML += 
    `<span class="entry-item" id=${key}>
        <li> ${entry} </li>
        <div class="entry-buttons">
            <button class="complete" onClick="completeEntry(this)">Complete</button>
            <button class="delete" onClick="deleteEntry(this)">Delete</button>
        </div>
    </span>`;

    document.getElementById("entry").value = "";

}

function completeEntry(b) {
    //get the specific entry-item
    let item = b.parentNode.parentNode;
    let key = item.id;
    
    document.getElementById(key).style.background = "gainsboro";
    document.getElementById(key).style.color = "grey";
    document.getElementById(key).style.textDecoration = "line-through";
}

function deleteEntry(b) {
    //get the specific entry-item
    let item = b.parentNode.parentNode;
    let key = item.id;
    document.getElementById(key).style.display = "none";
}

function profileClick() {
    document.getElementById("profileWarning").style.display = "block"
}

function displayText() {
    const radioButtons = document.getElementsByName("radio");
    let selectedRadioButton = "";
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            selectedRadioButton = radioButtons[i].value;
            break;
        }
    }
    const dropdownValue = document.getElementById("dropdown").value;
    const displayText = `You selected "${selectedRadioButton}" and "${dropdownValue}"`;
    document.getElementById("display").innerHTML = displayText;
}
