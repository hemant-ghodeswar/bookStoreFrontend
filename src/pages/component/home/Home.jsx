import React from "react";
import "./Home.css";
import { MailOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import homeImage from "../../../assets/homeImage.jpg"
import FreeBooks from "../freebook/FreeBooks";

const Home = () => {
  return (
    <>
    <div className="home_container">
      <div className="home-left-side">
        <h1>
          Hello, Welcome here to learn <br />
          something <span>new everyday!!!</span>
        </h1>
        <p>
          “A stack of modern colorful books on a wooden table with a clean
          background, suitable for an online bookstore. A stack of modern
          colorful books on a wooden table with a clean background, suitable for
          an online bookstore. A stack of modern colorful books on a wooden
          table with a clean background, suitable for an online bookstore.”
        </p>
        <div className="homeLeftSideInputDiv">
          <Input
            placeholder="Enter your email to login"
            prefix={<MailOutlined />}
            size="large"
          />
        </div>
            <Button color="danger" variant="solid">
            Secondary
          </Button>

      </div>
      <div className="home-right-side">
            <img src={homeImage} alt="Book" className="homePage_image" />
      </div>
    </div>
   
    <div>
        <FreeBooks />
    </div>
    </>
  );
};

export default Home;
