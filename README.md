Яндекс.Практикум Проектная работа 14 

Цель проекта - отбработать навыки express.js полученные в ходе спринта, подключение Mongoose.

---

## Локальный запуск проекта.

1. Клонируем репозиторий.
2. В корневой папке проекта выполняем установку зависимостей (npm install)
3. Запуск с hot reload (npm run dev)
4. Обычный запуск (npm run start)

### Запросы


    GET /users — возвращает всех пользователей из базы
    GET /users/:userId - возвращает пользователя по _id
    POST /users — создаёт пользователя с переданными в теле запроса name, about и avatar
    GET /cards — возвращает все карточки из базы
    POST /cards — создаёт карточку с переданными в теле запроса name и link
    DELETE /cards/:cardId — удаляет карточку по _id
    PATCH /users/me — обновляет профиль
    PATCH /users/me/avatar — обновляет аватар
    PUT /cards/:cardId/likes — поставить лайк карточке
    DELETE /cards/:cardId/likes — убрать лайк с карточки
    POST /signin — логин
    POST /signup — регистрация
