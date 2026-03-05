import Footer from "../components/Footer"
import InvestorAccordion from "../components/InvestorAccordion"
import InvestorCornerBanner from "../components/InvestorCornerBanner"
import MyNavbar from "../components/Navbar"
import { bannerContent, financialsData } from "../data/investor-corner/financialsData"

const Financials = () => {
    return (
        <>
            <MyNavbar />
            <InvestorCornerBanner title={bannerContent.title} background={bannerContent.image} />
            <InvestorAccordion />
            <Footer />
        </>
    )
}

export default Financials
