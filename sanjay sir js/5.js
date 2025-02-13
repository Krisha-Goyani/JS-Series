//% No hardcoded values, no multiple string
const company = "yourstory";
const baseURL = "http://prod.yourstory.com";
const imagePath = "/assets/images/";
const arrowImages = "arrow.svg";
const subscriptionTime = 12;

const arrowPath = `${baseURL}${imagePath}${arrowImages}`;

//% 2.   KILL switch (and it's cousin if-else-if ladder)
//> 2.1  contiguous values(1, 2, 3, 4 ...) --> replacements values ('Mon', 'Tue', 'Web')
//> Create an array of replacements values

const dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(dayName[5]);

//%  2.2 non-contiguous values (33, 45, 56, 68)  --> replacements  values ("UP", "PGUP", "ESC")
//> Create an object of replacement values (or use JS Map())

const keyMap = {
  33: "UP",
  45: "PGUP",
  56: "ESC",
  68: "DOWN",
};

console.log(keyMap[33]);

//> 2.2 contiguous values (1, 2, 3, 4 .....)   --> actions (CRUD)
//>   Create an array of functions/lambdas

const createCustomer = (id, name) => console.log(`Created Custome ${id}`);
const deleteCustomer = (id) => console.log(`Deleted customer ${id}`);
const printCustomer = (id) => console.log(`Printing ${id}`);
const updateCustomer = (id, name) => console.log(`updated ${id} to ${name}`);

const crudACTIONS = [createCustomer, deleteCustomer, printCustomer, updateCustomer];

crudACTIONS[1] = id => console.log('not delete');

const action = crudACTIONS[3];
action ? action(5 , 'abc') : console.log("invalid actions");

// *2.3 non-contigous values ('a', 'd', "k", ....) -> (actions append, delete, print)
const appendItem = () => console.log("append");
const deletetem = () => console.log("delete");
const printItem = () => console.log("Print");
const actionMap = {
    "A" : appendItem,
    "D" : deletetem,
    "p" : printItem,
}
let which = actionMap["D"];
which ? which() : console.log("invalid action");

// add new action without modifying existing code
// It can also added dynamically at runtime
actionMap["X"] = () => console.log("exit");
which = actionMap["X"];
which();