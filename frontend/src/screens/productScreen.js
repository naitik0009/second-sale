import React, {useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import {Row, Col, Image, ListGroup, Button} from "react-bootstrap";
import Rating from "../components/rating";
import axios from "axios";

const ProScreen = ()=>{
    const {id} = useParams();
    console.log(id);
    const [Data,ManipulatePro] = React.useState([]);
    useEffect(
        ()=>{
            const fetchData = async()=> {
                const prod = await axios.get(`/api/all-products/${id}`);
                console.log(prod.data);
                ManipulatePro(prod.data);
            };

            fetchData();
        },[]
    )

    return (
<>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={Data.image} alt={Data.name} fluid/>
                </Col>
                <Col md={4}>
<ListGroup variant="flush">
    <ListGroup.Item>
        <h2>{Data.name}</h2>
    </ListGroup.Item>
    <ListGroup.Item>
        <Rating text={Data.rating} value={Data.numReviews}/>
    </ListGroup.Item>

    <ListGroup.Item>
        <i>
            {Data.description}
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
                                    {Data.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                </Col>
                            </Row>
                            <Row>
                              <Col>Price : </Col>      <Col>    ${Data.price}</Col>


                            </Row>
                            <Row>
                                <Button type="button" disabled={Data.countInStock === 0} className="btn-sm"><i fas fa-shopping-cart></i> Add To Cart</Button>

                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
</>
    );
};


export default ProScreen;