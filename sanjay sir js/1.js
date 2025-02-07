function Employee(ID, NAME){
    //% fields
    this.id = ID,
    this.name = NAME
    }
//}

Employee.count = 10;
Employee.prototype.baseSalary = 50000;

// creating an object from Employee Constructor
var eich = new Employee(2, "jitu");
console.log(eich.id);
console.log(eich.baseSalary);
console.log(eich.count);
console.log(Employee.count);