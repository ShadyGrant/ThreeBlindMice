export const EmployeeHTML = (employeeObject, computerObject, departmentObject, locationObject) => {
    return `
        <section class="employee">
            <h2>Name: ${employeeObject.firstName} ${employeeObject.lastName}</h2>
            <div>Age: ${employeeObject.age}</div>
            <div>Current computer: ${computerObject.year} ${computerObject.model}</div>
            <div>Department: ${departmentObject.name}</div>
            <div>Location: ${locationObject.city}</div>
        </section>
    `
}