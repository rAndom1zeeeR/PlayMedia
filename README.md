## Воспроизводите любые аудио и видеоисточники прямо в браузере!
Необходимо реализовать страницу с формой для ввода ссылки на аудиофайл. После успешного ввода, вместо формы должен отобразиться плеер в котором можно прослушать источник.\

## Страница
Сама страница представляет собой обычную *html* страницу с *css* стилями. Ее нужно реализовать без использования *React*. Она должна корректно отображаться, даже если выполнение *js* на странице запрещено.\
В разделе “*Technical requirements*” реализовать переключение вкладок (табов) по клику на них. Если выполнение *js* запрещено, то должна быть активна первая вкладка. \
Чистая страница находится в папке public/index.html

## Быстрые клавиши управления мультимедиа
"P" - Play, Pause\
"<" - volume down\
">" - volume up\
"M" - mute/unmute volume\
"{" - play slower\
"}" - play faster

# Форма и плеер
Форма ввода ссылки и плеер выполнены с помощью *React*.\
В форме располагается поле ввода ссылки в формате “*https://*”. При некорректном вводе отображается ошибка, как указано на макете.\
При успешном вводе, скрывается форма и в этом же месте отображается плеер с источником аудио или видео из ссылки.\
При буферизации аудио потока отображается лоадер в виде бегущей линии.\
Сам плеер реализован с помощью браузерного тега *<audio/>*. Важно отображать прогресс в секундах, регулятор громкости и добавить возможность изменения прогресса воспроизведения.\
По клику на кнопку “*Back*”, пользователь должен вернуться к форме ввода ссылки.\

# Дополнительные задания (опционально)
2. Добавить поддержку проигрывания видео (так же по источнику)
3. Реализовать отображение истории запросов (введённых источников)
4. Добавить управление плеером с помощью клавиатуры.
