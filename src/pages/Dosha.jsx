import React from "react";
import { motion } from "framer-motion";
import "./Dosha.css";
import vataImg from "../Assets/vata.png";
import pittaImg from "../Assets/pita.webp";
import kaphaImg from "../Assets/kaph.webp";

export default function Doshas() {
  const doshas = [
    {
      name: "Vata — Energy of Movement",
      description:
        "Vata is formed from Air and Ether. It governs all motion — breathing, blinking, circulation, and creativity. People with dominant Vata are energetic, imaginative, and quick thinkers, but can experience restlessness, dryness, and anxiety when imbalanced.",
      color: "#e0f7fa",
      image: vataImg,
      direction: "left",
    },
    {
      name: "Pitta — Energy of Transformation",
      description:
        "Pitta is composed of Fire and Water. It controls digestion, metabolism, and intellect. A balanced Pitta leads to courage, leadership, and focus. Imbalance may cause irritability, overheating, or impatience.",
      color: "#ffe0b2",
      image: pittaImg,
      direction: "right",
    },
    {
      name: "Kapha — Energy of Stability",
      description:
        "Kapha combines Earth and Water. It represents calm, endurance, and strength. Balanced Kapha brings compassion and patience, while imbalance may lead to sluggishness or attachment.",
      color: "#e8f5e9",
      image: kaphaImg,
      direction: "left",
    },
  ];

  return (
    <section className="doshas-page">
      <motion.div
        className="dosha-intro"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>🌿 The Three Doshas</h1>
        <p>
          According to Ayurveda, every individual is made up of a unique balance
          of three energies — Vata, Pitta, and Kapha. Understanding them helps
          you find balance in body, mind, and lifestyle.
        </p>
      </motion.div>

      {doshas.map((dosha, i) => (
        <motion.div
          key={i}
          className={`dosha-section ${dosha.direction}`}
          style={{ backgroundColor: dosha.color }}
        >
          {/* Image */}
          <motion.div
            className="dosha-image"
            initial={{ x: dosha.direction === "left" ? -150 : 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={dosha.image} alt={dosha.name} />
          </motion.div>

          {/* Content */}
          <motion.div
            className="dosha-content"
            initial={{ x: dosha.direction === "left" ? 150 : -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2>{dosha.name}</h2>
            <p>{dosha.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
