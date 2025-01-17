---
id: typescript-quick-start
title: Начало работы с TypeScript
sidebar_label: Начало работы с TypeScript
hide_title: true
---

&nbsp;

# Начало работы React Redux с TypeScript

:::tip Чему вы научитесь?

<!-- - How to set up and use Redux Toolkit and React Redux with TypeScript -->
- Как установить и использовать Redux Toolkit и React Redux вместе с TypeScript

:::

:::info Предварительные требования

- Знание [React хуков](https://ru.reactjs.org/docs/hooks-intro.html)
- Понимание [терминов и концепции Redux](https://ru.redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)
- Понимание синтаксиса и концепций TypeScript

:::

## Введение

<!-- Welcome to the React Redux TypeScript Quick Start tutorial! **This tutorial will briefly show how to use TypeScript with Redux Toolkit**. -->
Приветствуем в начальном руководстве по React Redux с TypeScript! **Это руководство будет вкратце покажет, как использовать TypeScript с Redux Toolkit**.

<!-- This page focuses on just how to set up the TypeScript aspects . For explanations of what Redux is, how it works, and full examples of how to use Redux, see [the Redux core docs tutorials](https://redux.js.org/tutorials/index). -->
Эта страница будет акцентировать внимание только на аспекты работы с TypeScript. Для понимания работы Redux и изучения примеров его использования посмотрите [руководства в документации самого Redux](https://redux.js.org/tutorials/index). 

<!-- Both React-Redux and Redux Toolkit are already written in TypeScript, so their TS type definitions are built in. -->
React-Redux и Redux Toolkit написаны на TypeScript, следовательно типизация уже встроена.

<!-- [React Redux](https://react-redux.js.org) has its type definitions in a separate [`@types/react-redux` typedefs package](https://npm.im/@types/react-redux) on NPM. In addition to typing the library functions, the types also export some helpers to make it easier to write typesafe interfaces between your Redux store and your React components. -->
[React Redux](https://ru.react-redux.js.org) имеет определения типов в отдельном [`@types/react-redux` пpm пакете с типами](https://npm.im/@types/react-redux). В дополнение к типизации библиотечных функций,экспортируются помощники для упрощения написания типобезопасных интерфейсов между вашим Redux хранилищем и React компонентами.


<!-- The [Redux+TS template for Create-React-App](https://github.com/reduxjs/cra-template-redux-typescript) comes with a working example of these patterns already configured. -->
[Шаблон Redux+TS для Create-React-App](https://github.com/reduxjs/cra-template-redux-typescript) содержит настроенный проект.

:::info Информация

<!-- The recently updated `@types/react@18` major version has changed component definitions to remove having `children` as a prop by default. This causes errors if you have multiple copies of `@types/react` in your project. To fix this, tell your package manager to resolve `@types/react` to a single version. Details: -->
В недавно обновлённой основной версии `@types/react@18` изменилось определение компонентов, был удален пропс `children`, существовавший по умолчанию. В случае наличия несколько копий `@types/react` в вашем проекте, это будет вызывать ошибки. Для исправления воспользуйтесь вашим менеджером пакетов, чтобы привести `@types/react` к единственной версии. Детали:

https://github.com/facebook/react/issues/24304#issuecomment-1094565891

:::

## Установка проекта

<!-- ### Define Root State and Dispatch Types -->
### Определение корневого состояние и типов для отправки (dispatch)

<!-- [Redux Toolkit's `configureStore` API](https://redux-toolkit.js.org/api/configureStore) should not need any additional typings. You will, however, want to extract the `RootState` type and the `Dispatch` type so that they can be referenced as needed. Inferring these types from the store itself means that they correctly update as you add more state slices or modify middleware settings. -->
[Redux Toolkit `configureStore` API](https://redux-toolkit.js.org/api/configureStore) не нуждается в установке дополнительных типов. Несмотря на это вам следуют извлечь типы `RootState` и `Dispatch`, чтобы на них можно было ссылаться по мере необходимости. Извлечение этих типов из хранилища(store) означает, что они будут корректно обновляться по мере добавления новых частей хранилища(store) или при модификации настроек middleware.

<!-- Since those are types, it's safe to export them directly from your store setup file such as `app/store.ts` and import them directly into other files. -->
Так как они являются типами, можно не переживать о безопасности при экспорте их из файла с настройкой хранилища `app/store.ts` и последующем импортировании в других файлах.

```ts title="app/store.ts"
import { configureStore } from '@reduxjs/toolkit'
// ...

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer,
  },
})

// highlight-start
// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// highlight-end
```

### Определяем типизированные хуки

<!-- While it's possible to import the `RootState` and `AppDispatch` types into each component, it's **better to create typed versions of the `useDispatch` and `useSelector` hooks for usage in your application**. . This is important for a couple reasons: -->
Пускай, имеется возможность импортировать типы `RootState` и `AppDispatch` в каждый компонент, **лучше создать типизированные версии хуков `useDispatch` и `useSelector`**. Это важно по нескольким причинам:

<!-- - For `useSelector`, it saves you the need to type `(state: RootState)` every time
- For `useDispatch`, the default `Dispatch` type does not know about thunks. In order to correctly dispatch thunks, you need to use the specific customized `AppDispatch` type from the store that includes the thunk middleware types, and use that with `useDispatch`. Adding a pre-typed `useDispatch` hook keeps you from forgetting to import `AppDispatch` where it's needed. -->
- `useSelector` избавляет вас от необходимости каждый раз печатать `(state: RootState)`
- `useDispatch`: тип `Dispatch` по умолчанию не знаком с thunks. С целью корректной отправки thunks, вам необходимо использовать специальный тип `AppDispatch` из хранилища (store), который включает типы из thunk middleware и использует их вместе с `useDispatch`. С помощью типизированного хука `useDispatch` можно забыть о необходимости импортировать `AppDispatch`.

<!-- Since these are actual variables, not types, it's important to define them in a separate file such as `app/hooks.ts`, not the store setup file. This allows you to import them into any component file that needs to use the hooks, and avoids potential circular import dependency issues. -->
Поскольку это переменные, а не типы, важно определить их в отдельном файле, таком как `app/hooks.ts`, а не в файле настройки хранилища(store). Это позволит вам импортировать их в любой компонент, который должен использовать хуки, и избежать потенциальную проблему с импортом из-за циклической зависимости.


```ts title="app/hooks.ts"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// highlight-start
// Используйте во всем приложении вместо обычных `useDispatch` и `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// highlight-end
```

## Использование в приложении

<!-- ### Define Slice State and Action Types -->
### Части состояния и типы действий (action)

<!-- Each slice file should define a type for its initial state value, so that `createSlice` can correctly infer the type of `state` in each case reducer. -->
Каждый файл среза(части состояния/slice) должен определять тип его начального состояния, таким образом `createSlice` сможет правильно определить тип `state` при каждом редюсере (reducer).

<!-- All generated actions should be defined using the `PayloadAction<T>` type from Redux Toolkit, which takes the type of the `action.payload` field as its generic argument. -->
Все сгенерированные действия должны быть определены используя тип `PayloadAction<T>` из Redux Toolkit, который берёт тип поля `action.payload` как аргумент для шаблона (`<T>`).

<!-- You can safely import the `RootState` type from the store file here. It's a circular import, but the TypeScript compiler can correctly handle that for types. This may be needed for use cases like writing selector functions. -->
Здесь вы можете безопасно импортировать тип `RootState` из файла хранилища (store). Это циклический импорт, но компилятор TypeScript может корректно обработать эти типы. Это может потребоваться для написания селекторов.

```ts title="features/counter/counterSlice.ts"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// highlight-start
// Определяем тип части состояния(среза/slice)
interface CounterState {
  value: number
}

// Определение начального состояния, используя тип
const initialState: CounterState = {
  value: 0,
}
// highlight-end

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` выведет тип состояния из аргумента `initialState`
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // highlight-start
    // Использование типа PayloadAction для объявления содержимого `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // highlight-end
      state.value += action.payload
    },
  },
})

// Сгенерированные Создатели Действий/ action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Весь остальной код может использовать тип `RootState`
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
```

<!-- The generated action creators will be correctly typed to accept a `payload` argument based on the `PayloadAction<T>` type you provided for the reducer. For example, `incrementByAmount` requires a `number` as its argument. -->
Сгенерированные Создатели Действий будут корректно типизированы для принятия аргумента `payload`, основанного на типе `PayloadAction<T>`, который вы передаёте в функцию редюсера(reducer). Например, `incrementByAmount` требует `number` в качестве аргумента.

<!-- In some cases, [TypeScript may unnecessarily tighten the type of the initial state](https://github.com/reduxjs/redux-toolkit/pull/827). If that happens, you can work around it by casting the initial state using `as`, instead of declaring the type of the variable: -->
В некоторых случаях [TypeScript может излишне сузить тип начального значения](https://github.com/reduxjs/redux-toolkit/pull/827). Если это случилось, то используйте `as` вместо объявления нового типа:


```ts
// Преобразование состояние вместо объявления нового типа
const initialState = {
  value: 0,
} as CounterState
```

### Использование типизированных хуков в компонентах

<!-- In component files, import the pre-typed hooks instead of the standard hooks from React-Redux. -->
В файлах компонентов импортируйте типизированные хуки вместо стандартных хуков из React-Redux.

```tsx title="features/counter/Counter.tsx"
import React, { useState } from 'react'

// highlight-next-line
import { useAppSelector, useAppDispatch } from 'app/hooks'

import { decrement, increment } from './counterSlice'

export function Counter() {
  // highlight-start
  // Аргумент `state` уже корректно типизирован как `RootState`
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  // highlight-end

  // логика отрисовки...
}
```

## Что дальше?

Посмотрите ["использование с TypeScript"](../using-react-redux/usage-with-typescript.md), чтобы узнать подробности использования Redux Toolkit API с TypeScript.
