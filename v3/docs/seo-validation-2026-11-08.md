> Güncelleme: Kasa açma, kullanıcının hizmet vermediğini belirtmesi üzerine kaldırıldı. Güncel kapsam 14 hizmet, kelime planı 396 satırdır. Aşağıdaki eski sayımlar önceki uygulamanın tarihsel kaydıdır.

# SEO uygulaması — doğrulama

Tarih: 8 Kasım 2026. Ortam: yerel Next.js geliştirme sunucusu ve `out/` üretim çıktısı.

## Otomatik kontroller

- `npm run build`: başarılı. 167 statik çıktı; site kontrolü 404/Next iç sayfalarını dışarıda bırakarak 163 içerik sayfasını kontrol eder.
- `npm run check`: başarılı. 163 sayfa, 11.251 iç bağlantı/dosya referansı, 18 şehir ve 18 indekslenebilir şehir.
- Tek H1, benzersiz başlıklar, description, self-canonical, belge dili, dahili hedefler, fotoğraf dosyaları ve lisans kayıtları kontrol edildi.
- Yeni yedi hizmetin listelenmesi, telefon ve iletişim bağlantıları kontrol edildi. Autoöffnung Offer fiyatı 159 € olarak doğrulandı.
- 414 satırlı kelime–hedef eşleştirmesinde hedef HTML dosyaları kontrol edilir. Hacim alanları ölçülmediği için boştur.
- `npm run lint`: başarılı; hata veya uyarı yok.

## Tarayıcı kontrolleri

| Kontrol | Sonuç |
| --- | --- |
| 390 px hizmet listesi | 15 hizmet, yatay taşma yok |
| 390 px kasa açma | Görsel yüklendi; SSS açıldı; taşma yok |
| 390 px güvenlik teknolojisi | Erişim okuyucusu görseli yüklendi; taşma yok; konsolda hata/uyarı yok |
| 390 px çok noktalı kilit | Başlıkta kesilme bulundu ve düzeltildi; başlık genişliği ve scroll genişliği 351 px |
| 390 px fiyatlar | Yatay taşma yok |
| 390 px mobil menü | Açılıyor; hizmet, fiyat, bölge, iletişim ve telefon hedefleri doğru |
| 390 px iletişim/harita | İzin öncesi iframe yok; Karte laden sonrası Google Maps iframe oluşuyor |
| 320 px silindir galerisi | Taşma yok; dört görsel contain/beyaz zemin; dört tam boy bağlantı |
| 768 px hizmet listesi | Taşma yok; dar ekran menüsü görünür |
| 1440 px ana sayfa | Taşma yok; Schlüsseldienst H1, WebSite adı ve OG görseli mevcut |
| 1440 px Freiburg | Index/follow, doğru şehir başlığı ve uzmanlık hizmet bağlantıları |

Telefon bağlantılarının `tel:+491721416144` hedefleri doğrulandı; gerçek telefon görüşmesi başlatılmadı. Harita kontrolü iframe'in izin sonrası oluşturulmasını doğrular, Google hizmetinin tüm cihaz/ağlarda çalışacağını garanti etmez.

## Kalan sınırlar

- Big Shoulders için Next.js'in otomatik fallback metriklerini bulamadığı uyarısı devam eder; derlemeyi engellemez. Yüklenen font tarayıcıda görüntüleniyor. Gerçek cihazlarda font yükleme ve CLS ölçümü henüz yapılmadı.
- Canlı domain, HTTPS, e-posta teslimi, Google Business Profile ve Search Console işlemleri yapılmadı.
- Yerel mobil emülasyon gerçek cihaz testi veya saha Core Web Vitals ölçümü değildir.
- Anahtar kelime aylık hacimleri, Google Maps konum sıralamaları ve yayından sonraki dönüşümler ölçülmedi.
- Statik kontrolün `originalDesignFilesVerified: 0` sonucu, eski şablonla checksum karşılaştırması yapılmadığı anlamına gelir; uyarlanmış tasarım için eski dosyaların aynılığı hedeflenmez.
