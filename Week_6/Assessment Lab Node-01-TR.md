# Assessment Lab Node-01

## Hedefler

- ExpressJS kullanarak bir uygulama oluşturmak.

## Talimatlar

### Aşama 1 - Kurulum

1. Proje için bir klasör oluşturun.

   ```bash
   mkdir NotesApp
   cd NotesApp
   ```
2. Bu klasörde terminali açın.
3. NPM'i başlatın.

   ```bash
   npm init -y
   ```
4. Bu klasöre expressJS'i kurun.

   ```bash
   npm install express
   ```
5. index.js adında bir dosya oluşturun.

   ```bash
   echo "" > index.js   # Windows için
   ```
6. Bir sunucu başlatmak için gerekli kodu ekleyin (GET metodu).

   ```jsx
   // index.js
   const express = require('express');
   const app = express();

   // Express uygulamasının JSON verileri işleyebilmesi için
   app.use(express.json());

   // Basit bir GET isteği
   app.get('/', (req, res) => {
     res.send('Merhaba Dünya!');
   });

   // Sunucuyu 3000 portunda başlat
   app.listen(3000, () => {
     console.log('Sunucu 3000 portunda çalışıyor');
   });

   ```
7. Sunucuyu başlatın ve her şeyin çalıştığını doğrulayın.

   ```bash
   node index.js
   ```

   Tarayıcınızda [http://localhost:3000](http://localhost:3000/) adresine giderek "Merhaba Dünya!" mesajını görebilirsiniz.

### Aşama 2 - Geliştirme

1. "app.listen" içindeki console.log içeriğini uygulamanızın adını (siz belirleyin) ve kendi adınızı gösterecek şekilde değiştirin. Eğer console.log yoksa, ekleyin.

   ```jsx
   app.listen(3000, () => {
     console.log('NotesApp - [Adınız] tarafından geliştirildi');
   });
   ```
2. minhas_notas (dizi) değişkenini tanımlayın. Örnek: [20, 10, 15, 17]

   ```jsx
   // index.js başlangıcında tanımlayın
   const express = require('express');
   const app = express();

   app.use(express.json());

   // Notlar dizisi
   let minhas_notas = [20, 10, 15, 17];
   ```
3. Aşağıdakileri ekleyin:

   a. Tüm listeyi döndürmek için kök dizinde GET metodu.

   ```jsx
   // Tüm notları getir
   app.get('/', (req, res) => {
     res.status(200).json(minhas_notas);
   });
   ```
   ```bash
   Postman'de yeni bir istek oluşturun
   İstek türünü GET olarak seçin
   URL alanına yazın: <http://localhost:3000/>
   "Send" (Gönder) butonuna tıklayın
   Yanıt olarak şunu görmelisiniz: [20, 10, 15, 17]
   Durum kodu: 200 OK
   ```
   b. Belirli bir pozisyondaki notu döndürmek için parametreli GET metodu. Eğer belirtilen pozisyonda not yoksa, hata döndürmelidir.

   ```jsx
   // Belirli pozisyondaki notu getir
   app.get('/:index', (req, res) => {
     const index = parseInt(req.params.index);

     if (index >= 0 && index < minhas_notas.length) {
       res.status(200).json(minhas_notas[index]);
     } else {
       res.status(400).json({ error: 'Geçersiz not pozisyonu' });
     }
   });
   ```
   ```bash
   İstek türünü GET olarak secin
   URL: <http://localhost:3000/0> (0. indeksteki notu getirir)
   "Send" butonuna tıklayın
   Yanıt: 20 (dizinin ilk elemanı)
   Durum kodu: 200 OK
   Hatalı İndeks Denemesi:
   URL: <http://localhost:3000/10> (geçersiz indeks)
   Yanıt: {"error": "Geçersiz not pozisyonu"}
   Durum kodu: 400 Bad Request
   ```
   c. Kök dizinde, body'de gönderilen bir değeri diziye eklemek için POST metodu.

   ```jsx
   // Body'deki değeri diziye ekle
   app.post('/', (req, res) => {
     const value = parseInt(req.body.value);

     if (!isNaN(value)) {
       minhas_notas.push(value);
       res.status(200).json(minhas_notas);
     } else {
       res.status(400).json({ error: 'Geçersiz değer' });
     }
   });
   ```
   ```bash
   İstek türünü POST olarak değiştirin
   URL: <http://localhost:3000/>
   "Body" sekmesine tıklayın
   "raw" seçeneğini secin
   Formatı "JSON" olarak değiştirin (sağdaki açılır menüden)
   Body kısmına yazın: {"value": 18}
   "Send" butonuna tıklayın
   Yanıt: [20, 10, 15, 17, 18] (eklenen notla birlikte tüm dizi)
   Durum kodu: 200 OK
   Hatalı Değer Denemesi:
   Body kısmına yazın: {"value": "abc"} (sayı olmayan değer)
   Yanıt: {"error": "Geçersiz değer"}
   Durum kodu: 400 Bad Request
   ```
   d. Parametrede gönderilen değeri eklemek için parametreli POST metodu.

   ```jsx
   // Parametredeki değeri diziye ekle
   app.post('/add/:value', (req, res) => {
     const value = parseInt(req.params.value);

     if (!isNaN(value)) {
       minhas_notas.push(value);
       res.status(200).json(minhas_notas);
     } else {
       res.status(400).json({ error: 'Geçersiz değer' });
     }
   });
   ```
   ```bash
   İstek türünü POST olarak secin
   URL: <http://localhost:3000/add/19>
   "Send" butonuna tıklayın
   Yanıt: [20, 10, 15, 17, 18, 19]
   Durum kodu: 200 OK
   Hatalı Parametre Denemesi:
   URL: <http://localhost:3000/add/abc> (sayı olmayan parametre)
   Yanıt: {"error": "Geçersiz değer"}
   Durum kodu: 400 Bad Request
   ```
   e. Parametrede gönderilen pozisyondaki notu, body'deki değerle güncellemek için parametreli PATCH metodu.

   ```jsx
   // Belirli pozisyondaki notu güncelle
   app.patch('/:index', (req, res) => {
     const index = parseInt(req.params.index);
     const value = parseInt(req.body.value);

     if (isNaN(value)) {
       return res.status(400).json({ error: 'Geçersiz değer' });
     }

     if (index >= 0 && index < minhas_notas.length) {
       minhas_notas[index] = value;
       res.status(200).json(minhas_notas);
     } else {
       res.status(400).json({ error: 'Geçersiz not pozisyonu' });
     }
   });
   ```
   ```bash
   İstek türünü PATCH olarak değiştirin
   URL: <http://localhost:3000/0> (0. indeksteki notu güncelleyecek)
   "Body" sekmesinde "raw" ve "JSON" seçeneklerini secin
   Body kısmına yazın: {"value": 25}
   "Send" butonuna tıklayın
   Yanıt: [25, 10, 15, 17, 18, 19] (ilk değer değişmiş olmalı)
   Durum kodu: 200 OK
   Hata Denemeleri:
   Geçersiz İndeks: <http://localhost:3000/100> + Body: {"value": 25}
   Yanıt: {"error": "Geçersiz not pozisyonu"}
   Geçersiz Değer: <http://localhost:3000/0> + Body: {"value": "abc"}
   Yanıt: {"error": "Geçersiz değer"}
   ```
   f. Parametrede gönderilen pozisyondaki notu silmek için parametreli DELETE metodu.

   ```jsx
   // Belirli pozisyondaki notu sil
   app.delete('/:index', (req, res) => {
     const index = parseInt(req.params.index);

     if (index >= 0 && index < minhas_notas.length) {
       minhas_notas.splice(index, 1);
       res.status(200).json(minhas_notas);
     } else {
       res.status(400).json({ error: 'Geçersiz not pozisyonu' });
     }
   });
   ```
   ```bash
   İstek türünü DELETE olarak değiştirin
   URL: <http://localhost:3000/2> (2. indeksteki notu silecek)
   "Send" butonuna tıklayın
   Yanıt: [25, 10, 17, 18, 19] (15 değeri silinmiş olmalı)
   Durum kodu: 200 OK
   Hatalı İndeks Denemesi:
   URL: <http://localhost:3000/100> (geçersiz indeks)
   Yanıt: {"error": "Geçersiz not pozisyonu"}
   Durum kodu: 400 Bad Request
   ```
   g. Tüm notları silmek için kök dizinde DELETE metodu.

   ```jsx
   // Tüm notları sil
   app.delete('/', (req, res) => {
     minhas_notas = [];
     res.status(200).json(minhas_notas);
   });
   ```
   ```bash
   İstek türünü DELETE olarak secin
   URL: http://localhost:3000/
   "Send" butonuna tıklayın
   Yanıt: [] (boş dizi)
   Durum kodu: 200 OK
   ```
4. POST metodlarında değeri tamsayıya dönüştürmeyi unutmayın (aksi takdirde string olarak eklenir).

   ```jsx
   // Örnek: parseInt kullanımı
   const value = parseInt(req.body.value); // String'i tamsayıya dönüştürür
   ```
   ```bash
   Tüm istekleri sırayla yaptığınızda verilerin nasıl değiştiğini gözlemleyebilirsiniz. Son işlemden sonra dizinin boş olduğunu doğrulamak için:
   İstek türünü GET olarak değiştirin
   URL: http://localhost:3000/
   "Send" butonuna tıklayın
   Yanıt: [] (tüm notlar silinmiş olmalı)
   ```
5. Endpoint'lerinizin yanıtlarını, başarılı olduğunda 200 durum kodu döndürecek şekilde güncelleyin. Başarısız olduğunda 400 durum kodu döndürün.

   ```jsx
   // Başarılı
   res.status(200).json(data);

   // Başarısız
   res.status(400).json({ error: 'Hata mesajı' });

   ```
6. Tüm endpoint'lerin çalıştığını doğrulayın (Firefox'un RestClient eklentisini veya diğer tarayıcılardaki benzer araçları kullanabilirsiniz).
