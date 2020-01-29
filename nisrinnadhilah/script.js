var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["movie"] = document.getElementById("movie").value;
    formData["genre"] = document.getElementById("genre").value;
    formData["productionhouseid"] = document.getElementById("productionhouseid").value;
       return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("Movielist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.movie;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.genre;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.productionhouseid;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("movie").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("productionhouseid").value = "";
    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("movie").value = selectedRow.cells[0].innerHTML;
    document.getElementById("genre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("productionhouseid").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.movie;
    selectedRow.cells[1].innerHTML = formData.genre;
    selectedRow.cells[2].innerHTML = formData.productionhouseid;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("movie").value == "") {
        isValid = false;
        document.getElementById("movieValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("movieValidationError").classList.contains("hide"))
            document.getElementById("movieValidationError").classList.add("hide");
    }
    return isValid;
}