# Değerlendirme Lab JSON-02

## Amaçlar
- JSONSchema oluşturulması.

Bir JSON dosyasını (XML'de olduğu gibi) işlemeye ihtiyaç duyan bilgisayar sistemi, tüm gerekli verilerin dosyada bulunduğunu, türlerinin doğru olduğunu ve iyi yapılandırıldığını doğrulamalıdır. Bir JSON SCHEMA, içinde bulunması gereken öğelerin ve özelliklerin belirtilmesiyle JSON yapılarının doğrulanmasını sağlar.

SCHEMA sözdiziminin açıklamasının temeli olarak aşağıdaki JSON kullanılacaktır:

```json
{
  "Product": {
    "ProductID": "123",
    "ProductName": "Bicicleta de 3 Rodas",
    "Price": "120",
    "Provider": {
      "Name": "João",
      "City": "Viseu"
    }
  }
}
```

Önceki JSON'ı doğrulamak için bir JSON SCHEMA süslü parantezlerle başlar ve biter. İkinci satırın başında, kullanılacak SCHEMA'nın namespace'ine referans veren bir işaretçi bulunmalıdır. Sonraki satırlar SCHEMA'ya bir başlık (isteğe bağlı) ve verilerin tipini atar.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Product",
  "description": "A product from Acme's catalog",
  "type": "object"
}
```

Dosya başlığını tanımladıktan sonra, JSON belgesindeki çeşitli öğeleri, değişken türlerini ve kısıtlamaları (örneğin: minimum ve maksimum değerler) tanımlamak gereklidir. Karmaşık öğeler (içinde diğer öğeler bulunanlar) `object` türünde tanımlanır ve iç öğeleri `properties` öğesi içinde tanımlanır. Zorunlu öğeler `required` öğesinde belirtilir.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Product",
  "description": "A product from Acme's catalog",
  "type": "object",
  "properties": {
    "Product": {
      "type": "object",
      "properties": {
        "ProductID": {
          "type": "string"
        },
        "ProductName": {
          "type": "string"
        },
        "Price": {
          "type": "string"
        },
        "Provider": {
          "type": "object",
          "properties": {
            "Name": {
              "type": "string"
            },
            "City": {
              "type": "string"
            }
          },
          "required": ["Name", "City"]
        }
      }
    }
  }
}
```
