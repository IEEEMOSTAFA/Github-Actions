// const express = require('express');
// const app = express();

// const port = 3000
// app.get('/', (req, res) =>{
//     res.send('Hello World1');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })







const http = require('http');
const app = require('./app'); // Adjust the path to your app file
const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is running on port 3000');

});
