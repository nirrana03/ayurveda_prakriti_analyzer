import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import PrakritiCard from "../components/PrakritiCard";


const descriptions = {
  vata: {
    title: "🌬️ Vata (Ether + Air)",
    desc: "Vata embodies movement — dry, cool, light, and swift. Vata types are energetic, imaginative, and expressive, but may face anxiety or dryness when imbalanced.",
    bg: "#e0f7fa",
    accent: "#4a90a4",
  },
  pitta: {
    title: "🔥 Pitta (Fire + Water)",
    desc: "Pitta symbolizes transformation — warm, sharp, and focused. Pitta individuals have a natural leadership aura but should balance their fiery drive with calmness.",
    bg: "#ffe0b2",
    accent: "#e4937bff",
  },
  kapha: {
    title: "💧 Kapha (Water + Earth)",
    desc: "Kapha stands for stability — cool, heavy, and nurturing. Kapha types bring harmony and compassion but should stay active to avoid sluggishness.",
    bg: "#e8f5e9",
    accent: "#99ed9dff",
  },
};

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.scores)
    return (
      <motion.section
        className="result empty"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>No result found</h3>
        <button className="btn" onClick={() => navigate("/quiz")}>
          Take Quiz
        </button>
      </motion.section>
    );

  const { scores } = state;
  const dominant = Object.keys(scores).reduce(
    (a, b) => (scores[a] >= scores[b] ? a : b),
    "vata"
  );
  const d = descriptions[dominant];

  return (
    <motion.section
      className="result"
      style={{ backgroundColor: d.bg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="result-title"
        style={{ color: d.accent }}
      >
        Your Dominant Prakriti:{" "}
        <motion.span
          className="caps"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {dominant.toUpperCase()}
        </motion.span>
      </motion.h2>

      {/* Main Content */}
      <div className="result-grid">
        <motion.div
          className="prakriti-card"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <PrakritiCard title={d.title} body={d.desc} />
        </motion.div>

        <motion.div
          className="score-box"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 style={{ color: d.accent }}>Scores</h4>
          <ul>
            <li>🌬️ Vata: {scores.vata}</li>
            <li>🔥 Pitta: {scores.pitta}</li>
            <li>💧 Kapha: {scores.kapha}</li>
          </ul>
          <div className="actions">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
              onClick={() => navigate("/quiz")}
              style={{ background: d.accent }}
            >
              Retake Quiz
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-ghost"
              onClick={() => navigate("/dosha")}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.p
        className="citation small"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        ✨ Derived from Ayurvedic texts and traditional prakriti analysis.
      </motion.p>
    </motion.section>
  );
}
