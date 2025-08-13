import React, { useEffect, useState } from "react";
import "./FreeBooks.css";
import list from "../../../assets/list.json";
import { Carousel } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../common/card/Card";

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const FreeBooks = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);
    useEffect(() => {
    const freeBooks = list.filter((data) => data.category === "Free");
    setFilteredBooks(freeBooks);
  }, []);
  const onChangeCarousel = currentSlide => {
    console.log(currentSlide);
  };
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="freebook-container">
      <h3>Free Course Offered</h3>
      <p>
        A stack of modern colorful books on a wooden table with a clean
        background, suitable for an online bookstore. A stack of modern colorful
        books on a wooden table with a clean background, suitable for an online
        bookstore. A stack of modern colorful books on a wooden table with a
        clean background, suitable for an online bookstore.
      </p>
      <div className="freeBook-card-container">
        <div className="slider-container">
      <Slider {...settings}>

            {filteredBooks?.map((item, index)=>(
                <Card item={item} key={item.id}/>
            ))}

      </Slider>
    </div>
      </div>
    </div>
  );
};

export default FreeBooks;
