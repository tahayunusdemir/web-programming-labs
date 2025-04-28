# Lab JSON-01

## Amaçlar
- JSON yapısı oluşturma

JSON belgesi, tıpkı bir XML belgesi gibi, verilerin anlaşılabilirliğini sağlarken bilgisayar sistemleri arasında birlikte çalışabilirliği garanti eder. Öte yandan, bir JSON dosyası, XML modelinden daha kompakt bir veri yapılandırmasına izin verir, bu nedenle büyük hacimdeki verilerin iletimi için idealdir.

JSON'ın bilgileri temsil etmek için kullandığı fikir son derece basittir: temsil edilen her değer için, anlamını tanımlayan bir isim (veya etiket) atanır. Bir isim/değer çifti, çift tırnak içindeki bir isim, ardından iki nokta, ardından değer ile temsil edilmelidir. Örneğin, 2016 yılını temsil etmek için şema şöyle olurdu:

```json
{
  "yil": 2016
}
```

## Basit Tipler

Temsil edilen değerler aşağıdaki veri tiplerinden birine sahip olabilir: sayısal (tam sayı veya ondalıklı, pozitif/negatif):

```json
{
  "boy": 1.77,
  "yas": 32,
  "sicaklik": -3
}
```

Boolean:

```json
{
  "onaylandi": true
}
```

String:

```json
{
  "site": "www.di.estgv.ipv.pt"
}
```

## Diziler

Basit veri tiplerinden yola çıkarak karmaşık tipler oluşturmak mümkündür. Dizi, her elemanın virgülle ayrıldığı [] ile sınırlandırılmış karmaşık bir tiptir. Örneğin, bir string dizisi şu şekilde temsil edilebilir:

```json
["AI3", "IRSC", "RC1", "BD"]
```

Bir tam sayı matrisi ise şu şekilde temsil edilebilir:

```json
[
  [2, 5],
  [21, -5],
  [232, 435]
]
```

Bir dizi, bir JSON yapısında aynı türden birden çok öğeyi temsil etmek için kullanılabilir. Örneğin, iki film bir dizi şeklinde şöyle temsil edilebilir:

```json
{
  "filmler": [
    {
      "baslik": "Bir Zamanlar Amerika'da",
      "ozet": "gangster filmi",
      "yil": 1984,
      "tur": ["macera", "dram", "aksiyon"]
    },
    {
      "baslik": "Texas'ta Düello",
      "ozet": "vahşi batı",
      "yil": 1963,
      "tur": ["western"]
    }
  ]
}
```

## XML ve JSON Karşılaştırması

JSON'da öğelerin ve özelliklerin temsili basit bir gösterime sahiptir. Örnek olarak, XML gösterimi ile karşılaştırma yapacak olursak:

```xml
<kisi tip="tekil">
  <ad>Filipe</ad>
  <yas>38</yas>
</kisi>
```

ve JSON:

```json
{
  "kisi": {
    "tip": "tekil",
    "ad": "Filipe",
    "yas": 38
  }
}
```

## Alıştırma

- disciplinas.xml dosyasına dayalı bir JSON dosyası oluşturun. Öznitelikler JSON'da bir yapı oluşturmayı gerektirdiğinden, "teorica" ve "pratica" anahtarları, XML'de bulunan özniteliğin yanı sıra, öğretmenlerin adını saklamak için bir "nome" (isim) elemanına da sahip olmalıdır. 