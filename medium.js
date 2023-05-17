// method-1
const amqp = require("amqplib/callback_api");

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
    channel.consume(queueName,(msg)=>{
      console.log(`received: ${msg.content.toString()}`)
        // console.log(msg)
    })
  });
});