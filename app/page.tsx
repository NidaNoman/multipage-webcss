"use client";
import Image from "next/image";
import { useState } from "react";



// TypeScript Props Define
type CardProps = {
  title: string;
  description: string;
  imgSrc: string;
};

// Card Component
const Card = ({ title, description, imgSrc }: CardProps) => {
  return (
    <div className="card">
      <Image
        src={imgSrc}
        alt={title}
        width={400}
        height={250}
        className="card-img"
        loading="lazy"
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

// Home Component
export default function Home() {
  const cards = [
    {
      title: "Serums",
      description: "Brightening Serum",
      imgSrc: "/serum-pic.jpeg",
    },
    {
      title: "Anti Aging serum",
      description: "Anti Aging cream",
      imgSrc: "/anti-age.jpg",
    },
    {
      title: "Sunscreens",
      description: "Tinted Sunscreen SPF60",
      imgSrc: "/sun-image.jpeg",
    },
    {
      title: "Hydrating Cream",
      description: "Hydrating Cream",
      imgSrc: "/hy-pic.jpeg",
    },
  ];

  return (
    <div className="home-container">
      <div
        className="bg-image"
        style={{ backgroundImage: "url('/skin-pic.jpg')" }}
      ></div>

      <div className="overlay-text">
        <h1 className="title">Welcome to Skin Bliss Skincare</h1>
        <p className="subtitle">Your one-stop for skincare solutions</p>
        <button className="button">Shop Now</button>
      </div>

      <h2 className="section-title">Latest Products</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
      
      
    </div>
    
  );
}
