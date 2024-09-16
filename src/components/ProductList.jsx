import { ProductListItem } from "./ProductListItem"

export const ProductList = ({ products }) => {
  return (
    <ul className="conteiner">
      {products.map((item) => (
        <ProductListItem
          key={item.id}
          image={item.image}
          name={item.name}
          rating={item.rating}
          stars={item.rating.stars}
          priceCents={item.priceCents}
          keywords={item.keywords}
        />
      ))}
    </ul>
  );
};
