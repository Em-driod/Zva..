import React from 'react';  

const Tools = () => {  
  // Define the solutions data  
  const solutions = [  
    {  
      title: " Advices",  
      subtitle: "On any situation and anytime",  
      icon: "📊",  
      link: "#",  
    },  
    {  
      title: "Investment Insurance",  
      subtitle: "On any situation and anytime",  
      icon: "🛡️",  
      link: "#",  
    },  
    {  
      title: "Wealth Management",  
      subtitle: "On any situation and anytime",  
      icon: "💰",  
      link: "#",  
    },  
  ];  

  // Styles  
  const containerStyle: React.CSSProperties = {  
    backgroundColor: 'white',  
    color: 'black',  
    padding: '0px',  
    textAlign: 'center',
    top: '0px',  
  };  

  const headingStyle: React.CSSProperties = {  
    margin: '20px 0',  
  };  

  const solutionContainerStyle: React.CSSProperties = {  
    display: 'flex',  
    justifyContent: 'space-around',  
    backgroundColor: '#e0e0e0', // Light gray for contrast  
    padding: '40px 20px',  
    flexWrap: 'wrap',  
  };  

  const solutionCardStyle: React.CSSProperties = {  
    flex: '1',  
    maxWidth: '250px',  
    backgroundColor: '#f5f5f5',  
    padding: '20px',  
    borderRadius: '8px',  
    textAlign: 'center',  
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',  
    margin: '10px',  
  };  

  const iconStyle: React.CSSProperties = {  
    fontSize: '40px',  
    marginBottom: '10px',  
  };  

  const buttonStyle: React.CSSProperties = {  
    marginTop: '15px',  
    padding: '8px 16px',  
    backgroundColor: 'red',  
    color: '#fff',  
    border: 'none',  
    borderRadius: '4px',  
    cursor: 'pointer',  
    textDecoration: 'none',  
  };  

  return (  
    <div style={containerStyle}>  
      {/* Solutions Section */}  
      <h2 style={headingStyle}>Our Solutions are best</h2>  
      <p style={headingStyle}>Build, Manage, and Ascend </p>  
      <div style={solutionContainerStyle}>  
        {solutions.map((sol, index) => (  
          <div key={index} style={solutionCardStyle}>  
            <div style={iconStyle}>{sol.icon}</div>  
            <h4 style={{ marginBottom: '10px' }}>{sol.title}</h4>  
            <p style={{ fontSize: '14px' }}>{sol.subtitle}</p>  
            <a href={sol.link} style={buttonStyle}>  
              Learn more  
            </a>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Tools;  