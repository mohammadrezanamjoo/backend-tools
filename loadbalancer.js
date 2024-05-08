const express = require('express');
const httpProxy = require('http-proxy');

const servers = [
    { host: 'localhost', port: 3001 },
    { host: 'localhost', port: 3002 },
];

const proxy = httpProxy.createProxyServer({});

const app = express();


app.all('/*', (req, res) => {
    const selectedServer = servers[Math.floor(Math.random() * servers.length)];

    // Proxy the request to the selected server
    proxy.web(req, res, {
        target: {
            host: selectedServer.host,
            port: selectedServer.port
        }
    });
});

// Start the Express server
const port = 3000;
app.listen(port, () => {
    console.log(`Load balancer is listening on port ${port}`);
});
