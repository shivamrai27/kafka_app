import { Kafka } from 'kafkajs';
export const kafka = new Kafka({
    clientId: 'kafka-app',
    brokers: ['192.168.1.13:9092']
});