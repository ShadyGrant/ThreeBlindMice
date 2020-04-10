import { useComputers } from "../computer/ComputerDataProvider.js";
import { useEmployees } from "./EmployeeDataProvider.js"
import { useDepartments } from "../departments/DepartmentProvider.js";
import { useLocations } from "../locations/LocationProvider.js";
import { EmployeeHTML } from "./Employee.js";
import { useCustomers } from "../customers/CustomerProvider.js";
import { useEmployeeCustomers } from "../employeeCustomers/EmployeeCustomerProvider.js";




const contentTarget = document.querySelector(".container")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const employeeCustomers = useEmployeeCustomers()
    const customers = useCustomers()


    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
            )
            const foundDepartment = departments.find(
                (department) => {
                    return department.id === employeeObject.departmentId
                }
            )
            const foundLocation = locations.find(
                (location) => {
                    return location.id === employeeObject.locationId
                }
            )
            // Get all customer relationships for the current employee
            const EmployeesCustomerRelationships = employeeCustomers.filter(
                empCustRel => {
                    return employeeObject.id === empCustRel.employeeId
                }
            )

            // For each relationship, convert to corresponding customer object
            const theMatchingCustomers = EmployeesCustomerRelationships.map(
                rel => {
                    const customer = customers.find(
                        cust => rel.customerId === cust.id)
                    return customer
                }
            )
            return EmployeeHTML(employeeObject, foundComputer, foundDepartment, foundLocation, theMatchingCustomers)
        }
    ).join("")
}



export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}
