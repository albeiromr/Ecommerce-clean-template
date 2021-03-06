import React, {createContext, useContext, FC, useState, useEffect} from 'react';
import { MainNavContext } from '../Main nav context/MainNavContext';
import {contextValue, contextProps, fetchedProduct} from './types';

export const ProductGridContext = createContext<contextValue>({
    showFilters: false,
    setShowFilters: () => {},
    priceRange: {min: 0, max: 0},
    setPriceRange: () => {},
    minValue: 0,
    setMinValue: () => {},
    maxValue: 0,
    setMaxValue: () => {},
    fetchedDesktopProducts: [],
    setFetchedDesktopProducts: () => {},
    fetchedMobileProducts: [],
    setFetchedMobileProducts: () => {}

});


const ProductGridContextProvider:FC<contextProps> = (props) => {

    const {lastFamilySelected} = useContext(MainNavContext);

    //This state is for showing or hidding the filters in the product grid
    const [showFilters, setShowFilters] = useState(false)

    //The priceRange state consults the database and bring us the prices from the cheapest product and the most expensive one 
    const [priceRange, setPriceRange] = useState({min: 0, max: 100});

    //minValue and MaxValue State show the min and max price selected to the user interface
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    // this state is the fetched products array for the desktop-product-grid component
    const [fetchedDesktopProducts, setFetchedDesktopProducts] = useState<fetchedProduct[]>([]);
    // this state is the fetched products array for the desktop-product-grid component
    const [fetchedMobileProducts, setFetchedMobileProducts] = useState<fetchedProduct[]>([]);

    //this useEffect is for updating the product Desktop grid if a category, price range and other stuff change
    /* useEffect(() => {
        async function fetchDesktopProducts(){
            const fetchedData = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products-desktop/${lastFamilySelected}/0`);
            const dataToJson = await fetchedData.json();
            setFetchedDesktopProducts(dataToJson);
        };
        fetchDesktopProducts(); 
    },[lastFamilySelected]); */

    //this useEffect is for updating the product mobile grid if a category, price range and other stuff change
    /* useEffect(() => {
        async function fetchMobileProducts(){
            const fetchedData = await fetch(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/products-mobile/${lastFamilySelected}/0`);
            const dataToJson = await fetchedData.json();
            setFetchedMobileProducts(dataToJson)
        };
        fetchMobileProducts();
    },[lastFamilySelected]); */

    return(
        <ProductGridContext.Provider
        value={{
            showFilters,
            setShowFilters,
            priceRange,
            setPriceRange,
            minValue,
            setMinValue,
            maxValue,
            setMaxValue,
            fetchedDesktopProducts,
            setFetchedDesktopProducts,
            fetchedMobileProducts,
            setFetchedMobileProducts
        }}
        >
            {props.children}
        </ProductGridContext.Provider>
    )
};


export default ProductGridContextProvider
