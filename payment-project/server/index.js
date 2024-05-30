const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3001;

const accountSid = 'AC9e3dc7435cf43224bcccbbbf0ddd7127';
const authToken = '857bc0a464278556fcc01c9f32ca4215';
const client = new twilio(accountSid, authToken);

app.use(bodyParser.json());

app.post('/sendPaymentRequest', (req, res) => {
  const { phoneNumber, message } = req.body;

  client.messages
    .create({
      body: message,
      from: '9360638952',
      to: phoneNumber
    })
    .then(message => {
      console.log(`Payment request sent to ${phoneNumber}`);
      res.status(200).json({ success: true, message: 'Payment request sent successfully' });
    })
    .catch(error => {
      console.error('Error sending payment request:', error);
      res.status(500).json({ success: false, error: 'Failed to send payment request' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
