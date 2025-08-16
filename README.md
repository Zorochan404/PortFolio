# 🚀 Jyotirmoy's Portfolio

A modern, interactive portfolio website built with Next.js, featuring stunning 3D animations, interactive guestbook, and responsive design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-black?style=for-the-badge)

## ✨ Features

### 🎨 **Visual Design**
- **Dark Theme** with elegant stone color palette
- **3D Orb Background** with interactive hover effects
- **Smooth Animations** powered by Framer Motion
- **Responsive Layout** optimized for all devices
- **Glass Morphism** effects with backdrop blur

### 🔐 **Authentication System**
- **Google OAuth** integration
- **GitHub OAuth** integration
- **NextAuth.js** for secure authentication
- **Session management** with persistent login

### 💬 **Interactive Guestbook**
- **Real-time messaging** system
- **User authentication** required for posting
- **Provider badges** (Google/GitHub)
- **Responsive design** with pagination
- **Database integration** with NeonDB + Drizzle ORM

### 🎯 **Portfolio Sections**
- **Hero Section** with animated text and 3D elements
- **Projects Showcase** with featured and freelance badges
- **Skills & Technologies** with interactive displays
- **Contact Form** with modern styling
- **About Section** with personal information

### 🛠 **Technical Features**
- **TypeScript** for type safety
- **Next.js 15** with App Router
- **Tailwind CSS 4** for styling
- **Framer Motion** for animations
- **Three.js** for 3D graphics
- **PostgreSQL** database with NeonDB
- **Drizzle ORM** for database management

## 🚀 Live Demo

**🌐 [View Live Portfolio]([https://jyotirmxy.vercel.app/])**

## 📱 Screenshots

<details>
<summary>🖥️ Desktop View</summary>

![Desktop View](https://via.placeholder.com/800x500/1f2937/ffffff?text=Desktop+Portfolio+View)

</details>

<details>
<summary>📱 Mobile View</summary>

![Mobile View](https://via.placeholder.com/400x700/1f2937/ffffff?text=Mobile+Portfolio+View)

</details>

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15.4.6** - React framework with App Router
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library

### **3D & Graphics**
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **OGL** - WebGL library for graphics

### **Backend & Database**
- **NextAuth.js** - Authentication framework
- **NeonDB** - Serverless PostgreSQL
- **Drizzle ORM** - Type-safe database toolkit

### **Deployment & Hosting**
- **Vercel** - Platform for Next.js deployment
- **GitHub** - Version control and hosting

## 📦 Installation

### **Prerequisites**
- Node.js 18+ 
- npm, yarn, or pnpm
- NeonDB account (for database)

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### **2. Install Dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

### **3. Environment Setup**
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@hostname/database?sslmode=require"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_ID="your-google-client-id"
GOOGLE_SECRET="your-google-client-secret"
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"
```

### **4. Database Setup**
```bash
# Generate database schema
npm run db:generate

# Push schema to database (development)
npm run db:push

# Or run migrations (production)
npm run db:migrate
```

### **5. Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Commands

```bash
# Generate new migration
npm run db:generate

# Push schema changes to database
npm run db:push

# Run migrations
npm run db:migrate

# Open Drizzle Studio (database viewer)
npm run db:studio
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── card.glb          # 3D card model
│   ├── lanyard.png       # Lanyard texture
│   └── ...               # Other assets
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── contact/      # Contact page
│   │   ├── guestbook/    # Guestbook page
│   │   ├── projects/     # Projects page
│   │   └── layout.tsx    # Root layout
│   ├── component/         # React components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # UI components
│   ├── db/               # Database configuration
│   │   ├── schemas.ts    # Drizzle schemas
│   │   └── index.ts      # Database connection
│   ├── services/         # Business logic
│   └── styles/           # Global styles
├── drizzle.config.ts      # Drizzle configuration
└── package.json           # Dependencies
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npm run db:generate      # Generate migrations
npm run db:push          # Push schema to database
npm run db:migrate       # Run migrations
npm run db:studio        # Open database viewer
```

## 🌟 Key Features Explained

### **3D Orb Background**
- Interactive 3D sphere with hover effects
- Smooth rotation and color transitions
- Responsive to user interactions

### **Interactive Guestbook**
- Real-time messaging with authentication
- Support for Google and GitHub login
- Persistent data storage with PostgreSQL
- Modern UI with smooth animations

### **Projects Showcase**
- Featured and freelance project badges
- Technology stack display
- Responsive grid layout
- Hover effects and animations

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy automatically

### **Other Platforms**
- **Netlify** - Static site hosting
- **Railway** - Full-stack deployment
- **DigitalOcean** - VPS deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment
- **Three.js Community** for 3D graphics support
- **Tailwind CSS** for the utility-first CSS approach



⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Jyotirmoy]
