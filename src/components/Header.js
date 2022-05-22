import React from 'react'
import { Navbar,Container, FormControl,Dropdown,Nav,Badge,Button } from 'react-bootstrap';
import {TiShoppingCart} from "react-icons/ti"
import { Link,useLocation } from "react-router-dom";
import { CartState } from '../context/Context';
import{RiDeleteBin6Line} from 'react-icons/ri';
import "./style.css";
const Header = () => {
  const {
    state:{ cart },
    dispatch,productDispatch,
    }=CartState();
    
  return (
  <Navbar bg="dark" variant="dark" style={{height:80}}>
    <Container>
        <Navbar.Brand>
            <Link to='/' className='link'>Shopping Cart</Link>
        </Navbar.Brand>
        {useLocation().pathname.split("/")[1] !== "cart" && (

        <Navbar.Text className='search'>
            <FormControl 
                style={{width:500}}
                type="search"
                placeholder="Search for Product"
                className='m-auto'
                aria-label='searh'
                onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            ></FormControl>
        </Navbar.Text>
        )}
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <TiShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minwidth:370}}>
              {cart.length>0?(
                <>
                  {cart.map((prod) => (
                      <span className="cartitem" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>₹ {prod.price.split(".")[0]}</span>
                        </div>
                        <RiDeleteBin6Line
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                         />
                      </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link> 
                     </> 
              ):(<span style={{padding:10}}>Cart is Empty!</span>)
              } 
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
    </Container>
  </Navbar>
  );
};

export default Header
