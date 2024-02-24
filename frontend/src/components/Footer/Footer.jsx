import React from 'react'
 import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shop</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            laudantium rerum, ipsum accusamus alias nemo aut nobis cum doloribus
            eveniet?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, vel.
            Esse exercitationem dolores vel blanditiis ad deserunt sed quaerat.
            Culpa!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">NANAS-SHOP</div>
          <div className="copyright">
            <span>&copy; Copyright 2024 All Rights Reserved. created by Nana Kwame Tuffour</span>
          </div>
        </div>
        <div className="right">
          <img src="/img/master.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer
