# 🎯 1. Use Case - Ne yapıyoruz, neden yapıyoruz?

## 🚀 Proje Amacı
Cemil Aksel'in 30 yılı aşkın SAP ABAP tecrübesini ve yeni nesil Yapay Zeka (AI) eğitmenliğini modern bir dijital vizyonla sergilemek. Amacımız, sadece bilgi vermek değil, güven veren bir profesyonel marka oluşturmaktır.

## 👥 Paydaşlar (Actors)
- **Ziyaretçi:** Cemil Bey'in uzmanlığını analiz eden IK uzmanları, iş ortakları veya eğitim almak isteyen öğrenciler.
- **Sistem Sahibi (Cemil Aksel):** Verilerini tek bir noktadan yöneten ve profesyonel dijital varlığını sürdüren kişi.

## 🛠 Temel Senaryolar (MVC & SRP Akışı)
1. **Profesyonel Profil İnceleme (View):** Ziyaretçi sayfayı açtığında, SRP uyarınca ayrılmış "Uzmanlık Alanları" ve "Kariyer Yolculuğu" kartlarını görür.
2. **Hızlı İletişim (Controller):** Ziyaretçi "E-posta" veya "LinkedIn" butonlarına tıkladığında, `usePortfolio` kontrolcüsü bu talebi işler ve doğru platforma yönlendirir.
3. **Veri Güncelliği (Model):** Sistem sahibi `constants.ts` (Model) dosyasını güncellediğinde, tüm arayüz otomatik olarak senkronize olur.

**Neden MVC?** Veri yapısı (SAP deneyimi) değiştiğinde görselliğin bozulmaması, tasarım değiştiğinde ise iş mantığının etkilenmemesi için.
**Neden SRP?** Her bileşenin (Hero, Experience vb.) sadece kendi işini yapması, bakımın kolaylaşması ve hataların izole edilmesi için.