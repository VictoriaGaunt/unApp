# Страницы (Pages)

Эта папка содержит все страницы приложения, разделенные по функциональным группам:

- **public/** – Публичные страницы, доступные всем пользователям (Home, About, Contact, FAQ).
- **auth/** – Страницы для авторизации и регистрации (Login, Registration, Password Recovery).
- **dashboard/** – Страницы личного кабинета (Dashboard Home, Profile, Settings, Notifications).
- **admin/** – Административные страницы (Admin Dashboard, User Management, Reports).
- **errors/** – Страницы ошибок (404, Unauthorized, 500).
- **legal/** – Юридическая информация (Privacy Policy, Terms of Service, Cookie Policy).
- **layouts/** – Специфические макеты для страниц (PublicLayout, AuthLayout, DashboardLayout, AdminLayout).
- **components/** – Локальные компоненты, используемые только в разделах pages (Header, Footer, Sidebar).
- **i18n/** – Файлы локализации для страниц (en, ru, es).
- **utils/** – Вспомогательные функции и инструменты для страниц.
- **tests/** – Тесты для страниц (unit / интеграционные).

## Использование
Импортируйте страницы из этого каталога в ваш роутер для организации навигации по приложению.
