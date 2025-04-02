# JavaScript DOM Manipülasyonu Laboratuvar - 01

## Hedefler
- JavaScript'te var, let, const ve String, Number, Boolean, Array, Object, null ve undefined gibi farklı veri tiplerini keşfetmek
- Olay işleyicileri (event handlers) ve DOM elementlerinin manipülasyonunu öğrenmek

## Dış Kaynaklar
- https://www.w3schools.com/

## Faz 1: JavaScript'te Değişken Tanımlama ve Atama

### Değişken Tanımlama Anahtar Kelimeleri
- **var**: Değişken tanımlamak için kullanılan en eski anahtar kelime. Varsayılan olarak global kapsamlıdır ve yeniden atanabilir.
- **let**: Modern değişken tanımlama anahtar kelimesi. Tanımlandığı blok içerisinde geçerlidir ve yeniden atanabilir.
- **const**: Sabit değişkenler tanımlamak için kullanılır. Tanımlandığı blok içerisinde geçerlidir ve yeniden atanamaz.

### Veri Tipleri
- **String**: Karakter dizisi
- **Number**: Tam sayı veya ondalıklı sayı
- **Boolean**: Doğru veya yanlış değer
- **Array**: Sıralı değerler koleksiyonu
- **Object**: Anahtar-değer çiftlerinden oluşan koleksiyon
- **null**: Bir değerin yokluğunu temsil eder
- **undefined**: Başlatılmamış bir değişkeni temsil eder

### Görevler

1. **HTML Dosyası Oluşturma**
   ```html
   <!DOCTYPE html>
   <html lang="tr">
   <head>
       <meta charset="UTF-8">
       <title>JavaScript'te var, let, const ve Veri Tipleri</title>
   </head>
   <body>
       <script src="script.js"></script>
   </body>
   </html>
   ```

2. **JavaScript Dosyası Oluşturma (script.js)**
   ```javascript
   // ** var kullanımı **
   var isim = "Ahmet";
   console.log(isim); // "Ahmet"

   isim = "Ayşe";
   console.log(isim); // "Ayşe"

   // ** let kullanımı **
   let yas = 20;
   console.log(yas); // 20

   yas = 21;
   console.log(yas); // 21

   // ** const kullanımı **
   const PI = 3.14;
   console.log(PI); // 3.14

   // ** Veri Tipleri **

   // String (Metin)
   let metin = "Merhaba, dünya!";
   console.log(typeof metin); // "string"

   // Number (Sayı)
   let sayi = 10;
   console.log(typeof sayi); // "number"

   // Boolean (Mantıksal)
   let dogruMu = true;
   console.log(typeof dogruMu); // "boolean"

   // Array (Dizi)
   let meyveler = ["muz", "elma", "portakal"];
   console.log(typeof meyveler); // "object"

   // Object (Nesne)
   let kisi = { isim: "Ahmet", yas: 20 };
   console.log(typeof kisi); // "object"

   // null
   let bos = null;
   console.log(typeof bos); // "object"

   // undefined
   let tanimsiz;
   console.log(typeof tanimsiz); // "undefined"
   ```

3. **Alıştırmalar**
   1. `isim` değişkeninin değerini değiştirin ve konsoldaki sonucu gözlemleyin
   2. `let` kullanarak yeni bir değişken tanımlayın ve değer atayın
   3. `const` kullanarak bir sabit tanımlayın ve yeniden değer atamayı deneyerek konsoldaki hatayı gözlemleyin
   4. Farklı veri tiplerini içeren bir dizi oluşturun ve her elemanı konsola yazdırın
   5. Çeşitli özelliklere sahip bir nesne oluşturun ve tüm özellik-değer çiftlerini konsola yazdırın

## Faz 2: Sayfa DOM Manipülasyonu

### Temel DOM İşlevleri
- `document.getElementById("buton")`: Belirtilen ID'ye ("buton") sahip HTML elementini getirir
- `addEventListener("click", function())`: Bir elemente tıklama olayı dinleyicisi ekler. Parametre olarak verilen fonksiyon, tıklama gerçekleştiğinde çalıştırılır
- `querySelector("h1")`: DOM içerisinde belirtilen CSS seçicisine ("h1") uyan ilk elementi seçer
- `textContent`: Seçilen elementin metin içeriğini değiştirmeye yarar

### Görevler

1. **HTML Dosyası Oluşturma**
   ```html
   <!DOCTYPE html>
   <html lang="tr">
   <head>
       <meta charset="UTF-8">
       <title>Olay İşleyicileri ve DOM Elementleri Manipülasyonu</title>
   </head>
   <body>
       <h1>Butona tıklayınız!</h1>
       <button id="buton">Buraya tıklayın</button>
       <script src="script.js"></script>
   </body>
   </html>
   ```

2. **JavaScript Dosyası Oluşturma (script.js)**
   ```javascript
   // Buton elementini seç
   const buton = document.getElementById("buton");

   // Butona tıklama olayı dinleyicisi ekle
   buton.addEventListener("click", function() {
       // h1 elementini seç ve değiştir
       const h1 = document.querySelector("h1");
       h1.textContent = "Butona tıklandı!";
   });
   ```

3. **Test Etme**: 
   - HTML dosyasını web tarayıcısında aç
   - Butona tıkla
   - Başlık metninin "Butona tıklandı!" olarak değiştiğini gözlemle

4. **Sayfa Yükleme Olayı**: 
   - Sayfa ilk yüklendiğinde başlık metnini "Merhaba, dünya!" olarak değiştir

5. **Arka Plan Rengi Değiştirme**: 
   - Butona tıklandığında başlığın (h1) arka plan rengini kırmızı yap

6. **Metin Giriş Alanı**: 
   - Sayfaya bir metin giriş kutusu ekle
   - Kullanıcı Enter tuşuna bastığında, kutudaki metni konsola yazdır

7. **Tıklanabilir Liste**: 
   - Sayfaya tıklanabilir liste öğeleri ekle
   - Her liste öğesine tıklandığında, tıklanan öğeyi listeden kaldır

### Önemli Notlar
- Tüm JavaScript kodları `script.js` dosyasında yer almalıdır
- HTML dosyası UTF-8 karakter kodlaması kullanmalıdır
- Olay dinleyicileri (event listener) doğru şekilde tanımlanmalıdır
- DOM üzerinde yapılan değişiklikler anında görünür olmalıdır
- Kod yazarken Türkçe karakter kullanımına dikkat edilmelidir 