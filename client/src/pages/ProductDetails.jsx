import MyNavbar from "../components/Navbar"
import Facility from "../components/products/Facility"
import GetInTouch from "../components/products/GetInTouch"
import ProductsBanner from "../components/products/ProductsBanner"
import QualityControl from "../components/products/QualityControl"
import RelatedProducts from "../components/products/RelatedProducts"
import Transformers from "../components/products/Transformers"
// import TransformersGallery from "../components/products/TransformersGallery"
import Footer from "../components/Footer";

const ProductDetails = () => {
    return (
        <>
            <MyNavbar />
            <ProductsBanner />
            <Transformers />
            {/* <TransformersGallery /> */}
            <Facility />
            <RelatedProducts />
            <QualityControl />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default ProductDetails