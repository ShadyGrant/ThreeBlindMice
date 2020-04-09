import { useComputers } from "../computer/ComputerDataProvider.js";
import { useEmployees } from "./EmployeeDataProvider.js"
import { useDepartments } from "../departments/DepartmentProvider.js";
import { useLocations } from "../locations/LocationProvider.js";
import { EmployeeHTML } from "./Employee.js";


const contentTarget = document.querySelector(".container")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()

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
            return EmployeeHTML(employeeObject, foundComputer, foundDepartment, foundLocation)
        }
    ).join("")
}



export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}
