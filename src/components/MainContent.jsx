import { products } from "../data";
import "./MainContent.css";
import { ProductList } from "./productList";


export const MainContent = () => {
    return (
        <main>
        <ProductList products={products} />
        </main>
    )
}