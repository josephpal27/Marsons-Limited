import ContactBanner from "../components/ContactBanner"
import ContactDetails from "../components/ContactDetails"
import ContactMap from "../components/ContactMap"
import Footer from "../components/Footer"
import MyNavbar from "../components/Navbar"

const Contact = () => {
    return (
        <>
            <MyNavbar />
            <ContactBanner />
            <ContactDetails />
            <ContactMap />
            <Footer />
        </>
    )
}

export default Contact
