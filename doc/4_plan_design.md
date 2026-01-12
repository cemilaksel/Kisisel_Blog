# 📐 4. Plan & Design - Nasıl bir mimari?

## 🏛 Katmanlı Mimari (MVC)

### 🧩 Model (Veri Katmanı)
`constants.ts` ve `types.ts` dosyaları sistemin hafızasıdır.
- Veri statik olarak tutulur ancak gelecekte bir API'ye bağlanmaya hazır yapıdadır.
- SRP kuralı gereği, veri sadece `types.ts` içinde tanımlanan şablona uygun olabilir.

### 🧩 Controller (Mantık Katmanı)
`usePortfolio.ts` bir "Custom Hook" olarak görev yapar.
- Veriyi Model'den çeker, loading durumunu yönetir.
- Dış dünyaya (View) sadece gerekli veri ve aksiyonları (Actions) açar.

### 🧩 View (Sunum Katmanı)
`components/` klasörü altındaki dosyalar "Pure/Dumb Components" mantığıyla çalışır.
- Kendilerine verilen `props` dışında bir şey bilmezler.
- Stil yönetimi Tailwind CSS ile bileşen seviyesinde izole edilmiştir.

## 🎨 Tasarım Kararları
- **Arka Plan:** `modern-gradient` (Açık mavi tonları ile kurumsal güven).
- **Efektler:** `backdrop-blur-md` ile kartların arka planla yumuşak birleşimi.
- **Tipografi:** "Inter" fontu; modern, teknik ve okunabilir bir karakter sağlar.