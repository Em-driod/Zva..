// TogglePlans.tsx
// TogglePlans.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TogglePlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<'Basic' | 'Pro' | 'Premium'>('Basic');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const plans = [
    {
      name: 'Basic',
      price: 500,
      displayPrice: '₦500',
      users: '1 User • 1 Month Access',
      features: [
        'Access to All Films',
        'Access to All Videos',
        'Access to All Clinical Information',
        'Single User License',
        'Provided by ZVA Entertainment',
      ],
    },
    {
      name: 'Pro',
      price: 1300,
      displayPrice: '₦1300',
      users: '3 Users • 3 Months Access',
      features: [
        'Access to All Films',
        'Access to All Videos',
        'Access to All Clinical Information',
        'Three User License',
        'Provided by ZVA Entertainment',
      ],
    },
    {
      name: 'Premium',
      price: 4500,
      displayPrice: '₦4500',
      users: '7 Users • 9 Months Access',
      features: [
        'Access to All Films',
        'Access to All Videos',
        'Access to All Clinical Information',
        'Seven User License',
        'Provided by ZVA Entertainment',
      ],
    },
  ];

  const handleSubscribe = () => {
    const selected = plans.find(p => p.name === selectedPlan);
    navigate('/payment', { state: selected });
  };

  const handleNavigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', width: '95vw', padding: isMobile ? '20px 10px' : '40px 20px', color: '#000', marginTop: '60px', margin: '60px auto 0 auto', borderRadius: '15px', boxShadow: '0px 10px 30px rgba(0,0,0,0.08)' }}>
      {/* Toggle Switch */}
      <div style={{
        background: '#f1f1f1',
        borderRadius: '9999px',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        maxWidth: '100%',
        width: isMobile ? '100%' : '400px',
        margin: '0 auto 30px',
        boxShadow: '0px 10px 15px rgba(0,0,0,0.1)',
        cursor: 'pointer',
      }}>
        <div style={{
          position: 'absolute',
          top: '5px',
          left:
            selectedPlan === 'Basic' ? '5px' :
            selectedPlan === 'Pro' ? 'calc(33.333% + 5px)' :
            'calc(66.666% + 5px)',
          width: 'calc(33.333% - 10px)',
          height: 'calc(100% - 10px)',
          backgroundColor: 'red',
          borderRadius: '9999px',
          transition: 'all 0.3s ease',
        }} />
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name as 'Basic' | 'Pro' | 'Premium')}
            style={{
              flex: 1,
              textAlign: 'center',
              zIndex: 2,
              color: selectedPlan === plan.name ? '#fff' : '#000',
              fontWeight: '600',
              lineHeight: '40px',
              fontSize: isMobile ? '12px' : '14px',
              userSelect: 'none',
            }}
          >
            {plan.name}
          </div>
        ))}
      </div>

      {/* Pricing Cards */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        {plans.map((plan) => {
          const isActive = selectedPlan === plan.name;
          return (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name as 'Basic' | 'Pro' | 'Premium')}
              style={{
                backgroundColor: isActive ? 'red' : '#fff',
                borderRadius: '15px',
                border: `2px solid ${isActive ? '#ff0033' : '#eee'}`, // Lighter border when not active
                padding: isMobile ? '20px 15px' : '30px 20px',
                width: '100%',
                maxWidth: isMobile ? '100%' : '300px',
                textAlign: 'center',
                boxShadow: '10px 10px 20px rgba(0,0,0,0.05)', // Softer shadow
                color: isActive ? '#fff' : '#000',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <h2 style={{ fontSize: isMobile ? '16px' : '20px', marginBottom: '10px' }}>
                {plan.name} Plan
              </h2>
              <h1 style={{ fontSize: isMobile ? '24px' : '32px', margin: '10px 0' }}>
                {plan.displayPrice}
              </h1>
              <p style={{
                marginBottom: '20px',
                fontSize: isMobile ? '12px' : '14px',
                color: isActive ? '#f5f5f5' : '#555',
              }}>
                {plan.users}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{
                    marginBottom: '10px',
                    color: isActive ? '#fff' : '#000',
                    fontSize: isMobile ? '12px' : '14px',
                  }}>
                    {feature}
                  </li>
                ))}
              </ul>
              {isActive && (
                <button
                  onClick={handleSubscribe}
                  style={{
                    backgroundColor: '#fff',
                    color: 'red',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: isMobile ? '8px 16px' : '10px 20px',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '12px' : '14px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 5px 15px rgba(255,0,0,0.2)', // Subtle shadow for button
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
                >
                  SUBSCRIBE
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Added a Contact Us Link/Button */}
      <div style={{ textAlign: 'center', marginTop: '40px', paddingBottom: '20px' }}>
        <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#555', marginBottom: '15px' }}>
          Have questions before subscribing?
        </p>
        <button
          onClick={handleNavigateToContact}
          style={{
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: isMobile ? '10px 20px' : '12px 25px',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#000')}
        >
          Contact Our Team
        </button>
      </div>
    </div>
  );
};

export default TogglePlans;