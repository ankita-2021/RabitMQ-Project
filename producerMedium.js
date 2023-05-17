// method-1
const amqp = require("amqplib/callback_api");
function producerMedium(message) {
  amqp.connect(`amqp://localhost`, (err, connection) => {
    if (err) {
      throw err;
    }
    connection.createChannel((err, channel) => {
      if (err) {
        throw err;
      }
      let queueName = "medium_queue";

      channel.assertQueue(queueName, {
        durable: false,
      });

      channel.sendToQueue(queueName, Buffer.from(message));
      console.log(`data: ${message}`);

      setTimeout(() => {
        connection.close();
      }, 1000);
    });
  });
}
module.exports = producerMedium;
