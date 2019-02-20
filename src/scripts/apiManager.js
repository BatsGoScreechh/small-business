
const smallBusiness = {
    employeeData: () => {
        return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
            .then(employees => employees.json())

    }
}


export default smallBusiness