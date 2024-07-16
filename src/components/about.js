import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center p-4  md:my-4 w-full   text-left">
      <h1 className="font-bold text-4xl text-center text-neutral-700">
        Welcome to Tatanagar Bites
      </h1>
      <h1 className="font-semibold text-2xl mt-4 my-2 text-center text-neutral-600">
        Your Premier Online Food Ordering Destination in Jamshedpur
      </h1>
      <div className="flex justify-center text-center  px-1 md:px-8 mt-8 items-center">
        <p className="font-bold md:text-lg  font-mono  text-neutral-700">
          At Tatanagar Bites, we are dedicated to bringing the best of
          Jamshedpur’s culinary delights right to your doorstep. Our mission is
          to provide a seamless, convenient, and delightful food ordering
          experience to our customers. Whether you're craving traditional Indian
          cuisine, spicy Chinese dishes, or mouth-watering continental fare,
          Tatanagar Bites has got you covered.
        </p>
      </div>
      <div className="flex justify-center px-8 items-center mt-4">
        <p className="font-bold md:text-lg text-base  hidden md:block font-mono text-neutral-700">
          We are constantly working to improve our services to meet your needs
          better. With an extensive network of restaurant partners across
          Jamshedpur, we ensure that you have access to a diverse range of
          dishes and cuisines. Our easy-to-use website and app make ordering
          your favorite meals a breeze.
        </p>
      </div>
      <div className="flex justify-center px-8 items-center mt-4">
        <p className="font-semibold  text-lg font-mono hidden md:block text-neutral-700">
          Our team at Tatanagar Bites is passionate about food and technology.
          We leverage the latest tech to provide real-time order tracking,
          secure payment options, and reliable customer service. We believe that
          good food can bring people together and create memorable experiences,
          and we are committed to making those moments happen for you.
        </p>
      </div>
      <div className="flex justify-center px-8 text-center items-center mt-4">
        <p className="font-bold md:text-lg font-mono text-neutral-700">
          Thank you for choosing Tatanagar Bites. We look forward to serving you
          and becoming your go-to platform for all your food cravings in
          Jamshedpur.
        </p>
      </div>
    </div>
  );
};

export default About;
