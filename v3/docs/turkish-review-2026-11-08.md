# Geçici Türkçe inceleme sürümü

- `/tr/` altında 162 sayfa karşılığı; Almanca sayfalarla toplam 324 içerik sayfası.
- Ana sayfa, hizmetler, 14 hizmet detayı, fiyatlar, şehir ve şehir/hizmet sayfaları, hakkımızda, iletişim, SSS, silindirler ve bilgi sayfaları erişilebilir.
- Türkçe içerik inceleme içindir; yasal sayfalar Almanca hukuki metnin yerine geçmez.
- DE/TR geçişi mevcut sayfanın karşılığına gider. Telefon, fiyat, hizmet kapsamı ve görsel yolları ortak kaynaktan gelir.
- Türkçe sayfalarda belge dili `tr`, robots `noindex, follow`; canonical Almanca karşılığıdır. Türkçe URL'ler sitemap içinde bulunmaz.
- Hakkımızda sayfasına mevcut işletme fotoğraflarıyla üç kartlı galeri eklendi. Hizmet listesine her hizmetin görseli eklendi. Yeni dış kaynak veya bağımlılık eklenmedi.
- Üretim derlemesi ve lint başarılı. Statik kontrol: 324 sayfa, 22.897 iç bağlantı/dosya referansı. Her Almanca sayfanın Türkçe karşılığı ve sitemap dışlaması test edildi.
- 390 px: Türkçe hakkımızda ve araç açma sayfalarında taşma yok, dil geçişi çalışıyor; araç görseli yükleniyor, konsolda hata/uyarı yok.
- 1280 px: Türkçe menü çakışmıyor; hizmet listesinde 14 görsel ve bütün başlangıç fiyatları mevcut.
- Mevcut Big Shoulders fallback uyarısı sürüyor. Gerçek telefon araması veya canlı yayın yapılmadı.

Yayın hazırlığında geçişi kapatmak için `src/lib/review-language.ts` içindeki `turkishReviewEnabled` değerini `false` yapın. Önizleme URL'leri de kaldırılacaksa `(tr)` route grubu ve ilgili karşılık testleri temizlenmelidir.
