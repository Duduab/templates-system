import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import landingPageImage from '../assets/landing_page.jpg';
import portfolioImage from '../assets/portfolio.jpg';
import businessWebsiteImage from '../assets/business_website.jpg';

const CarouselWrapper = styled.div`
  margin-bottom: 2rem;

  .carousel .slide img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .carousel .control-dots .dot {
    background: ${({ theme }) => theme.colors.primary};
  }

  .carousel .control-arrow {
    background: none;
    border: none;
  }

  .carousel .control-arrow:before {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid black;
  }

  .carousel .control-next.control-arrow:before {
    border-left: none;
    border-right: 8px solid black;
  }
`;

const CategoryCarousel = () => {
  const categories = [
    { name: 'Landing Pages', path: '/category/landing', image: landingPageImage },
    { name: 'Portfolios', path: '/category/portfolio', image: portfolioImage },
    { name: 'Business Websites', path: '/category/business', image: businessWebsiteImage },
    // Add more categories as needed
  ];

  return (
    <CarouselWrapper>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {categories.map((category, index) => (
          <Link to={category.path} key={index}>
            <div>
              <img src={category.image} alt={category.name} />
              <p className="legend">{category.name}</p>
            </div>
          </Link>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default CategoryCarousel;
