# 🚀 8. Deploy - Canlıya nasıl alırız?

## 📦 Dağıtım Adımları
1. **Kod Analizi:** `npm run lint` ile kod standartları kontrol edilir.
2. **Derleme (Build):** `npm run build` ile dosyalar tarayıcıların en hızlı okuyabileceği hale getirilir.
3. **Yayınlama (Hosting):**
   - Statik dosyalar Vercel, Netlify veya GitHub Pages üzerine yüklenir.
   - Projenin `index.html` dosyasının ana giriş noktası olduğu teyit edilir.

## 🔧 Bakım & Güncelleme
- Cemil Bey yeni bir işe başladığında veya yeni bir AI sertifikası aldığında sadece `constants.ts` (Model) dosyası güncellenir.
- Otomatik CI/CD süreçleri sayesinde kod her `push` edildiğinde canlı site saniyeler içinde güncellenir.