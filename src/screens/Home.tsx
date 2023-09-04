import { ServiceOffer } from "../components/ServiceOffer"
import { LogoGrid } from "../components/LogoGird"
import Terminal from "../components/Terminal"
import { HeroSection } from "../components/Hero"
import { AboutSection } from "../components/About"

export const Home = () => {
    return(
        <main>
            <HeroSection />
            <AboutSection/>
            <ServiceOffer/>
            <LogoGrid/>
            <Terminal/>
        </main>
        
    )
}