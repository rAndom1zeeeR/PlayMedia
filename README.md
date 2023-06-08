## Воспроизводите любые аудио- и видеоисточники прямо в браузере!

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
