import React, { useEffect, useState } from "react";
import "./Course.css";
import { Button } from "antd";
import Slider from "react-slick";
import list from "../../../assets/list.json";
import Card from "../../common/card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    // const courseBook = list.filter((data) => data.category !== "Free");
    // setFilteredBooks(courseBook);
    getAllBooks();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const getAllBooks = async () => {
    try {
      const res = await axios.get("http://localhost:4001/book/");
      setFilteredBooks(res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="course_container">
      <h2>
        We're delighted to have you <span>Here!</span>
      </h2>
      <p>
        A stack of modern colorful books on a wooden table with a clean
        background, suitable for an online bookstore. A stack of modern colorful
        books on a wooden table with a clean background, suitable for an online
        bookstore. A stack of modern colorful books on a wooden table with a
        clean background, suitable for an online bookstore.
      </p>
      <Link to="/">
        <Button className="button_btn">Back</Button>
      </Link>

      <div className="freeBook-card-container">
        <div className="slider-container">
          <Slider {...settings}>
            {filteredBooks?.map((item, index) => (
              <Card item={item} key={item._id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Course;
