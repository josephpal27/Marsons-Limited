import AboutBanner from "../components/about/AboutBanner"
import AboutWhatWeDo from "../components/about/AboutWhatWeDo"
import Footer from "../components/Footer"
import Highlights from "../components/about/Highlights"
import MyNavbar from "../components/Navbar"
import OurClients from "../components/about/OurClients"
// import OurFounder from "../components/about/OurFounder"
import OurJourney from "../components/about/OurJourney"
import VisionMission from "../components/about/VisionMission"

const About = () => {
    return (
        <>
            <MyNavbar />
            <AboutBanner />
            <AboutWhatWeDo />
            <Highlights />
            {/* <OurFounder /> */}
            <VisionMission />
            <OurJourney />
            <OurClients />
            <Footer />
        </>
    )
}

export default About
