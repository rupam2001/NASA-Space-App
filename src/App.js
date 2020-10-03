import React from 'react';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Axios from 'axios';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Switch, Route, Link } from 'react-router-dom'


import Landing from './components/landing.page';

const App = () => {
  AOS.init({
    duration: 500
  });

  return (
    <div>

      <Switch>
        <Route path='/' exact>
          {/* <LandingPage setSelectedSection={setSelectedSection} />
            {footer()} */}
          <Landing />
        </Route>
        <Route path='/products'>
          {/* <ProductsPage selectedSection={selectedSection} /> */}
        </Route>
        <Route path='/cart'>
          {/* <Cart /> */}
        </Route>
      </Switch>
    </div>
  )
}

export default App;




const footer = () => {

  return (
    <div className='footer' data-aos="fade-up"
      data-aos-duration="1000">
      <div className='pt-1 mt-2 d-flex'>
        <div className='p-2'>
          <h6 className='mt-1 '>Connect with us:</h6>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
          <br></br>
        </div>
        <div className='p-2'>
          <h6 className='mt-1 '>Get to know us:</h6>
          <ul>
            <li>About us</li>
          </ul>
        </div>
      </div>
      <p style={{ color: 'grey' }}>@Copyright AEM inc. <br></br> <stong>mail:</stong> assamemart@gmail.com</p>
      &nbsp;
    </div>
  )
}



