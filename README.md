# 🎨 Modern Portfolio Website - Next.js

Portfolio website yang stunning dan interaktif, dibangun dengan **Next.js 15**, **TypeScript**, dan **Tailwind CSS**, menampilkan smooth scrolling effects, animasi yang elegan, dan desain modern dark theme.

## ✨ Fitur Utama

- **🎯 Next.js 15** - Framework React terbaru dengan App Router
- **📘 TypeScript** - Type-safe development
- **🎨 Tailwind CSS** - Utility-first CSS framework
- **✨ Smooth Scrolling** - Transisi halus antar section
- **🌊 Parallax Effects** - Animasi parallax yang indah
- **👁️ Intersection Observer** - Animasi fade-in saat scroll
- **📊 Animated Skill Bars** - Progress bar yang teranimasi
- **💫 Floating Elements** - Kartu floating dengan animasi
- **📱 Fully Responsive** - Sempurna di semua ukuran device
- **📧 Contact Form** - Form kontak dengan validasi

## 🚀 Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

### 3. Buka di Browser

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

Website akan otomatis reload saat Anda melakukan perubahan!

## 📁 Struktur Project

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout dengan metadata
│   ├── page.tsx            # Homepage dengan semua section
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Navigation.tsx      # Navbar dengan scroll detection
│   ├── HeroSection.tsx     # Hero/Profile section
│   ├── AboutSection.tsx    # About section dengan stats
│   ├── SkillsSection.tsx   # Skills dengan progress bars
│   ├── ContactSection.tsx  # Contact form & info
│   └── Footer.tsx          # Footer component
├── package.json
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Kustomisasi

### Update Informasi Pribadi

**Di `components/HeroSection.tsx`:**
- Ganti "Your Name" dengan nama Anda
- Update subtitle dan deskripsi
- Ganti emoji profile (👨‍💻) dengan yang Anda inginkan

**Di `components/AboutSection.tsx`:**
- Edit paragraf about untuk deskripsi diri Anda
- Update angka statistik (Years Experience, Projects, Clients)

**Di `components/SkillsSection.tsx`:**
- Tambah/kurangi skill di array `skills`
- Ganti nama skill, level (0-100), dan icon emoji

**Di `components/ContactSection.tsx`:**
- Update email, phone, dan lokasi Anda
- Modifikasi link social media (GitHub, LinkedIn, Twitter)

### Ubah Warna

**Di `tailwind.config.ts`:**

```typescript
colors: {
  primary: '#6366f1',    // Warna utama
  secondary: '#8b5cf6',  // Warna sekunder
  accent: '#ec4899',     // Warna aksen
}
```

## 🎭 Efek & Animasi

### Scroll Effects
- **Parallax di Hero**: Background bergerak dengan kecepatan berbeda
- **Fade-in Animations**: Section muncul saat di-scroll
- **Active Navigation**: Nav link highlight sesuai section aktif
- **Smooth Scroll**: Klik nav untuk transisi halus

### Interactive Elements
- **Hover Transformations**: Kartu terangkat dan bercahaya saat hover
- **Skill Animations**: Progress bar teranimasi saat tampil
- **Form Validation**: Form kontak dengan validasi built-in
- **Floating Cards**: Kartu yang melayang dengan animasi

### React Hooks Digunakan
- `useState` - State management untuk form dan scroll
- `useEffect` - Setup scroll listeners dan observers
- `useRef` - Referensi DOM elements untuk animasi
- `IntersectionObserver` - Deteksi kapan element terlihat

## 📱 Responsive Breakpoints

- **Desktop**: Layout penuh dengan semua fitur (> 768px)
- **Tablet**: Grid layout yang disesuaikan (640px - 768px)
- **Mobile**: Single column, touch-optimized (< 640px)

## 🛠️ Commands Lainnya

```bash
# Build untuk production
npm run build

# Jalankan production build
npm start

# Linting
npm run lint
```

## 🌐 Deploy

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis!

### Deploy ke Netlify

1. Build project: `npm run build`
2. Upload folder `.next` ke Netlify
3. Configure redirects untuk Next.js

## 🎨 Tech Stack

- **Next.js 15** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Intersection Observer API** - Scroll Animations

## 📄 Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm start` - Jalankan production server
- `npm run lint` - Linting code

## 🙏 Credits

Dibuat dengan ❤️ menggunakan:
- Next.js
- React 18
- TypeScript
- Tailwind CSS

---

**Siap untuk showcase karya Anda?** 🚀 

Jalankan `npm install` lalu `npm run dev` dan mulai kustomisasi!
