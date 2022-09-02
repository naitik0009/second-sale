import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from "../products";
import Rating from "./rating";
import {Link} from "react-router-dom";

const ProductList = (props)=>{
    return (
        <div>
            <Card className="my-3 p-3 rounded">
            <Link to={`product/${props.products._id}`}>
                <Card.Img variant="top" src={props.products.image} />
            </Link>
                <Card.Body>
                    <Card.Title as="div"><strong>
                        {props.products.name}
                    </strong></Card.Title>
                    <Card.Text as="div">
                        <div className="my-3">
                           <Rating  value={props.products.rating}  text={`from ${props.products.numReviews} reviews`}  />
                        </div>
                    </Card.Text>
                    <Card.Text as="h3">${props.products.price}</Card.Text>

                </Card.Body>

            </Card>


        </div>
    );
};

export default ProductList;