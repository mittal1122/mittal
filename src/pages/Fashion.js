import React from 'react'
import { Link } from 'react-router-dom'

export const Fashion = () => {
  return (
    <div class="main-content-wrapper d-flex clearfix">

        {/* <!-- Mobile Nav (max width 767px)--> */}
        <div class="mobile-nav">
            {/* <!-- Navbar Brand --> */}
            <div class="amado-navbar-brand">
                <Link to="index.html"><img src="img/core-img/logo.png" alt=""/></Link>
            </div>
            {/* <!-- Navbar Toggler --> */}
            <div class="amado-navbar-toggler">
                <span></span><span></span><span></span>
            </div>
        </div>

        {/* <!-- Header Area Start --> */}
        <header class="header-area clearfix">
            {/* <!-- Close Icon --> */}
            <div class="nav-close">
                <i class="fa fa-close" aria-hidden="true"></i>
            </div>
            {/* <!-- Logo --> */}
            <div class="logo">
                <Link to="index.html"><img src="img/core-img/logo.png" alt=""/></Link>
            </div>
             {/* <!-- Amado Nav --> */}
            <nav class="amado-nav">
                <ul>
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="product-details.html">Product</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                </ul>
            </nav>
            {/* <!-- Button Group -->  */}
            <div class="amado-btn-group mt-30 mb-100">
                <a href="#" class="btn amado-btn mb-15">%Discount%</a>
                <a href="#" class="btn amado-btn active">New this week</a>
            </div>
            {/* <!-- Cart Menu --> */}
            <div class="cart-fav-search mb-100">
                <a href="cart.html" class="cart-nav"><img src="img/core-img/cart.png" alt=""/> Cart <span>(0)</span></a>
                <a href="#" class="fav-nav"><img src="img/core-img/favorites.png" alt=""/> Favourite</a>
                <a href="#" class="search-nav"><img src="img/core-img/search.png" alt=""/> Search</a>
            </div>
            {/* <!-- Social Button --> */}
            <div class="social-info d-flex justify-content-between">
                <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </header>
        {/* <!-- Header Area End --> */}

        {/* <!-- Product Catagories Area Start --> */}
        <div class="products-catagories-area clearfix">
            <div class="amado-pro-catagory clearfix" style="position: relative; height: 6615.64px;">

                {/* <!-- Single Catagory --> */}
                <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 0px;">
                    <a href="shop.html">
                        <img src="img/bg-img/1.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>From $180</p>
                            <h4>Modern Chair</h4>
                        </div>
                    </a>
                </div>

                {/* <!-- Single Catagory --> */}
                <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 688px;">
                    <a href="shop.html">
                        <img src="img/bg-img/2.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>From $180</p>
                            <h4>Minimalistic Plant Pot</h4>
                        </div>
                    </a>
                </div>

                {/* <!-- Single Catagory --> */}
                <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 1667px;">
                    <a href="shop.html">
                        <img src="img/bg-img/3.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>From $180</p>
                            <h4>Modern Chair</h4>
                        </div>
                    </a>
                </div>

                {/* <!-- Single Catagory --> */}
                <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 2279px;">
                    <a href="shop.html">
                        <img src="img/bg-img/4.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>From $180</p>
                            <h4>Night Stand</h4>
                        </div>
                    </a>
                </div>

                {/* <!-- Single Catagory --> */}
                <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 2892px;">
                    <a href="shop.html">
                        <img src="img/bg-img/5.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>From $18</p>
                            <h4>Plant Pot</h4>
                        </div>
                    </a>
                </div>

                {/* <!-- Single Catagory --> */}
                <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 3581px;">
                    <a href="shop.html">
                        <img src="img/bg-img/6.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>From $320</p>
                            <h4>Small Table</h4>
                        </div>
                    </a>
                </div>

                {/* <!-- Single Catagory --> */}
                <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 4195px;">
                    <a href="shop.html">
                        <img src="img/bg-img/7.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>From $318</p>
                            <h4>Metallic Chair</h4>
                        </div>
                    </a>
                </div>

                {/* <!-- Single Catagory --> */}
                <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 5173px;">
                    <a href="shop.html">
                        <img src="img/bg-img/8.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>From $318</p>
                            <h4>Modern Rocking Chair</h4>
                        </div>
                    </a>
                </div>

                {/* <!-- Single Catagory --> */}
                <div class="single-products-catagory clearfix" style="position: absolute; left: 0%; top: 6001px;">
                    <a href="shop.html">
                        <img src="img/bg-img/9.jpg" alt=""/>
                        {/* <!-- Hover Content --> */}
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>From $318</p>
                            <h4>Home Deco</h4>
                        </div>
                    </a>
                </div>
            </div> 
        </div>
        {/* <!-- Product Catagories Area End --> */}
    </div>
  )
}