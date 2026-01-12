# 🔄 9. Change Management - Değişiklikleri nasıl yönetiriz?

## 🛠 Değişiklik Akış Şeması
Herhangi bir güncelleme talebi geldiğinde (Örn: "Kariyer kısmına görsel ekleyelim"):

1. **Etki Analizi:** Bu değişiklik hangi katmanı etkiliyor?
   - Sadece veri ise -> **Model** (`constants.ts`)
   - İşleyiş ise -> **Controller** (`usePortfolio.ts`)
   - Görünüm ise -> **View** (`components/`)
2. **Sorumluluk Kontrolü (SRP):** Değişiklik mevcut bir bileşeni çok karmaşık hale getiriyorsa, yeni bir alt bileşen oluşturulur.
3. **Geriye Dönük Uyumluluk:** Yeni eklenen bir alan, eski verilerin görünümünü bozmamalıdır (Opsiyonel alanlar/Optional chaining kullanımı).

**Prensip:** Her değişiklik, `doc/change_mgmt.md` kurallarına uygun olarak XML formatında raporlanır ve ana mimari korunarak uygulanır.