// Write your solution in this file!
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log(updatedEmployee);
// Output: { name: 'Jane Doe', streetAddress: '123 Main St' }
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log(employee);
// Output: { name: 'Jane Doe', streetAddress: '123 Main St' }
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}
let newEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log(newEmployee);
// Output: { name: 'John Doe' }
console.log(employee);
// Output: { name: 'John Doe', streetAddress: '123 Main St' } (original employee Object remains unchanged)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log(employee);
// Output: { name: 'John Doe' }

