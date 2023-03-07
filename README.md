# Bu projeyi nasıl kurabilirim?
- İlk öncelikle **git** programını [buradan](https://git-scm.com/downloads)'i indirin.
- Daha sonra masaüstünüze gelip bir dosya açın.
- `Shift + Sağ Tık` yapıp `Git Bash here` olan seçeneğe tıklayın.
- Karşınıza komut penceresi tarzı bir pencere gelecektir.
- Komut satırına girip aşağıdaki kodu yazınız.
```
git clone https://github.com/romanwashere/dcJS-typescript
```
- Ve proje artık sizin elinizde, tebrikler 🎉

# Bu projeyi nasıl konfigüre edebilirim?
- İlk öncelikle `./src/config.json` dosyasına gelip `VSCode` ile açın.
```json
{
    "discord": {
        "token": "token",
        "id": "application_id"
    },
    "applications_commands": {
        "global": true,
        "guild_id": ""
    },
    "database": {
        "enabled": false,
        "url": ""
    },
    "express": {
        "port": 3000
    }
}
```
- Burada girilmesi zorunlu olanlar; `token`, `id`, `applications_commands.global`, `database.enabled` ve `express.port`
- Yukarıdaki bahsettiğim zorunlu olanlardan son `3` tanesini ben doldurdum, sizlere kalanlar sadece `token` ve `id`

# Bir sorun mu oluştu?
- Ah, tabikii de bana [discord](https://discord.com/users/622350390871982080) üzerinden ulaşabilirsin; böylelikle hatanı çözebiliriz belki 🤓

# Final
- Eğer bir hata almıyorsanız, bot aktif ise tebrikler; artık burada pek bir işiniz kalmadı demektir!

> By; [@romanwashere](https://github.com/romanwashere)
