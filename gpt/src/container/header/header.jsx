import React from "react";
import "./header.scss";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="gpt3__header section__padding" id="#home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <motion.div className="gpt3__header-image" whileHover={{ scale: 1.2 }}>
        <img src={ai} alt={ai} />
      </motion.div>
    </div>
  );
}
