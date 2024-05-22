# node-cluster-module

An npm package designed to help you create clusters of Node.js applications. It enables your Node.js applications to handle concurrent requests more efficiently by utilizing the cluster module built into Node.js.

## Features

- Efficient Request Handling: Distribute incoming requests among multiple workers to handle them concurrently.
- Improved Performance: Utilize all available CPU cores effectively, leading to better performance and scalability.
- Easy Integration: Simple API for integrating clustering into your Node.js applications with minimal effort.
- Fault Tolerance: Automatically restart workers in case of crashes, ensuring high availability.

## Installation

Install node-cluster-module with npm

```bash
  npm install node-cluster-module
```

## Usage

Make a js file in the root folder e.g. (cluster.js)

```javascript
const clusterify = require("node-cluster-module");
```

Replace this code with the app.listen() code snippet:

```javascript
clusterify(app, 3000);
```

clusterify(app,port_number) : Your express app and port number.

## Example

```javascript
const express = require("express");
const clusterify = require("node-cluster-module");
const port = 3000;
const app = express();

app.get("/test", (req, res) => {
  res.send("This is a test API");
});

clusterify(app, port);
```

## Feedback

If you have any feedback, you can reach out to me on dwijjoshi02@gmail.com
