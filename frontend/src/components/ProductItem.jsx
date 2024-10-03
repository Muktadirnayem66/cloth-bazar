import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import PropTypes from "prop-types";

const ProductItem = ({ item }) => {
  const { _id, name, image, price } = item;

  const { currency } = useContext(ShopContext);

  return (
    <Link className=" text-gray-700 cursor-pointer" to={`/product/${_id}`}>
     <div className=" overflow-hidden rounded-sm">
     <img className=" hover:scale-110 transition ease-in-out" src={image[0]} alt="product_image" />
     </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.array.isRequired,
  }),
};

export default ProductItem;
