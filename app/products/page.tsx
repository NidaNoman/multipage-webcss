"use client";
import Image from "next/image";
import Link from "next/link";

// Card Component
// type CardProps = {
//   title: string;
//   description: string;
//   imgSrc: string;
// };

// const Card = ({ title, description, imgSrc }: CardProps) => {
//   return (
//     <div className="card">
//       <Image
//         src={imgSrc}
//         alt={title}
//         width={400}
//         height={250}
//         className="card-img"
//         loading="lazy"
//       />
//       <div className="card-body">
//         <h2 className="card-title">{title}</h2>
//         <p className="card-description">{description}</p>
//       </div>
//     </div>
//   );
// };

// Card Section Component
// const CardSection = () => {
//   const cards = [
//     {
//       title: "Serums",
//       description: "Brightening Serum",
//       imgSrc: "/serum-pic.jpeg",
//     },
    // {
    //   title: "Moisturizer",
    //   description: "Barrier Repair Moisturizer",
    //   imgSrc: "/moist-img.jpeg",
    // },
//     {
//       title: "Sunscreens",
//       description: "Tinted Sunscreen SPF60",
//       imgSrc: "/sun-image.jpeg",
//     },
//     {
//       title: "Anti-Aging Cream",
//       description: "Anti Aging for All Skin Types",
//       imgSrc: "/anti-age.jpg",
//     },
//   ];

//   return (
//     <section className="cards-section">
//       <h2 className="section-title">Latest Products</h2>
//       <div className="cards-container">
//         {cards.map((card, index) => (
//           <Card
//             key={index}
//             title={card.title}
//             description={card.description}
//             imgSrc={card.imgSrc}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// Products Section Component
const Products = () => {
  const products = [
    {
      id: 1,
      name: "Hydrating Face Cream",
      description: "A nourishing cream for deep hydration and glowing skin.",
      price: "$25.00",
      image: "/hy-pic.jpeg",
    },
    {
      id: 2,
      name: "Anti-Aging Serum",
      description: "A potent serum to reduce fine lines and wrinkles.",
      price: "$30.00",
      image: "/anti-age.jpg",
    },
    {
      id: 3,
      name: "Exfoliating Scrub",
      description: "Gentle scrub to remove dead skin cells and reveal radiant skin.",
      price: "$15.00",
      image: "/sc-p.jpg",
    },
    {
        id: 4,
        name: "Sunscreen SPF 50",
        description: "Broad-spectrum sunscreen for ultimate skin protection.",
        price: "$10.00",
        image: "/sun-image.jpeg",
      },
      {
        id: 5,
        name: "face wash",
        description: "face wash for ultimate skin protection.",
        price: "$5.00",
        image: "/face-wash.jpg",
      },
      {
        id: 6,
        name: "Eye Serum",
        description: "eye serum for ultimate eye protection.",
        price: "$20.00",
        image: "/Eye-smooth.jpg",
      },
  ];

  return (
    <section className="products-section">
      <h1 className="section-title">Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="product-image"
              loading="lazy"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <CardSection /> */}
      <Products />
      </div>

)}
