const Projects = [
  {
  name: "Weather App",
  description: "A production-ready weather application built with React, TypeScript, and Tailwind CSS, featuring dynamic condition-aware backgrounds and animations that adapt to real-time weather data. Integrates WeatherAPI's RESTful endpoints to display current conditions, hourly forecasts, and 7-day trends, while leveraging local storage to cache favorite and recent cities — cutting redundant API calls by ~70%.",
  liveUrl: "https://weather-app-five-flax-f91t56nqty.vercel.app/",
  githubUrl: null,
  technologies: ["react", "typescript", "tailwind"]
},
{
  name: "Common Ground",
  description: "A full-stack AI debate platform built with React and Flask, where users can watch AI models argue head-to-head or jump in for a user-vs-AI showdown. Features a typewriter rendering system for real-time SSE streaming, a Zustand state machine managing debate phases end-to-end, and customizable debater personas controlling tone, stance, and argument style. The Claude API powers both AI responses and an automated judge that scores arguments, flags standout moments, and tracks momentum throughout.",
  liveUrl: "https://common-ground-orpin.vercel.app/",
  githubUrl: null,
  technologies: ["react", "claude", "flask", "python", "tailwind"]
},
{
  name: "API Design",
  description: "A RESTful API built with Node.js, Express, PostgreSQL, and Prisma for managing user and product activity logs, featuring full CRUD endpoints with robust input validation and error handling. Authentication is secured using JWTs and password hashing via reusable middleware, while a schema-first data layer with versioned migrations and a typed ORM client ensures predictable queries and safer refactors — all backed by a Jest and SuperTest suite achieving 90% coverage.",
  liveUrl: null,
  githubUrl: "https://github.com/Ekene-Azubuko/api-design",
  technologies: ["node", "postgresql", "prisma", "express", "jest"]
},
{
  name: "Hierarchical Todo List",
  description: "A full-stack productivity application built with Python Flask and React, featuring a REST API that handles user authentication, task management, and list organization — backed by comprehensive test coverage across core features. The React frontend delivers a responsive UI with dynamic dialogs for creating and managing nested todo lists and tasks, with full CRUD operations and the ability to move tasks between lists fluidly.",
  liveUrl: null,
  githubUrl: "https://github.com/Ekene-Azubuko/todo-list-app",
  technologies: ["flask", "react", "javascript", "sqlalchemy"]
},
{
  name: "VidIntel",
  description: "An AI-powered video intelligence tool built on Cloudflare's developer platform, allowing users to ask natural language questions about any YouTube video and get grounded, context-aware answers. Fetches and splits transcripts into overlapping chunks, embeds them via Cloudflare Workers AI, and stores vectors in Cloudflare Vectorize for semantic retrieval. A Cloudflare Workers backend orchestrates Workers AI for embeddings and Llama 3.3 70B inference, with KV caching keeping responses snappy across repeated queries.",
  liveUrl: "https://solitary-bush-9035.azubuko.workers.dev/",
  githubUrl: null,
  technologies: ["typescript", "cloudflare", "llama"]
},
  {
    name: "AFII Website",
    description: "A responsive ReactJS website providing resources and guidance to help foreigners seamlessly integrate into new communities, serving hundreds of residents across San Francisco. Integrates data from 35+ organizations via a Supabase PostgreSQL database, coordinated collaboratively with team members to ensure comprehensive community coverage. Features a real-time search suggestion system built with React Hooks for instant data filtering and faster access to relevant resources.",
    liveUrl: "https://afii.us/",
    githubUrl: null,
    technologies: ['react', 'javascript', 'postgres', 'css']
  },
  {
    name: "Ping Pong Game",
    description: "A classic ping pong game built with Python and Pygame, designed for extended play sessions without losing engagement. Features a terminal-launched interface with smooth paddle controls and responsive ball physics for a clean two-player experience.",
    liveUrl: null,
    githubUrl: "https://github.com/Ekene-Azubuko/Ping-pong",
    technologies: ['python', 'pygame']
  },
  {
    name: "Sentiment Model",
    description: "A Python-based sentiment classification model trained on 5 million Amazon grocery and gourmet food reviews to categorize customer sentiment as positive or negative. Built using scikit-learn's logistic regression with comprehensive data preprocessing, achieving 90% classification accuracy. Includes an interactive console interface for real-time sentiment prediction and user input processing.",
    liveUrl: null,
    githubUrl: "https://github.com/Ekene-Azubuko/ML-sentiment-Analysis",
    technologies: ['python', 'sklearn']
  },
  {
    name: "Memory Mosaic",
    description: "A flashcard web application built with React, Node.js, Express, and MongoDB, designed around evidence-based learning techniques to enhance student retention and study efficiency. A RESTful API connects the React frontend to a MongoDB database modeled with Mongoose ODM, optimizing query times by structuring relationships between user details and flashcard data. User authentication is handled via PassportJS, streamlining registration to under a minute while ensuring robust data protection.",
    liveUrl: "https://memory-mosaic-dynamic.vercel.app/",
    githubUrl: null,
    technologies: ['react', 'node', 'mongodb', 'express', 'css']
  },
]

export default Projects
