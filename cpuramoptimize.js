const http = require('http');
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  // Count the machine's CPUs
  const numCPUs = os.cpus().length;

  // Fork workers for each CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for dying workers and replace them
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  // Worker code
  const server = http.createServer((req, res) => {
    // Simulate CPU intensive task
    // This could be replaced with your actual application logic
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.sqrt(i);
    }
    res.writeHead(200);
    res.end('Hello World\n');
  });

  // Start server
  server.listen(3000, () => {
    console.log(`Worker ${process.pid} started`);
  });
}
