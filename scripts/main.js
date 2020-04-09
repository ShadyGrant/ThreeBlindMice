import { EmployeeList } from "./employee/EmployeeList.js";
import { getEmployees } from "./employee/EmployeeDataProvider.js";
import { getComputers } from "./computer/ComputerDataProvider.js";
import { getDepartments } from "./departments/DepartmentProvider.js";
import { getLocations } from "./locations/LocationProvider.js";


getEmployees()
.then(getComputers)
.then(getDepartments)
.then(getLocations)
.then(EmployeeList)
