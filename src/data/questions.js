const questions = {
    easy: [
      {
        question: "What does HTML stand for?",
        options: {
          A: "Hyperlinks and Text Markup Language",
          B: "Home Tool Markup Language",
          C: "Hyper Text Markup Language",
          D: "Hyper Text Machine Language"
        },
        correct_answer: "C",
        hint: "It's the standard markup language for creating web pages.",
        explanation: "HTML stands for Hyper Text Markup Language, the standard language used to create web pages.",
        type: "single"
      },
      {
        question: "Which CSS property controls the text size?",
        options: {
          A: "font-style",
          B: "text-size",
          C: "font-size",
          D: "text-style"
        },
        correct_answer: "C",
        hint: "This property is used to increase or decrease the size of the text.",
        explanation: "The 'font-size' property in CSS is used to control the size of the text.",
        type: "single"
      },
      {
        question: "Which HTML element is used to define an internal stylesheet?",
        options: {
          A: "<style>",
          B: "<css>",
          C: "<script>",
          D: "<link>"
        },
        correct_answer: "A",
        hint: "This element is used within the head tag to define CSS rules.",
        explanation: "The '<style>' element is used to define an internal stylesheet in HTML.",
        type: "single"
      },
      {
        question: "Which JavaScript method is used to convert a JSON string into a JavaScript object?",
        options: {
          A: "JSON.parse()",
          B: "JSON.stringify()",
          C: "Object.parse()",
          D: "Object.stringify()"
        },
        correct_answer: "A",
        hint: "This method is the opposite of JSON.stringify.",
        explanation: "The 'JSON.parse()' method parses a JSON string and returns a JavaScript object.",
        type: "single"
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: {
          A: "style",
          B: "styles",
          C: "class",
          D: "font"
        },
        correct_answer: "A",
        hint: "It directly applies CSS to elements.",
        explanation: "The 'style' attribute in HTML is used to apply inline CSS styles to an element.",
        type: "single"
      },
      {
        question: "Which company developed JavaScript?",
        options: {
          A: "Mozilla",
          B: "Netscape",
          C: "Microsoft",
          D: "Sun Microsystems"
        },
        correct_answer: "B",
        hint: "It's one of the early web browsers.",
        explanation: "JavaScript was developed by Netscape, a pioneer in the early days of the web.",
        type: "single"
      },
      {
        question: "Which property is used to change the background color in CSS?",
        options: {
          A: "bgcolor",
          B: "color",
          C: "background-color",
          D: "background"
        },
        correct_answer: "C",
        hint: "It's commonly used for styling.",
        explanation: "The 'background-color' property in CSS is used to set the background color of an element.",
        type: "single"
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: {
          A: "Compares values",
          B: "Checks the data type",
          C: "Declares a variable",
          D: "Returns a string"
        },
        correct_answer: "B",
        hint: "It returns the type of a variable or expression.",
        explanation: "The 'typeof' operator returns a string indicating the type of the unevaluated operand.",
        type: "single"
      },
      {
        question: "Which of the following is used to select an element by its ID in JavaScript?",
        options: {
          A: "getElementById()",
          B: "querySelector()",
          C: "getElementByClass()",
          D: "getElementByTag()"
        },
        correct_answer: "A",
        hint: "This method is often used to manipulate a specific element in the DOM.",
        explanation: "The 'getElementById()' method returns the element that has the ID attribute with the specified value.",
        type: "single"
      },
      {
        question: "Which of the following is not a valid JavaScript data type?",
        options: {
          A: "String",
          B: "Boolean",
          C: "Float",
          D: "Number"
        },
        correct_answer: "C",
        hint: "Think about the primitive types in JavaScript.",
        explanation: "JavaScript does not have a specific 'Float' data type; numbers are all of type 'Number'.",
        type: "single"
      },
      {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: {
          A: "pop()",
          B: "push()",
          C: "shift()",
          D: "unshift()"
        },
        correct_answer: "A",
        hint: "This method also returns the removed element.",
        explanation: "The 'pop()' method removes the last element from an array and returns that element.",
        type: "single"
      },
      {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        options: {
          A: "<script href='script.js'>",
          B: "<script src='script.js'>",
          C: "<script ref='script.js'>",
          D: "<script name='script.js'>"
        },
        correct_answer: "B",
        hint: "This attribute specifies the URL of the external script file.",
        explanation: "The 'src' attribute in the '<script>' tag is used to specify the path to an external JavaScript file.",
        type: "single"
      },
      {
        question: "Which JavaScript function is used to parse a string to an integer?",
        options: {
          A: "parseInt()",
          B: "parseFloat()",
          C: "Number()",
          D: "String()"
        },
        correct_answer: "A",
        hint: "This function returns an integer or NaN.",
        explanation: "The 'parseInt()' function parses a string argument and returns an integer.",
        type: "single"
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        options: {
          A: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
          B: "var colors = 'red', 'green', 'blue'",
          C: "var colors = ['red', 'green', 'blue']",
          D: "var colors = (1:'red', 2:'green', 3:'blue')"
        },
        correct_answer: "C",
        hint: "JavaScript arrays are written with square brackets.",
        explanation: "JavaScript arrays are defined using square brackets with elements separated by commas.",
        type: "single"
      },
      {
        question: "How do you create a function in JavaScript?",
        options: {
          A: "function:myFunction()",
          B: "function myFunction()",
          C: "function = myFunction()",
          D: "function -> myFunction()"
        },
        correct_answer: "B",
        hint: "This is the basic syntax for defining a function.",
        explanation: "The correct syntax to create a function in JavaScript is 'function myFunction()'.",
        type: "single"
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: {
          A: "onchange",
          B: "onclick",
          C: "onmouseover",
          D: "onmouseclick"
        },
        correct_answer: "B",
        hint: "This event is commonly used for button interactions.",
        explanation: "The 'onclick' event occurs when the user clicks on an HTML element.",
        type: "single"
      },
      {
        question: "How do you declare a JavaScript variable?",
        options: {
          A: "v carName;",
          B: "variable carName;",
          C: "var carName;",
          D: "let carName;"
        },
        correct_answer: "C",
        hint: "This is the traditional way to declare variables in JavaScript.",
        explanation: "The correct way to declare a variable in JavaScript is 'var carName;'.",
        type: "single"
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: {
          A: "-",
          B: "x",
          C: "=",
          D: "+"
        },
        correct_answer: "C",
        hint: "This operator is used for assignment in most programming languages.",
        explanation: "The '=' operator is used to assign a value to a variable in JavaScript.",
        type: "single"
      },
      {
        question: "How does a WHILE loop start?",
        options: {
          A: "while (i <= 10)",
          B: "while i = 1 to 10",
          C: "while (i <= 10; i++)",
          D: "while (i <= 10, i++)"
        },
        correct_answer: "A",
        hint: "It starts with a condition in parentheses.",
        explanation: "A 'while' loop starts with the 'while' keyword followed by a condition in parentheses.",
        type: "single"
      },
  
      {
        question: "Which of the following are valid data types in JavaScript? (Select all that apply)",
        options: {
          A: "String",
          B: "Number",
          C: "Boolean",
          D: "Character"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Think about the basic data types used in JavaScript.",
        explanation: "JavaScript supports 'String', 'Number', and 'Boolean' as primitive data types, but 'Character' is not a separate data type.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are JavaScript loops? (Select all that apply)",
        options: {
          A: "for",
          B: "while",
          C: "do-while",
          D: "foreach"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Consider the loops available in JavaScript.",
        explanation: "JavaScript supports 'for', 'while', and 'do-while' loops, but 'foreach' is not a standard loop in JavaScript (although similar functionality can be achieved with array methods).",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are falsy values in JavaScript? (Select all that apply)",
        options: {
          A: "0",
          B: "null",
          C: "'0'",
          D: "undefined"
        },
        correct_answer: ["A", "B", "D"],
        hint: "Falsy values evaluate to false in a boolean context.",
        explanation: "In JavaScript, the falsy values include '0', 'null', 'undefined', and others. The string '0' is truthy.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are JavaScript frameworks? (Select all that apply)",
        options: {
          A: "React",
          B: "Angular",
          C: "Vue",
          D: "jQuery"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Think about popular frameworks used in modern web development.",
        explanation: "React, Angular, and Vue are all popular JavaScript frameworks, while jQuery is a library.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid JavaScript methods for manipulating arrays? (Select all that apply)",
        options: {
          A: "push()",
          B: "pop()",
          C: "map()",
          D: "filter()"
        },
        correct_answer: ["A", "B", "C", "D"],
        hint: "All of these methods are used to work with arrays in JavaScript.",
        explanation: "All the listed methods (push, pop, map, and filter) are valid array manipulation methods in JavaScript.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid ways to declare a variable in JavaScript? (Select all that apply)",
        options: {
          A: "var",
          B: "let",
          C: "const",
          D: "variable"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Consider the modern and legacy ways of declaring variables.",
        explanation: "'var', 'let', and 'const' are all valid ways to declare variables in JavaScript, with 'var' being the older method and 'let' and 'const' being introduced in ES6.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are JavaScript events? (Select all that apply)",
        options: {
          A: "onclick",
          B: "onload",
          C: "onchange",
          D: "onhover"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Events are actions that can be detected in JavaScript.",
        explanation: "'onclick', 'onload', and 'onchange' are all valid JavaScript events, while 'onhover' is not a standard event (the hover effect is usually handled with CSS).",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid ways to access elements in JavaScript? (Select all that apply)",
        options: {
          A: "document.getElementById()",
          B: "document.querySelector()",
          C: "document.getElementsByClassName()",
          D: "document.getElementByName()"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Consider the common methods used for DOM manipulation.",
        explanation: "'getElementById()', 'querySelector()', and 'getElementsByClassName()' are all valid methods for accessing elements in the DOM, while 'getElementByName()' does not exist.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid JavaScript string methods? (Select all that apply)",
        options: {
          A: "charAt()",
          B: "concat()",
          C: "includes()",
          D: "split()"
        },
        correct_answer: ["A", "B", "C", "D"],
        hint: "All of these methods are used to manipulate strings.",
        explanation: "All the listed methods (charAt, concat, includes, and split) are valid string methods in JavaScript.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid ways to create a function in JavaScript? (Select all that apply)",
        options: {
          A: "function()",
          B: "const myFunc = function()",
          C: "const myFunc = () => {}",
          D: "new Function()"
        },
        correct_answer: ["A", "B", "C", "D"],
        hint: "Functions can be created using several different syntaxes in JavaScript.",
        explanation: "All the listed ways are valid methods to create a function in JavaScript.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid data types in JavaScript? (Select all that apply)",
        options: {
          A: "Null",
          B: "Undefined",
          C: "Symbol",
          D: "Character"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Consider the more obscure data types introduced in ES6.",
        explanation: "'Null', 'Undefined', and 'Symbol' are valid data types in JavaScript, while 'Character' is not.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid ways to convert a string to a number in JavaScript? (Select all that apply)",
        options: {
          A: "Number()",
          B: "parseInt()",
          C: "parseFloat()",
          D: "toNumber()"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Three of these methods are commonly used for conversion.",
        explanation: "'Number()', 'parseInt()', and 'parseFloat()' are valid methods for converting strings to numbers in JavaScript.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid ways to concatenate strings in JavaScript? (Select all that apply)",
        options: {
          A: "concat()",
          B: "+",
          C: "append()",
          D: "join()"
        },
        correct_answer: ["A", "B"],
        hint: "Think about the common methods for combining strings.",
        explanation: "'concat()' and '+' are valid methods for concatenating strings in JavaScript.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid JavaScript operators? (Select all that apply)",
        options: {
          A: "+",
          B: "-",
          C: "*",
          D: "&"
        },
        correct_answer: ["A", "B", "C", "D"],
        hint: "All options are valid operators in different contexts.",
        explanation: "All the listed operators ('+', '-', '*', '&') are valid in JavaScript, though '&' is a bitwise operator.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid ways to create an array in JavaScript? (Select all that apply)",
        options: {
          A: "[]",
          B: "new Array()",
          C: "Array.of()",
          D: "Array.create()"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Consider both literal and constructor methods.",
        explanation: "'[]', 'new Array()', and 'Array.of()' are valid methods to create arrays in JavaScript, while 'Array.create()' is not.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid ways to iterate over an array in JavaScript? (Select all that apply)",
        options: {
          A: "for",
          B: "forEach",
          C: "map",
          D: "filter"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Consider both traditional and modern array methods.",
        explanation: "'for', 'forEach', and 'map' are valid ways to iterate over an array in JavaScript, while 'filter' is used to create a new array based on a condition.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid JavaScript loop structures? (Select all that apply)",
        options: {
          A: "for",
          B: "while",
          C: "do-while",
          D: "repeat"
        },
        correct_answer: ["A", "B", "C"],
        hint: "Three of these loops are commonly used in JavaScript.",
        explanation: "'for', 'while', and 'do-while' are valid loop structures in JavaScript, while 'repeat' is not a loop.",
        type: "multiple_correct"
      },
      {
        question: "Which of the following are valid JavaScript Boolean operators? (Select all that apply)",
        options: {
          A: "&&",
          B: "||",
          C: "!",
          D: "=="
        },
        correct_answer: ["A", "B", "C"],
        hint: "Consider the operators used in conditional statements.",
        explanation: "'&&', '||', and '!' are Boolean operators in JavaScript, while '==' is a comparison operator.",
        type: "multiple_correct"
      },
  
      // True/False (Boolean) - 20 Questions
      {
        question: "Is JavaScript case-sensitive?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Consider how variables are defined.",
        explanation: "JavaScript is case-sensitive, meaning that 'var' and 'Var' are treated as different identifiers.",
        type: "boolean"
      },
      {
        question: "Is 'null' an object in JavaScript?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Consider the type of 'null'.",
        explanation: "In JavaScript, 'null' is technically an object type, though it's often used to represent the absence of an object.",
        type: "boolean"
      },
      {
        question: "Is 'undefined' a value in JavaScript?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "It's the default value of uninitialized variables.",
        explanation: "'undefined' is a primitive value in JavaScript assigned to variables that have been declared but not yet assigned a value.",
        type: "boolean"
      },
      {
        question: "Is JavaScript single-threaded?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Consider the event loop.",
        explanation: "JavaScript is single-threaded, meaning it has one call stack and executes one task at a time.",
        type: "boolean"
      },
      {
        question: "Is 'const' used to declare constants in JavaScript?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Think about immutability.",
        explanation: "The 'const' keyword is used to declare variables that cannot be reassigned in JavaScript.",
        type: "boolean"
      },
      {
        question: "Can JavaScript be used for both client-side and server-side programming?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Think about frameworks like Node.js.",
        explanation: "JavaScript can be used on both the client-side (browser) and server-side (Node.js).",
        type: "boolean"
      },
      {
        question: "Does the '===' operator check for both value and type equality in JavaScript?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "It's stricter than the '==' operator.",
        explanation: "The '===' operator checks for both value and type equality in JavaScript.",
        type: "boolean"
      },
      {
        question: "Is 'NaN' in JavaScript a number?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Think about what 'NaN' stands for.",
        explanation: "'NaN' stands for 'Not-a-Number', but it is of the type 'Number' in JavaScript.",
        type: "boolean"
      },
      {
        question: "Is 'typeof null' in JavaScript 'object'?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "This is considered a bug in JavaScript.",
        explanation: "In JavaScript, 'typeof null' incorrectly returns 'object' due to an issue in the language's implementation.",
        type: "boolean"
      },
      {
        question: "Is 'undefined' equal to 'null' in JavaScript using '=='?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Consider type coercion in JavaScript.",
        explanation: "'undefined' and 'null' are loosely equal in JavaScript when using '==' but not with '==='.",
        type: "boolean"
      },
      {
        question: "Can you use JavaScript to manipulate the DOM?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Think about client-side scripting.",
        explanation: "JavaScript is commonly used to manipulate the Document Object Model (DOM) on web pages.",
        type: "boolean"
      },
      {
        question: "Can functions be passed as arguments to other functions in JavaScript?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Think about higher-order functions.",
        explanation: "In JavaScript, functions can be passed as arguments to other functions, a feature known as higher-order functions.",
        type: "boolean"
      },
      {
        question: "Does JavaScript support object-oriented programming (OOP)?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Think about classes and prototypes.",
        explanation: "JavaScript supports object-oriented programming through the use of prototypes and classes.",
        type: "boolean"
      },
      {
        question: "Is 'let' used to declare block-scoped variables in JavaScript?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Consider the scope of variables.",
        explanation: "The 'let' keyword declares variables that are limited in scope to the block, statement, or expression in which they are used.",
        type: "boolean"
      },
      {
        question: "Can JavaScript be used to handle asynchronous operations?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Think about promises and async/await.",
        explanation: "JavaScript can handle asynchronous operations using callbacks, promises, and the async/await syntax.",
        type: "boolean"
      },
      {
        question: "Is JavaScript loosely typed?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Consider variable types and assignments.",
        explanation: "JavaScript is a loosely typed language, meaning variables are not explicitly declared with a type.",
        type: "boolean"
      },
      {
        question: "Does JavaScript have built-in support for modules?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Think about the ES6+ syntax.",
        explanation: "JavaScript has built-in support for modules, introduced in ES6 with the 'import' and 'export' statements.",
        type: "boolean"
      },
      {
        question: "Can JavaScript be used to create web applications?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Consider the role of JavaScript in web development.",
        explanation: "JavaScript is widely used to create interactive web applications.",
        type: "boolean"
      },
      {
        question: "Is 'typeof NaN' in JavaScript 'number'?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Consider how NaN is represented.",
        explanation: "In JavaScript, 'typeof NaN' returns 'number', even though NaN stands for 'Not-a-Number'.",
        type: "boolean"
      },
      {
        question: "Does JavaScript have first-class functions?",
        options: {
          A: "True",
          B: "False"
        },
        correct_answer: "A",
        hint: "Think about how functions are treated in JavaScript.",
        explanation: "In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.",
        type: "boolean"
      }
    ],
    medium: [
        {
          question: "Which method is used to remove the last element from an array in JavaScript?",
          options: {
            A: "pop()",
            B: "push()",
            C: "shift()",
            D: "unshift()"
          },
          correct_answer: "A",
          hint: "This method also returns the removed element.",
          explanation: "The 'pop()' method removes the last element from an array and returns that element.",
          type: "single"
        },
        {
          question: "What is the correct syntax for referring to an external script called 'script.js'?",
          options: {
            A: "<script href='script.js'>",
            B: "<script src='script.js'>",
            C: "<script ref='script.js'>",
            D: "<script name='script.js'>"
          },
          correct_answer: "B",
          hint: "This attribute specifies the URL of the external script file.",
          explanation: "The 'src' attribute in the '<script>' tag is used to specify the path to an external JavaScript file.",
          type: "single"
        },
        {
          question: "Which JavaScript function is used to parse a string to an integer?",
          options: {
            A: "parseInt()",
            B: "parseFloat()",
            C: "Number()",
            D: "String()"
          },
          correct_answer: "A",
          hint: "This function returns an integer or NaN.",
          explanation: "The 'parseInt()' function parses a string argument and returns an integer.",
          type: "single"
        },
        {
          question: "What is the correct way to write a JavaScript array?",
          options: {
            A: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            B: "var colors = 'red', 'green', 'blue'",
            C: "var colors = ['red', 'green', 'blue']",
            D: "var colors = (1:'red', 2:'green', 3:'blue')"
          },
          correct_answer: "C",
          hint: "JavaScript arrays are written with square brackets.",
          explanation: "JavaScript arrays are defined using square brackets with elements separated by commas.",
          type: "single"
        },
        {
          question: "How do you create a function in JavaScript?",
          options: {
            A: "function:myFunction()",
            B: "function myFunction()",
            C: "function = myFunction()",
            D: "function -> myFunction()"
          },
          correct_answer: "B",
          hint: "This is the basic syntax for defining a function.",
          explanation: "The correct syntax to create a function in JavaScript is 'function myFunction()'.",
          type: "single"
        },
        {
          question: "Which event occurs when the user clicks on an HTML element?",
          options: {
            A: "onchange",
            B: "onclick",
            C: "onmouseover",
            D: "onmouseclick"
          },
          correct_answer: "B",
          hint: "This event is commonly used for button interactions.",
          explanation: "The 'onclick' event occurs when the user clicks on an HTML element.",
          type: "single"
        },
        {
          question: "How do you declare a JavaScript variable?",
          options: {
            A: "v carName;",
            B: "variable carName;",
            C: "var carName;",
            D: "let carName;"
          },
          correct_answer: "C",
          hint: "This is the traditional way to declare variables in JavaScript.",
          explanation: "The correct way to declare a variable in JavaScript is 'var carName;'.",
          type: "single"
        },
        {
          question: "Which operator is used to assign a value to a variable?",
          options: {
            A: "-",
            B: "x",
            C: "=",
            D: "+"
          },
          correct_answer: "C",
          hint: "This operator is used for assignment in most programming languages.",
          explanation: "The '=' operator is used to assign a value to a variable in JavaScript.",
          type: "single"
        },
        {
          question: "How does a WHILE loop start?",
          options: {
            A: "while (i <= 10)",
            B: "while i = 1 to 10",
            C: "while (i <= 10; i++)",
            D: "while (i <= 10, i++)"
          },
          correct_answer: "A",
          hint: "It starts with a condition in parentheses.",
          explanation: "A 'while' loop starts with the 'while' keyword followed by a condition in parentheses.",
          type: "single"
        },
        {
          question: "Which of the following is a correct JavaScript syntax for a function expression?",
          options: {
            A: "var myFunc = function() {}",
            B: "var myFunc = () => {}",
            C: "function myFunc() {}",
            D: "Both A and B"
          },
          correct_answer: "D",
          hint: "Function expressions can be written in multiple ways.",
          explanation: "Both traditional and arrow functions can be used for function expressions in JavaScript.",
          type: "single"
        },
    
        // Multiple correct answers (Multiple Choice)
        {
          question: "Which of the following are valid ways to declare a function in JavaScript? (Select all that apply)",
          options: {
            A: "function myFunc() {}",
            B: "const myFunc = function() {}",
            C: "const myFunc = () => {}",
            D: "declare function myFunc() {}"
          },
          correct_answer: ["A", "B", "C"],
          hint: "There are different syntaxes to declare functions.",
          explanation: "JavaScript allows functions to be declared using 'function', function expressions, and arrow functions.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid JavaScript array methods? (Select all that apply)",
          options: {
            A: "push()",
            B: "pop()",
            C: "splice()",
            D: "slice()"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "These methods can add, remove, or retrieve elements from arrays.",
          explanation: "All of these methods are used to manipulate arrays in JavaScript.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid JavaScript looping structures? (Select all that apply)",
          options: {
            A: "for",
            B: "while",
            C: "do-while",
            D: "repeat-until"
          },
          correct_answer: ["A", "B", "C"],
          hint: "Only three of these loops are valid in JavaScript.",
          explanation: "'repeat-until' is not a valid JavaScript loop structure.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid ways to create a new object in JavaScript? (Select all that apply)",
          options: {
            A: "new Object()",
            B: "{}",
            C: "Object.create(null)",
            D: "Object()"
          },
          correct_answer: ["A", "B", "C"],
          hint: "Object literals and constructors are both valid.",
          explanation: "Objects in JavaScript can be created using literals, constructors, or the Object.create method.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid JavaScript string methods? (Select all that apply)",
          options: {
            A: "charAt()",
            B: "concat()",
            C: "includes()",
            D: "substring()"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "These methods are used to manipulate string data.",
          explanation: "All of these methods are commonly used to manipulate strings in JavaScript.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid CSS property-value pairs? (Select all that apply)",
          options: {
            A: "color: red",
            B: "background-color: #ffffff",
            C: "font-size: 16px",
            D: "border-radius: 5px"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "These are commonly used properties in CSS.",
          explanation: "All the listed property-value pairs are valid and commonly used in CSS.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid JavaScript comparison operators? (Select all that apply)",
          options: {
            A: "==",
            B: "===",
            C: "!=",
            D: "<>"
          },
          correct_answer: ["A", "B", "C"],
          hint: "One of these is not a valid comparison operator in JavaScript.",
          explanation: "'<>' is not a valid comparison operator in JavaScript.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid ways to handle asynchronous operations in JavaScript? (Select all that apply)",
          options: {
            A: "Promises",
            B: "Callbacks",
            C: "async/await",
            D: "Synchronous loops"
          },
          correct_answer: ["A", "B", "C"],
          hint: "JavaScript provides several ways to handle asynchronous code.",
          explanation: "Promises, callbacks, and async/await are all valid ways to handle asynchronous operations in JavaScript.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are JavaScript global objects? (Select all that apply)",
          options: {
            A: "Math",
            B: "Date",
            C: "String",
            D: "Window"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "These objects are available globally in JavaScript.",
          explanation: "Math, Date, String, and Window are all global objects in JavaScript.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid JavaScript data types? (Select all that apply)",
          options: {
            A: "String",
            B: "Number",
            C: "Boolean",
            D: "Symbol"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "These are primitive data types in JavaScript.",
          explanation: "String, Number, Boolean, and Symbol are all valid data types in JavaScript.",
          type: "multiple_correct"
        }
      ],
      hard: [
        // Single correct answer (Multiple Choice)
        {
          question: "What is the output of the following code: `console.log(typeof NaN);`?",
          options: {
            A: "'number'",
            B: "'NaN'",
            C: "'undefined'",
            D: "'object'"
          },
          correct_answer: "A",
          hint: "Despite its name, NaN stands for Not-a-Number.",
          explanation: "In JavaScript, the `typeof` NaN returns `'number'` because NaN is technically a numeric value, albeit an invalid one.",
          type: "single"
        },
        {
          question: "Which method is used to create a new object in JavaScript?",
          options: {
            A: "Object.create()",
            B: "new Object()",
            C: "createObject()",
            D: "Object.new()"
          },
          correct_answer: "A",
          hint: "This method is commonly used to create objects with a specified prototype.",
          explanation: "The `Object.create()` method creates a new object with the specified prototype object and properties.",
          type: "single"
        },
        {
          question: "Which of the following is not a JavaScript data type?",
          options: {
            A: "Number",
            B: "String",
            C: "Boolean",
            D: "Character"
          },
          correct_answer: "D",
          hint: "Consider the primitive types supported by JavaScript.",
          explanation: "JavaScript does not have a separate `Character` data type. Characters are represented as strings.",
          type: "single"
        },
        {
          question: "Which of the following is used to determine if a property exists in an object?",
          options: {
            A: "hasOwnProperty()",
            B: "in operator",
            C: "Object.keys()",
            D: "All of the above"
          },
          correct_answer: "D",
          hint: "Consider methods and operators for object property checking.",
          explanation: "All options are valid methods to check for the existence of a property in an object in JavaScript.",
          type: "single"
        },
        {
          question: "What does the '===' operator do in JavaScript?",
          options: {
            A: "Compares values only",
            B: "Compares both values and types",
            C: "Assigns a value",
            D: "Compares references"
          },
          correct_answer: "B",
          hint: "This operator is known for strict equality.",
          explanation: "The `===` operator checks for strict equality, meaning both the value and the type must be the same.",
          type: "single"
        },
        {
          question: "What is the difference between '==' and '===' in JavaScript?",
          options: {
            A: "'==' compares values, '===' compares values and types",
            B: "'==' compares types, '===' compares values",
            C: "'==' assigns values, '===' compares values",
            D: "There is no difference"
          },
          correct_answer: "A",
          hint: "Think about how these operators handle type coercion.",
          explanation: "`==` allows type coercion while `===` does not, making `===` a stricter comparison.",
          type: "single"
        },
        {
          question: "Which JavaScript function is used to convert an object to a JSON string?",
          options: {
            A: "JSON.parse()",
            B: "JSON.stringify()",
            C: "Object.toJSON()",
            D: "Object.stringify()"
          },
          correct_answer: "B",
          hint: "This function is commonly used for serializing objects.",
          explanation: "`JSON.stringify()` converts a JavaScript object or value to a JSON string.",
          type: "single"
        },
        {
          question: "Which of the following is not a reserved word in JavaScript?",
          options: {
            A: "interface",
            B: "throws",
            C: "program",
            D: "short"
          },
          correct_answer: "C",
          hint: "Think about the keywords that are used or reserved for future use in JavaScript.",
          explanation: "`program` is not a reserved word in JavaScript, while the others are.",
          type: "single"
        },
        {
          question: "What will the following code output: `console.log(0.1 + 0.2 === 0.3);`?",
          options: {
            A: "true",
            B: "false",
            C: "undefined",
            D: "NaN"
          },
          correct_answer: "B",
          hint: "Consider how floating-point arithmetic works in JavaScript.",
          explanation: "Due to floating-point precision errors, `0.1 + 0.2` does not exactly equal `0.3`, so the expression returns `false`.",
          type: "single"
        },
        {
          question: "Which method can be used to safely access deeply nested properties in JavaScript?",
          options: {
            A: "Optional chaining",
            B: "Nullish coalescing",
            C: "Short-circuit evaluation",
            D: "Deep get"
          },
          correct_answer: "A",
          hint: "This feature was introduced in ES2020.",
          explanation: "Optional chaining (`?.`) allows you to safely access deeply nested properties without having to explicitly check for the existence of each level.",
          type: "single"
        },
    
        // Multiple correct answers (Multiple Choice)
        {
          question: "Which of the following are valid ways to define an asynchronous function in JavaScript? (Select all that apply)",
          options: {
            A: "async function myFunc() {}",
            B: "const myFunc = async () => {}",
            C: "function async myFunc() {}",
            D: "var myFunc = async function() {}"
          },
          correct_answer: ["A", "B", "D"],
          hint: "Think about the async keyword placement.",
          explanation: "The `async` keyword can be used with both function declarations and function expressions, but it must precede the function keyword or arrow function.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid ES6 features in JavaScript? (Select all that apply)",
          options: {
            A: "let and const",
            B: "Arrow functions",
            C: "Template literals",
            D: "Modules"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "ES6 introduced several new features in JavaScript.",
          explanation: "All listed features (`let`, `const`, arrow functions, template literals, and modules) were introduced in ES6.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid ways to declare variables in JavaScript? (Select all that apply)",
          options: {
            A: "let",
            B: "const",
            C: "var",
            D: "all of the above"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "JavaScript supports multiple variable declaration keywords.",
          explanation: "`let`, `const`, and `var` are all valid ways to declare variables in JavaScript.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid CSS units of measurement? (Select all that apply)",
          options: {
            A: "px",
            B: "em",
            C: "rem",
            D: "%"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "Consider both absolute and relative units.",
          explanation: "All listed units (`px`, `em`, `rem`, `%`) are valid CSS units of measurement.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid methods for array iteration in JavaScript? (Select all that apply)",
          options: {
            A: "forEach()",
            B: "map()",
            C: "filter()",
            D: "reduce()"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "These methods are commonly used for various array operations.",
          explanation: "All the listed methods (`forEach()`, `map()`, `filter()`, `reduce()`) are valid for array iteration in JavaScript.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid ways to handle exceptions in JavaScript? (Select all that apply)",
          options: {
            A: "try...catch",
            B: "throw",
            C: "Promise.catch()",
            D: "if...else"
          },
          correct_answer: ["A", "B", "C"],
          hint: "Consider both synchronous and asynchronous error handling.",
          explanation: "The `try...catch` block, `throw` statement, and `Promise.catch()` method are valid ways to handle exceptions in JavaScript.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid ways to declare a function in JavaScript? (Select all that apply)",
          options: {
            A: "function declaration",
            B: "function expression",
            C: "arrow function",
            D: "function statement"
          },
          correct_answer: ["A", "B", "C"],
          hint: "JavaScript supports multiple function declaration syntaxes.",
          explanation: "JavaScript supports function declarations, function expressions, and arrow functions, but there is no syntax called `function statement`.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid HTTP methods? (Select all that apply)",
          options: {
            A: "GET",
            B: "POST",
            C: "PUT",
            D: "DELETE"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "These methods are commonly used in RESTful APIs.",
          explanation: "All listed methods (`GET`, `POST`, `PUT`, `DELETE`) are valid HTTP methods.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid ways to convert a string to a number in JavaScript? (Select all that apply)",
          options: {
            A: "Number()",
            B: "parseInt()",
            C: "parseFloat()",
            D: "Math.floor()"
          },
          correct_answer: ["A", "B", "C"],
          hint: "Consider the standard methods for type conversion.",
          explanation: "`Number()`, `parseInt()`, and `parseFloat()` are valid methods for converting strings to numbers, while `Math.floor()` is used to round down numbers.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid ways to access object properties in JavaScript? (Select all that apply)",
          options: {
            A: "dot notation",
            B: "bracket notation",
            C: "Object.keys()",
            D: "Object.values()"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "Consider both direct access and utility methods.",
          explanation: "All listed methods (`dot notation`, `bracket notation`, `Object.keys()`, `Object.values()`) are valid for accessing object properties in JavaScript.",
          type: "multiple_correct"
        },
        {
          question: "Which of the following are valid JavaScript types? (Select all that apply)",
          options: {
            A: "undefined",
            B: "null",
            C: "symbol",
            D: "bigint"
          },
          correct_answer: ["A", "B", "C", "D"],
          hint: "These are primitive types introduced in different ECMAScript versions.",
          explanation: "`undefined`, `null`, `symbol`, and `bigint` are all valid primitive types in JavaScript.",
          type: "multiple_correct"
        }
      ]
  };
  
  export default questions;
  