# Ankit Kumar – Modern React Portfolio

A visually stunning, fully responsive, and animated developer portfolio built with **React** and **Tailwind CSS**. Features advanced UI/UX patterns, dark/light mode, glassmorphism, 3D effects, and smooth animations.

---

## ✨ Features

- **Modern UI/UX**: Glassmorphism, gradients, 3D/tilt, and animated effects throughout.
- **Dark & Light Mode**: Toggle with smooth transitions, default to dark mode.
- **Fully Responsive**: Mobile-first, adapts to all screen sizes.
- **Animated Navbar**: Gradient logo, animated links, theme toggle, and mobile menu.
- **Hero Section**: Animated intro, typewriter effect, and call-to-action.
- **About Section**: Profile image, bio, and highlights.
- **Projects Section**: 3D glass cards, animated gradient borders, fade-in, and interactive links.
- **Skills Section**: Animated icons (spin, bounce, pulse), glowing skill names, and staggered entrance.
- **Testimonials Section**: Glassmorphism, animated avatar rings, and fade-in cards.
- **Contact Section**: Glassy form, animated send button, and social/contact links.
- **Footer**: Animated links, gradient backgrounds, and copyright.
- **PWA Ready**: Manifest, icons, and offline support.
- **Accessible & SEO-friendly**: Semantic HTML, alt text, and meta tags.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/portfolio-frontend.git
cd portfolio-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

- **React 19**
- **Tailwind CSS 3** (with custom colors, keyframes, and dark mode)
- **React Icons**
- **PostCSS & Autoprefixer**
- **Create React App** (base setup)

---

## 🖼️ Project Structure

```
src/
  components/      # Navbar and shared UI
  sections/        # Hero, About, Projects, Skills, Testimonials, Contact, Footer
  assets/          # Images, icons, and logos
  index.js         # Entry point
  index.css        # Tailwind and global styles
public/
  resume.pdf       # Downloadable resume (replace with your own)
  favicon.ico, manifest.json, logo192.png, logo512.png
```

---

## 🌗 Dark Mode

- Default: **Dark mode enabled**
- Toggle: Use the button in the navbar to switch themes
- Implementation: Uses Tailwind's `darkMode: 'class'` and toggles the `dark` class on `<html>`

---

## 📝 Customization

- **Profile & Images**: Replace images in `src/assets/` and update your info in the relevant section files.
- **Resume**: Replace `public/resume.pdf` with your own.
- **Colors & Animations**: Edit `tailwind.config.js` for custom palettes and keyframes.
- **Content**: Update text and links in each section as needed.

---

## 📦 Build & Deploy

```bash
npm run build
```
Deploy the contents of the `build/` folder to your favorite static host (Vercel, Netlify, GitHub Pages, etc).

---

## 📄 License

---

## 🙋‍♂️ Credits

Built by [Ankit Kumar](mailto:ankitsingh7310756664@gmail.com).
