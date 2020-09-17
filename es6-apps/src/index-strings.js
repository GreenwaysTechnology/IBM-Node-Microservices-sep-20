//how to declare variables.
//strings
//strings can be encapuslated in three ways -single,double,backtick

let firstName='Subramanian';
let lastName="Murugan";
let city=`Coimbatore`;
console.log("Name" + firstName + lastName + city);
console.log("Name" , firstName , lastName , city);
//ES 6 : ${} -string interpolatation.
console.log(`Name ${firstName}  ${lastName}  ${city}`);
//use case of back tick : multiline string literal
let title ='IBM'
let document=`
        <html>
            <head>
                <title>
                      ${title}
                </title>
            </head>
            <body>
            </body>
        </html>
`
console.log(document);