# 🚀 Quick Start Guide

## Portfolio Website sudah siap digunakan! ✅

### ⚡ Cara Menjalankan (Sangat Mudah!)

1. **Buka Terminal/PowerShell di folder project ini**

2. **Jalankan perintah:**
   ```bash
   npm run dev
   ```

3. **Buka browser dan akses:**
   - **http://localhost:3000** (atau port lain jika 3000 sedang digunakan)

4. **Selesai!** Website Anda sudah running! 🎉

---

## 📋 Status Project

✅ Next.js 15 - **Terinstall**  
✅ React 18 - **Terinstall**  
✅ TypeScript - **Terinstall**  
✅ Tailwind CSS - **Terinstall**  
✅ Semua Components - **Dibuat**  
✅ Scroll Effects - **Aktif**  
✅ Animations - **Berfungsi**  
✅ Responsive Design - **Siap**

---

## 🎨 Fitur yang Sudah Ada

### 1. **Hero Section** (Home)
- Animated gradient background dengan parallax
- Profile image dengan rotating border
- Call-to-action buttons
- Scroll indicator

### 2. **About Section**
- Personal description
- Statistics cards (Years, Projects, Clients)
- Floating cards dengan animasi
- Fade-in effect saat scroll

### 3. **Skills Section**
- 8 Skill cards dengan icons
- Animated progress bars
- Percentage display
- Hover effects yang smooth

### 4. **Contact Section**
- Working contact form dengan validation
- Contact information cards
- Social media links
- Form submission feedback

### 5. **Navigation**
- Sticky navigation bar
- Active section highlighting
- Smooth scroll ke section
- Glass morphism effect saat scroll

---

## ✏️ Kustomisasi Cepat

### Ubah Nama & Info Pribadi

**File: `components/HeroSection.tsx` (Line ~56)**
```tsx
<span className="gradient-text">Your Name</span>  // ← Ganti dengan nama Anda
```

**File: `components/ContactSection.tsx` (Line ~73-85)**
```tsx
<p className="text-gray-400">your.email@example.com</p>  // ← Ganti email
<p className="text-gray-400">+1 (555) 123-4567</p>       // ← Ganti phone
<p className="text-gray-400">San Francisco, CA</p>       // ← Ganti lokasi
```

### Ubah Skills

**File: `components/SkillsSection.tsx` (Line ~11-20)**
```tsx
const skills: Skill[] = [
  { name: 'React', level: 90, icon: '⚛️' },
  // Tambah atau edit skill di sini
]
```

### Ubah Warna Theme

**File: `tailwind.config.ts` (Line ~10-12)**
```tsx
colors: {
  primary: '#6366f1',    // Biru-ungu
  secondary: '#8b5cf6',  // Ungu
  accent: '#ec4899',     // Pink
}
```

---

## 🎯 Perintah Penting

```bash
# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Jalankan production server
npm start

# Linting code
npm run lint
```

---

## 🌐 Deploy ke Internet (Gratis!)

### Option 1: Vercel (Recommended)
1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository Anda
4. Klik Deploy - **Selesai!**

### Option 2: Netlify
1. Build project: `npm run build`
2. Buka [netlify.com](https://netlify.com)
3. Drag & drop folder `.next` 
4. **Website live!**

---

## 🎨 Preview Sections

```
┌─────────────────────────────┐
│     🏠 HOME/HERO            │
│  - Animated Background      │
│  - Profile Image            │
│  - CTA Buttons              │
└─────────────────────────────┘
           ↓
┌─────────────────────────────┐
│     👤 ABOUT                │
│  - Bio Text                 │
│  - Statistics               │
│  - Floating Cards           │
└─────────────────────────────┘
           ↓
┌─────────────────────────────┐
│     💼 SKILLS               │
│  - Skill Cards              │
│  - Progress Bars            │
│  - Hover Effects            │
└─────────────────────────────┘
           ↓
┌─────────────────────────────┐
│     📧 CONTACT              │
│  - Contact Form             │
│  - Contact Info             │
│  - Social Links             │
└─────────────────────────────┘
```

---

## 💡 Tips & Tricks

### 1. **Ganti Profile Picture**
Tambahkan gambar Anda di `public/profile.jpg` lalu edit `HeroSection.tsx`:
```tsx
<img src="/profile.jpg" alt="Profile" className="w-full h-full rounded-full" />
```

### 2. **Tambah Section Baru**
- Buat file component baru di folder `components/`
- Import di `app/page.tsx`
- Tambahkan id section di navigation array

### 3. **Ubah Animasi**
Edit file `tailwind.config.ts` untuk custom animations atau `app/globals.css` untuk keyframes

### 4. **Dark/Light Mode**
Tambahkan `dark:` prefix di Tailwind classes untuk theme switching

---

## 🐛 Troubleshooting

**Q: Port 3000 sudah digunakan?**  
A: Next.js otomatis akan menggunakan port 3001, 3002, dst.

**Q: Error saat npm run dev?**  
A: Coba hapus folder `.next` dan `node_modules`, lalu run `npm install` ulang.

**Q: Styling tidak muncul?**  
A: Pastikan Tailwind sudah configure dengan benar di `tailwind.config.ts`

**Q: TypeScript error?**  
A: Run `npm install --save-dev typescript @types/react @types/node`

---

## 📞 Support

Jika ada pertanyaan atau issue:
1. Cek file `README.md` untuk dokumentasi lengkap
2. Periksa console browser untuk error messages
3. Pastikan semua dependencies terinstall dengan `npm install`

---

**Selamat! Website portfolio Anda sudah siap! 🎉**

Silakan jalankan `npm run dev` dan buka http://localhost:3000

Happy Coding! 💻✨
