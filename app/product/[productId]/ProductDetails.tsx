"use client";

import { Rating } from "@mui/material";

interface ProductDetailsprops {
  product: any;
}

export type CartProduct = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: selectedImgType,
    quantity: number,
    price: number
}

export type selectedImgType = {
    color: string,
    colorCod: string,
    image: string,
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsprops> = ({ product }) => {
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-800">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORIA:</span> {product.category}
        </div>
        <div>
          <span className="font-semibold">FABRICANTE:</span> {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "Em estoque!" : "Não temos em estoque!"}
        </div>
        <Horizontal />
        <div>cor</div>
        <Horizontal />
        <div>quantidade</div>
        <Horizontal />
        <div>adicionar ao carrinho</div>
      </div>
    </div>
  );
};

export default ProductDetails;
