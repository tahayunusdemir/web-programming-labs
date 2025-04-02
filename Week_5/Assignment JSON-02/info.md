# JSON Schema ve Düzenli İfadeler (Regular Expressions)

## Düzenli İfadeler Nedir?

Düzenli ifadeler (Regular Expressions), metin içinde belirli desenleri aramak, doğrulamak ve değiştirmek için kullanılan güçlü bir araçtır. JSON Schema içerisinde `pattern` özelliği ile kullanılabilir.

## Örnek Düzenli İfade: `^[0-9]+$`

Bu ifade, bir metnin tamamen rakamlardan oluştuğunu doğrular:

- `^`: Metnin başlangıcını belirtir
- `[0-9]`: 0'dan 9'a kadar herhangi bir rakam
- `+`: Bir veya daha fazla rakam
- `$`: Metnin sonunu belirtir

## Düzenli İfadelerde Kullanılan İşaretler

### Temel İşaretler

1. **^** - Metnin başlangıcını belirtir.
   ```
   ^abc -> "abc" ile başlayan metinler
   ```

2. **$** - Metnin sonunu belirtir.
   ```
   abc$ -> "abc" ile biten metinler
   ```

3. **.** - Herhangi bir tek karakteri temsil eder (yeni satır hariç).
   ```
   a.c -> "abc", "a1c", "a-c" gibi metinler
   ```

4. **|** - VEYA anlamına gelir (alternatif).
   ```
   a|b -> "a" veya "b"
   ```

5. **\\** - Özel karakterleri kaçış (escape) etmek için kullanılır.
   ```
   \. -> Nokta karakterini temsil eder, herhangi bir karakter anlamında değil
   ```

### Karakter Sınıfları

1. **[ ]** - İçindeki karakterlerden herhangi birini ifade eder.
   ```
   [abc] -> "a", "b" veya "c"
   [a-z] -> a'dan z'ye herhangi bir küçük harf
   ```

2. **[^ ]** - İçindeki karakterler dışındaki herhangi bir karakteri belirtir.
   ```
   [^abc] -> "a", "b" ve "c" dışındaki herhangi bir karakter
   ```

### Niceleyiciler (Quantifiers)

1. ***** - Kendinden önceki ifadenin 0 veya daha fazla tekrarını belirtir.
   ```
   ab*c -> "ac", "abc", "abbc", "abbbc", ...
   ```

2. **+** - Kendinden önceki ifadenin 1 veya daha fazla tekrarını belirtir.
   ```
   ab+c -> "abc", "abbc", "abbbc", ... ("ac" değil)
   ```

3. **?** - Kendinden önceki ifadenin 0 veya 1 tekrarını belirtir (opsiyonel).
   ```
   ab?c -> "ac" veya "abc"
   ```

4. **{n}** - Kendinden önceki ifadenin tam olarak n kez tekrarını belirtir.
   ```
   a{3} -> "aaa"
   ```

5. **{n,}** - Kendinden önceki ifadenin en az n kez tekrarını belirtir.
   ```
   a{3,} -> "aaa", "aaaa", "aaaaa", ...
   ```

6. **{n,m}** - Kendinden önceki ifadenin en az n, en fazla m kez tekrarını belirtir.
   ```
   a{2,4} -> "aa", "aaa", "aaaa"
   ```

### Gruplandırma ve Referanslar

1. **( )** - İfadeleri gruplandırır ve yakalama grubu oluşturur.
   ```
   (abc)+ -> "abc", "abcabc", "abcabcabc", ...
   ```

2. **(?:)** - Yakalamayan gruplandırma (non-capturing group).
   ```
   (?:abc)+ -> "abc", "abcabc", ... (referans olmadan)
   ```

3. **\1, \2, ...** - Daha önce yakalanan gruplara geri referans.
   ```
   (a)(b)\2\1 -> "abba"
   ```

### Özel Karakter Sınıfları

1. **\d** - Herhangi bir rakam [0-9] ile aynı.
   ```
   \d{3} -> Üç rakam, örneğin "123", "456"
   ```

2. **\D** - Rakam olmayan herhangi bir karakter [^0-9] ile aynı.
   ```
   \D+ -> Bir veya daha fazla rakam olmayan karakter
   ```

3. **\w** - Harf, rakam veya alt çizgi [A-Za-z0-9_] ile aynı.
   ```
   \w+ -> Bir veya daha fazla alfanümerik karakter
   ```

4. **\W** - Harf, rakam veya alt çizgi olmayan herhangi bir karakter [^A-Za-z0-9_] ile aynı.
   ```
   \W+ -> Bir veya daha fazla alfanümerik olmayan karakter
   ```

5. **\s** - Boşluk karakterleri (space, tab, newline).
   ```
   a\sb -> "a" ve "b" arasında boşluk olan metinler
   ```

6. **\S** - Boşluk olmayan karakterler.
   ```
   \S+ -> Bir veya daha fazla boşluk olmayan karakter
   ```

7. **\b** - Kelime sınırı.
   ```
   \bkitap\b -> "Bu bir kitap." içindeki "kitap" kelimesini eşleştirir, "kitapçı" içindeki "kitap" kısmını değil
   ```

## Yaygın Kullanılan Düzenli İfade Örnekleri

1. **E-posta Doğrulama**: `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
   - Geçerli: "user@example.com", "john.doe123@mail.co.uk"
   - Geçersiz: "user@", "user@.com", "@example.com"

2. **Telefon Numarası (Türkiye)**: `^(0|\+90)?\s?5[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$`
   - Geçerli: "05551234567", "+90 555 123 45 67", "5551234567" 
   - Geçersiz: "1234567890", "555-123-4567"

3. **Şifre Karmaşıklığı**: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$`
   - En az 8 karakter, en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter
   - Geçerli: "Pass@123", "Abc123!@"
   - Geçersiz: "password", "12345678", "Password"

4. **URL Doğrulama**: `^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,})([\/\w \.-]*)*\/?$`
   - Geçerli: "https://example.com", "example.com/path", "sub.domain.co.uk"
   - Geçersiz: "http://", "example", ".com"

5. **Tarih Formatı (GG/AA/YYYY)**: `^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$`
   - Geçerli: "01/01/2023", "31/12/2020"
   - Geçersiz: "32/01/2023", "01/13/2023", "1/1/2023"

6. **Pozitif Ondalık Sayı**: `^[0-9]+(\.[0-9]{1,2})?$`
   - En fazla 2 ondalık basamak olan sayılar
   - Geçerli: "123", "123.45", "0.5"
   - Geçersiz: "123.456", "-123", "123."

7. **Kredi Kartı Numarası**: `^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$`
   - Visa, MasterCard, American Express formatlarını kabul eder
   - Geçerli: "4111111111111111", "5500000000000004", "340000000000009"
   - Geçersiz: "1234567890123456", "411111111111111" (eksik rakam)

8. **T.C. Kimlik Numarası**: `^[1-9][0-9]{10}$`
   - 11 haneli ve 0 ile başlamayan sayısal bir değer
   - Geçerli: "12345678910"
   - Geçersiz: "01234567890", "1234567890" (10 hane), "123456789101" (12 hane)

9. **Türkçe Karakterleri Dahil İsim**: `^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$`
   - Sadece harf ve boşluk içerebilir
   - Geçerli: "Ahmet Şahin", "İsmail Öztürk"
   - Geçersiz: "Ahmet123", "İsmail."

10. **HTML Etiketleri Bulma**: `<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)`
    - HTML etiketlerini bulur
    - Geçerli: "<div>İçerik</div>", "<br/>"
    - Geçersiz: "<div>İçerik</span>", "<div>"

11. **Renk Kodu (Hex)**: `^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$`
    - Geçerli: "#123456", "#abc", "#F5A942"
    - Geçersiz: "123456", "#zzz", "#12345"

12. **Dosya Uzantısı**: `^.*\.(jpg|jpeg|png|gif|bmp)$`
    - Belirli resim dosyalarını kontrol eder
    - Geçerli: "resim.jpg", "profil.png"
    - Geçersiz: "resim.pdf", "profil.jpg.exe"

## JSON Schema'da Kullanım

JSON Schema'da, 'pattern' özelliği ile düzenli ifadeler kullanılabilir:

```json
{
  "type": "string",
  "pattern": "^[0-9]+$",
  "description": "Bu alan sadece rakamlardan oluşmalıdır"
}
```

### Örnek: Fiyat Alanı için Pattern

```json
"Price": {
  "type": "string",
  "description": "Ürünün fiyatı",
  "pattern": "^[0-9]+(\.[0-9]{1,2})?$"
}
```

Bu pattern, tam sayı veya en fazla 2 ondalık basamaklı pozitif sayıları kabul eder.
