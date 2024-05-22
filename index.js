import cluster from "cluster";
import os from "os";

export function clusterify(app, port) {
  // Check if the current process is primary or a worker
  if (cluster.isPrimary) {
    const numCPUs = os.cpus().length;

    // Fork workers equal to the number of CPU cores
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    // Handle cluster events
    cluster.on("exit", (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
      // Restarting the worker
      cluster.fork();
    });
  } else {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
      console.log(`Process id: ${process.pid}`);
    });
  }
}
