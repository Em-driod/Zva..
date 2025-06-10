
import HeroSection from "../components/HeroSection"
import Details from "../components/details"
import TogglePlans from "../components/plansCard"
import Tools from "../components/tools"
const LandingPage = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
        <HeroSection />
        <Details />
        <TogglePlans />
        <Tools />
    </div>
  )
}

export default LandingPage