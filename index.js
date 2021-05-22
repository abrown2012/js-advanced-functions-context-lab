/* Your Code Here */
// Your code here
const createEmployeeRecord = (arr) => {
    let obj = {firstName: arr[0], 
            familyName: arr[1],
            title: arr[2], 
            payPerHour: arr[3], 
            timeInEvents: [],
            timeOutEvents: []
            }
    return obj
}

const createEmployeeRecords = (arr) => {
    return arr.map(x => createEmployeeRecord(x))
}

function createTimeInEvent(timestamp){
    const arrayDate = timestamp.split(' ')
    const new_obj = {type: "TimeIn", 
                    date: arrayDate[0], 
                    hour: parseInt(arrayDate[1])
                    }
     this.timeInEvents.push(new_obj)
     return this
 }
 function createTimeOutEvent(timestamp){
    const arrayDate = timestamp.split(' ')
    const new_obj = {type: "TimeOut", 
                   date: arrayDate[0], 
                   hour: parseInt(arrayDate[1])}
    this.timeOutEvents.push(new_obj)
    return this
}
function hoursWorkedOnDate(dateOfEvent){
    let startTime = this.timeInEvents.find(element => element.date === dateOfEvent)
    let endTime = this.timeOutEvents.find(element => element.date === dateOfEvent )
    console.log(endTime) 
    let hoursWorked = endTime.hour - startTime.hour
    return hoursWorked/100
}

function wagesEarnedOnDate(dateOfEvent) {
    let wages = hoursWorkedOnDate.call(this, dateOfEvent) * this.payPerHour
    return wages
}

function calculatePayroll(employees) {
    let allEmployeesPay = employees.map((employee) => {
        return allWagesFor.call(employee)
    })
    return allEmployeesPay.reduce((x,y)=> x+y)
}

const findEmployeeByFirstName = (allEmp, empName) => {
    let foundEmp = allEmp.find(employee => employee.firstName === empName)
    return foundEmp
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}