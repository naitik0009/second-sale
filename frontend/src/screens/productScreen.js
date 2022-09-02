import React from "react";
import {Link,useParams} from "react-router-dom";
import {Row, Col, Image, ListGroup, Card, Button, Container} from "react-bootstrap";
import Rating from "../components/rating";
import Products from "../products";

const ProScreen = ()=>{
    const {id} = useParams();
    const data = Products.find((dat)=>{
        return dat._id === id;

    });
    return (
<>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={data.image} alt={data.name} fluid/>
                </Col>
                <Col md={4}>
<ListGroup variant="flush">
    <ListGroup.Item>
        <h2>{data.name}</h2>
    </ListGroup.Item>
    <ListGroup.Item>
        <Rating text={data.rating} value={data.numReviews}/>
    </ListGroup.Item>

    <ListGroup.Item>
        <i>
            {data.description}
        </i>
    </ListGroup.Item>


</ListGroup>
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <p>Status</p></Col>
                                <Col>
                                    {data.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                </Col>
                            </Row>
                            <Row>
                              <Col>Price : </Col>      <Col>    ${data.price}</Col>


                            </Row>
                            <Row>
                                <Button type="button" disabled={data.countInStock === 0} className="btn-sm"><i fas fa-shopping-cart></i> Add To Cart</Button>

                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
</>
    );
};


export default ProScreen;