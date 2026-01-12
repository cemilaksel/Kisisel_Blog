# 🛠 5. Code Standards - Kalite kriterleri ne?

## 🧱 SRP (Single Responsibility Principle)
- Bir dosya/fonksiyon 100 satırı geçiyorsa, sorumluluğu bölünmelidir.
- İş mantığı (logic) `.tsx` dosyalarında değil, `.ts` hook'larında bulunmalıdır.

## 📝 İsimlendirme Standartları
- **Bileşenler:** `PascalCase` (`HeroCard.tsx`, `ExpertiseList.tsx`)
- **Fonksiyonlar & Değişkenler:** `camelCase` (`handleEmailClick`, `isLoaded`)
- **Sabitler:** `UPPER_SNAKE_CASE` (`CEMIL_DATA`)
- **Tipler/Interface'ler:** `PascalCase` (`ExperienceItem`)

## 🧹 Temiz Kod (Clean Code)
- **Props Destructuring:** Fonksiyon imzalarında `({ name, role })` kullanımı tercih edilir.
- **Tailwind Sınıfları:** Okunabilirlik için Layout -> Sizing -> Typography -> Visual sırasıyla dizilir.
- **Yorum Satırları:** "Neden" sorusuna cevap veren kısa ve öz yorumlar eklenmelidir.

## 🛡 Tip Güvenliği
- `any` tipi kullanımı kesinlikle yasaktır.
- Tüm `props`lar için `interface` tanımlanmalıdır.