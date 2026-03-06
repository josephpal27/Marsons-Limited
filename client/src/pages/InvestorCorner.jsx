import { useParams } from "react-router-dom";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import InvestorAccordion from "../components/InvestorAccordion";
import InvestorCornerBanner from "../components/InvestorCornerBanner";
import { investorCornerData } from "../data/investorCornerData";

const InvestorCorner = () => {

    const { slug } = useParams();

    const pageData = investorCornerData[slug];

    if (!pageData) {
        return <span>Page Not Found</span>;
    }

    return (
        <>
            <MyNavbar />
            <InvestorCornerBanner
                title={pageData.banner.title}
                background={pageData.banner.image}
            />
            <InvestorAccordion
                accordionData={pageData.accordion}
            />
            <Footer />
        </>
    )
}

export default InvestorCorner;
