import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';


function ProductScreen() {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  const dispatch = useDispatch();

  const qty = 1

const addToCartHandler = () => {
    dispatch(addToCart(id, qty));
};

  useEffect(() => {
  const fetchProduct = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/products/${id}/`);
    setProduct(data)
  }

  fetchProduct();
}, [id]);


  return (
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>

      <Col md={3}>
        <ListGroup variant='flush'>
            <ListGroupItem>
                <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
                {product.description}
            </ListGroupItem>
            <ListGroupItem>
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    color={'#f8e825'}
                    />
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
        </ListGroup>
      </Col>

      <Col md={3}>
        <Card>
            <ListGroup variant = "flush">
                <ListGroup.Item>
                    <Row>
                        <Col>Availability:</Col>
                        <Col>
                            {product.countInStock > 0 ? "In stock" : "Out of Stock"}
                        </Col>
                    </Row>
                </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Button 
                                onClick={addToCartHandler}
                                className="btn-block"
                                type="button"
                                disabled={product.countInStock === 0}
                            >
                                Add to Cart
                            </Button>
                        </Row>
                    </ListGroup.Item>
            </ListGroup>

        </Card>
        
      </Col>

      <Link to="/" className='btn btn-light my-3'>
        Go Back
      </Link>
    </Row>
  );
}

export default ProductScreen;

// import {Link, useParams} from 'react-router-dom'
// import {Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap'
// import Rating from '../components/Rating'
// // import products from '../products'

// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// function ProductScreen() {
//     const {id} = useParams()
//     const [product, setProduct] = useState([])

//     useEffect(() => {
//         async function fetchProduct() {
//                 const { data } = await axios.get(`http://127.0.0.1:8000/products/${id}/`)
//                 setProduct(data)
//         }
//         fetchProduct()
//     }, [id])
    
//     // const product = products.find((p) => p._id === id)
//   return (
//     <div>
//     <Link to="/" className="btn btn-light my-3">
//         Go Back
//     </Link>

//     <Row>
//         <Col md={6}>
//             <Image src={product.image} alt={product.name} fluid></Image>
//         </Col>

//         <Col md={3}>
//             <ListGroup variant="flush">
//                 <ListGroup.Item>
//                     <h3>{product.name}</h3>
//                 </ListGroup.Item>
//                 <ListGroup.Item>{product.description}</ListGroup.Item>
//                 <ListGroup.Item>
//                     <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} reviews`}
//                     color={"f8e825"} />

//                 </ListGroup.Item>
//                 <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

//             </ListGroup>
//         </Col>
//         <Col md={3}>
//             <Card>
//                 <ListGroup variant='flush'>
//                     <ListGroup.Item>
//                         <Row>
//                             <Col>Price:</Col>
//                             <Col>
//                                 <strong>${product.price}</strong>
//                             </Col>
//                         </Row>
//                     </ListGroup.Item>

//                     <ListGroupItem>
//                         <Row>
//                             <Col>Availability</Col>
//                             <Col>
//                             {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
//                             </Col>
//                         </Row>
//                     </ListGroupItem>

//                     <ListGroupItem>
//                         <Row>
//                             <Button
//                             // onClick={addtoCartHandler}
//                             className='btn-block'
//                             type="button"
//                             disabled={product.countInStock === 0}
//                             >
//                                 Add to Cart
//                             </Button>
//                         </Row>
//                     </ListGroupItem>
//                 </ListGroup>
//             </Card>

//         </Col>
//     </Row>
//     </div>
//   )
// }

// export default ProductScreen