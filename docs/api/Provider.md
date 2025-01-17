---
id: provider
title: Provider
sidebar_label: Provider
hide_title: true
# description: 'API > Provider: providing the Redux store to your React app'
description: 'API > Provider: предоставление хранилища Redux вашему React приложению'
---

&nbsp;

# `Provider`

## Overview

<!-- The `<Provider>` component makes the Redux `store` available to any nested components that need to access the Redux store. -->
Компонент `<Provider>` делает `store` Redux доступным для любых вложенных компонентов, которым необходим доступ к хранилищу Redux.

<!-- Since any React component in a React Redux app can be connected to the store, most applications will render a `<Provider>` at the top level, with the entire app’s component tree inside of it. -->
Поскольку любой компонент React в приложении React Redux может быть подключен к хранилищу, большинство приложений будут рендерить `<Provider>` на верхнем уровне со всем деревом компонентов приложения внутри него.

<!-- The [Hooks](./hooks.md) and [`connect`](./connect.md) APIs can then access the provided store instance via React's Context mechanism. -->
[Хуки](./hooks.md ) и [`connect`](./connect.md ) после подключения смогут получить доступ к предоставленному экземпляру хранилища через механизм передачи контекста из React.

### Пропсы

```ts
interface ProviderProps<A extends Action = AnyAction, S = any> {
  /**
   * Единственное хранилище Redux в вашем приложении.
   */
  store: Store<S, A>

  /**
   * (Опционально) снэпшот серверного состояния. Будет использован во время изначального рендеринга при гидрации(hydration)
   * Если доступно, то убедится, что вывод пользовательского интерфейса соответствует HTML-коду, сгенерированному на сервере.
   * Новый в 8.0
   */
  serverState?: S

  /**
   * (Опционально) контекст, который будет внутренне использован в react-redux. 
   * Функция React.createContext() отвечает за создание контекста для использования.
   * Если этот пропс используется, вам понадобится изменить `connect` 
   * путём предоставления того же контекста, что был передан в Provider.
   * Изначальное значение не важно, т.к. оно перезаписывается внутренним состоянием Provider.
   */
  context?: Context<ReactReduxContextValue<S, A>>

  /** Верхнеуровеневый элемент React в вашем дереве компонентов, такие как `<App />` **/
  children: ReactNode
}
```

<!-- Typically, you only need to pass `<Provider store={store}>`. -->
Как правило, вам нужно только передать `<Provider store={store}>.`

<!-- You may provide a context instance. If you do so, you will need to provide the same context instance to all of your connected components as well. Failure to provide the correct context results in this runtime error: -->
Вы можете предоставить экземпляр контекста. Если вы это сделаете, вам также нужно будет предоставить один и тот же экземпляр контекста всем вашим подключенным компонентам. Невозможность предоставить правильный контекст приводит к ошибке во время исполнения:

> Invariant Violation
>
> Could not find "store" in the context of "Connect(MyComponent)". Either wrap the root component in a `<Provider>`, or pass a custom React context provider to `<Provider>` and the corresponding React context consumer to Connect(Todo) in connect options.

<!-- ## React 18 SSR Usage -->
## Использование React 18 SSR

<!-- As of React-Redux v8, `<Provider>` now accepts a `serverState` prop for use in SSR hydration scenarios. This is necessary if you are calling `hydrateRoot` in order to avoid hydration mismatches. -->
Начиная с React-Redux v8, `<Provider>` теперь принимает свойство `serverState` для использования в сценариях гидратации SSR. Это необходимо, если вы вызываете hydrateRoot, чтобы избежать несоответствия при гидратации.

<!-- You should pass the entire serialized state from the server as the `serverState` prop, and React will use this state for the initial hydration render. After that, it will apply any updates from changes that occurred on the client during the setup process. -->
Вы должны передать целиком сериализованное состояние с сервера в качестве свойства `serverState`, и React будет использовать это состояние для начального рендеринга гидратации. После этого он применит все изменения, которые произошли на клиенте в процессе загрузки.

<!-- ## Examples -->
## Примеры

<!-- ### Basic Usage -->
### Базовое использование

<!-- In the example below, the `<App />` component is our root-level component. This means it’s at the very top of our component hierarchy. -->
В приведенном ниже примере компонент `<App />` является компонентом корневого уровня. Это означает, что он находится на самом верху нашей иерархии компонентов.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App'
import createStore from './createReduxStore'

const store = createStore()

// Начиная с React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

### React 18 SSR гидрация(Hydration)

<!-- In this example, the client has received HTML rendered by the server, as well as a serialized Redux state attached to `window`. The serialized state is used to both pre-fill the store's contents, _and_ passed as the `serverState` prop to `<Provider>` -->
В этом примере клиент получил HTML, отображаемый сервером, а также сериализованное состояние Redux, прикрепленное к `window`. Сериализованное состояние используется для предварительного заполнения содержимого хранилища _и_ для передачи в качестве свойства `serverState` в `<Provider>`

```tsx title="src/index.ts"
import { hydrateRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const preloadedState = window.__PRELOADED_STATE__

const clientStore = configureStore({
  reducer: rootReducer,
  preloadedState,
})

hydrateRoot(
  document.getElementById('root'),
  <Provider store={clientStore} serverState={preloadedState}>
    <App />
  </Provider>
)
```
