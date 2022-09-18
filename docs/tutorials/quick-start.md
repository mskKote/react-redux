---
id: quick-start
title: Быстрый старт
sidebar_label: Быстрый старт
hide_title: true
---

&nbsp;

# Быстрый старт с React Redux

:::tip Чему вы научитесь?

<!-- - How to set up and use Redux Toolkit with React Redux -->
- Установке и использованию Redux Toolkit вместе с React Redux

:::

:::info Предварительные требования

- Знакомство с [синтаксисом ES6 и его возможностями](https://www.taniarascia.com/es6-syntax-and-feature-overview/)
- Знания о терминологии React: [JSX](https://ru.reactjs.org/docs/introducing-jsx.html), [состояние](https://ru.reactjs.org/docs/state-and-lifecycle.html), [функциональные компоненты, пропсы](https://ru.reactjs.org/docs/components-and-props.html) и [хуки](https://ru.reactjs.org/docs/hooks-intro.html)
- Понимание [терминов и концепции Redux](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)

:::

## Введение

<!-- Welcome to the React Redux Quick Start tutorial! **This tutorial will briefly introduce you to React Redux and teach you how to start using it correctly**. -->
Добро пожаловать в начальное руководство по React Redux! **Это руководство вкратце представит вам React Redux и обучит использовать его корректно**.

### Как читать это руководство?

<!-- This page will focus on just how to set up a Redux application with Redux Toolkit and the main APIs you'll use. For explanations of what Redux is, how it works, and full examples of how to use Redux Toolkit, see [the Redux core docs tutorials](https://redux.js.org/tutorials/index). -->
Эта страница будет акцентировать внимание только на первичную установку приложения с Redux и Redux Toolkit, а также познакомит с главными API, которые вы будете использовать. Для понимания работы Redux и изучения полных примеров использования Redux Toolkit, посмотрите [руководства в документации самого Redux](https://redux.js.org/tutorials/index).

<!-- For this tutorial, we assume that you're using Redux Toolkit and React Redux together, as that is the standard Redux usage pattern. The examples are based on [a typical Create-React-App folder structure](https://create-react-app.dev/docs/folder-structure) where all the application code is in a `src`, but the patterns can be adapted to whatever project or folder setup you're using. -->
В этом руководстве мы предположим, что вы используете Redux Toolkit и React Redux вместе, в качестве стандартного шаблона использования Redux. В примерах используется [типичная структура папок, созданная Create-React-App](https://create-react-app.dev/docs/folder-structure), где весь код приложения хранится в папке `src`. Как бы то ни было, описанные паттерны могут быть адаптированы для любого проекта и файловой структуры, которую вы используете.


<!-- The [Redux+JS template for Create-React-App](https://github.com/reduxjs/cra-template-redux) comes with this same project setup already configured. -->
[Redux+JS шаблон для Create-React-App](https://github.com/reduxjs/cra-template-redux) устанавливает уже настроенный проект.

## Резюме

### Установите Redux Toolkit и React Redux

<!-- Add the Redux Toolkit and React Redux packages to your project: -->
Добавьте пакеты Redux Toolkit и React Redux в ваш проект:

```sh
npm install @reduxjs/toolkit react-redux
```

### Создайте Redux хранилище(store)

<!-- Create a file named `src/app/store.js`. Import the `configureStore` API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it: -->
Добавьте файл `src/app/store.js`. Импортируйте `configureStore` API из Redux Toolkit. Сначала мы создадим пустое Redux хранилище(store) и экспортируем его:

```js title="app/store.js"
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {},
})
```

<!-- This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing. -->
Это создаст Redux хранилище(store) и автоматически настроит Redux DevTools расширение, таким образом вы сможете просматривать содержимое хранилища(store) во время разработки.

### Обозначим Redux хранилище(store) в React

<!-- Once the store is created, we can make it available to our React components by putting a React Redux `<Provider>` around our application in `src/index.js`. Import the Redux store we just created, put a `<Provider>` around your `<App>`, and pass the store as a prop: -->
Единожды создаётся Redux хранилище(store), которое мы делаем доступным во всех React компонентах, обернув приложение в React Redux `<Provider>` в файле `src/index.js`. Импортируйте созданное на предыдущем шаге Redux хранилище(store) и оберните ваше приложение `<App>` в `<Provider>`, которому необходимо предоставить в пропс `store` наше Redux хранилище(store):


```js title="index.js"
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// highlight-start
import store from './app/store'
import { Provider } from 'react-redux'
// highlight-end

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // highlight-next-line
  <Provider store={store}>
    <App />
  </Provider>
)
```

### Создайте "срез" (часть хранилища/slice) Redux хранилища(store)

<!-- Add a new file named `src/features/counter/counterSlice.js`. In that file, import the `createSlice` API from Redux Toolkit. -->
Добавьте новый файл `src/features/counter/counterSlice.js`. В этом файле импортируйте `createSlice` API из Redux Toolkit.

<!-- Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice. -->
Создание среза Redux хранилища(store) требует строковое имя, с которым будет ассоциирован этот срез, изначальное состояние и 1 или больше функций редюсеров(reducer) для определения, как состояние может быть изменено. После создания среза мы можем экспортировать сгенерированные действия(action creators) и функции редюсеры(reducer) для этого среза.


<!-- Redux requires that [we write all state updates immutably, by making copies of data and updating the copies](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#immutability). However, Redux Toolkit's `createSlice` and `createReducer` APIs use [Immer](https://immerjs.github.io/immer/) inside to allow us to [write "mutating" update logic that becomes correct immutable updates](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#immutable-updates-with-immer). -->
Redux требует, чтобы [все обновления состояния были иммутабельны, это достигается путём копирования данных и обновления этих копий](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#immutability). Как бы то ни было, `createSlice` и `createReducer` от Redux Toolkit используют [библиотеку Immer](https://immerjs.github.io/immer/), что позволяет [писать "мутабельную" логику обновления состояния, которая становится корректным иммутабельным вариантом](https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#immutable-updates-with-immer).

```js title="features/counter/counterSlice.js"
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit позволяет нам писать "мутабельную" логику в reducer'ах.
      // Это не изменяет состояние(state) напрямую, потому что внутри используется библиотека Immer,
      // которая следит за изменениями в "черновом state" и создает новое 
      // неизменное состояние на основе этих изменений
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

### Добавляем редюсер(reducer) функции созданного среза в Redux хранилище(store) приложения

<!-- Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the `reducers` parameter, we tell the store to use this slice reducer function to handle all updates to that state. -->
Далее, нам нужно импортировать функцию редюсера(reducer) из среза для счётчика и добавить их в наше хранилище(store). Определением поля в параметре `reducers` мы говорим хранилищу(store) использовать функцию редюсера(reducer) из среза для обработки изменений этого состояния.


```js title="app/store.js"
import { configureStore } from '@reduxjs/toolkit'
// highlight-next-line
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    // highlight-next-line
    counter: counterReducer,
  },
})
```

### Использование состояния из Redux хранилища(store) и действий в компонентах React

<!-- Now we can use the React Redux hooks to let React components interact with the Redux store. We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`. Create a `src/features/counter/Counter.js` file with a `<Counter>` component inside, then import that component into `App.js` and render it inside of `<App>`. -->
Теперь мы можем использовать хуки из React Redux, чтобы позволить React компонентам взаимодействовать с Redux хранилищем(store). Мы можем читать состояние из хранилища(store) при помощи хука `useSelector` и вызывать действия, используя `useDispatch`. Создайте файл `src/features/counter/Counter.js` с компонентом `<Counter>`, затем импортируйте этот компонент в `App.js` и поставьте его внутрь `<App>`.


```jsx title="features/counter/Counter.js"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Увеличить значение"
          onClick={() => dispatch(increment())}
        >
          Увеличить
        </button>
        <span>{count}</span>
        <button
          aria-label="Уменьшить значение"
          onClick={() => dispatch(decrement())}
        >
          Уменьшить
        </button>
      </div>
    </div>
  )
}
```

<!-- Now, any time you click the "Increment" and "Decrement buttons:

- The corresponding Redux action will be dispatched to the store
- The counter slice reducer will see the actions and update its state
- The `<Counter>` component will see the new state value from the store and re-render itself with the new data -->
Теперь в любое время вы можете нажать на кнопки "Увеличить" и "Уменьшить":

- Соответствующее Redux действие будет отправляться в хранилище(store)
- Reducer среза счётчика будет видеть действия и обновлять нужную часть состояния
- Компонент `<Counter>` будет получать новое состояние из хранилища(store) и перерисовываться с новыми данными -->


## Чему вы научились

<!-- That was a brief overview of how to set up and use Redux Toolkit with React. Recapping the details: -->
Это был краткий осмотр того, как установить и использовать Redux Toolkit с React. Подводя итоги:


:::tip Резюме

- **Создайте Redux хранилище(store) с `configureStore`**
  - `configureStore` принимает функции `reducer` как именнованный аргумент
  - `configureStore` автоматически устанавливает хранилище(store) со значениями по умолчанию
- **Предоставьте Redux хранилище(store) компонентам React приложения**
  - Оберните ваш `<App />` в компонент `<Provider>` из React Redux
  - Передайте Redux хранилище(store) `<Provider store={store}>`
- **Создайте функцию reducer для Redux "среза" ("slice") при помощи `createSlice`**
  - Вызовите `createSlice` со строковым именем среза, начальное значение и поимённо функции редюсеров (reducer)
  - Функции редюсеров(Reducer) могут "мутировать" состояние, т.к. внутри использует библиотека Immer
  - Экспортируйте созданный редюсер(reducer) среза и его действия
- **Используйте хуки `useSelector/useDispatch` из React Redux в React компонентах**
  - Читайте данные из хранилища(store) с помощью хука `useSelector`
  - Получите функцию `dispatch` с хуком `useDispatch`, и вызовите её с определённым действием для изменения состояния

:::

### Полный пример приложения со счётчиком

<!-- The counter example app shown here is also the -->
Пример приложения счётчика также представлен здесь

<!-- Here's the complete counter application as a running CodeSandbox: -->
Вот полное приложение счетчика в виде запущенной CodeSandbox:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-counter-example/tree/master/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.js&theme=dark&runonclick=1"
  title="redux-essentials-example"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## Что дальше?

Мы рекомендуем пройти [**руководства "Redux Essentials" и "Redux Fundamentals" из документации самого Redux**](https://redux.js.org/tutorials/index). Они дадут вам полное понимание работы Redux, что назначение Redux Toolkit и React Redux, а также способ их корректного использования.
