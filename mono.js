// 1
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.json());

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).send('Email and password are required.');
//   }

//   if (email === 'alice@example.com' && password === 'secret') {
//     return res.status(200).send('Login successful!');
//   } else {
//     return res.status(401).send('Unauthorized.');
//   }
// });

// app.listen(8080, () => {
//   console.log('Server started on port 8080');
// });


// 2
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.json());

// let accounts = [];

// app.post('/create-account', (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).send('Email and password are required.');
//   }

//   if (accounts.find(account => account.email === email)) {
//     return res.status(409).send('An account with that email already exists.');
//   }

//   accounts.push({ email, password });
//   return res.status(201).send('Account created successfully!');
// });

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).send('Email and password are required.');
//   }

//   const account = accounts.find(account => account.email === email && account.password === password);

//   if (account) {
//     return res.status(200).send('Login successful!');
//   } else {
//     return res.status(401).send('Unauthorized.');
//   }
// });

// app.listen(8080, () => {
//   console.log('Server started on port 8080');
// });


// 3

// const express = require('express');
// const app = express();
// app.use(express.json());

// let accounts = [];

// app.post('/create-account', (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   if (!email || !password) {
//     return res.status(400).send('Email and password are required.');
//   }

//   const existingAccount = accounts.find(account => account.email === email);
//   if (existingAccount) {
//     return res.status(409).send('An account with this email already exists.');
//   }

//   const newAccount = { email, password };
//   accounts.push(newAccount);

//   return res.status(200).send('Account created successfully.');
// });

// app.post('/login', (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   if (!email || !password) {
//     return res.status(400).send('Email and password are required.');
//   }

//   const existingAccount = accounts.find(account => account.email === email);
//   if (!existingAccount || existingAccount.password !== password) {
//     return res.status(401).send('Invalid email or password.');
//   }

//   return res.status(200).send('Login successful.');
// });

// app.post('/create-accounts', (req, res) => {
//   const accountsArray = req.body;

//   if (!Array.isArray(accountsArray)) {
//     return res.status(400).send('An array of accounts is required.');
//   }

//   for (const account of accountsArray) {
//     const email = account.email;
//     const password = account.password;

//     if (!email || !password) {
//       return res.status(400).send('Email and password are required.');
//     }

//     const existingAccount = accounts.find(account => account.email === email);
//     if (existingAccount) {
//       return res.status(409).send('An account with this email already exists.');
//     }

//     const newAccount = { email, password };
//     accounts.push(newAccount);
//   }

//   return res.status(200).send('Accounts created successfully.');
// });

// app.listen(8080, () => console.log('Server listening on port 8080'));


// 4
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// Set up body-parser middleware to handle form data
// app.use(bodyParser.urlencoded({ extended: false }));

// Store submitted messages in an array
// let messages = [];

// Render the form on GET request to root URL
// app.get('/', (req, res) => {
//   const form = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <meta charset="utf-8">
//         <title>Meddelandeformulär</title>
//       </head>
//       <body>
//         <h1>Posta ett meddelande</h1>
//         <form action="/" method="post">
//           <label>
//             Namn:
//             <input name="name" placeholder="Namn" value="">
//           </label>
//           <label>
//             Text:
//             <input name="text" placeholder="Text" value="">
//           </label>
//           <input type="submit" value="Skicka">
//         </form>
//       </body>
//     </html>
//   `;
//   res.send(form);
// });

// Add submitted message to messages array and render messages on POST request to root URL
// app.post('/', (req, res) => {
//   const name = req.body.name;
//   const text = req.body.text;
//   if (name && text) {
//     messages.push({ name, text });
//   }
//   const messageList = messages.map(message => `<dt>${message.name}</dt><dd>${message.text}</dd>`).join('');
//   const page = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <meta charset="utf-8">
//         <title>Meddelanden</title>
//       </head>
//       <body>
//         <dl>
//           ${messageList}
//         </dl>
//         <nav><a href="/">Nytt meddelande</a></nav>
//       </body>
//     </html>
//   `;
//   res.send(page);
// });

// Start the server
// app.listen(8080, () => {
//   console.log('Server started on port 8080');
// });
