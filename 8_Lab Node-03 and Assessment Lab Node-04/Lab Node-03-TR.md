# Lab Node-03

## Hedefler
- Dosya kullanımını keşfetme
- Bir Node.js projesinde MongoDB kullanımını keşfetme

## Talimatlar

### Aşama 1 - Denetleyiciler Klasörünün Oluşturulması
1. Assessment Lab Node-01 projesini açın
2. `Controllers` klasörünü oluşturun
3. `notas.js` dosyasını oluşturun
4. Tüm endpoint'leri bu dosyaya taşıyın
5. Dosyayı `index.js` içine aktarın

### Aşama 2 - Dosya Oluşturma/Okuma
6. `shared` klasörünü oluşturun
7. `ficheiro_notas.txt` adında bir dosya oluşturun
8. Endpoint'lerinizi, değişken verileri her değiştirildiğinde (POST, PATCH, DELETE) yapılan değişiklikleri dosyaya kaydedecek şekilde değiştirin
9. Kodu, sunucu başlatıldığında `minhas_notas` değişkeninin içeriğinin dosyadan okunacağı şekilde değiştirin

### Aşama 3 – Alan Ekleme
10. Programın yapısını, nota ek olarak, bir Kod (ders kodu), dersin adı ve o dersin öğretmeninin adını saklayabilecek şekilde değiştirin (bir tamsayı dizisi yerine, bir nesne dizisine sahip olmanız gerekecektir)
11. Daha önce oluşturulan endpoint'leri değiştirmeyi unutmayın. Anlamını yitiren bir endpoint varsa, kodunuzdan silin. Dersin değerine göre arama yaptığınız fonksiyonlarda, bunu Kod'a göre yapacak şekilde değiştirin

### Aşama 4 – MongoDB
12. MongoDB'yi projenize kurun veya bulut hesabını yapılandırın
13. MongoDB Compass kullanarak, verileri saklamak için bir koleksiyon oluşturun
14. MongoDB Compass kullanarak, dosyadaki her öğe için bir belge oluşturun (dizide 3 nesne varsa, 3 belge oluşturun)
15. Dosyaya okuma/yazma için yaptığınız kodu yorum satırı yapın
16. Kodunuzun yapısını, dosya yerine veritabanı bağlantısını kullanacak şekilde güncelleyin.
    a. GET isteklerinde bir QUERY yapmalısınız
    b. POST isteklerinde bir INSERT yapmalısınız
    c. PUT isteklerinde bir UPDATE yapmalısınız
    d. DELETE isteklerinde bir DELETE yapmalısınız 