import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions'; 
import { useNavigate } from 'react-router-dom';

function ShippingScreen() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart || {}; // Provide default value for cart if undefined

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
  
    const navigate = useNavigate();

    useEffect(() => {
        if (shippingAddress) {
            setAddress(shippingAddress.address || '');
            setCity(shippingAddress.city || '');
            setPostalCode(shippingAddress.postalCode || '');
            setCountry(shippingAddress.country || '');
        }
    }, [shippingAddress]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        localStorage.setItem('shippingAddress', JSON.stringify({ address, city, postalCode, country }));
        navigate('/payment');
    };
      
    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
            <input type="text" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
            <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
            <button type="submit">Continue</button>
        </form>
    );
}

export default ShippingScreen;
