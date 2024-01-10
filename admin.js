import { kafka } from './client.js'
async function init() {
    const admin = kafka.admin();
    console.log("Admin conecting");
    admin.connect();
    console.log("Admin connecting success...");
    console.log("creating topic [rider-updates]");

    await admin.createTopics({
        topics: [{ topic: "rider-updates", numPartitions: 2 }]
    });
    console.log("Topic created success [rider-updates]");

    console.log("Disconnecting admin");
    // await admin.disconnect();

}
init();