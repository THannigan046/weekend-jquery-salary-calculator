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
    const firstName = $('#firstNameInput').val();
    const lastName = $('#lastNameInput').val();
    const id = Number($('#idInput').val());
    const title = $('#titleInput').val();
    const salary = Number($('#salaryInput').val());
    
    if (! id){
        return
    }
    //put it in an object
    let employee = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        salary: salary
    };
    console.log('new employee', employee);
    workplace.push(employee);
    console.log('workplace', workplace);
    /* for (let employee of workplace){
        console.log('employee in loop', employee); */
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

        
        
        
    
    const totalMonthly = workplace.reduce((total, employee) => total + (employee.salary / 12), 0);
        if (totalMonthly > 20000){
            $('body').css('background-color', 'red')
        }
    $('#totalMonthlyOutput').text(totalMonthly.toFixed(2));
    $('#firstNameInput').val('').focus();
    $('#lastNameInput').val('').focus();
    $('#idInput').val('').focus();
    $('#titleInput').val('').focus();
    $('#salaryInput').val('').focus();
}


