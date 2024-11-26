import ProductDetail from "@/components/detail/ProductDetail";
import ProductReviews from "@/components/detail/ProductReviews";
import RelatedProducts from "@/components/detail/RelatedProduct";

const ProductDetailPage = () => {
  return (
    <div className='bg-[#EEECFB]'>
      <ProductDetail />
      <ProductReviews />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetailPage;
