import AboutBanner from "../components/AboutBanner"
import AboutWhatWeDo from "../components/AboutWhatWeDo"
import Highlights from "../components/Highlights"
import MyNavbar from "../components/Navbar"
import OurClients from "../components/OurClients"
import OurFounder from "../components/OurFounder"
import OurJourney from "../components/OurJourney"
import VisionMission from "../components/VisionMission"

const About = () => {
    return (
        <>
            <MyNavbar />
            <AboutBanner />
            <AboutWhatWeDo />
            <Highlights />
            <OurFounder />
            <VisionMission />
            <OurJourney />
            <OurClients />
        </>
    )
}

export default About
