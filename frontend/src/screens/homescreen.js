import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import Products from "../products";
import ProductList from "../components/productList";
const HomeScreen = ()=>{

    return (
    <>
        <h4>Latest Products  </h4>
            <Row>
                {Products.map(
                    (product)=>(
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <ProductList products={product}/>
                        </Col>
                    )
                )}
            </Row>


        {/*<ProductList product={Data}/>*/}

        { /*we are passing prop tp ProductList function, or simply we can say props which are immutable*/}
    </>
);
};

export default HomeScreen;