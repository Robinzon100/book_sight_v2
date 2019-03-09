// const fs = require('fs');

// const requestHandler = (req, res) =>{
//     const url = req.url;
//     const method = req.method;


//     if (url === "/") {
//         res.setHeader("Content-Type", "text/html");
//         res.write("<html>");
//         res.write("<header><title>listening</title></header>");
//         res.write("<body> <form action = '/message' method='POST' > <input type='text' name='message' ></input><button type='submit' >send message</button></form> </body>")
//         res.write("</html>");
//         return res.end();
//         // res.end(); // after this we cant send a responce anymore     
//     }

//     if (url === "/message" && method === "POST") {
//         const body = [];
//         req.on('data', (chunk) =>{
//             body.push(chunk);
//             // console.log(chunk);
//             // console.log(body);
//         });
//         return req.on('end', () =>{
//             parsedBody = Buffer.concat(body).toString(); 
//             const message = parsedBody.split('=')[1];

//             console.log(parsedBody);
//             console.log(message);
            
//             fs.writeFile("message.txt", message, err =>{ // err is a callback if something goes wrong
//                 res.writeHead(302, {Location:"/"});
//                 return res.end(); // IF WE PUT THIS IN THE "req.on(end)" function the code beneath will execute
//                                 //becaouse nodejs is searching for the "res.end()" and and registers this 2 functions
//                                 //there for , if we put this 2 lines of code in the 'end' and give a RETURN it will execute FIRST

//             });                     // writefilesync blocks the code execution untillthe file is created
//                                     // this is good if we use very large files but in case of small things
//                                     // writefile is better, because it doesnt stop the code
//         });
//         // fs.writeFileSync("message.txt", "RACXA");
//         res.setHeader("Content-Type", "text/html");
//         res.write("<html>");
//         res.write("<header><title>listening</title></header>");
//         res.write("<body><h1>/message page</h1></form> </body>");
//         res.write("</html>");
//         return res.end(); 
//     }
// }

// // module.exports = requestHandler; // you can export multiple objects or functions by using "{}"

// // module.exports = {
// //     handler : requestHandler
// // }

// exports.handler = requestHandler;