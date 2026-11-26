const employees = [
    {id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript'},
    {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Psychology'},
    {id: 3, name: 'Bob Jonhson', age: 35, department: 'Finance', salary: 60000, specialization: 'Bitcoin'}
];

function displayEmployees () {
    const totalEmployees = employees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization} - $${employee.salary.toLocaleString('en-US')}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0).toLocaleString('en-US');
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployess = employees.filter(employee => employee.department === 'HR');
    const hrEmployessDisplay = hrEmployess.map(employee => `<p>Employee: ${employee.id} - ${employee.name} - ${employee.department} - ${employee.specialization} - $${employee.salary.toLocaleString('en-US')}</p>`);
    document.getElementById('employeesDetails').innerHTML = hrEmployessDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>Employee: ${foundEmployee.id} - ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.specialization} - $${foundEmployee.salary.toLocaleString('en-US')}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}

function findEmployeeBySpecialization(specialization) {
    const foundEmployee = employees.find(employee => employee.specialization === specialization);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>Employee: ${foundEmployee.id} - ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.specialization} - $${foundEmployee.salary.toLocaleString('en-US')}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this Specialization';
    }
}