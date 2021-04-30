import React from "react";
import "./0px-599px.scss";
import "./600px-1024px.scss";
import "./1025px-1920px.scss";
import {cssVariables} from "./types";
import useScrollbarSize from "react-scrollbar-size";
import fiveStars from '../../assets/images/fiveStars.png';

const ProductCard = () => {

  //this useScrollBarSize is a costum hook to get the browswer scroll bar width
  // this is necessary due to give the individual product card the right width to fit in its parent container
  const {width} = useScrollbarSize();
  const bigProportion:number = 25.006 * width / 100
  const mediumProportion:number = 32.421 * width / 100
  const smallProportion:number = 49.033 * width / 100

  const bigImage:number = 19.920 * width / 100
  const mediumImage:number = 26.027 * width / 100
  const smallImage:number = 39.987 * width / 100

  return (
    <article 
    className="product-card"
    style={{
       "--big": `${bigProportion.toString()}px`, 
       "--medium" : `${mediumProportion.toString()}px`,
       "--small" : `${smallProportion.toString()}px`,
       "--bigImage" : `${bigImage.toString()}px`,
       "--mediumImage" : `${mediumImage.toString()}px`,
       "--smallImage" : `${smallImage.toString()}px`,
      } as cssVariables} >

      <div className="product-card__subcontainer">
        <div className="product-card__image-container"></div>
        <h2 className="product-card__title">Product Title</h2>
        <img className="product-card__stars" src={fiveStars} alt="rate"/>
        <p className="product-card__actual-price">36.99 USD</p>
        <p className="product-card__old-price">48.56</p>
        <div className="product-card__button">
          <p className="product-card__button-text">View</p>
        </div>
      </div>

    </article>
  );
};

export default ProductCard;