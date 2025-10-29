import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section className="ayurveda-page">
      {/* Intro Section */}
      <motion.div
        className="intro-section"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>🌿 What is Ayurveda</h1>
        <p>
          Ayurveda, meaning “The Science of Life,” is one of the world’s oldest
          holistic healing systems. It focuses on maintaining balance between
          the body, mind, and spirit to promote health and happiness.
        </p>
      </motion.div>

      {/* The Five Elements Section */}
      <motion.div
        className="elements-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>✨ The Five Elements (Pancha Mahabhutas)</h2>
        <p className="desc">
          Ayurveda teaches that all life is formed from five basic elements:
          <strong> Earth (Prithvi)</strong>, <strong> Water (Jal)</strong>,
          <strong> Fire (Agni)</strong>, <strong> Air (Vayu)</strong>, and{" "}
          <strong> Ether (Akasha)</strong>. These elements exist in everything
          — from our bodies to our environment — and their balance determines
          our Dosha and wellbeing.
        </p>

        <div className="element-cards">
          {[
            {
              name: "🌍 Earth (Prithvi)",
              text: "Symbolizes stability, strength, and structure. It governs bones, muscles, and endurance.",
              color: "#dcedc8",
            },
            {
              name: "💧 Water (Jal)",
              text: "Represents cohesion, fluidity, and nourishment. It maintains moisture, blood, and emotions.",
              color: "#b2ebf2",
            },
            {
              name: "🔥 Fire (Agni)",
              text: "The force of transformation — governs digestion, metabolism, and intelligence.",
              color: "#ffe0b2",
            },
            {
              name: "🌬️ Air (Vayu)",
              text: "Denotes movement and lightness. It governs breathing, circulation, and nerve impulses.",
              color: "#c8e6c9",
            },
            {
              name: "🌌 Ether (Akasha)",
              text: "Represents space and consciousness. It allows freedom, creativity, and self-expression.",
              color: "#e1bee7",
            },
          ].map((el, i) => (
            <motion.div
              key={i}
              className="element-card"
              style={{ backgroundColor: el.color }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
            >
              <h3>{el.name}</h3>
              <p>{el.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Connection to Doshas */}
      <motion.div
        className="connection-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>🌀 How Elements Form the Three Doshas</h2>
        <p>
          The Five Elements combine to create the three vital energies (Doshas)
          in the body:
        </p>
        <ul>
          <li>
            <strong>Vata</strong> — Air + Ether → Movement, creativity, and
            flexibility.
          </li>
          <li>
            <strong>Pitta</strong> — Fire + Water → Transformation, digestion,
            and focus.
          </li>
          <li>
            <strong>Kapha</strong> — Earth + Water → Stability, endurance, and
            compassion.
          </li>
        </ul>
        <p>
          Understanding your dominant Dosha helps you adopt personalized diets,
          routines, and habits for perfect balance.
        </p>
      </motion.div>

      {/* Closing Message */}
      <motion.div
        className="closing-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>🌸 Harmony Through Awareness</h2>
        <p>
          True wellness begins when you align with your body’s natural rhythm
          and nature’s flow. Ayurveda reminds us that every action, thought, and
          breath can nurture balance and peace.
        </p>
      </motion.div>
    </section>
  );
}
