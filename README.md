# Ruthvika Kosuri - Personal Portfolio

A modern, responsive portfolio website built with React, TailwindCSS, and featuring an AI-powered chatbot assistant.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Animated particle background and typewriter effects
- **AI Chatbot**: Integrated AI assistant powered by Together AI that answers questions about my background
- **Multiple Pages**: Organized sections for Home, Experience, Education, Projects, and Resume
- **Project Showcase**: Engaging project presentations with catchy taglines
- **Resume Download**: Option to download ML and Software Engineering focused resumes

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/       # Reusable components
│   │   ├── ChatBot.jsx   # AI chatbot interface
│   │   ├── Navbar.jsx    # Navigation bar
│   │   ├── ParticleBackground.jsx  # Animated background
│   │   └── TypeWriter.jsx # Typewriter text effect
│   ├── data/
│   │   └── portfolioData.js  # All portfolio information
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Landing page
│   │   ├── Experience.jsx # Work experience
│   │   ├── Education.jsx  # Academic background
│   │   ├── Projects.jsx   # Project showcase
│   │   └── Resume.jsx     # Resume viewer
│   ├── App.jsx          # Main app component
│   └── index.css        # Global styles with Tailwind
```

## 🛠️ Setup Instructions

1. **Clone the repository** (or navigate to the project directory)
```bash
cd /Users/ruthvikakosuri/Desktop/personal_portfolio/portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Together AI API key**
   - Sign up for a free API key at [Together AI](https://api.together.xyz/)
   - Create a `.env` file in the root directory:
```bash
cp .env.example .env
```
   - Add your API key to the `.env` file:
```
VITE_TOGETHER_API_KEY=your_actual_api_key_here
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open in browser**
   - Visit `http://localhost:5173` to see your portfolio

## 🎨 Customization

- **Update Information**: Edit `src/data/portfolioData.js` to update your personal information, projects, experience, etc.
- **Styling**: Modify `tailwind.config.js` for theme customization
- **Colors**: The site uses a blue-purple gradient theme that can be adjusted in the Tailwind config

## 🚀 Deployment

To build for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 💡 Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **Together AI** - AI chatbot API

## 📝 Note

Remember to keep your API keys secure and never commit them to version control. The `.env` file is already in `.gitignore` to prevent accidental commits.
