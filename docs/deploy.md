
```
# Автоматический деплой проекта nikitina-ortoped на Vercel из GitHub

## Подключение репозитория к Vercel

1. Перейдите в [Vercel Dashboard](https://vercel.com/dashboard).

2. Нажмите **New Project** → **Import Git Repository**.

3. Выберите репозиторий **nikitina-ortoped** из списка ваших репозиториев на GitHub.

4. Укажите ветку для деплоя — обычно это `main`.

5. Нажмите **Deploy** для первого запуска.

## Автоматический деплой при пуше в GitHub

- Каждый пуш (commit + push) в ветку `main` автоматически запускает сборку и обновление сайта на Vercel.

## Настройка переменных окружения

- В проекте на Vercel откройте раздел **Settings → Environment Variables**.

- Добавьте необходимые переменные окружения (API-ключи и прочее).

## Команды для работы с Git и пуша кода

Инициализация Git репозитория, если это необходимо:

```bash
git init
```

Добавление удаленного репозитория (замените URL на ваш):

```bash
git remote add origin https://github.com/vpcea2s1r/nikitina-ortoped.git
```

Добавление изменений в индекс:

```bash
git add .
```

Создание коммита с сообщением:

```bash
git commit -m "Обновление проекта для деплоя"
```

Отправка изменений в ветку main:

```bash
git push origin main
```

## Полезные ссылки

- Документация Vercel: https://vercel.com/docs
- Руководство по GitHub: https://docs.github.com/en/get-started/quickstart
- Управление переменными окружения на Vercel: https://vercel.com/docs/concepts/projects/environment-variables

***
```

