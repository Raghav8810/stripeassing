import { PaymentRequestButtonElement } from '@stripe/react-stripe-js';

function CheckOut() {
  return (
    <div>
      <PaymentRequestButtonElement
        options={{
          paymentRequest: {
            googlePay: true,
            applePay: false, // Set to false if not supported
            ...otherPaymentRequestOptions,
          },
        }}
      />
    </div>
  );
}

export default CheckOut;
