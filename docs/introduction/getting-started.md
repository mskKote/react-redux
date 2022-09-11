---
id: getting-started
title: Начало работы
hide_title: true
sidebar_label: Начало работы
description: 'Основы > Начало работы: первые шаги с React Redux'
---

&nbsp;

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

<!-- # Getting Started with React Redux -->
# Начало работы с React Redux

<!-- [React Redux](https://github.com/reduxjs/react-redux) is the official [React](https://reactjs.org/) UI bindings layer for [Redux](https://redux.js.org/). It lets your React components read data from a Redux store, and dispatch actions to the store to update state. -->
[React Redux](https://github.com/reduxjs/react-redux) — это официальная библиотека для [React](https://reactjs.org/), связывающая UI и [Redux](https://redux.js.org/). Это позволяет вашим React компонентам читать данные из Redux "хранилища" (store) и "отправлять" (dispatch) "действия" (actions) в контейнер для обновления "состояния" (state).

## Установка

React Redux 8.x требует **React 16.8.3 или выше** / **React Native 0.59 или выше** для использования с React хуками.

### Create React App

<!-- The recommended way to start new apps with React and Redux is by using the [official Redux+JS template](https://github.com/reduxjs/cra-template-redux) or [Redux+TS template](https://github.com/reduxjs/cra-template-redux-typescript) for [Create React App](https://github.com/facebook/create-react-app), which takes advantage of **[Redux Toolkit](https://redux-toolkit.js.org/)** and React Redux's integration with React components. -->
Рекомендуемый путь для создания новых React приложений с Redux — использовать официальный шаблон [Redux+JS](https://github.com/reduxjs/cra-template-redux) или [Redux+TS](https://github.com/reduxjs/cra-template-redux-typescript) для [Create React App](https://github.com/facebook/create-react-app). Шаблоны используют **[Redux Toolkit](https://redux-toolkit.js.org/)** и содержат пример интеграции React Redux в React компонентах.

```bash
# Шаблон Redux на JS
npx create-react-app my-app --template redux

# Шаблон Redux на TypeScript
npx create-react-app my-app --template redux-typescript
```

### Внедрение React Redux в существующее React приложение

Для использования React Redux в вашем приложении установите зависимость:

```bash
# Если вы используете npm:
npm install react-redux

# или если вы используете Yarn:
yarn add react-redux
```

Затем вам потребуется [установить Redux](https://redux.js.org/introduction/installation) и [настроить Redux хранилище (store)](https://redux.js.org/recipes/configuring-your-store/).

React-Redux v8 разработан на TypeScript, следовательно типизация встроена автоматически.

## Обзор API 

### `Provider`

React Redux предоставляет компонент `<Provider />`, который делает Redux хранилище (store) доступным всему приложению.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

### Хуки

<!-- React Redux provides a pair of custom React hooks that allow your React components to interact with the Redux store. -->
React Redux предоставляет пару React хуков для взаимодействия с Redux хранилищем (store) из ваших компонентов.

<!-- `useSelector` reads a value from the store state and subscribes to updates, while `useDispatch` returns the store's `dispatch` method to let you dispatch actions. -->
Хук `useSelector` читает значение из состояния (state) хранилища (store) и подписывается на обновление состояния (state). И хук `useDispatch`, возвращающий метод `dispatch`, для отправки сообщений в хранилище (store).


```jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Увеличить значение"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Уменьшить значение"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  )
}
```

## Изучение React Redux

### Запись трансляции "узнай современный Redux"

Разработчик Redux Марк Эриксон появился на шоу "Learn with Jason", чтобы объяснить, как рекомендуется использовать Redux сегодня. Запись включает в себя разработку React приложения на Typescript с Redux Toolkit, Redux-Redux хуками и новым инструментом для отправки и обработки запросов, RTK Query.

Посмотрите [заметки шоу](https://www.learnwithjason.dev/let-s-learn-modern-redux) для транскрипции и ссылки на код приложения.

<LiteYouTubeEmbed 
    id="9zySeP5vH9c"
    title="Узнай современный Redux - Redux Toolkit, React-Redux хуки и RTK Query"
/>

## Помощь и дискуссия

<!-- The **[#redux channel](https://discord.gg/0ZcbPKXt5bZ6au5t)** of the **[Reactiflux Discord community](http://www.reactiflux.com)** is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us! -->
**[Канал #redux в Discord](https://discord.gg/0ZcbPKXt5bZ6au5t)** от **[сообщества Reactiflux](http://www.reactiflux.com)** - это наш официальный ресурс для всех вопросов касательно изучения и использования Redux. Reactiflux — отличное место, где можно пообщаться, задать вопросы и узнать что-то новое — присоединяйтесь к нам!

Вы также можете задать вопросы на [Stack Overflow](https://stackoverflow.com), используя **[тег #redux](https://stackoverflow.com/questions/tagged/redux)**.

## Документация на разных языках
- [English — оригинальная документация](https://react-redux.js.org)
- [Português](https://fernandobelotto.github.io/react-redux)


Оригинальная английская документация переведена на русский язык усилиями @mskKote и @shchukin_ve. Если вы хотите поддержать перевод, присоединяйтесь в [наш Telegram чат](https://t.me/+E1Kjcjrrip8zZDFi)
