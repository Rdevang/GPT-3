import React from "react";
import "./blog.css";
import { Article } from "../../components";
import img5 from './img5.png'
import img2 from "./img2.png";
import img3 from './img3.png'
import img4 from './img4.png'
import img1 from "./img1.png";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgurl={img1} date='Sep 26, 2023'  title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgurl={img2} date='Sep 21, 2023'  title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgurl={img3} date='Sep 24, 2023'  title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgurl={img4} date='Sep 25, 2023'  title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgurl={img5} date='Sep 27, 2023 ' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
