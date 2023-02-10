var selectedRow = null;

const form = document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    formSubmit();

})

function formSubmit() {
    if (validate()) {
        let formData = getValueData();
        if (selectedRow == null)
            insertValueData(formData);

        else
            updateForm(formData);

        resetForm();
    }

}

function getValueData() {
    let formData = {};

    formData["fullName"] = document.getElementById("fullname").value;
    formData["zipcode"] = document.getElementById("zipcode").value;
    formData["city"] = document.getElementById("city").value;
    formData["Salary"] = document.getElementById("salary").value;
    return formData;
}

function insertValueData(value) {
    let table = document.getElementById("listEmployee").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = value.fullName;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = value.zipcode;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = value.city;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = value.Salary;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onclick = "onEdit(this)">Edit</a> <a onclick = "deleteValue(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("zipcode").value = " ";
    document.getElementById("city").value = " ";
    document.getElementById("salary").value = " ";
    var selectedRow = null;
}

function onEdit(td) {
    let selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("zipcode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("city").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
}

function updateForm(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.zipcode;
    selectedRow.cells[2].innerHTML = formData.city;
    selectedRow.cells[3].innerHTML = formData.Salary;
}

function deleteValue(td) {
    if (confirm('Are you sure to delete this line?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("listEmployee").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    let isValid = true;
    if (document.getElementById("fullname").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide")
    }
    return isValid;
}