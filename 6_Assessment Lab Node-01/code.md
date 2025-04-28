// npm install express
// node index.js
1) // Basit bir GET isteği - tüm notları döndürür
   GET http://localhost:3000/
   Yanıt: [20, 10, 15, 17]
   Durum kodu: 200 OK

2) // Belirli pozisyondaki notu getir
   GET http://localhost:3000/0
   Yanıt: 20 (dizinin ilk elemanı)
   Durum kodu: 200 OK

   GET http://localhost:3000/10
   Yanıt: {"error": "Geçersiz not pozisyonu"}
   Durum kodu: 400 Bad Request

3) // Body'deki değeri diziye ekle
   POST http://localhost:3000/
   "Body" "raw" "JSON"
   Body: {"value": 18}
   Yanıt: [20, 10, 15, 17, 18] (eklenen notla birlikte tüm dizi)
   Durum kodu: 200 OK

   Body: {"value": "abc"} (sayı olmayan değer)
   Yanıt: {"error": "Geçersiz değer"}
   Durum kodu: 400 Bad Request

4) // Parametredeki değeri diziye ekle

   POST http://localhost:3000/add/19
   Yanıt: [20, 10, 15, 17, 18, 19]
   Durum kodu: 200 OK

   POST http://localhost:3000/add/abc (sayı olmayan parametre)
   Yanıt: {"error": "Geçersiz değer"}
   Durum kodu: 400 Bad Request

5) // Belirli pozisyondaki notu güncelle
   PATCH olarak http://localhost:3000/0 (0. indeksteki notu güncelleyecek)
   "Body" "raw" "JSON"
   Body: {"value": 25}
   Yanıt: [25, 10, 15, 17, 18, 19] (ilk değer değişmiş olmalı)
   Durum kodu: 200 OK

   Geçersiz İndeks: http://localhost:3000/100 + Body: {"value": 25}
   Yanıt: {"error": "Geçersiz not pozisyonu"}

   Geçersiz Değer: http://localhost:3000/0 + Body: {"value": "abc"}
   Yanıt: {"error": "Geçersiz değer"}

6) // Belirli pozisyondaki notu sil
   DELETE http://localhost:3000/2 (2. indeksteki notu silecek)
   Yanıt: [25, 10, 17, 18, 19] (15 değeri silinmiş olmalı)
   Durum kodu: 200 OK

   DELETE http://localhost:3000/100 (geçersiz indeks)
   Yanıt: {"error": "Geçersiz not pozisyonu"}
   Durum kodu: 400 Bad Request

7) // Tüm notları sil
   DELETE http://localhost:3000/
   Yanıt: [] (boş dizi)
   Durum kodu: 200 OK