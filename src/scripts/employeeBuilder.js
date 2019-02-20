import smallBusiness from "./apiManager.js"
import singleEmployee from "./singleEmployee.js"

const printEmployee = () => {
    // document.querySelector("#employee-container").innerHTML = "";
    smallBusiness.employeeData()
    .then((parsedEmployees) => {
        parsedEmployees.forEach(employeeObject => {
            document.querySelector("#employee-container").innerHTML += singleEmployee(employeeObject)

        })

    })
}

export default printEmployee;