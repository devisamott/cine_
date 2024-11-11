import { Slider } from "./Slider";
import { ProductProvider } from "./SliderContext";

export function SliderContent ()  {
    return(
        <ProductProvider>
            <Slider/>
        </ProductProvider>
    )
}