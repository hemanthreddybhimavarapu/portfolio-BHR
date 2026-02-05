# Paul Sunny - MERN Stack Developer Portfolio

A premium, high-performance portfolio website built with modern web technologies. This project showcases technical expertise in the MERN stack through a sophisticated, interactive, and fully responsive user interface.

## 🚀 Live Demo
[View Portfolio](https://your-portfolio-link.vercel.app/)

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Contact Service**: [EmailJS](https://www.emailjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## ✨ Key Features

- **Dynamic Hero Section**: Interactive background ripple effects with a premium profile presentation.
- **Interactive Experience Timeline**: A custom-built vertical timeline featuring scroll-linked progress and dual-column layouts (Technical vs. Academic).
- **Responsive Project Carousel**: A touch-friendly, paginated carousel that adjusts item counts based on device size.
- **Advanced Skills Grid**: High-end hover effects on skill cards with direct links to official documentation for each technology.
- **Bento-style Services**: Modern grid layout for services with spotlight effects and interactive cards.
- **Theme Synchronization**: Seamless dark and light mode transitions with a focus on a "Pure Black" dark theme.
- **Contact Form**: Fully functional contact form integrated with EmailJS for direct communication.

## 📁 Project Structure

```bash
├── app/                  # App router pages and layouts
├── components/           # UI components
│   ├── Home/             # Section-specific components (Hero, Skills, Projects, etc.)
│   └── ui/               # Reusable atomic UI components (Bento, Ripple, etc.)
├── lib/                  # Utility functions and contexts
├── public/               # Static assets (images, profile photo, resume)
└── next.config.ts        # Configuration for image domains and build settings
```

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/paulsunny90/my-portfolio.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` or update the keys in `components/Home/contact/contact.tsx` for EmailJS:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## 📄 License

This project is licensed under the MIT License.
