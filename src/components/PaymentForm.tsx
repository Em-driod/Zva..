import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state;

  // Dynamically load Paystack script
  useEffect(() => {
    if (!plan) {
      navigate('/');
      return;
    }

    if (!document.querySelector('#paystack-script')) {
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.id = 'paystack-script';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [plan, navigate]);

  const handlePayment = () => {
    // @ts-ignore
    const PaystackPop = window.PaystackPop;

    if (!PaystackPop) {
      alert('⚠️ Paystack is not ready. Please wait a moment and try again.');
      return;
    }

    const handler = PaystackPop.setup({
      key: 'pk_test_xxxx', // Replace with your public key
      email: 'customer@example.com', // Dynamic user email
      amount: plan.price * 100,
      currency: 'NGN',
      ref: `URBANTORQUE-${Date.now()}`,
      metadata: {
        custom_fields: [
          {
            display_name: 'Subscription Plan',
            variable_name: 'plan',
            value: plan.name,
          },
        ],
      },
      callback: (response: any) => {
        alert(`✅ Payment successful! Ref: ${response.reference}`);
        navigate('/success');
      },
      onClose: () => {
        alert('❌ Payment cancelled.');
      },
    });

    handler.openIframe(); // This keeps you on the same page
  };

  if (!plan) return null;

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      overflow: 'hidden',
      backgroundColor: '#f7f7f7',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: '500px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          Confirm Your <span style={{ color: '#e63946' }}>{plan.name}</span> Plan
        </h1>
        <p style={{ fontSize: '18px', color: '#333', marginTop: '10px' }}>{plan.displayPrice}</p>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>{plan.users}</p>

        <ul style={{
          listStyleType: 'disc',
          textAlign: 'left',
          marginTop: '15px',
          paddingLeft: '20px',
          color: '#555'
        }}>
          {plan.features.map((feature: string, idx: number) => (
            <li key={idx} style={{ marginBottom: '8px', fontSize: '14px' }}>{feature}</li>
          ))}
        </ul>

        <button
          onClick={handlePayment}
          style={{
            marginTop: '25px',
            backgroundColor: '#e63946',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d62828'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e63946'}
        >
          Pay ₦{plan.price}
        </button>
      </div>
    </div>
  );
};

export default Payment;
