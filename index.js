const jsonServer = require('json-server');
const cors = require('cors');  // To enable CORS
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your db.json file
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000

// Enable CORS for cross-origin requests
server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running on ' + port);
});
