# Değerlendirme Laboratuvarı Node-02

## Hedefler
- Arayüzün sunucu ile entegrasyonu
- Endpoint'lerin çağrılması

## Talimatlar

### Aşama 1 – Servisin Oluşturulması

1.  Bir müşterinin enerji tüketimlerini sorgulamak için aşağıdaki veri yapısına sahip bir servis oluşturun:

```json
{
  "clienteId": "12345",
  "nome": "João Silva",
  "endereco": {
    "rua": "Rua Exemplo",
    "numero": "42",
    "cidade": "Lisboa",
    "codigoPostal": "1234-567"
  },
  "consumo": [
    {
      "mes": "Ocak",
      "ano": 2023,
      "kWhConsumido": 250,
      "custoTotal": 35.50,
      "dataLeitura": "2023-01-31"
    }
  ],
  "informacoesAdicionais": {
    "tipoTarifa": "Konut",
    "fornecedorEnergia": "Şirket XYZ",
    "contratoAtivo": true
  }
}
```

### Aşama 2 – İstemcinin Oluşturulması

1.  Bir `index.html` sayfası ve bir `index.js` dosyası oluşturun.
2.  Önceki JSON veri yapısını görselleştirmek için gerekli girdileri web sayfasına ekleyin.
3.  Endpoint'ten verileri almak ve sayfaya yüklemek için JS kodunu yazın. 