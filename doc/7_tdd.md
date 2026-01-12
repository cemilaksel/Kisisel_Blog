# 🔴 7. TDD - Önce test, sonra kod

## 🔄 TDD Döngüsü (Red-Green-Refactor)
Uygulamada bir özellik eklemeden önce şu yol izlenir:

1. **Red (Kırmızı):** Özellik henüz yokken başarısız olacak bir test senaryosu düşünülür (Örn: "Yeteneklerin listelenmesi gerekiyor").
2. **Green (Yeşil):** Özelliği çalıştıracak en basit kod yazılır (Örn: Model katmanına veri eklenir ve View'da `map` edilir).
3. **Refactor (Düzenle):** Kod MVC ve SRP standartlarına göre temizlenir, Tailwind sınıfları optimize edilir.

## 🎯 Uygulama Örneği (Yeni Bir Sosyal Medya Linki)
- **Beklenti:** "GitHub ikonu eklenmeli ve tıklandığında profil açılmalı."
- **Adım 1:** `types.ts`'e github alanı ekle (Red - Kod patlar).
- **Adım 2:** `constants.ts`'e veriyi gir ve `Hero.tsx`'e ikonu ekle (Green - Link çalışır).
- **Adım 3:** İkonu SRP uyumlu ayrı bir `SocialIcon` bileşenine çıkar (Refactor - Kod temizlenir).