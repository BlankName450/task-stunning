# 🌟 Stunning AI Website Builder

A full-stack web application that generates beautiful, professional websites using AI-powered content generation.

## ✨ Features

- **AI-Powered Content Generation**: Uses Together.ai API to generate relevant content for any website idea  
- **Professional Image Integration**: Fetches high-quality images from the Unsplash API  
- **Real-time Preview**: Instantly view generated websites in a live, interactive preview  
- **Code Export**: Get production-ready HTML/CSS code for your generated website  
- **Responsive Design**: Modern UI that looks great on all screen sizes  
- **Brand Name Generation**: AI automatically generates catchy, brandable names  

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS  
- **Backend**: NestJS, TypeScript  
- **Database**: MongoDB with Mongoose  
- **AI Services**: Together.ai API, Unsplash API  
- **Styling**: Tailwind CSS with custom animations  

## 📁 Project Structure

```
task/
├── frontend/          # Next.js application
│   ├── app/           # App Router components
│   ├── tailwind.config.js
│   └── package.json
└── backend/           # NestJS API
    ├── src/
    │   ├── section/   # Business logic
    │   └── app.module.ts
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- API keys for Together.ai and Unsplash

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BlankName450/task-stunning.git
   cd task-stunning
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Add your API keys to the .env file
   npm run start:dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000  
   - Backend: http://localhost:4000  

## 🎯 Usage

1. Enter a website idea (e.g., "Bakery", "Toys", "Fitness")  
2. Click **Generate** to let AI create the content and fetch images  
3. Explore beautifully designed website sections  
4. Click **View Code** to see the HTML/CSS  
5. Click **View Full Page** to preview the full website  

## 🔐 Environment Variables

### Backend `.env`
```env
UNSPLASH_ACCESS_KEY=your_unsplash_key
TOGETHER_API_KEY=your_together_ai_key
MONGODB_URI=mongodb://localhost:27017/stunning-ai-site-builder
```

## 🧠 Features in Detail

### 🔹 AI Content Generation
- Creates Hero, About, and Contact sections
- Suggests catchy brand names
- Produces engaging, relevant text for your industry

### 🖼️ Image Integration
- Fetches high-quality, relevant images from Unsplash
- Fully responsive and optimized image handling

### 💻 Code Generation
- Exports clean, semantic HTML and Tailwind CSS
- Includes responsive design and smooth scrolling navigation
- Adheres to modern web design best practices

### 🎨 User Experience
- Beautiful loading animations and smooth transitions
- Mobile-friendly and accessible
- Helpful error messages and fallback states

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch:  
   ```bash
   git checkout -b feature/AmazingFeature
   ```  
3. Commit your changes:  
   ```bash
   git commit -m "Add AmazingFeature"
   ```  
4. Push to your branch:  
   ```bash
   git push origin feature/AmazingFeature
   ```  
5. Open a Pull Request  

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Together.ai](https://together.ai) – AI content generation  
- [Unsplash](https://unsplash.com) – Free, high-quality images  
- [Next.js](https://nextjs.org) – React framework for modern web apps  
- [NestJS](https://nestjs.com) – Scalable backend architecture  
- [Tailwind CSS](https://tailwindcss.com) – Utility-first styling framework  

---

Built with ❤️ using AI-assisted development.



