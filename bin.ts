import app from ".";
import os from "os";
import cluster from "cluster";
const numberOfCPUS = os.cpus().length;

if(cluster.isPrimary){
    console.log(`Master worker is running with pid ${process.pid}`)
    for(let i = 0; i < numberOfCPUS; i++){
        cluster.fork();
    }
} else{
    app.listen(3000, () => {
        console.log(`Woker with pid : ${process.pid}`)
        // console.log(`App is listening on http://localhost:3000`)
    })
}