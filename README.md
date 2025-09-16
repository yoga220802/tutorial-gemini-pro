# Tutorial Gemini Pro

Panduan interaktif & modern untuk membantu mahasiswa melakukan verifikasi dan mengaktifkan Google / Gemini (Google One AI Pro) dengan UI yang smooth, responsif, dan berfokus pada experience.

## ✨ Fitur Utama
- Next.js 15 (App Router)
- Tailwind CSS v4 (utility-first styling)
- Framer Motion (animasi halus: scroll progress bar, reveal, hover, modal)
- Fullscreen image modal (klik gambar langkah)
- Scroll progress bar (indikator seberapa jauh halaman dibaca)
- Komponen reusable (Header, Steps, ImportantNote, CodeBlock)
- Aksesibilitas dasar (role, aria-label, Esc untuk tutup modal)
- Konfigurasi gambar eksternal (placehold.co via remotePatterns)

## 🚀 Demo Lokal
```bash
# Install dependencies
npm install

# Jalankan mode development
npm run dev

# Buka di browser
http://localhost:3000
```

## 🗂 Struktur Direktori (ringkas)
```text
src/
  app/
    page.tsx          # Halaman utama tutorial
    layout.tsx        # Root layout + metadata
  components/
    header.tsx
    ImageTutorialStep.tsx
    ImportantNote.tsx
    TutorialStep.tsx
    CodeBlock.tsx
public/
  images/             # Letakkan asset langkah (satu.jpg, dua.jpg, dst)
next.config.js        # Konfigurasi remotePatterns gambar
```

## 🧩 Menambah / Mengubah Langkah
Edit array tutorialSteps di: `src/app/page.tsx`
```ts
{
  title: "Judul Langkah",
  description: "Deskripsi jelas dan ringkas.",
  imageUrl: "/images/nama-file.jpg"
}
```
Pastikan file gambar ada di `public/images/`.  
Gambar otomatis dianimasikan & mendukung fullscreen modal.

## 🎨 Kustomisasi Cepat
| Hal | Lokasi | Catatan |
|-----|--------|---------|
| Warna gradasi judul | header.tsx | Ubah kelas `bg-gradient-to-r ...` |
| Animasi kartu langkah | ImageTutorialStep.tsx | whileHover & variants |
| Progress bar | page.tsx | Komponen motion.div fixed (scaleX) |
| Metadata SEO | app/layout.tsx | Properti `metadata` |
| Catatan penting | ImportantNote.tsx | Bisa tambah kartu baru (duplikasi motion.div) |

### Open Graph / SEO (opsional)
Tambahkan di `layout.tsx`:
```ts
export const metadata = {
  // ...existing
  openGraph: { title: "...", description: "...", images: ["/og.png"] }
};
```

## 🛠 Skrip Penting
```bash
npm run dev      # Development
npm run build    # Production build
npm start        # Jalankan hasil build
npm run lint     # (Jika ESLint ditambahkan)
```

## 📦 Deploy
Paling mudah: Vercel  
1. Push repo ke GitHub  
2. Import ke Vercel  
3. Deploy (otomatis mendeteksi Next.js)  

Alternatif: Docker (tambahkan Dockerfile sendiri bila perlu).

## ♿ Aksesibilitas
- Modal bisa ditutup: klik overlay / tombol / Esc
- Elemen interaktif punya aria-label
- Progress bar hanya dekoratif (tidak mengganggu navigasi)

## 🔍 Troubleshooting
| Masalah | Solusi |
|---------|--------|
| Gambar tidak muncul | Pastikan path `/public/images/...` benar |
| Modal tidak tertutup | Cek listener Escape & stopPropagation |
| TypeScript error di animasi | Gunakan `Variants` + easing array (bukan string) |
| Remote image blok | Tambahkan pola baru di `next.config.js` |

## 🧪 Ide Pengembangan Lanjut
- Tambah dark/light toggle
- Tambah i18n (ID / EN)
- Ekspor PDF versi singkat
- Tracking progress per user (localStorage)

## 🧱 Teknologi
Next.js • React • TypeScript • Tailwind CSS • Framer Motion • Lucide Icons

## 🤝 Kontribusi
Pull Request & issue welcome. Gunakan gaya kode yang konsisten.

## 📄 Lisensi
Gunakan bebas untuk belajar / modifikasi internal. Tambahkan file LICENSE bila ingin dipublikasikan.

## 🔗 Referensi
- https://nextjs.org
- https://tailwindcss.com
- https://www.framer.com/motion/

Selamat membangun & semoga bermanfaat.
