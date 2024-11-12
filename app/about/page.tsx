import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen">

      <main className="main">
        <div className="about-container">
          <h1 className="title">About Skin Bliss</h1>
          <p className="paragraph">
            Welcome to Skin Bliss, your go-to destination for all things skincare. We believe that
            everyone deserves healthy, radiant skin, and we are dedicated to helping you achieve
            just that.
          </p>
          <p className="paragraph">
            Our team of skincare enthusiasts curates the best products and shares expert tips to
            guide you on your skincare journey. Whether you're looking for solutions for acne,
            hydration, anti-aging, or simply want to pamper yourself, we have something for you.
          </p>
          <p className="paragraph">
            At Skin Bliss, we prioritize quality and sustainability. We partner with brands that
            align with our values, ensuring that our products are not only effective but also safe
            for you and the environment.
          </p>
          <p className="paragraph">
            Join our community of skincare lovers and embark on your journey to glowing skin.
            Remember, every skin type is unique, and we are here to support you every step of the
            way!
          </p>
          <p className="paragraph">
            Thank you for choosing Skin Bliss, where your skincare journey begins!
          </p>
        </div>
      </main>

    </div>
  );
};

export default About;
