import MyNavbar from "../components/Navbar"
import Facility from "../components/products/Facility"
import ProductsBanner from "../components/products/ProductsBanner"
import RelatedProducts from "../components/products/RelatedProducts"
import Transformers from "../components/products/Transformers"

const ProductDetails = () => {
    return (
        <>
            <MyNavbar />
            <ProductsBanner />
            <Transformers />
            <Facility />
            <RelatedProducts />
        </>
    )
}

export default ProductDetails