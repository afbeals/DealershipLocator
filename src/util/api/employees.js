import mockEmployees from "./data/employees";

export const fetchEmployees = ({
    request = {},
    mockProps = [],
    shouldFail = false
} = {}) => {
    return new Promise((res,rej) => {
      window.setTimeout(() => {
        if (shouldFail) {
          rej();
        } else {
            const employees = mockEmployees.mockEmployees,
                    requestEmployees = request.employeesList,
                    responseEmployees = [];
            [...employees].forEach((employee)=>{
                if(requestEmployees.includes(employee.id)){
                    responseEmployees.push(employee);
                }
            })
            return res({
                        data: responseEmployees,
                        mockRequest: request
                    });
        }
      }, 1500);
    })
};