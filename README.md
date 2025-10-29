Ayurvedic Prakriti Analyzer
Ayurvedic Prakriti Analyzer is an interactive React-based wellness platform that helps users explore the world of **Ayurveda**, understand the **Three Doshas (Vata, Pitta, and Kapha)**, and discover their **dominant Prakriti type** through an engaging self-assessment quiz.

It beautifully merges **ancient Indian health science** with **modern UI/UX design**, using animations, color psychology, and seamless navigation to create a calm, mindful user experience.

Objective
To create an intuitive digital platform that allows users to:
- Learn about Ayurveda and the **Five Elements** (*Pancha Mahabhutas*).  
- Discover their **Prakriti type** (Vata, Pitta, or Kapha) through a personalized quiz.  
- Understand **character traits, lifestyle balance, and strengths**.  
- Experience an elegant interface with motion-based storytelling.

Core Features
Prakriti Assessment (Quiz)
- Interactive **multiple-choice questionnaire** based on physical, mental, and lifestyle traits.  
- Smooth animated transitions built with **Framer Motion**.  
- **Algorithm-based scoring** to identify dominant dosha.  
- Displays **personalized results** with insights and suggestions.  

Ayurveda Section
- Explains **Ayurveda’s five foundational elements** – Earth, Water, Fire, Air, and Ether.  
- Full-width layout with **animated element cards** and calm earthy tones.  
- Simple, educational, and responsive UI design.

Doshas Section
- Richly designed **zig-zag layout** showing Vata, Pitta, and Kapha.  
- Alternating content–image alignment for an engaging scroll pattern.  
- Each dosha highlighted with its **own color theme** (sky blue, amber, green).  
- “Read More” navigation to detailed dosha page.

Result Dashboard
- Animated results with **background color changing** dynamically based on dosha.  
- Displays **dominant Prakriti**, score distribution, and result explanation.  
- **Buttons** for “Retake Quiz” and “Learn More”.  
- Fully responsive with Framer Motion effects.

Smooth Navigation
- Navbar links for **Home**, **Ayurveda**, **Doshas**, **Quiz**, and **About**.
- **React Scroll** for smooth in-page navigation.  
- Component reusability – same sections appear on both **Home** and dedicated pages.  
- Soft transitions, rounded shapes, and wellness color palette.

  
Tech Stack
| **Layer**                 | **Technology Used**                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| **Frontend**              | React 18, JavaScript (ES6+)                                                                    |
| **Routing**               | React Router DOM                                                                               |
| **Animations**            | Framer Motion, React Scroll                                                                    |
| **Styling**               | Custom CSS3 with gradient themes, earthy Ayurvedic color palette, and fully responsive layouts |
| **Build Tool**            | Create React App (CRA)                                                                         |
| **Version Control**       | Git & GitHub                                                                                   |
| **Deployment (Optional)** | Vercel / GitHub Pages                                                                          |


System Module
| **Module**             | **Description**                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ayurveda Module**    | Displays the five natural elements (Earth, Water, Fire, Air, Ether) with animations, background transitions, and descriptive cards.               |
| **Dosha Module**       | Showcases **Vata**, **Pitta**, and **Kapha** sections in a zig-zag pattern with alternating image–text layouts and color themes.                  |
| **Quiz Engine**        | Handles the Prakriti questionnaire, manages question flow, records user responses, calculates dosha scores, and determines the dominant Prakriti. |
| **Result Dashboard**   | Dynamically displays the user’s Prakriti type with visual animations, score breakdowns, and navigation buttons for retake or learn more.          |
| **Navigation Module**  | Provides smooth transitions across **Home**, **Ayurveda**, **Doshas**, **Quiz**, and **About** pages using React Router DOM and React Scroll.     |
| **UI/Animation Layer** | Enhances overall user experience with **Framer Motion** animations such as fade, slide, and scale effects for a fluid visual flow.                |


Key Screens
| **Page**             | **Description**                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Home Page**     | Landing section introducing Ayurveda with navigation to Ayurveda and Dosha sections using smooth scroll.                |
| **Ayurveda Page** | Presents the **Five Elements** of Ayurveda with animated cards and soothing gradients.                                  |
| **Doshas Page**   | Features a **zig-zag animated layout** with alternating images and content explaining each dosha type.                  |
| **Quiz Page**     | Interactive multiple-choice quiz that determines the user’s dominant Prakriti type.                                     |
| **Result Page**   | Displays the user’s dominant dosha (Vata, Pitta, or Kapha) with animations, background color change, and score summary. |
| **About Page**    | Provides the historical, philosophical, and holistic background of Ayurveda with elegant visuals.                       |

Installation & Setup
1️⃣ Clone the repository  
git clone https://github.com/<your-username>/Ayurvedic-Prakriti-Analyzer.git
cd Ayurvedic-Prakriti-Analyzer

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm start
The app will start at:
http://localhost:3000

4️⃣ Build for production
npm run build

Future Enhancements
| **Feature**            | **Description**                                       |
| ---------------------- | ----------------------------------------------------- |
| Personalized Tips      | Lifestyle, food, and yoga suggestions for each dosha. |
| Downloadable Plan      | Export user’s wellness summary as a PDF.              |
| Dosha Balance Chart    | Graphical representation (pie or radar chart).        |
| Daily Routine Alerts   | Reminder notifications for dinacharya.                |
| Multi-Language Support | English, Hindi, and regional language options.        |
| AI Recommendations     | Smart suggestions for mood and activity tracking.     |

Conclusion
The Ayurvedic Prakriti Analyzer bridges ancient wellness science with modern digital design.
It is not just a web app — it’s a journey of self-awareness, empowering users to live in harmony with their natural constitution.

“Health is a state of harmony between body, mind, and environment.” – Ayurveda

License
This project is licensed under the MIT License.
See the LICENSE file for more details.
