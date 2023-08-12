import { ServiceOffer } from "../components/ServiceOffer"
import { LogoGrid } from "../components/LogoGird"
import { Terminal } from "../components/Terminal"

export const Home = () => {
    return(
        <main>
            <ServiceOffer/>
            <LogoGrid/>
            <Terminal/>
        </main>
        
    )
}