export const data = [
    {
        "results": [
            {
                "category": "JavaScript",
                "question": "How to declare an array of 10 elements in JavaScript?",
                "correct_answer": "arr = new Array(10)",
                "incorrect_answers": [
                    "var arr[10]",
                    "var arr = array(10)",
                    "var arr(10)"
                ]
            }, {
                "category": "JavaScript",
                "question": "How to get a random number between 5 and 9 inclusive?",
                "correct_answer": "Math.floor((Math.random() * 5) + 5);",
                "incorrect_answers": [
                    "Math.floor((Math.random() * 5) + 4);",
                    "Math.floor((Math.random() * 4) + 4);",
                    "Math.floor((Math.random() * 4) + 5);"
                ]
            }, {

                "category": "JavaScript",
                "question": "To check if three variables are equal, we are going to use _____?",
                "correct_answer": "(X == B) &amp;&amp; (Y == Z)",
                "incorrect_answers": [
                    "X = Y = Z",
                    "(X = B) &amp;&amp; (Y = Z)",
                    "(X == B) &amp; (Y == Z)"
                ]
            }, {

                "category": "JavaScript",
                "question": "How many parameters can be passed to a function?",
                "correct_answer": "One for each argument",
                "incorrect_answers": [
                    "Any",
                    "As much as you want",
                    "One argument"
                ],
                "example": "function add(a, b) { \n                  return a + b;\n                 }\n \n                 add(1, 2);"
            }, {

                "category": "JavaScript",
                "question": "Which of these parameters is not valid?",
                "correct_answer": "an operator",
                "incorrect_answers": [
                    "text",
                    "a variable", "a number"
                ],
                "example": "We can't pass an operator as a parameter to a function."
            }, {

                "category": "JavaScript",
                "question": "How to detect the name of the client's browser?",
                "correct_answer": "navigator.appName",
                "incorrect_answers": [
                    "browser.name",
                    "client.navName",
                    "window.appName"
                ],
                "example": "appName Returns the name of the browser. Example:\n         if(navigator.appName == 'Netscape')\n             {\n                 alert('For proper functioning of the application, please use Google Chrome or Mozilla Firefox browsers'); \n             }"
            }, {

                "category": "JavaScript",
                "question": "If str = \"VWXYZ\", what returns str.charAt(3)?",
                "correct_answer": "Y",
                "incorrect_answers": [
                    "X",
                    "Z",
                    "false"
                ],
                "example": "The method charAt() returns the character at the specified index in a string. The index of the first character is 0."
            }, {

                "category": "JavaScript",
                "question": "The following statement A ? B : C is equivalent to ______?",
                "correct_answer": "if (A) {B} else {C}",
                "incorrect_answers": [
                    "if (A) {B; C}",
                    "if (A != B) C",
                    "if (A == B) C"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "Which one is not a comparison operator?",
                "correct_answer": "=",
                "incorrect_answers": [
                    "<",
                    ">",
                    "!="
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "Which event is specific to the keyboard?",
                "correct_answer": "onkeypress",
                "incorrect_answers": [
                    "onkeydown",
                    "onclick",
                    "onfocus"
                ],
                "example": "The event onkeypress occurs when the user presses a key (on the keyboard)."
            }, {

                "category": "JavaScript",
                "question": "What's the output? \n\n function sayHi() { \n    console.log(name); \n   console.log(age); \n   var name = \n 'Lydia'; \n   let age = 21;\n }\n \n sayHi();\n",
                "correct_answer": "undefined and ReferenceError",
                "incorrect_answers": [
                    "Lydia and undefined",
                    "Lydia and ReferenceError",
                    "ReferenceError and 21"
                ],
                "example": "Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.\n Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the 'temporal dead zone'. When we try to access the variables before they are declared, JavaScript throws a ReferenceError."
            }, {

                "category": "JavaScript",
                "question": "What's the output?\n\n for (var i = 0; i < 3; i++) {\n   setTimeout(() => console.log(i), 1);\n }\n \n for (let i = 0; i < 3; i++) {\n   setTimeout(() => console.log(i), 1);\n }",
                "correct_answer": "3 3 3 and 0 1 2",
                "incorrect_answers": [
                    "0 1 2 and 0 1 2",
                    "0 1 2 and 3 3 3",
                    "0 0 0 and 0 1 2"
                ],
                "example": "Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.\n In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop."
            }, {

                "category": "JavaScript",
                "question": "What's the output?\n\n const shape = {\n   radius: 10,\n   diameter() {\n     return this.radius * 2;\n   },\n   perimeter: () => 2 * Math.PI * this.radius,\n };\n \n console.log(shape.diameter());\n console.log(shape.perimeter());\n",
                "correct_answer": "20 and NaN",
                "incorrect_answers": [
                    "20 and 62.83185307179586",
                    "NaN and 63",
                    "20 and 63"
                ],
                "example": "Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.\n \nWith arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).\n There is no value radius on that object, which returns NaN."
            }, {

                "category": "JavaScript",
                "question": " What's the output?\n\n         +true;\n         !'Lydia';",
                "correct_answer": "1 and false",
                "incorrect_answers": [
                    "false and NaN",
                    "false and false",
                    "false and undefined"
                ],
                "example": "The unary plus tries to convert an operand to a number. true is 1, and false is 0.\n     The string 'Lydia' is a truthy value. What we're actually asking, is 'is this truthy value falsy?'. This returns false."
            }, {

                "category": "JavaScript",
                "question": "Which one is true?\n \n            const bird = {\n             size: 'small',\n             };\n \n             const mouse = {\n             name: 'Mickey',\n             small: true,\n             };",
                "correct_answer": "mouse.bird.size is not valid",
                "incorrect_answers": [
                    "mouse[bird.size] is not valid",
                    "mouse[bird['size']] is not valid",
                    "All of them are valid"
                ],
                "example": "In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood. \n     JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement.\n     mouse[bird.size]: First it evaluates bird.size, which is 'small'. mouse['small'] returns true\n     However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. This isn't valid, and will throw an error similar to Cannot read property 'size' of undefined."
            }, {

                "category": "JavaScript",
                "question": "NaN stands for_________.",
                "correct_answer": "Not  a number",
                "incorrect_answers": [
                    "Nano",
                    "NanTech",
                    "New attached"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "++ operator in JavaScript is ____ Operator.",
                "correct_answer": "Increment",
                "incorrect_answers": [
                    "Unary",
                    "Positive",
                    "Addition"
                ],
                "example": "var++ is the same as var = var + 1. "
            }, {

                "category": "JavaScript",
                "question": "______ side JavaScript statements embedded in a HTML Page can respond to user events such as mouse-clicks, forms input and page navigation.",
                "correct_answer": "Client",
                "incorrect_answers": [
                    "Server",
                    "Website",
                    "Live wire"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "What is the object that is in TOP of the root in JavaScript?",
                "correct_answer": "window",
                "incorrect_answers": [
                    "top",
                    "url",
                    "document"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "In which HTML tag do we put the JavaScript code?",
                "correct_answer": "The script tag",
                "incorrect_answers": [
                    "The js tag",
                    "The javascript tag",
                    "The rel tag"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "How to call a function named “sum”?",
                "correct_answer": "sum()",
                "incorrect_answers": [
                    "call function sum()",
                    "call sum()",
                    "None of the above"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "Which of the following functions of “String” object divides a String object into an array of strings by separating the string into substrings?",
                "correct_answer": "split()",
                "incorrect_answers": [
                    "slice()",
                    "replace()",
                    "search()"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "You are a junior web designer. Your company assigns you to work on a JavaScript project. What are the benefits of using JavaScript for form validation?",
                "correct_answer": "All the answers are true",
                "incorrect_answers": [
                    "Increase end-user satisfaction",
                    "Increase the validity of form submission",
                    "Conservation of bandwidth"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "What's the output?\n\nclass Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = 'green' } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: 'purple' });\nconsole.log(freddie.colorChange('orange'));\n",
                "correct_answer": "TypeError",
                "incorrect_answers": [
                    "orange",
                    "purple",
                    "green"
                ],
                "example": "The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown."
            }, {

                "category": "JavaScript",
                "question": "What's the output?\n\n let greeting; \n greetign = {}; // Typo! \nconsole.log(greetign);",
                "correct_answer": "{}",
                "incorrect_answers": [
                    "ReferenceError: greetign is not defined",
                    "undefined",
                    "null"
                ],
                "example": "It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as global.greetign = {} (or window.greetign = {} in a browser).\nIn order to avoid this, we can use 'use strict'. This makes sure that you have declared a variable before setting it equal to anything."
            }, {

                "category": "JavaScript",
                "question": " What happens when we do this? \n\n function bark() {\n  console.log('Woof!');\n}\nbark.animal = 'dog';\n",
                "correct_answer": "Nothing, this is totally fine!",
                "incorrect_answers": [
                    "SyntaxError. You cannot add properties to a function this way.",
                    "'Woof' gets logged.",
                    "ReferenceError"
                ],
                "example": "This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)\nA function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable."
            }, {

                "category": "JavaScript",
                "question": "What are the three phases of event propagation?",
                "correct_answer": "Capturing > Target > Bubbling",
                "incorrect_answers": [
                    "Target > Capturing > Bubbling",
                    "Bubbling > Target > Capturing",
                    "Target > Bubbling > Capturing"
                ],
                "example": "During the capturing phase, the event goes through the ancestor elements down to the target element. It then reaches the target element, and bubbling begins."
            }, {

                "category": "JavaScript",
                "question": "Why do JavaScript and Java have similar name?",
                "correct_answer": "JavaScript's syntax is loosely based on Java's",
                "incorrect_answers": [
                    "JavaScript is a stripped-down version of Java",
                    "They both originated on the island of Java",
                    "None of the above"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "What are variables used for in JavaScript Programs?",
                "correct_answer": "Storing numbers, dates, or other values",
                "incorrect_answers": [
                    "Varying randomly",
                    "Causing high-school algebra flashbacks",
                    "None of the above"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "Which of the following is not a valid JavaScript variable name?",
                "correct_answer": "2names",
                "incorrect_answers": [
                    "_first_and_last_names",
                    "FirstAndLast",
                    "None of the above"
                ],
                "example": ""
            }, {

                "category": "JavaScript",
                "question": "How does JavaScript store dates in a date object?",
                "correct_answer": "The number of milliseconds since January 1st, 1970",
                "incorrect_answers": [
                    "The number of days since January 1st, 1900",
                    "The number of seconds since Netscape's public stock offering.",
                    "None of the below"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "Upon encountering empty statements, what does the Javascript Interpreter do?",
                "correct_answer": "Ignores the statements",
                "incorrect_answers": [
                    "Throws an error",
                    "Gives a warning",
                    "None of the above"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "What will be the output of the following code snippet? \n\n  a = 5 + '9'; \n document.write(a);",
                "correct_answer": "59",
                "incorrect_answers": [
                    "Compilation error",
                    "14",
                    "Runtime error"
                ],
                "example": "In the above code snippet, the first number is of integer type and the second of string type. The code snippet gives priority to the string type and concatenates them due to the ‘+’ operator."
            }, {
                "category": "JavaScript",
                "question": "What will be the output of the following code snippet? \n\n let a = 'Scaler'; \n let result = a.substring(2, 4); \n document.write(result);",
                "correct_answer": "al",
                "incorrect_answers": [
                    "ale",
                    "cal",
                    "caler"
                ],
                "example": "The substring function in javascript slices a substring out of a given string from the start to end indexes(excluding the end index). So the 2nd and 3rd characters are taken here(0-based indexing) and the answer is al."
            }, {
                "category": "JavaScript",
                "question": "What will be the output of the following code snippet? \n \nlet x=12; \n let y=8; \n let res=eval('x+y'); \n document.write(res);",
                "correct_answer": "20",
                "incorrect_answers": [
                    "x+y",
                    "128",
                    "NaN"
                ],
                "example": "The eval() function evaluates the expression passed into it as a parameter and returns the result after evaluation."
            }, {
                "category": "JavaScript",
                "question": "What will be the output of the following code snippet?\n \n (function(){ \n  setTimeout(()=> console.log(1),2000); \n  console.log(2); \n  setTimeout(()=> console.log(3),0); \n  console.log(4);\n })();",
                "correct_answer": "2 4 3 1",
                "incorrect_answers": [
                    "1 2 3 4",
                    "2 3 4 1",
                    "4 3 2 1"
                ],
                "example": "First the 2 is printed with the console.log, then even with a time delay of 0ms, the 4 is printed before the 3 because JS executes setTimeout with the Web API, and so the entire function is executed first. Lastly, after a delay of 2000ms, the 1 is printed."
            }, {
                "category": "JavaScript",
                "question": "What does the 'toLocaleString()' method do in JS?",
                "correct_answer": "Returns a localized string representation of an object.",
                "incorrect_answers": [
                    "Returns a localised object representation.",
                    "Returns a parsed string.",
                    "Throws an error."
                ],
                "example": "The 'toLocaleString()' method in JS returns a localized string representation of an object."
            }, {
                "category": "JavaScript",
                "question": "JavaScript is the programming language of the _____.",
                "correct_answer": "Web",
                "incorrect_answers": [
                    "Desktop",
                    "Mobile",
                    "Tablet"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "Which of the following statement(s) is true about the JavaScript?",
                "correct_answer": "It is a scripting language used to make the website interactive",
                "incorrect_answers": [
                    "It is an advanced version of Java for Desktop and Mobile application development",
                    "It is a markup language of Java to develop the webpages",
                    "All of the below"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "JavaScript code can be written in ____.",
                "correct_answer": "JavaScript file and in HTML document directly",
                "incorrect_answers": [
                    "HTML document directly",
                    "JavaScript file(.js file)",
                    "In style sheets(.css file)"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "JavaScript ignores ... ?",
                "correct_answer": "All of the below",
                "incorrect_answers": [
                    "New lines",
                    "Tabs",
                    "Spaces"
                ],
                "example": "JavaScript ignores spaces, tabs, and newlines written in the code, we can use them for the alignment and separate the sections to give a perfect look at our code."
            }, {
                "category": "JavaScript",
                "question": "Which JavaScript method is used to access an HTML element by id?",
                "correct_answer": "getElementById(id)",
                "incorrect_answers": [
                    "getElement(id)",
                    "elementById(id)",
                    "getElementById()"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "What is the use of this JavaScript statement?\n<button onclick='window.print()'>Submit</button>",
                "correct_answer": "It will print the content of the current page",
                "incorrect_answers": [
                    "It will write 'Submit' on the current Window",
                    "It will write the content of the current page in the browser's console",
                    "None of the above"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "In JavaScript, single line comment begins with ___.",
                "correct_answer": "//",
                "incorrect_answers": [
                    "/*",
                    "$",
                    "#"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "In JavaScript, multi-line comments start with __ and end with ___.",
                "correct_answer": "/* and */",
                "incorrect_answers": [
                    "<!-- and -->",
                    "## and ##",
                    "// and //"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "What is the main difference between var and let keywords in JavaScript?",
                "correct_answer": "var defined function scoped variable while let define block scoped variable",
                "incorrect_answers": [
                    "var defines a variable while let defines a constant",
                    "The value of a variable declared with var can be changed while the value of a variable declared with let cannot be changed",
                    "All of the below"
                ],
                "example": "The var and let keywords are both used for variable declaration in JavaScript. But, the main difference between them is that var defines function scoped variable while let defines block - scoped variable."
            }, {
                "category": "JavaScript",
                "question": "Which is the correct syntax to declare a constant in JavaScript?",
                "correct_answer": "const constant_name = value;",
                "incorrect_answers": [
                    "constant_name const = value;",
                    "constant_name const: value;",
                    "const constant_name;"
                ],
                "example": "Example: \n const PI = 3.14;"
            }, {
                "category": "JavaScript",
                "question": "What is the default value of an uninitialized variable?",
                "correct_answer": "undefined",
                "incorrect_answers": [
                    "0",
                    "NaN",
                    "null"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "What will be the output of the following JavaScript code? \n\n let x = 5;\n         document.getElementById('demo').innerHTML = x--;",
                "correct_answer": "4",
                "incorrect_answers": [
                    "5",
                    "TypeError",
                    "NaN"
                ],
                "example": "In the above statement, we used post-decrement(x--). Post-decrement decreases the value by 1 after evaluating the current statement."
            }, {
                "category": "JavaScript",
                "question": "JavaScript arrays are written with _____.",
                "correct_answer": "square brackets []",
                "incorrect_answers": [
                    "round brackets ()",
                    "curly brackets {}",
                    "double quotes \"\""
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "JavaScript objects are written with _____.",
                "correct_answer": "curly brackets {}",
                "incorrect_answers": [
                    "square brackets []",
                    "round brackets ()",
                    "double quotes \"\""
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "What will be the output of the following JavaScript code?\n\n let cars = ['Honda','Hyundai','Mahindra'];\n let result = cars.shift(); \n document.writeln('Result: ', cars);",
                "correct_answer": "Result: Hyundai, Mahindra",
                "incorrect_answers": [
                    "Result: Honda, Hyundai, Mahindra",
                    "Result: Honda, Mahindra",
                    "Result: Honda"
                ],
                "example": ""
            }, {
                "category": "JavaScript",
                "question": "Which JavaScript method is used to call a function (a callback function) once for each array element?",
                "correct_answer": "forEach()",
                "incorrect_answers": [
                    "for()",
                    "traverse()",
                    "inArray()"
                ],
                "example": ""
            }

        ]
    }
]