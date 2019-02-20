// import employeeData from "./apiManager.js"

const singleEmployee = (singleEmployee) => {
    console.log(singleEmployee)
    return `<article class="employee">
    <header class="employee__name">
        <h1>${singleEmployee.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${singleEmployee.department.name} department
    </section>
    <section class="employee__computer">
        Currently using a ${singleEmployee.computer.name}
    </section>
</article>`
}

// const singleDepartment = (singleDepartment) => {
//     return `<div>
//     <p>${singleDepartment.name}</p>`
// }

// const singleComputer = (singleComputer) => {
//     return `<div>
//     <p>${singleComputer.}`
// }

export default singleEmployee