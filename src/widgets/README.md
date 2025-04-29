# Widgets

Данная папка содержит различные виджеты, разделённые по тематическим папкам:

- **common/** — Общие виджеты (Alert, Modal, Loader, Tooltip), которые часто используются в разных частях приложения.
- **dashboard/** — Виджеты, специфичные для дашборда (Chart, Stats, Feed).
- **ecommerce/** — Виджеты для e-commerce функционала (ProductCarousel, Cart, Price).
- **authentication/** — Виджеты для аутентификации (Login, Registration).
- **weather/** — Пример виджета для отображения погоды.
- **utilities/** — Общие вспомогательные функции (WidgetHelpers) и константы (WidgetConstants).
- **index.ts** — Индексный файл, объединяющий экспорты всех виджетов.

## Структура

1. Каждая группа виджетов (common, dashboard, ecommerce, ...) имеет собственные подпапки для каждого отдельного виджета.
2. В каждом виджете есть:
    - .vue файл (логика и шаблон компонента),
    - .module.scss файл (модуль стилей),
    - .types.ts файл (описание типов/интерфейсов),
    - index.ts (экспорт по умолчанию).
3. В папке **utilities** находятся вспомогательные функции и константы, которые используются несколькими виджетами.

## Использование

Импортируйте нужный виджет из **widgets/index.ts** или прямо из нужной папки. Пример:

```ts
import { AlertWidget, ChartWidget } from '@/widgets';

// Или
import LoginWidget from '@/widgets/authentication/LoginWidget';
