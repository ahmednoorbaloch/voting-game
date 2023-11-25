window.onload = build;
const myArray = ["Ahmed"];
const message = document.getElementById("message");
const addNew = document.getElementById("addNew");
const newInput = document.getElementById("addFriend");
const output = document.getElementById("output");
addNew.onclick = function () {
    const newFriend = newInput.value;
    adder(newFriend, myArray.length, 0);
    myArray.push(newFriend);
}
function build() {
    myArray.forEach((item, index) => {
        adder(item, index, 0);
    });
}
function adder(name, index, counter) {
    const tr = document.createElement("tr");
    const tdEl1 = document.createElement("td");
    tdEl1.classList.add("box");
    tdEl1.textContent = index + 1;
    const tdEl2 = document.createElement("td");
    tdEl2.textContent = name;
    const tdEl3 = document.createElement("td");
    tdEl3.textContent = counter;
    tr.append(tdEl1);
    tr.append(tdEl2);
    tr.append(tdEl3);
    tr.onclick= function () {
        console.log(tr.lastChild);
        const val = Number(tr.lastChild.textContent);
        val++;
        tr.lastChild.textContent = val;
    }
    output.appendChild(tr);
}