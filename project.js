let count = 0;
document.getElementById("add-item-btn").addEventListener("click", function () {
  const inputValue = document.getElementById("input-value").value;
  if (inputValue == "") {
    alert("please enter a value");
  } else {
    count++;
    const newTableRow = document.createElement("tr");

    newTableRow.innerHTML = ` 
  <th>${count}</th>
  <td>${inputValue}</td>
  <td><button class="btn btn-success delete-btn">Delete</button> <button class='btn btn-danger done-btn'>Done</button></td>`;
    document.getElementById("table-body").appendChild(newTableRow);
    document.getElementById("input-value").value = "";

    const deleteBtn = document.getElementsByClassName("delete-btn");
    const doneBtn = document.getElementsByClassName("done-btn");
    for (const button of deleteBtn) {
      button.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.display = "none";
      });
    }
    for (const button of doneBtn) {
      button.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.textDecoration = "line-through";
      });
    }
  }
});
