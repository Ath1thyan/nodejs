import { useState } from 'react';

function PaymentForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSendPaymentRequest = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/sendPaymentRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send payment request');
      }

      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendPaymentRequest} disabled={loading}>
        {loading ? 'Sending...' : 'Send Payment Request'}
      </button>
      {error && <p>Error: {error}</p>}
      {success && <p>Payment request sent successfully!</p>}
    </div>
  );
}

export default PaymentForm;
