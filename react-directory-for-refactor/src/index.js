import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './Landing-Page/index-landing-page';
import Blog from './Blog-Page/blog-components.js';


ReactDOM.render(
  <React.StrictMode>
    <Index />
    {/* <Blog/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


