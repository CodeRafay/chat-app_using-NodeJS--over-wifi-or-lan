
# Real-Time Chat Application

A lightweight, real-time chat application built with Node.js and vanilla JavaScript for LAN or WIFI. This project demonstrates the implementation of a simple but functional chat system with features like message persistence, real-time updates, and a clean user interface.

## 🌟 Features

* Real-time message updates
* Message persistence with timestamps
* Clean and responsive user interface
* Error handling and user feedback
* Automatic message polling
* Message logging system
* Cross-Origin Resource Sharing (CORS) support

## 🚀 Getting Started

### Prerequisites

* Node.js (v12.0.0 or higher)
* npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CodeRafay/real-time-chat-app.git
   cd real-time-chat
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3277
   ```

## 🛠️ Configuration

The server can be configured using environment variables:

* `PORT`: The port number the server will listen on (default: 3277)
* `HOST`: The host address (default: '0.0.0.0')

Example:

```bash
PORT=3000 HOST=localhost node server.js
```

## 🌐 Using on LAN or Wi-Fi

To use this chat application within a **local area network (LAN)** or **Wi-Fi network**, follow these steps:

### 🔌 Step-by-Step Guide

1. **Run the server on one machine (host):**

   ```bash
   node server.js
   ```

   By default, the server listens on port `3277`. You can change it using:

   ```bash
   PORT=3277 HOST=0.0.0.0 node server.js
   ```

2. **Find the IP address of the host machine:**

   On **Windows**, run:

   ```cmd
   ipconfig
   ```

   Look for the **IPv4 Address** under your active network adapter (e.g., `192.168.1.10`).

   On **Linux/macOS**, run:

   ```bash
   ifconfig
   ```

   or

   ```bash
   ip a
   ```

3. **Access the chat room from other devices on the same network:**

   Open a browser on any other device and enter:

   ```
   http://<HOST_IP>:3277
   ```

   For example:

   ```
   http://192.168.1.10:3277
   ```

   All connected users will now be able to send and receive real-time messages across devices on the same network.

### ✅ Requirements

* All devices (host and clients) must be connected to the **same LAN or Wi-Fi**.
* Firewall settings should allow Node.js to accept incoming connections on the specified port (`3277`).

## 📁 Project Structure

```
real-time-chat/
├── server.js          # Main server file
├── index.html         # Frontend interface
├── chat-log.txt       # Message log file
└── README.md          # Project documentation
```

## 🔧 Technical Details

### Server Features

* HTTP server implementation using Node.js
* Message storage in memory (with logging to file)
* RESTful API endpoints for message handling
* CORS support for cross-origin requests
* Error handling and logging

### Frontend Features

* Real-time message updates using polling
* Responsive design
* Error handling and user feedback
* Timestamp display for messages
* Auto-scrolling message container

## 🔒 Security Considerations

* Input validation and sanitization
* CORS configuration
* Error handling and logging
* No sensitive data storage

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

* Rafay Adeel

## 📞 Support

If you encounter any issues or have questions, please open an issue in the GitHub repository.

---
