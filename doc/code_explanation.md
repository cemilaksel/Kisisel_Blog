# 📖 index.tsx - Kod Okuma Rehberi

## 🎯 Giriş
**Bu dosya ne işe yarıyor?**
Uygulamanın başlangıç noktasıdır. React kütüphanesini tarayıcıdaki DOM (Document Object Model) ile bağlayarak tüm sistemin çalışmasını tetikler.

**Hangi dosyalarla bağlantılı?**
- Kullanıyor: `App.tsx`, `react`, `react-dom`
- Kullanan: `index.html` (Tarayıcı tarafından doğrudan çağrılır)

**Gerçek hayat karşılığı:**
- **Restoran:** Restoranın ana giriş kapısıdır; içeri giren müşterinin (kullanıcının) ağırlanmaya başladığı ilk andır.
- **Spotify:** Uygulama simgesine tıkladığınızda sistemin belleğe yüklenip "açılış sesini" verdiği o ilk andır.

---

# 📖 types.ts - Kod Okuma Rehberi

## 🎯 Giriş
**Bu dosya ne işe yarıyor?**
Uygulamanın veri standartlarını belirleyen bir "sözleşme" dosyasıdır. Hangi verinin hangi formatta (metin mi, sayı mı?) olacağını tanımlar.

**Hangi dosyalarla bağlantılı?**
- Kullanıyor: Yok (Saf TypeScript tanımları)
- Kullanan: `constants.ts`, `usePortfolio.ts`, `Experience.tsx`, `App.tsx`

**Gerçek hayat karşılığı:**
- **Restoran:** Menüdeki yemeklerin standart listesidir; "Her yemek mutlaka bir isim ve fiyata sahip olmalıdır" kuralını koyar.
- **Spotify:** Bir şarkı nesnesinin yapısı gibidir; her şarkının bir "Adı", "Sanatçısı" ve "Süresi" olmak zorundadır kuralını tanımlar.

---

# 📖 constants.ts - Kod Okuma Rehberi (Model)

## 🎯 Giriş
**Bu dosya ne işe yarıyor?**
Uygulamanın içeriğini (Cemil Aksel'in verileri) barındıran sabit veri dosyasıdır. MVC yapısının **Model** katmanını temsil eder.

**Hangi dosyalarla bağlantılı?**
- Kullanıyor: `types.ts`
- Kullanan: `usePortfolio.ts`

**Gerçek hayat karşılığı:**
- **Restoran:** Mutfağın kileridir; yemek yapmak için gereken tüm malzemeler (veriler) burada saklanır.
- **Spotify:** Sunucudaki şarkı kütüphanesidir; binlerce şarkının ham verisi burada durur.

---

# 📖 usePortfolio.ts - Kod Okuma Rehberi (Controller)

## 🎯 Giriş
**Bu dosya ne işe yarıyor?**
İş mantığını (logic) ve veriye erişimi yöneten bir React Hook'udur. MVC yapısının **Controller** katmanıdır; veriyi alıp bileşenlere sunar.

**Hangi dosyalarla bağlantılı?**
- Kullanıyor: `constants.ts`, `types.ts`
- Kullanan: `App.tsx`

**Gerçek hayat karşılığı:**
- **Restoran:** Garson gibidir; müşteriden siparişi alır (aksiyon), mutfaktan yemeği getirir (veri) ve masaya servis eder.
- **Spotify:** Çalma listesi yöneticisidir; şarkıların yüklenmesini sağlar, "Play/Pause" butonlarına tıklandığında ne olacağını kontrol eder.

---

# 📖 App.tsx - Kod Okuma Rehberi (View Orchestrator)

## 🎯 Giriş
**Bu dosya ne işe yarıyor?**
Tüm görsel parçaları bir araya getiren ana iskelettir. Sayfanın genel düzenini belirler ve veriyi alt parçalara (SRP'ye uygun şekilde) dağıtır.

**Hangi dosyalarla bağlantılı?**
- Kullanıyor: `usePortfolio.ts`, `Hero.tsx`, `Expertise.tsx`, `Experience.tsx`, `Contact.tsx`
- Kullanan: `index.tsx`

**Gerçek hayat karşılığı:**
- **Restoran:** Restoranın iç mimarisi gibidir; mutfak nerede, kasalar nerede, masalar nereye konulacak planını çizer.
- **Spotify:** Uygulamanın ana arayüzüdür; müzik çaların altta, arama çubuğunun üstte duracağı düzeni sağlar.

---

# 📖 components/Hero.tsx - Kod Okuma Rehberi (View)

## 🎯 Giriş
**Bu dosya ne işe yarıyor?**
Kullanıcının profil fotoğrafı, ismi ve mesleği gibi en önemli tanıtıcı bilgilerini ekrana basan bağımsız bir sunum bileşenidir.

**Hangi dosyalarla bağlantılı?**
- Kullanıyor: React (Props üzerinden veri alır)
- Kullanan: `App.tsx`

**Gerçek hayat karşılığı:**
- **Restoran:** Restoranın dış cephesindeki devasa tabela gibidir; ismi ve ne tür yemekler olduğunu dışarıya ilan eder.
- **Spotify:** Bir sanatçının profil sayfasındaki kapak fotoğrafı ve biyografi yazısı gibidir.

---

# 📖 components/Expertise.tsx - Kod Okuma Rehberi (View)

## 🎯 Giriş
**Bu dosya ne işe yarıyor?**
Teknik becerileri ve uzmanlık alanlarını modern etiketler (chips) halinde listeleyen sunum bileşenidir.

**Hangi dosyalarla bağlantılı?**
- Kullanıyor: React (Props üzerinden liste alır)
- Kullanan: `App.tsx`

**Gerçek hayat karşılığı:**
- **Restoran:** Menüdeki yemeklerin yanındaki "Acılı", "Vejetaryen" veya "Glutensiz" gibi ikonlar/etiketler gibidir.
- **Spotify:** Şarkıların türlerini belirten "Pop", "Rock", "Lo-fi" gibi genre etiketleri gibidir.

---

# 📖 components/Experience.tsx - Kod Okuma Rehberi (View)

## 🎯 Giriş
**Bu dosya ne işe yarıyor?**
İş tecrübelerini ve kariyer yolculuğunu dikey bir zaman çizelgesi (timeline) formunda görselleştiren bileşendir.

**Hangi dosyalarla bağlantılı?**
- Kullanıyor: `types.ts`
- Kullanan: `App.tsx`

**Gerçek hayat karşılığı:**
- **Restoran:** Restoranın duvarındaki "1950'den beri" yazan tarihçe köşesi veya kurucuların eski fotoğrafları gibidir.
- **Spotify:** Bir sanatçının "Diskografi" sekmesidir; hangi albümü hangi yıl çıkardığını sırayla gösterir.

---

# 📖 components/Contact.tsx - Kod Okuma Rehberi (View)

## 🎯 Giriş
**Bu dosya ne işe yarıyor?**
Kullanıcının e-posta veya LinkedIn üzerinden bağlantı kurmasını sağlayan etkileşimli butonları içeren bölümdür.

**Hangi dosyalarla bağlantılı?**
- Kullanıyor: React (Olay tetikleyicileri/Actions alır)
- Kullanan: `App.tsx`

**Gerçek hayat karşılığı:**
- **Restoran:** Masadaki "Hesap/Garson Çağırma" butonu veya kasanın yanındaki kartvizitlik gibidir.
- **Spotify:** Sanatçı sayfasındaki "Takip Et", "Paylaş" veya "Mesaj Gönder" butonları gibidir.