import React from "react";
import './category-preview.styles.scss';
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
    console.log(products);
    console.log(title);
  return (
    <div className="category-preview-container">
      <h2 className="title">
        <span>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products.filter((product, index) => index < 4).map((product)=>{
            return(
                <ProductCard key={product.id} product={product}/>
            );
        })}
      </div>
    </div>
  );
};

export default CategoryPreview;
