console.log('js');

$(document).ready(onReady)

let workplace = [];

function onReady() {
    console.log('JQ');
    //handle new employee form on submit
    $('#employeeForm').on('submit', onAddEmployee);

    //handle delete employee button
    //$('#deleteBtn').on('click', onDeleteEmployee)
    $(document).on('click','.deleteBtn', onDeleteEmployee)
};

function onDeleteEmployee(){
    console.log('onDeleteEmployee');
    
    $(this).parents('tr').remove()
};

function onAddEmployee(event){
    
    //prevent reload 
    event.preventDefault()
    console.log('employee added');

    //grab stuff from DOM
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = Number($('#idInput').val());
    let title = $('#titleInput').val();
    let salary = Number($('#salaryInput').val());
    
    //put it in an object
    let employee = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        salary: salary
    }
    console.log('new employee', employee);
    workplace.push(employee);
    console.log('workplace', workplace);
    for (let employee of workplace){
        console.log('employee in loop', employee);
        $('#employeeList').append(`
        <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${employee.salary}</td>
                <td>
                    <button class="deleteBtn">
                        Delete
                    </button>
                </td>
            </tr>
        `
       );
    }
    
}


