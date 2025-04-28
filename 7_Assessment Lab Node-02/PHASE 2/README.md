# Değerlendirme Laboratuvarı Node-02 - Aşama 2: İstemci Oluşturma

Bu bölüm, Aşama 1'de oluşturulan servis tarafından sağlanan müşteri enerji tüketim verilerini almak ve görüntülemek için basit bir web istemcisi oluşturmayı içerir.

## Nasıl Yapıldı?

1.  **Dizin Oluşturma:** İstemci tarafı dosyalarını tutmak için `phase 2` adında bir klasör oluşturuldu (veya oluşturulması amaçlandı).
2.  **HTML Dosyası (`index.html`):**
    *   Temel bir HTML5 yapısı kuruldu.
    *   Veri bölümlerinin temel stil ve düzeni için basit CSS eklendi.
    *   JSON veri yapısındaki anahtarlara karşılık gelen belirli `id` özniteliklerine sahip (`clienteId`, `nome`, `rua`, `consumoDetails` vb.) `div` ve `span` elemanları oluşturuldu. Bu elemanlar veriler için yer tutucu görevi görür.
    *   `index.js` betiği body'nin sonuna eklendi.
3.  **JavaScript Dosyası (`index.js`):**
    *   Betik kodunun yalnızca HTML sayfası tamamen yüklendikten sonra çalışmasını sağlamak için `DOMContentLoaded` olay dinleyicisi kullanıldı.
    *   Servis endpoint'ine (`http://localhost:3000/consumo/12345`) eşzamansız bir GET isteği yapmak için `fetch` API'si kullanıldı. Bu örnek için `12345` istemci ID'si kod içinde sabitlenmiştir.
    *   Sunucudan gelen yanıt kontrol edilir; yanıt başarılı değilse bir hata fırlatılır.
    *   İstek başarılı olursa, JSON yanıtı ayrıştırılır.
    *   Betik daha sonra `index.html`'deki yer tutucu elemanlara `document.getElementById()` kullanarak erişir ve bunların `textContent` veya `innerHTML` özelliklerini sunucudan alınan karşılık gelen verilerle günceller.
    *   Tüketim verileri (bir dizi olan) üzerinde döngü yapılır ve her tüketim kaydını görüntülemek için dinamik olarak HTML oluşturulur.
    *   Hataları konsola yazdırmak ve veri alma işlemi başarısız olursa sayfada bir hata mesajı görüntülemek için `.catch()` kullanılarak temel hata yönetimi eklendi.

## Nasıl Çalıştırılır?

1.  **Aşama 1 servisinin çalıştığından emin olun:** `phase 1` dizininden Node.js sunucusunu başlatın (`node server.js`). Sunucu `http://localhost:3000` adresinde dinlemede olmalıdır.
    *   **Önemli:** Aşama 1 sunucusunun, Aşama 2 istemcisinden gelen isteklere izin vermesi için `cors` paketi ile yapılandırıldığından emin olun (`phase 1/README.md` dosyasına bakın).
2.  **HTML dosyasını açın:** `phase 2/index.html` dosyasını doğrudan web tarayıcınızda açın.
    *   **Not:** `index.html` dosyasını bir web sunucusu (örneğin, VS Code Live Server eklentisi `http://127.0.0.1:5500` gibi bir adres sağlar) üzerinden açmanız, doğrudan dosya sisteminden (`file:///...`) açmaktan daha iyidir, çünkü `fetch` gibi bazı tarayıcı özellikleri `file://` protokolünde kısıtlanabilir.
3.  Sayfa yüklenmeli, çalışan servisten verileri almalı ve müşterinin enerji tüketim ayrıntılarını görüntülemelidir.
    *   **Sorun Giderme:** Eğer "Error loading data" mesajı ve konsolda CORS ile ilgili bir hata görüyorsanız, Aşama 1 sunucusunun çalışır durumda olduğundan ve `cors` paketinin doğru şekilde kurulup sunucu koduna eklendiğinden emin olun. Ayrıca sunucuyu yeniden başlattığınızdan emin olun. 