const prompt = require ("prompt-sync")();
let addmembers = [];
let enterId = parseInt(prompt("enter a id for members"));
function member (name, id , department , Company , postion , salary){
    this.name = name;
    this.id = id;
    this.department = department;
    this.Company = Company;
    this.postion = postion;
    this.salary = salary;

   addmembers.push(this);
}

let emply = new member("yougesh" , 2212101 , "Compurt Science" , "Trango Tech" , "senior" , 80000 );
let emply1 = new member("shail" , 2212102 , "Compurt Science" , "Trango Tech" , "junior" , 50000 );
let emply2 = new member("Salok" , 2212103 , "Compurt Science" , "Trango Tech" , "senior" , 80000);
let emply3 = new member("wasiulla" , 2212104 , "Compurt Science" , "Trango Tech" , "senior" , 80000 );
let emply4 = new member("ameen" , 2212105 , "Compurt Science" , "Trango Tech" , "senior" , 80000);
let emply5 = new member("hamza" , 2212106 , "Compurt Science" , "Trango Tech" , "junior"  , 50000 );
let emply6 = new member("shoaib" , 2212107 , "Compurt Science" , "Trango Tech" , "junior" , 50000 );
let emply7 = new member("usama" , 2212108 , "Compurt Science" , "Trango Tech" , "senior" , 80000 );
let emply8 = new member("bilal" , 2212109 , "Compurt Science" , "Trango Tech" , "senior" , 80000 );
let emply9 = new member("auskan" , 2212110 , "Compurt Science" , "Trango Tech" , "senior" , 80000 );

let store = false;
addmembers.forEach(getObjects => {
    if (getObjects.id == enterId){
        store= true;
        for (key in getObjects){
            console.log(key + ": " + getObjects[key]);
        }
    }
})

if (store){
    console.log("members exist");
} 
else {
    console.log("members does not exist");
}