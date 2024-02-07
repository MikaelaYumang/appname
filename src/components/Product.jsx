import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Rating from '../components/Rating'

function Product({product}) {
  return (
    <div>
        
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}><Card.Img src={product.image} /></Link>

            <Card.Body>
            <Card.Title as="div">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
            </Card.Title>

            <Card.Text as="div">
                {/* {product.rating} from {product.numReviews} reviews */}
                <Rating value={product.rating} text={`${product.numReviews} review`} color='#f8e825' />
            </Card.Text>

            <Card.Text as ="div">
                <h3>${product.price}</h3>
            </Card.Text>
            </Card.Body>

        </Card>

        

    </div>
  )
}

export default Product