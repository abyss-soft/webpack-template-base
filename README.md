# Готовая сборка webpack

В ней есть оптимизация и минимизация:

1. JavaScript (babel, core-js)
2. SCSS
3. HTML
4. Сжатие картинок
5. Работа со шрифтами
6. Проверка кода **ESLint**
7. Поддержка сетки **smart-grid** (это миксины, которые облегчают адаптивную верстку проекта, как в bootstrap: xs,sm,md,lg,xl)
8. Webpack-dev-server
9. Поддержка **jest** с покрытием кода
10. Возможность использования глобальных переменных ENV
11. **Описание ошибок выводится прямо в браузере**
12. Включен плагин, позволяющий удалять блоки кода, например при выводе в продакшен

----

**если нужна сборка с Vue и Vuex то она тут**
[https://github.com/abyss-soft/webpack-template-base_vue_vuex](https://github.com/abyss-soft/webpack-template-base_vue_vuex) 

**если нужна сборка с шаблонизатором Pug, то она тут**
[https://github.com/abyss-soft/webpack-template-base_Pug](https://github.com/abyss-soft/webpack-template-base_Pug) 



**если нужна простая сборка с gulp 4.0, то она тут**
[https://github.com/abyss-soft/gulp4-html](https://github.com/abyss-soft/gulp4-html) 

**если нужна простая сборка с gulp 3.9, то она тут**
[https://github.com/abyss-soft/gulp-html](https://github.com/abyss-soft/gulp-html) 

----

## Установка

Клонируем к себе репозиторий

Сделайте **git clone**

Смените директорию **cd webpack-template-base**

Запустите  **npm install**

---

## Работа

###### для включения Smart-grid 
даем команду **npm run smart-grid**

в папке SCSS/UTILS появляется файл **_smart-grid.scss** 

его нужно подключить туда, где хотите применять сетку

---

##### Для разработки:

даем команду **npm run dev**

Получаем комфортную среду для отладки, есть карты кода (source maps)

---

##### Использования глобальных переменных ENV
переменные экспортируются в файле webpack.dev.conf.js

Например:

    APP_ENV: JSON.stringify(process.env.APP_ENV),
    API_KEY: JSON.stringify(process.env.API_KEY)

Использовать в коде можно например так:

    if (APP_ENV === "dev") {..код  для разработки..}

Или так, используя глобальную переменную process.env:

    if (process.env.NODE_ENV !== `production`) {..код только для разработки, в продакшен не попадет..}

---
###### использование плагина удаления блоков кода

удаление блоков кода в HTML:

  <!--deletestart-->
  <link rel="stylesheet" type="text/css" href="assets/scss/main.scss"/>
  <!--deleteend-->

все что находится между блоками deletestart ... deleteend будет удалено

---

##### Для продакшена:

если использовали глобальные переменные, то устанавливаем переменную **APP_ENV=prod**

даем команду **npm run prod**

Получаем папку dist содержащую минимизированный / сжатый код

---

##### Для проверки правильности кода:

даем команду  **npm run lint**

---

##### Для проверки тестов:

даем команду  **npm run test**
