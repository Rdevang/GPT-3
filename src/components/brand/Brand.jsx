import React from 'react'
import './brand.css'
import google from './google.png'
import shopify from "./shopify.png";
import slack from "./slack.png";
import atlassian from "./atlassian.png";
import dropbox from "./dropbox.png";
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
    </div>
  );
}

export default Brand