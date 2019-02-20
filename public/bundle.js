(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const smallBusiness = {
  employeeData: () => {
    return fetch("http://localhost:8088/employees?_expand=department&_expand=computer").then(employees => employees.json());
  }
};
var _default = smallBusiness;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apiManager = _interopRequireDefault(require("./apiManager.js"));

var _singleEmployee = _interopRequireDefault(require("./singleEmployee.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printEmployee = () => {
  // document.querySelector("#employee-container").innerHTML = "";
  _apiManager.default.employeeData().then(parsedEmployees => {
    parsedEmployees.forEach(employeeObject => {
      document.querySelector("#employee-container").innerHTML += (0, _singleEmployee.default)(employeeObject);
    });
  });
};

var _default = printEmployee;
exports.default = _default;

},{"./apiManager.js":1,"./singleEmployee.js":4}],3:[function(require,module,exports){
"use strict";

var _employeeBuilder = _interopRequireDefault(require("./employeeBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _employeeBuilder.default)();

},{"./employeeBuilder":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// import employeeData from "./apiManager.js"
const singleEmployee = singleEmployee => {
  console.log(singleEmployee);
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
</article>`;
}; // const singleDepartment = (singleDepartment) => {
//     return `<div>
//     <p>${singleDepartment.name}</p>`
// }
// const singleComputer = (singleComputer) => {
//     return `<div>
//     <p>${singleComputer.}`
// }


var _default = singleEmployee;
exports.default = _default;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2FwaU1hbmFnZXIuanMiLCIuLi9zY3JpcHRzL2VtcGxveWVlQnVpbGRlci5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvc2luZ2xlRW1wbG95ZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNDQSxNQUFNLGFBQWEsR0FBRztBQUNsQixFQUFBLFlBQVksRUFBRSxNQUFNO0FBQ2hCLFdBQU8sS0FBSyxDQUFDLHFFQUFELENBQUwsQ0FDRixJQURFLENBQ0csU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFWLEVBRGhCLENBQVA7QUFHSDtBQUxpQixDQUF0QjtlQVNlLGE7Ozs7Ozs7Ozs7O0FDVmY7O0FBQ0E7Ozs7QUFFQSxNQUFNLGFBQWEsR0FBRyxNQUFNO0FBQ3hCO0FBQ0Esc0JBQWMsWUFBZCxHQUNDLElBREQsQ0FDTyxlQUFELElBQXFCO0FBQ3ZCLElBQUEsZUFBZSxDQUFDLE9BQWhCLENBQXdCLGNBQWMsSUFBSTtBQUN0QyxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLHFCQUF2QixFQUE4QyxTQUE5QyxJQUEyRCw2QkFBZSxjQUFmLENBQTNEO0FBRUgsS0FIRDtBQUtILEdBUEQ7QUFRSCxDQVZEOztlQVllLGE7Ozs7OztBQ2ZmOzs7O0FBRUE7Ozs7Ozs7Ozs7QUNGQTtBQUVBLE1BQU0sY0FBYyxHQUFJLGNBQUQsSUFBb0I7QUFDdkMsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLGNBQVo7QUFDQSxTQUFROztjQUVFLGNBQWMsQ0FBQyxJQUFLOzs7dUJBR1gsY0FBYyxDQUFDLFVBQWYsQ0FBMEIsSUFBSzs7OzRCQUcxQixjQUFjLENBQUMsUUFBZixDQUF3QixJQUFLOztXQVJyRDtBQVdILENBYkQsQyxDQWVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztlQUVlLGMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuY29uc3Qgc21hbGxCdXNpbmVzcyA9IHtcclxuICAgIGVtcGxveWVlRGF0YTogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXM/X2V4cGFuZD1kZXBhcnRtZW50Jl9leHBhbmQ9Y29tcHV0ZXJcIilcclxuICAgICAgICAgICAgLnRoZW4oZW1wbG95ZWVzID0+IGVtcGxveWVlcy5qc29uKCkpXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc21hbGxCdXNpbmVzcyIsImltcG9ydCBzbWFsbEJ1c2luZXNzIGZyb20gXCIuL2FwaU1hbmFnZXIuanNcIlxyXG5pbXBvcnQgc2luZ2xlRW1wbG95ZWUgZnJvbSBcIi4vc2luZ2xlRW1wbG95ZWUuanNcIlxyXG5cclxuY29uc3QgcHJpbnRFbXBsb3llZSA9ICgpID0+IHtcclxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZWUtY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBzbWFsbEJ1c2luZXNzLmVtcGxveWVlRGF0YSgpXHJcbiAgICAudGhlbigocGFyc2VkRW1wbG95ZWVzKSA9PiB7XHJcbiAgICAgICAgcGFyc2VkRW1wbG95ZWVzLmZvckVhY2goZW1wbG95ZWVPYmplY3QgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcGxveWVlLWNvbnRhaW5lclwiKS5pbm5lckhUTUwgKz0gc2luZ2xlRW1wbG95ZWUoZW1wbG95ZWVPYmplY3QpXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpbnRFbXBsb3llZTsiLCJpbXBvcnQgcHJpbnRFbXBsb3llZSBmcm9tIFwiLi9lbXBsb3llZUJ1aWxkZXJcIjtcclxuXHJcbnByaW50RW1wbG95ZWUoKTsiLCIvLyBpbXBvcnQgZW1wbG95ZWVEYXRhIGZyb20gXCIuL2FwaU1hbmFnZXIuanNcIlxyXG5cclxuY29uc3Qgc2luZ2xlRW1wbG95ZWUgPSAoc2luZ2xlRW1wbG95ZWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNpbmdsZUVtcGxveWVlKVxyXG4gICAgcmV0dXJuIGA8YXJ0aWNsZSBjbGFzcz1cImVtcGxveWVlXCI+XHJcbiAgICA8aGVhZGVyIGNsYXNzPVwiZW1wbG95ZWVfX25hbWVcIj5cclxuICAgICAgICA8aDE+JHtzaW5nbGVFbXBsb3llZS5uYW1lfTwvaDE+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2RlcGFydG1lbnRcIj5cclxuICAgICAgICBXb3JrcyBpbiB0aGUgJHtzaW5nbGVFbXBsb3llZS5kZXBhcnRtZW50Lm5hbWV9IGRlcGFydG1lbnRcclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2NvbXB1dGVyXCI+XHJcbiAgICAgICAgQ3VycmVudGx5IHVzaW5nIGEgJHtzaW5nbGVFbXBsb3llZS5jb21wdXRlci5uYW1lfVxyXG4gICAgPC9zZWN0aW9uPlxyXG48L2FydGljbGU+YFxyXG59XHJcblxyXG4vLyBjb25zdCBzaW5nbGVEZXBhcnRtZW50ID0gKHNpbmdsZURlcGFydG1lbnQpID0+IHtcclxuLy8gICAgIHJldHVybiBgPGRpdj5cclxuLy8gICAgIDxwPiR7c2luZ2xlRGVwYXJ0bWVudC5uYW1lfTwvcD5gXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHNpbmdsZUNvbXB1dGVyID0gKHNpbmdsZUNvbXB1dGVyKSA9PiB7XHJcbi8vICAgICByZXR1cm4gYDxkaXY+XHJcbi8vICAgICA8cD4ke3NpbmdsZUNvbXB1dGVyLn1gXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpbmdsZUVtcGxveWVlIl19
