import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import About from "../pages/About";
import Doshas from "../pages/Dosha";

export default function Home() {
  return (
    <section
      className="home"
      style={{
        background: "linear-gradient(180deg, #fffdf6 0%, #fff7e6 100%)",
        color: "#2e2e2e",
        fontFamily: "'Poppins', sans-serif",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          textAlign: "center",
          padding: "6rem 3rem",
          background:
            "linear-gradient(90deg, #f9fff0, #fff5e6)",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#4a752c",
            marginBottom: "1rem",
            fontWeight: "600",
          }}
        >
          Ayurveda — Balance Mind, Body & Spirit
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            maxWidth: "950px",
            margin: "0 auto",
            lineHeight: "1.8",
            color: "#444",
          }}
        >
          Ayurveda, the timeless science of natural healing, guides you to live
          in harmony with your inner rhythm. Discover your Prakriti — Vata,
          Pitta, or Kapha — and learn to balance energy, emotions, and lifestyle.
        </p>
        <div style={{ marginTop: "2.5rem" }}>
          <Link
            to="/quiz"
            className="btn btn-primary"
            style={{
              background: "linear-gradient(90deg, #7ec850, #4caf50)",
              color: "#fff",
              padding: "0.9rem 2rem",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              marginRight: "1rem",
            }}
          >
            Know Your Prakriti
          </Link>
          <Link
            to="/about"
            className="btn btn-outline"
            style={{
              border: "2px solid #4caf50",
              color: "#4caf50",
              padding: "0.9rem 2rem",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            About Ayurveda
          </Link>
        </div>
      </motion.div>

      {/* Add Ayurveda + Doshas sections here */}
      <About />
      <Doshas />
      
      {/* Full-width Highlight Card */}
      <motion.section
        className="highlight"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.02 }}
        style={{
          background: "linear-gradient(90deg, #fff3cd, #ffecb3)",
          padding: "4rem 3rem",
          textAlign: "center",
          borderRadius: "0",
          width: "100%",
        }}
      >
        <h2 style={{ color: "#795548", fontSize: "2.2rem" }}>
          Discover Your Dosha
        </h2>
        <p
          style={{
            color: "#3f3f3f",
            fontSize: "1.2rem",
            maxWidth: "950px",
            margin: "1.5rem auto",
            lineHeight: "1.8",
          }}
        >
          Your Dosha defines your energy blueprint — whether creative and airy
          like Vata, fiery and ambitious like Pitta, or calm and grounded like
          Kapha. Understand it to create lasting balance in your life.
        </p>
        <Link
          to="/doshas"
          className="btn btn-primary"
          style={{
            background: "linear-gradient(90deg, #ff7043, #ff5722)",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: "30px",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Read More
        </Link>
      </motion.section>

      {/* Footer Text */}
      <p
        style={{
          textAlign: "center",
          padding: "3rem 0",
          color: "#555",
          fontSize: "1rem",
          width: "100%",
          marginBottom: 0,
          background: "#f7f7f7",
        }}
      >
        Ayurveda is not just medicine — it’s a way of living in tune with nature and the self.
      </p>
    </section>
  );
}
