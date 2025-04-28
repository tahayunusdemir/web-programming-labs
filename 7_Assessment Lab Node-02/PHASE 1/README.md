# Assessment Lab Node-02 - Aşama 1: Servisin Oluşturulması

Bu bölümde, bir müşterinin enerji tüketim verilerini döndüren basit bir Node.js servisi oluşturulmuştur.

## Nasıl Yapıldı?

1.  **Klasör Oluşturma:** `phase 1` adında bir klasör oluşturuldu.
2.  **Gerekli Paketler:** Servis, Node.js ve Express framework'ü kullanılarak oluşturuldu. Ayrıca, tarayıcıdan gelen isteklerde CORS (Cross-Origin Resource Sharing) hatası almamak için `cors` paketi de kullanıldı. Çalıştırmadan önce bu paketleri yüklemeniz gerekir:
    ```bash
    # phase 1 klasörü içindeyken:
    npm install express cors
    ```
3.  **Servis Dosyası (`server.js`):**
    *   Express uygulaması başlatıldı.
    *   `cors` paketi çağrıldı ve middleware olarak eklendi (`app.use(cors());`). Bu, farklı bir origin'den (örneğin, `phase 2` istemcisinden) gelen isteklere izin verir.
    *   Talimatlarda belirtilen örnek JSON verisi bir değişkende saklandı.
    *   `/consumo/:clienteId` adresine bir GET endpoint'i tanımlandı. Bu endpoint, gelen isteklere örnek JSON verisini döndürür.
    *   Servis, 3000 numaralı port üzerinden dinlemeye başlatıldı.

## Servisi Çalıştırma

1.  Terminali `phase 1` klasöründe açın.
2.  Gerekli paketleri yükleyin: `npm install express cors`
3.  Servisi başlatın: `node server.js`
    *   **Not:** Kodda (`server.js`) bir değişiklik yaptıysanız, sunucuyu durdurup (`Ctrl+C`) yeniden başlatmanız (`node server.js`) gerekir.
4.  Tarayıcınızda veya bir API test aracıyla `http://localhost:3000/consumo/herhangi-bir-id` adresine giderek servisi test edebilirsiniz (örneğin, `http://localhost:3000/consumo/12345`).