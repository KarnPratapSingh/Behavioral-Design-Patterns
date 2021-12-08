/*The Visitor pattern defines a new operation to a collection of objects without 
changing the objects themselves. The new logic resides in a separate object called the Visitor.*/



//pre-existing objects: Employees array

var Employee = function (name, salary, vacation) {
    var self = this;

    this.accept = function (visitor) {
        visitor.visit(self);
    };

    this.getName = function () {
        return name;
    };

    this.getSalary = function () {
        return salary;
    };

    this.setSalary = function (sal) {
        salary = sal;
    };

    this.getVacation = function () {
        return vacation;
    };

    this.setVacation = function (vac) {
        vacation = vac;
    };
};


// new Visitor objects introduced for making changes in existing objects.
var ExtraSalary = function () {
    this.visit = function (emp) {
        emp.setSalary(emp.getSalary() * 1.1);
    };
};

var ExtraVacation = function () {
    this.visit = function (emp) {
        emp.setVacation(emp.getVacation() + 2);
    };
};




function run() {

    var employees = [
        new Employee("Karn", 10000, 10),
        new Employee("Pratap", 20000, 21),
        new Employee("Jerry", 250000, 51)
    ];

    var visitorSalary = new ExtraSalary();
    var visitorVacation = new ExtraVacation();

    for (var i = 0, len = employees.length; i < len; i++) {
        var emp = employees[i];

        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        console.log(emp.getName() + ": Rs." + emp.getSalary() +
            " and " + emp.getVacation() + " vacation days");
    }
}

run();