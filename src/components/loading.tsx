import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', // Changed to column to stack elements
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
      color: 'white' // Added for better visibility of text if any
    }}>
      {/* Bouncing Image */}
      <motion.img
        src="/logo 2.png" // Replace with the actual path to your image
        alt="Loading"
        style={{
          width: '200px', // Adjust size as needed
          height: '180px', // Adjust size as needed
          marginBottom: '20px' // Space between image and spinner
        }}
        animate={{ y: ["0%", "-20%", "0%"] }} // Bounce animation
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />

      {/* Spinner */}
      <div style={{
        border: '4px solid rgba(240, 236, 236, 0.1)',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        borderLeftColor:'red', // Changed to lime for consistency with previous design
        animation: 'spin 1s linear infinite'
      }}></div>

      {/* Text (Optional) */}
      <p style={{ marginTop: '20px', fontSize: '1.2em', color: 'red' }}>Loading ZVA ENTERTAIN...</p>

      {/* Keyframe styles remain the same for the spinner */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;