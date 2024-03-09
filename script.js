const list = document.getElementById("list");
const textInput = document.getElementById("textInput");
const saveButton = document.getElementById("saveButton");

const addNewTraining = (name) => {
    const listElement = document.createElement("li");
    listElement.innerText = name;
    list.appendChild(listElement);
}

saveButton.onclick = () => addNewTraining(textInput.value);