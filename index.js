import cluster from "cluster";
import os from "os";

export function nodeCluster(fileName) {
  const cpuCount = os.cpus().length;
  if (cluster.isPrimary) {
    masterProcess();
  } else {
  }

  function masterProcess() {
    if (fileName) {
      cluster.setupPrimary({
        exec: `${fileName}`,
      });
    }
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < cpuCount; i++) {
      cluster.fork();
    }
    cluster.on("exit", () => {
      console.log("One worker exited");
      cluster.fork();
    });
  }
}

nodeCluster();
