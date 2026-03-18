# 🎬 TMDB Movie App (Kinopoisk Clone)
#Ссылка на приложение: [TMDB Kinopoisk](https://tmdb-kinopoisk-lysy.vercel.app/)


## 📦 Установка и запуск

### 1. Клонирование репозитория
```bash
git clone https://github.com/lysy1313/tmdb-kinopoisk-lysy.git
cd tmdb-kinopoisk-lysy
```

### 2. Установка зависимостей
*Рекомендуется использовать **pnpm** для корректной работы скриптов сборки:*
```bash
pnpm install
```

### 3. Настройка окружения (Env)
Создайте файл \`.env\` в корне проекта и добавьте ваш API ключ от TMDB:
```env
VITE_BASE_URL=[https://api.themoviedb.org/3/](https://api.themoviedb.org/3/)
VITE_AUTH_TOKEN=ваш_bearer_token_из_tmdb
```

### 4. Команды
```bash
# Режим разработки
pnpm dev

# Сборка проекта
pnpm build

```
