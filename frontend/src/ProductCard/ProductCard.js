import "./ProductCard.css"

function ProductCard(props) {
    console.log(props);
    var {title, price} = props;
    return (
        <div className="card">
            <div>{title}</div>
            <div>{price}</div>
        </div>
    );
}

export default ProductCard;