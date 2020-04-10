import { EmployeeList } from "./employee/EmployeeList.js";
import { getEmployees } from "./employee/EmployeeDataProvider.js";
import { getComputers } from "./computer/ComputerDataProvider.js";
import { getDepartments } from "./departments/DepartmentProvider.js";
import { getLocations } from "./locations/LocationProvider.js";
import { getCustomers } from "./customers/CustomerProvider.js";
import { getEmployeeCustomers } from "./employeeCustomers/EmployeeCustomerProvider.js";


getEmployees()
.then(getComputers)
.then(getDepartments)
.then(getLocations)
.then(getCustomers)
.then(getEmployeeCustomers)
.then(EmployeeList)
