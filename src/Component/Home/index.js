import React, { Component, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../Redux/Action';

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    return (
      <Fragment>
        <h1>Home Page {state.cartReducer.addCart}</h1>
        <button className='btn btn-success' onClick={() =>{dispatch(addCart())}}>Click</button>
      </Fragment>
    )
}


export default Home
