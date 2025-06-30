const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// ✅ Allow all CORS requests
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // allow all domains
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
