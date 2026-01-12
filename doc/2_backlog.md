# 📋 2. Backlog - Hangi parçaları, hangi sırada?

Geliştirme süreci **MVC** katmanlarına ve **SRP** sorumluluklarına göre önceliklendirilmiştir:

## 🏁 Aşama 1: Temeller (Model & Types)
- [x] Veri yapılarının (Interfaces) tanımlanması (`types.ts`).
- [x] Gerçek verilerin (Cemil Aksel portfolyosu) sisteme girilmesi (`constants.ts`).

## ⚙️ Aşama 2: İş Mantığı (Controller)
- [x] Veri yönetimi ve kullanıcı aksiyonlarının tanımlanması (`usePortfolio.ts`).
- [x] E-posta ve LinkedIn yönlendirme fonksiyonlarının güvenli hale getirilmesi.

## 🖼️ Aşama 3: Görselleştirme (View)
- [x] Atomik bileşenlerin SRP uyarınca oluşturulması:
  - [x] `Hero.tsx`: Profil başlık alanı.
  - [x] `Expertise.tsx`: Yetenek kartları.
  - [x] `Experience.tsx`: Kariyer zaman çizelgesi.
  - [x] `Contact.tsx`: Aksiyon butonları.
- [x] Ana sayfa orkestrasyonu ve kart yerleşimi (`App.tsx`).

## 💎 Aşama 4: Kalite & Estetik
- [x] Modern Gradient arka plan ve Glassmorphism (cam efekti) entegrasyonu.
- [x] İkon setlerinin ve hover animasyonlarının eklenmesi.
- [x] Mobil ve tablet uyumluluk (Responsive) kontrolleri.