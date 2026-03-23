import ContactBanner from "../components/contact/ContactBanner"
import ContactDetails from "../components/contact/ContactDetails"
import ContactMap from "../components/contact/ContactMap"
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
