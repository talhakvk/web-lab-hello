# CSS Kararları

## 1. Breakpoint Seçimi

- **640px ve 1024px** breakpoint'lerini seçtim çünkü 640px çoğu telefonun yatay modunu ve küçük tabletleri kapsar, 1024px ise tablet ile masaüstü arasındaki doğal geçiş noktasıdır.
- **Mobil (0-639px):** İçerikler tek sütun, butonlar tam genişlik, nav dikey yığın. **Tablet (640px+):** Hakkımda bölümü yatay, butonlar otomatik genişlik. **Masaüstü (1024px+):** Main 1200px ile sınırlı, proje kartları 3 sütun grid.

## 2. Layout Tercihleri

- **Header için Flexbox** seçtim çünkü tek boyutlu (yatay) bir düzen: logo solda, nav sağda. Flexbox'ın `justify-content: space-between` özelliği bu senaryoya birebir uyuyor.
- **Proje kartları için CSS Grid** seçtim çünkü iki boyutlu bir ızgara gerekiyor — kartların hem satır hem sütun hizalamasını kontrol etmek istiyoruz.
- **`auto-fit`** kullandım, `auto-fill` değil. `auto-fit` boş sütunları daraltarak mevcut kartları genişletir; az sayıda kartla bile alanı verimli kullanır. `auto-fill` ise boş sütunlar bırakırdı.

## 3. Design Tokens

- **Renk paletini** tek bir `tokens.css` dosyasında merkezi olarak tanımladım. Böylece renk değişikliği gerektiğinde tek noktadan güncelleme yapılabiliyor, tutarsızlık riski ortadan kalkıyor.
- **Spacing skalasını** 4px tabanlı (xs=4, sm=8, md=16, lg=24, xl=32) bir sistem üzerine kurdum. Bu matematiksel tutarlılık, elemanlar arasında görsel ritim oluşturuyor.
- **Fluid typography** için `clamp()` fonksiyonu kullandım. Örneğin `--text-3xl: clamp(2rem, 1.2rem + 3vw, 3.5rem)` ifadesi, ekran genişliğine göre font boyutunu 2rem ile 3.5rem arasında akıcı şekilde ayarlıyor — media query yazmadan.

## 4. Responsive Stratejiler

- **Mobile-first** yaklaşımını uyguladım: önce en küçük ekran için stil yazdım, ardından `min-width` media query'leriyle büyük ekranlar için genişlettim. Bu yaklaşım daha az CSS üretiyor ve mobil performansı artırıyor.
- **Breakpoint'lerde değişenler:** Tablet'te `section` padding'i artıyor, `.about-content` yatay düzene geçiyor, submit butonu otomatik genişliğe dönüyor. Masaüstünde `main` genişliği sınırlanıyor ve proje grid'i 3 sütuna çıkıyor.
- **Görsel boyutları** `max-width: 100%; height: auto; display: block` ile yönettim. Bu üç satır, görsellerin taşmasını engeller ve responsive davranış sağlar. Proje kartlarındaki görsellerde ise `object-fit: cover` ile 200px sabit yükseklikte kırpma uyguladım.
