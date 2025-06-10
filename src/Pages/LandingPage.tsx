import { useState, useEffect } from 'react';
import HeroSection from "../components/HeroSection";
import Details from "../components/details";
import TogglePlans from "../components/plansCard";
import Tools from "../components/tools";
import Loading from '../components/loading';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // You can replace this with actual data loading
    const loadData = async () => {
      // Simulate API calls or data loading
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <HeroSection />
      <Details />
      <TogglePlans />
      <Tools />
    </div>
  );
}

export default LandingPage;