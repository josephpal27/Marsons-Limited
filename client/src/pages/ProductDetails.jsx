import { useParams } from 'react-router-dom';
import { productsData } from './../data/productsData';

import MyNavbar from "../components/Navbar"
import Facility from "../components/products/Facility"
import GetInTouch from "../components/products/GetInTouch"
import ProductsBanner from "../components/products/ProductsBanner"
import QualityControl from "../components/products/QualityControl"
import RelatedProducts from "../components/products/RelatedProducts"
import Transformers from "../components/products/Transformers"
import Footer from "../components/Footer";
import ComingSoon from './ComingSoon';

const ProductDetails = () => {

    const { slug } = useParams();
    const product = productsData.find(item => item.slug === slug);
    if (!product) {
        return <ComingSoon />;
    }

    return (
        <>
            <MyNavbar />
            <ProductsBanner title={product?.title} />
            <Transformers data={product} />
            <Facility />
            <RelatedProducts />
            <QualityControl />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default ProductDetails