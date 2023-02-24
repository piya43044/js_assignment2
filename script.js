// import { addEmployee } from "./addEmployee.js";
let viewTable = document.getElementById("viewtable");
const employeeDetail = [];

/* ADD Employee Detail class */
class AddEmployeeDetail{
    constructor(employeeName, address, employeeId, designation){
        this.employeeName = employeeName;
        this.address = address;
        this.employeeId = employeeId;
        this.designation = designation;
    }

}


/*  Add button event function */
function addEmployee(e){

    const employeeName = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const employeeId = document.getElementById('empId').value;
    const designation = document.getElementById('designation').value;

    if(employeeName!="" && employeeId!=""){
        
        const addEmployee = new AddEmployeeDetail(employeeName, address, employeeId, designation);  
        employeeDetail.push(addEmployee);
        e.preventDefault();
    }
    else{
        alert("Invalid Employee Name and Id!");
    }

}

function viewDetails(details){
    let template = `
                <tr>
                    <td>${details.employeeId}</td>
                    <td>${details.employeeName}</td>
                    <td>${details.address}</td>
                    <td>${details.designation}</td>
                </tr>
                    `;
    viewTable.innerHTML +=  template;
}



/* View Employee detail */

function viewEmployeeDetail(e){
    let head = `
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee Address</th>
                    <th>Employee Designation</th>
                </tr>
                `;
    viewTable.innerHTML += head;
    for( let details of employeeDetail){ 
        viewDetails(details);
    }
    e.preventDefault();
}


/* Edit Employees Details */
function editEmployeeDetails(e){
    let form = `
                    <label for="empId">Id</label>
                    <input type="number" id="Id" name="empId" required><br><br>
                    <button>
                        <a href="">
                            Edit
                        </a>
                    </button>`;
    const formId = document.getElementById("edit-form");
    formId.innerHTML += form;

        e.preventDefault();
}

/* Add Event button */
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addEmployee);

const viewButton = document.getElementById("viewButton");
viewButton.addEventListener("click", viewEmployeeDetail);

const editButton = document.getElementById("editButton");
editButton.addEventListener("click", editEmployeeDetails);