/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "./SliderContext"
import styles from './Slider.module.css'
import { Slide } from "./Slide";

export const Slider = ({ interval = 100000 }) => {
    const { products } = useContext(ProductContext); 
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }, interval);
  
      return () => clearInterval(slideInterval);
    }, [interval, products.length]);
  
    return (
        <div className={styles.sliderContainer}>
          {products.map((producto, index) => (
            <div
              key={index}
            >
              <Slide key={producto.id} slide={producto} isActive={index === currentSlide} />
            </div>

          ))}
        </div>
      );
}