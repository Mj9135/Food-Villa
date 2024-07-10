import React, { useState } from "react";

const Section = ({ title, desc, isVisible, toggleVisibility }) => {
  return (
    <div className="border border-black p-4 m-2">
      <h1 className="text-xl font-semibold">{title}</h1>
      {isVisible ? (
        <button
          className="border border-black px-3 mt-4 py-1 cursor-pointer rounded-md"
          onClick={toggleVisibility}
        >
          Hide
        </button>
      ) : (
        <button
          className="border border-black px-3 mt-4 py-1 cursor-pointer rounded-md"
          onClick={toggleVisibility}
        >
          Show
        </button>
      )}

      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  const [show, setShow] = useState("");

  const toggleVisibility = (section) => {
    setShow((prevShow) => (prevShow === section ? "" : section));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Instamart</h1>
      <Section
        title={"About"}
        desc={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={show === "about"}
        toggleVisibility={() => toggleVisibility("about")}
      />
      <Section
        title={"Product"}
        desc={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={show === "product"}
        toggleVisibility={() => toggleVisibility("product")}
      />
      <Section
        title={"Career"}
        desc={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={show === "career"}
        toggleVisibility={() => toggleVisibility("career")}
      />
    </div>
  );
};

export default Instamart;
