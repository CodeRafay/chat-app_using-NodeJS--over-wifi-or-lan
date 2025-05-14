const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

// Store messages in memory (in a real application, you'd want to use a database)
let messages = [];

// Create the HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Set CORS headers for all responses
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Handle message submission (POST request)
    if (req.method === 'POST' && parsedUrl.pathname === '/send') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const formData = querystring.parse(body);
                const message = formData.message?.trim();

                if (message) {
                    // Add timestamp to message
                    const messageWithTimestamp = {
                        text: message,
                        timestamp: new Date().toISOString(),
                        id: Date.now() // Unique ID for each message
                    };

                    messages.push(messageWithTimestamp);

                    // Log message to file
                    const logMessage = `[${messageWithTimestamp.timestamp}] Message: ${message}\n`;
                    fs.appendFile('chat-log.txt', logMessage, (err) => {
                        if (err) console.error('Error writing to log file:', err);
                    });

                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, message: messageWithTimestamp }));
                } else {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, error: 'Message cannot be empty' }));
                }
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'Internal server error' }));
            }
        });
    }
    // Handle fetching messages (GET request)
    else if (req.method === 'GET' && parsedUrl.pathname === '/messages') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(messages));
    }
    // Serve the homepage
    else if (parsedUrl.pathname === '/') {
        try {
            const responseHtml = fs.readFileSync('index.html', 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(responseHtml);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1><p>Error loading the page. Please try again later.</p>');
        }
    }
    // Handle unknown routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist. Please go back to <a href="/">the homepage</a>.</p>');
    }
});

// Error handling for the server
server.on('error', (error) => {
    console.error('Server error:', error);
});

// Start the server
const PORT = process.env.PORT || 3277;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
