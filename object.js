// object

// let car = new Object();
// car.name =  "civic";
// car.model = "2025";
// car.name = "mehran"
// console.log(car);

//  Object Constructo

// function student (name , id , department , semester){
//     this.name = name;
//     this.id = id; 
//     this.department = department;
//     this.semester = semester;

//     this.Action = () => {
//     console.log(this.name + " is teaching");
// }
// }

// let stu1 = new student("y.k" , 201233 , "C.S" , 4);
// console.log(stu1);
// stu1.Action();


//  task Syntax of Object Constructo

let addEmpolyes = [];
function employes(Name , ID , Department ,  Company , post , salary){
    this.Name = Name;
    this.ID = ID;
    this.Department = Department;
    this.Company = Company;
    this.Post = post;
    this.Salary = salary;

    // Function
  this.action = () => {
    console.log(this.Name + " is working in " + this.Company);
  }
  this.save = () => {
    return addEmpolyes.push(this);
  }
}

let emply = new employes("yougesh" , 2212101 , "Compurt Science" , "Trango Tech" , "senior" , 80000 );
let emply1 = new employes("shail" , 2212102 , "Compurt Science" , "Trango Tech" , "junior" , 50000 );
let emply2 = new employes("Salok" , 2212103 , "Compurt Science" , "Trango Tech" , "senior" , 80000);
let emply3 = new employes("wasiulla" , 2212104 , "Compurt Science" , "Trango Tech" , "senior" , 80000 );
let emply4 = new employes("ameen" , 2212105 , "Compurt Science" , "Trango Tech" , "senior" , 80000);
let emply5 = new employes("hamza" , 2212106 , "Compurt Science" , "Trango Tech" , "junior"  , 50000 );
let emply6 = new employes("shoaib" , 2212107 , "Compurt Science" , "Trango Tech" , "junior" , 50000 );
let emply7 = new employes("usama" , 2212108 , "Compurt Science" , "Trango Tech" , "senior" , 80000 );
let emply8 = new employes("bilal" , 2212109 , "Compurt Science" , "Trango Tech" , "senior" , 80000 );
let emply9 = new employes("auskan" , 2212110 , "Compurt Science" , "Trango Tech" , "senior" , 80000 );

emply.save();
emply1.save();
emply2.save();
emply3.save();
emply4.save();
emply5.save();
emply6.save();
emply7.save();
emply8.save();
emply9.save();
console.log(addEmpolyes);

// reduces meyhods

let totalSalary = addEmpolyes.reduce((accumulator, emp) => {
    return accumulator + emp.Salary;
}, 0);

console.log("Total employees' salary is: " + totalSalary);

