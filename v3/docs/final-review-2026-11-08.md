# Son kontrol — 08.11.2026

Türkçe inceleme sayfaları, çeviri verileri ve dil düğmesi kaldırıldı. Almanca sayfalar korundu.

## Düzeltilenler

- Almanca anlatım: şehir/hizmet girişleri, fiyat cümleleri ve içeriden takılı anahtar açıklamaları düzeltildi. Kolu veya anahtar konumunu tek başına kesin teşhis gibi gösteren ifadeler kaldırıldı.
- Hakkımızda bölümündeki doğrulanmamış doğrudan alıntı normal tanıtım metnine dönüştürüldü. Fotoğraf açıklaması yalnızca işletme fotoğraflarını kapsayacak şekilde düzeltildi.
- Fiyat tablosunun kapsam başlığı netleştirildi. Doğrulanmamış KDV ve stok bilgileri yapılandırılmış veriden çıkarıldı.
- Windows üzerinde Next.js segment dosyalarının yanlış klasörlere çıkması nedeniyle oluşan gezinme 404 hataları düzeltildi. Düzeltme her üretim derlemesinden sonra otomatik çalışır.

## Doğrulananlar

- Üretim derlemesi ve TypeScript kontrolü başarılı. Big Shoulders için otomatik yedek font ölçüsü uyarısı mevcut; asıl font derlemeye dahil.
- ESLint başarılı.
- 162 içerik sayfası, 10.999 dahili dosya/bağlantı referansı ve 18 şehir kontrolü başarılı. Tek H1, benzersiz başlık, açıklama, canonical, görsel kaynakları ve hizmet fiyatları otomatik kontrol kapsamında.
- Geçici Türkçe rotalar çıktıda yok. Kasa açma hizmeti yok.
- 390 px mobil görünümde ana sayfa, fiyatlar, hizmetler, silindir, hakkımızda ve iletişim sayfalarında yatay taşma/yüklenmeyen görsel görülmedi. Fiyatlar 320 px genişlikte de kontrol edildi.
- Mobil menü açılması ve fiyatlar sayfasına gezinme başarılı; düzeltme sonrası tarayıcı hatası yok. Telefon bağlantıları doğru numaraya yöneliyor.
- Google Maps iframe'i onay öncesinde yok, düğmeye basıldıktan sonra yükleniyor.
- `npm audit --omit=dev`: bilinen güvenlik açığı yok. Tam denetimde geliştirme bağımlılıklarında minimatch kaynaklı 8 orta seviye uyarı var; zorla sürüm düşürme uygulanmadı. Bunlar statik yayın dosyalarına sunucu olarak eklenmez.

## Yayından önce kalanlar

- Nihai domain, çalışan işletme e-postası, işletme bilgileri ve fiyat/ek ücret koşulları doğrulanmalı.
- Gizlilik sayfası gerçek hosting sağlayıcısı ve veri işleme koşullarıyla tamamlanmalı. Impressum bilgileri işletme tarafından doğrulanmalı.
- Gerçek hosting üzerinde HTTPS, güvenlik başlıkları, yönlendirmeler, sitemap/canonical domaini ve e-posta teslimi kontrol edilmeli. Next.js statik export ayarları HTTP güvenlik başlıklarını kendiliğinden uygulamaz.
- Gerçek iPhone/Android cihaz testi ve bağımsız sızma testi yapılmadı. Yerel kontroller mutlak güvenlik veya Google sıralaması garantisi değildir.
