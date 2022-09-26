---
id: hooks
title: Hooks
sidebar_label: Hooks
hide_title: true
# description: 'API > Hooks: the `useSelector` and `useDispatch` hooks`'
description: 'API > Hooks: хуки `useSelector` и `useDispatch`'
---

&nbsp;

# Hooks

<!-- React's new ["hooks" APIs](https://reactjs.org/docs/hooks-intro.html) give function components the ability to use local component state, execute side effects, and more. React also lets us write [custom hooks](https://reactjs.org/docs/hooks-custom.html), which let us extract reusable hooks to add our own behavior on top of React's built-in hooks. -->
Новое [API "хуков"](https://reactjs.org/docs/hooks-intro.html) в React дают функциональным компонентам возможность использовать локальное состояние компонентов, выполнять побочные действия и многое другое. React также позволяет нам писать [кастомные хуки](https://reactjs.org/docs/hooks-custom.html), которые позволяют нам извлекать повторно используемые хуки, чтобы добавить наше собственное поведение поверх встроенных в React хуков.

<!-- React Redux includes its own custom hook APIs, which allow your React components to subscribe to the Redux store and dispatch actions. -->
React Redux включает в себя свой собственное API хуков, которое позволяет вашим компонентам React подписываться на хранилище(store) Redux и отправлять(dispatch) действия.

:::tip Подсказка

<!-- **We recommend using the React-Redux hooks API as the default approach in your React components.** -->
**Мы рекомендуем по умолчанию использовать API хуков React-Redux в ваших компонентах React.**

<!-- The existing `connect` API still works and will continue to be supported, but the hooks API is simpler and works better with TypeScript. -->
Существующее API `connect` по-прежнему работает и будет поддерживаться, но API хуков проще и лучше работает с TypeScript.

:::

<!-- These hooks were first added in v7.1.0. -->
Эти хуки впервые были добавлены в версии 7.1.0.

<!-- ## Using Hooks in a React Redux App -->
## Использование хуков в приложении React Redux

<!-- As with `connect()`, you should start by wrapping your entire application in a `<Provider>` component to make the store available throughout the component tree: -->
Как и в случае с `connect()`, вам следует обернуть все ваше приложение в компонент `<Provider>`, чтобы сделать хранилище доступным во всём дереве компонентов:

```jsx
const store = createStore(rootReducer)

// Начиная с React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

<!-- From there, you may import any of the listed React Redux hooks APIs and use them within your function components. -->
Теперь вы можете импортировать любой из перечисленных React Redux хуков и использовать их в своих функциональных компонентах.

## `useSelector()`

```js
const result: any = useSelector(selector: Function, equalityFn?: Function)
```

<!-- Allows you to extract data from the Redux store state, using a selector function. -->
Позволяет извлекать данные из состояния(state) хранилища(store) Redux с помощью функции селектора.

:::info Информация

<!-- The selector function should be [pure](https://en.wikipedia.org/wiki/Pure_function) since it is potentially executed multiple times and at arbitrary points in time. -->
Функция селектора должна быть [чистой](https://en.wikipedia.org/wiki/Pure_function), поскольку она потенциально может выполняться несколько раз и в произвольные моменты времени.

:::

<!-- The selector is approximately equivalent to the [`mapStateToProps` argument to `connect`](../using-react-redux/connect-extracting-data-with-mapStateToProps.md) conceptually. The selector will be called with the entire Redux store state as its only argument. The selector will be run whenever the function component renders (unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector). `useSelector()` will also subscribe to the Redux store, and run your selector whenever an action is dispatched. -->
Функция selector примерно равнозначна аргументу [`mapStateToProps` для `connect`](../using-react-redux/connect-extracting-data-with-mapStateToProps.md). Функция selector будет вызываться со всем состоянием хранилища Redux в качестве её единственного аргумента. Функция селектор будет запускаться при каждом рендеринге компонента (если только её ссылка не изменилась с момента предыдущего рендеринга компонента, так что кешированный результат может быть возвращен хуком без повторного запуска функции селектора). `useSelector()` также будет подписываться на хранилище Redux и запускать ваш селектор всякий раз, когда отправляется(dispatch) действие.

<!-- However, there are some differences between the selectors passed to `useSelector()` and a `mapState` function: -->
Однако между селекторами, переданными в `useSelector()`, и функцией `mapState` есть некоторые различия:

<!-- - The selector may return any value as a result, not just an object. The return value of the selector will be used as the return value of the `useSelector()` hook.
- When an action is dispatched, `useSelector()` will do a reference comparison of the previous selector result value and the current result value. If they are different, the component will be forced to re-render. If they are the same, the component will not re-render.
- The selector function does _not_ receive an `ownProps` argument. However, props can be used through closure (see the examples below) or by using a curried selector.
- Extra care must be taken when using memoizing selectors (see examples below for more details).
- `useSelector()` uses strict `===` reference equality checks by default, not shallow equality (see the following section for more details). -->
- В результате селектор может вернуть любое значение, а не только объект. Возвращаемое значение селектора будет использоваться как возвращаемое значение хука `useSelector()`.
- После отправки(dispatch) действия, `useSelector()` выполнит сравнение по ссылке предыдущего значения результата селектора и текущего значения результата. Если они отличаются, компонент будет принудительно перерендерен. Если они совпадают, компонент не будет повторно рендериться.
- Функция селектора _не_ получает аргумент `ownProps`. Однако пропсы можно использовать через замыкание (см. примеры ниже) или с помощью каррированного селектора.
- При использовании запоминающих селекторов следует проявлять особую осторожность (подробнее см. примеры ниже).
- `useSelector()` по умолчанию использует строгую проверку равенства ссылок `===`, а не с приведением типов (см. следующий раздел для получения дополнительной информации).

:::info Информация

<!-- There are potential edge cases with using props in selectors that may cause issues. See the [Usage Warnings](#usage-warnings) section of this page for further details. -->
Существуют потенциальные пограничные случаи с использованием пропсов в селекторах, которые могут вызвать проблемы. Дополнительную информацию см. в разделе [Предупреждения об использовании](#usage-warnings) на этой странице.

:::

<!-- You may call `useSelector()` multiple times within a single function component. Each call to `useSelector()` creates an individual subscription to the Redux store. Because of the React update batching behavior used in React Redux v7, a dispatched action that causes multiple `useSelector()`s in the same component to return new values _should_ only result in a single re-render. -->
Вы можете вызывать `useSelector()` несколько раз в одном компоненте. Каждый вызов `useSelector()` создает отдельную подписку на Redux хранилище(store). Из-за группировки обновлений в React (Поведение, используемое в React Redux версии 7), отправленное действие, которое заставляет несколько `useSelector()` в одном компоненте возвращать новые значения, _должно_ приводить только к одному повторному рендерингу.

<!-- ### Equality Comparisons and Updates -->
### Проверки на равенства и обновления

<!-- When the function component renders, the provided selector function will be called and its result will be returned
from the `useSelector()` hook. (A cached result may be returned by the hook without re-running the selector if it's the same function reference as on a previous render of the component.) -->
Когда компонент рендерится, будет вызвана функция селектора, и ее результат будет возвращен
из хука `useSelector()`. (Результат кэшируется и возвращается при повторном рендеринге с тем же самым селектором.)

<!-- However, when an action is dispatched to the Redux store, `useSelector()` only forces a re-render if the selector result
appears to be different than the last result. The default comparison is a strict `===` reference
comparison. This is different than `connect()`, which uses shallow equality checks on the results of `mapState` calls
to determine if re-rendering is needed. This has several implications on how you should use `useSelector()`. -->
Однако, когда действие отправляется(dispatch) в Redux хранилище(store), `useSelector()` вызывает повторную рендеринг только в том случае, если результат селектора отличается от последнего результата. По умолчанию происходит строгое сравнение по ссылке `===`. Этот подход отличается от `connect()`, который использует сравнение без приведения типов результатов вызовов `mapState`, чтобы определить, нужен ли повторный рендеринг. Отсюда появляется несколько условий использования `useSelector()`.

<!-- With `mapState`, all individual fields were returned in a combined object. It didn't matter if the return object was
a new reference or not - `connect()` just compared the individual fields. With `useSelector()`, returning a new object
every time will _always_ force a re-render by default. If you want to retrieve multiple values from the store, you can: -->
С `mapState` все отдельные поля возвращались в объединенном объекте. Вне зависимости имел ли возвращаемый объект новую ссылку или нет - функция `connect()` просто сравнила отдельные поля. Когда `useSelector()` возвращает новый объект, по умолчанию _всегда_ выполняется повторный рендеринг. Если вы хотите получить несколько значений из хранилища(store), вы можете:

<!-- - Call `useSelector()` multiple times, with each call returning a single field value
- Use Reselect or a similar library to create a memoized selector that returns multiple values in one object, but
  only returns a new object when one of the values has changed.
- Use the `shallowEqual` function from React-Redux as the `equalityFn` argument to `useSelector()`, like: -->
- Вызовите `useSelector()` несколько раз, при этом с каждым вызовом возвращайте одно значение.
- Используйте Reselect или аналогичную библиотеку для создания мемоизированный селектора, который возвращает несколько значений в одном объекте, но возвращает новый объект только тогда, когда одно из значений изменилось.
- Используйте функцию `shallowEqual` из React-Redux в качестве аргумента `equalityFn` для `useSelector()`, например:

```js
import { shallowEqual, useSelector } from 'react-redux'

// актуально
const selectedData = useSelector(selectorReturningObject, shallowEqual)
```

<!-- The optional comparison function also enables using something like Lodash's `_.isEqual()` or Immutable.js's comparison capabilities. -->
Необязательная функция сравнения также позволяет использовать что-то вроде `_.isEqual()` из Lodash или возможности сравнения Immutable.js.

<!-- ### `useSelector` Examples -->
### Примеры `useSelector`

<!-- Basic usage: -->
Базовое использование:

```jsx
import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector((state) => state.counter)
  return <div>{counter}</div>
}
```

<!-- Using props via closure to determine what to extract: -->
Использование пропсов через замыкание, чтобы определить, что извлекать

```jsx
import React from 'react'
import { useSelector } from 'react-redux'

export const TodoListItem = (props) => {
  const todo = useSelector((state) => state.todos[props.id])
  return <div>{todo.text}</div>
}
```

<!-- #### Using memoizing selectors -->
#### Использование мемоизированных селекторов

<!-- When using `useSelector` with an inline selector as shown above, a new instance of the selector is created whenever the component is rendered. This works as long as the selector does not maintain any state. However, memoizing selectors (e.g. created via `createSelector` from `reselect`) do have internal state, and therefore care must be taken when using them. Below you can find typical usage scenarios for memoizing selectors. -->
При использовании `useSelector` с лямбда-функцией селектора, как показано выше, новый экземпляр селектора создается при каждом рендере компонента. Это работает до тех пор, пока селектор не сохраняет какое-либо состояние. Однако мемоизированные селекторы (например, созданные с помощью `createSelector` из `reselect`) имеют внутреннее состояние, и поэтому при их использовании следует быть осторожным. Ниже вы можете найти типичные сценарии использования мемоизированных селекторов.

<!-- When the selector does only depend on the state, simply ensure that it is declared outside of the component so that the same selector instance is used for each render: -->
Когда селектор зависит только от состояния, просто убедитесь, что он объявлен вне компонента, чтобы один и тот же экземпляр селектора использовался при каждом рендеринге:

```jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const selectNumCompletedTodos = createSelector(
  (state) => state.todos,
  (todos) => todos.filter((todo) => todo.completed).length
)

export const CompletedTodosCounter = () => {
  const numCompletedTodos = useSelector(selectNumCompletedTodos)
  return <div>{numCompletedTodos}</div>
}

export const App = () => {
  return (
    <>
      <span>Number of completed todos:</span>
      <CompletedTodosCounter />
    </>
  )
}
```

<!-- The same is true if the selector depends on the component's props, but will only ever be used in a single instance of a single component: -->
То же самое верно, если селектор зависит от пропсов компонента, но будет использоваться только в одном экземпляре одного компонента:

```jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const selectCompletedTodosCount = createSelector(
  (state) => state.todos,
  (_, completed) => completed,
  (todos, completed) =>
    todos.filter((todo) => todo.completed === completed).length
)

export const CompletedTodosCount = ({ completed }) => {
  const matchingCount = useSelector((state) =>
    selectCompletedTodosCount(state, completed)
  )

  return <div>{matchingCount}</div>
}

export const App = () => {
  return (
    <>
      <span>Number of done todos:</span>
      <CompletedTodosCount completed={true} />
    </>
  )
}
```

<!-- However, when the selector is used in multiple component instances and depends on the component's props, you need to ensure that each component instance gets its own selector instance (see [here](https://github.com/reduxjs/reselect#q-can-i-share-a-selector-across-multiple-component-instances) for a more thorough explanation of why this is necessary): -->
Однако, когда селектор используется в нескольких экземплярах компонента и зависит от пропсов компонента, вам необходимо убедиться, что каждый экземпляр компонента получает свой собственный экземпляр селектора (см. [здесь](https://github.com/reduxjs/reselect#q-can-i-share-a-selector-across-multiple-component-instances) для уточнения, почему это необходимо):

```jsx
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const makeSelectCompletedTodosCount = () =>
  createSelector(
    (state) => state.todos,
    (_, completed) => completed,
    (todos, completed) =>
      todos.filter((todo) => todo.completed === completed).length
  )

export const CompletedTodosCount = ({ completed }) => {
  const selectCompletedTodosCount = useMemo(makeSelectCompletedTodosCount, [])

  const matchingCount = useSelector((state) =>
    selectCompletedTodosCount(state, completed)
  )

  return <div>{matchingCount}</div>
}

export const App = () => {
  return (
    <>
      <span>Number of done todos:</span>
      <CompletedTodosCount completed={true} />
      <span>Number of unfinished todos:</span>
      <CompletedTodosCount completed={false} />
    </>
  )
}
```

## `useDispatch()`

```js
const dispatch = useDispatch()
```

<!-- This hook returns a reference to the `dispatch` function from the Redux store. You may use it to dispatch actions as needed. -->
Этот хук возвращает ссылку на функцию `dispatch` из Redux хранилища(store). Вы можете использовать его для отправки(dispatch) действий по мере необходимости.

<!-- #### Examples -->
#### Примеры

```jsx
import React from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
      </button>
    </div>
  )
}
```

<!-- When passing a callback using `dispatch` to a child component, you may sometimes want to memoize it with [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback). _If_ the child component is trying to optimize render behavior using `React.memo()` or similar, this avoids unnecessary rendering of child components due to the changed callback reference. -->
При передаче колбэка с помощью `dispatch` дочернему компоненту вы иногда можете захотеть запомнить его с помощью [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback). _Если_ дочерний компонент пытается оптимизировать поведение рендеринга с помощью `React.memo()` или аналогичного, это позволяет избежать ненужного рендеринга дочерних компонентов из-за измененной ссылки колбэка.

```jsx
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()
  const incrementCounter = useCallback(
    () => dispatch({ type: 'increment-counter' }),
    [dispatch]
  )

  return (
    <div>
      <span>{value}</span>
      <MyIncrementButton onIncrement={incrementCounter} />
    </div>
  )
}

export const MyIncrementButton = React.memo(({ onIncrement }) => (
  <button onClick={onIncrement}>Increment counter</button>
))
```

:::info Информация

<!-- The `dispatch` function reference will be stable as long as the same store instance is being passed to the `<Provider>`.
Normally, that store instance never changes in an application. -->
Ссылка на функцию `dispatch` будет стабильной до тех пор, пока один и тот же экземпляр хранилища(store) передается в `<Provider>`.
Обычно этот экземпляр хранилища(store) никогда не изменяется в приложении.

<!-- However, the React hooks lint rules do not know that `dispatch` should be stable, and will warn that the `dispatch` variable
should be added to dependency arrays for `useEffect` and `useCallback`. The simplest solution is to do just that: -->
Тем не менее, линтер React не знает об особенности `dispatch` быть стабильным, и предупредит, что переменная `dispatch` должна быть добавлена в массивы зависимостей для `useEffect` и `useCallback`. Самое простое решение - добавить их:

```js
export const Todos = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
    // highlight-start
    // Безопасно добавляем dispatch в массив зависимостей
  }, [dispatch])
  // highlight-end
}
```

:::

## `useStore()`

```js
const store = useStore()
```

<!-- This hook returns a reference to the same Redux store that was passed in to the `<Provider>` component. -->
Этот хук возвращает ссылку на то же Redux хранилище(store), которое было передано компоненту `<Provider>`.

<!-- This hook should probably not be used frequently. Prefer `useSelector()` as your primary choice. However, this may be useful for less common scenarios that do require access to the store, such as replacing reducers. -->
Этот хук не следует использовать часто. Предпочтите `useSelector()` в качестве основного выбора. Однако это может быть полезно для менее распространенных сценариев, требующих доступа к хранилищу(store), например, для замены редюсеров(reducer).

<!-- #### Examples -->
#### Примеры

```js
import React from 'react'
import { useStore } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const store = useStore()

  // ПРИМЕР! Не делайте так в настоящих проектах.
  // Компонент не будет автоматически обновлен, если состояние хранилища(store) изменится
  return <div>{store.getState()}</div>
}
```

<!-- ## Custom context -->
## Пользовательский контекст

<!-- The `<Provider>` component allows you to specify an alternate context via the `context` prop. This is useful if you're building a complex reusable component, and you don't want your store to collide with any Redux store your consumers' applications might use. -->
Компонент `<Provider>` позволяет указать альтернативный контекст через свойство `context`. Это полезно, если вы создаете сложный повторно используемый компонент и не хотите, чтобы ваше хранилище(store) конфликтовало с любым хранилищем Redux, которое могут использовать приложения ваших потребителей.

<!-- To access an alternate context via the hooks API, use the hook creator functions: -->
Чтобы получить доступ к альтернативному контексту через API хуков, используйте функции создания хуков:

```js
import React from 'react'
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook,
} from 'react-redux'

const MyContext = React.createContext(null)

// Экспортируйте свои пользовательские хуки, если хотите использовать их в других файлах.
export const useStore = createStoreHook(MyContext)
export const useDispatch = createDispatchHook(MyContext)
export const useSelector = createSelectorHook(MyContext)

const myStore = createStore(rootReducer)

export function MyProvider({ children }) {
  return (
    <Provider context={MyContext} store={myStore}>
      {children}
    </Provider>
  )
}
```

<!-- ## Usage Warnings -->
## Предупреждения об использовании

<!-- ### Stale Props and "Zombie Children" -->
### Устаревшие пропсы и "зомби потомки"

:::info Информация

<!-- The React-Redux hooks API has been production-ready since we released it in v7.1.0, and **we recommend using the hooks API as the default approach in your components**. However, there are a couple of edge cases that can occur, and **we're documenting those so that you can be aware of them**. -->
API хуков React-Redux было готово к работе с тех пор, как мы выпустили его в версии 7.1.0, и **мы рекомендуем использовать API хуков в качестве подхода по умолчанию в ваших компонентах**. Однако есть несколько крайних случаев, которые могут возникнуть, и **мы документируем их, чтобы вы могли о них знать**.

<!-- In practice, these are a rare concern - we've received far more comments about these being in the docs than actual reports of these being a real problem in an app. -->
На практике это редкая проблема — мы получили гораздо больше комментариев о том, что эти случаи находятся в документации, чем сообщений о реальной проблеме в приложениях.

:::

<!-- One of the most difficult aspects of React Redux's implementation is ensuring that if your `mapStateToProps` function is defined as `(state, ownProps)`, it will be called with the "latest" props every time. Up through version 4, there were recurring bugs reported involving edge case situations, such as errors thrown from a `mapState` function for a list item whose data had just been deleted. -->
Одним из самых сложных аспектов реализации React Redux является обеспечение вызова функции `mapStateToProps` с «последними» пропсами, когда она определена как `(state, ownProps)`. Вплоть до версии 4 сообщалось о повторяющихся ошибках, связанных с исключительными случаями, такими как ошибки, выдаваемые функцией `mapState` для элемента списка, данные которого были только что удалены.

<!-- Starting with version 5, React Redux has attempted to guarantee that consistency with `ownProps`. In version 7, that is implemented using a custom `Subscription` class internally in `connect()`, which forms a nested hierarchy. This ensures that connected components lower in the tree will only receive store update notifications once the nearest connected ancestor has been updated. However, this relies on each `connect()` instance overriding part of the internal React context, supplying its own unique `Subscription` instance to form that nesting, and rendering the `<ReactReduxContext.Provider>` with that new context value. -->
Начиная с версии 5, React Redux пытался гарантировать согласованность с `ownProps`. В версии 7 это реализовано с помощью пользовательского класса `Subscription` внутри `connect()`, который формирует вложенную иерархию. Это гарантирует, что подключенные компоненты ниже в дереве будут получать уведомления об обновлении хранилища(store) только после обновления ближайшего подключенного предка. Однако это зависит от того, что каждый экземпляр `connect()` переопределяет часть внутреннего контекста React, предоставляя свой собственный уникальный экземпляр `Subscription` для формирования вложенности и отображая `<ReactReduxContext.Provider>` с этим новым значением контекста.

<!-- With hooks, there is no way to render a context provider, which means there's also no nested hierarchy of subscriptions. Because of this, the "stale props" and "zombie child" issues may potentially re-occur in an app that relies on using hooks instead of `connect()`. -->
С хуками невозможно отобразить поставщика контекста, что означает отсутствие вложенной иерархии подписок. Из-за этого проблемы "устаревших пропсов" и "потомка зомби" потенциально могут повторно возникнуть в приложении, использующее хуки вместо `connect()`.

<!-- Specifically, "stale props" means any case where: -->
В частности, "устаревшие пропсы" означают любой случай, когда:

<!-- - a selector function relies on this component's props to extract data
- a parent component _would_ re-render and pass down new props as a result of an action
- but this component's selector function executes before this component has had a chance to re-render with those new props -->
- функция селектора опирается на пропсы этого компонента для извлечения данных
- родительский компонент _будет_ повторно рендерить и передавать новые пропсы в результате события
- но функция селектора этого компонента выполняется до того, как этот компонент получил возможность повторного рендеринга с этими новыми пропсами

<!-- Depending on what props were used and what the current store state is, this _may_ result in incorrect data being returned from the selector, or even an error being thrown. -->
В зависимости от того, какие пропсы использовались и каково текущее состояние хранилища(store), это _может_ привести к возврату неверных данных из селектора или даже к возникновению ошибки.

<!-- "Zombie child" refers specifically to the case where: -->
"Потомок зомби" относится конкретно к случаю, когда:

<!-- - Multiple nested connected components are mounted in a first pass, causing a child component to subscribe to the store before its parent
- An action is dispatched that deletes data from the store, such as a todo item
- The parent component _would_ stop rendering that child as a result
- However, because the child subscribed first, its subscription runs before the parent stops rendering it. When it reads a value from the store based on props, that data no longer exists, and if the extraction logic is not careful, this may result in an error being thrown. -->
- При первом проходе встраиваются несколько вложенных подключенных компонентов, в результате чего дочерний компонент подписывается на хранилище(store) раньше, чем его родитель.
- Отправляется(dispatch) действие, которое удаляет данные из хранилища, например, элемент списка дел.
- В результате родительский компонент _прекратил_ рендеринг этого дочернего элемента.
- Однако, поскольку дочерний элемент подписался первым, его подписка выполняется до того, как родитель перестанет отображать ее. Когда он считывает значение из хранилища на основе пропсов, эти данные больше не существуют, и, если логика извлечения не будет безопасной, это может привести к возникновению ошибки.

<!-- `useSelector()` tries to deal with this by catching all errors that are thrown when the selector is executed due to a store update (but not when it is executed during rendering). When an error occurs, the component will be forced to render, at which point the selector is executed again. This works as long as the selector is a pure function and you do not depend on the selector throwing errors. -->
`useSelector()` пытается справиться с этим, перехватывая все ошибки, возникающие при выполнении селектора из-за обновления хранилища (но не когда он выполняется во время рендеринга). При возникновении ошибки компонент будет принудительно отрендерен, и в этот момент селектор будет выполнен снова. Это работает до тех пор, пока селектор является чистой функцией, и вы не зависите от ошибок селектора.

<!-- If you prefer to deal with this issue yourself, here are some possible options for avoiding these problems altogether with `useSelector()`: -->
Если вы предпочитаете решать эту проблему самостоятельно, вот несколько возможных вариантов, позволяющих вообще избежать этих проблем с помощью `useSelector()`:

<!-- - Don't rely on props in your selector function for extracting data
- In cases where you do rely on props in your selector function _and_ those props may change over time, _or_ the data you're extracting may be based on items that can be deleted, try writing the selector functions defensively. Don't just reach straight into `state.todos[props.id].name` - read `state.todos[props.id]` first, and verify that it exists before trying to read `todo.name`.
- Because `connect` adds the necessary `Subscription` to the context provider and delays evaluating child subscriptions until the connected component has re-rendered, putting a connected component in the component tree just above the component using `useSelector` will prevent these issues as long as the connected component gets re-rendered due to the same store update as the hooks component. -->
- Не полагайтесь на пропсы в вашей функции селектора для извлечения данных.
- В тех случаях, когда вы полагаетесь на пропсы в своей функции селектора _и_ эти пропсы могут меняться со временем, _или_ извлекаемые данные могут быть основаны на элементах, которые могут быть удалены, попробуйте написать функции селектора с защитой. Не обращайтесь напрямую к `state.todos[props.id].name` — сначала прочитайте `state.todos[props.id]` и убедитесь, что он существует, прежде чем пытаться прочитать `todo.name`.
- Поскольку `connect` добавляет необходимый `Subscription` к поставщику контекста и задерживает оценку дочерних подписок до тех пор, пока подключенный компонент не будет повторно визуализирован, размещение подключенного компонента в дереве компонентов непосредственно над компонентом, использующим `useSelector`, предотвратит эти проблемы, поскольку, пока подключенный компонент повторно отображается, из-за того же обновления хранилища, что и компонент хуков.

:::info Информация

<!-- For a longer description of these scenarios, see: -->
Для более подробное описание этих сценариев см.

- [«Устаревшие пропсы и дети-зомби в Redux», Кай Хао](https://kaihao.dev/posts/Stale-props-and-zombie-children-in-Redux)
- [Чат, в котором более подробно описываются проблемы](https://gist.github.com/markerikson/faac6ae4aca7b82a058e13216a7888ec)
- [issue #1179](https://github.com/reduxjs/react-redux/issues/1179)

:::

<!-- ### Performance -->
### Производительность

<!-- As mentioned earlier, by default `useSelector()` will do a reference equality comparison of the selected value when running the selector function after an action is dispatched, and will only cause the component to re-render if the selected value changed. However, unlike `connect()`, `useSelector()` does not prevent the component from re-rendering due to its parent re-rendering, even if the component's props did not change. -->
Как упоминалось ранее, по умолчанию `useSelector()` выполняет сравнение равенства ссылок выбранного значения при запуске функции селектора после отправки(dispatch) действия и вызывает повторную визуализацию компонента только в том случае, если выбранное значение изменилось. Однако, в отличие от `connect()`, `useSelector()` не предотвращает повторный рендеринг компонента при повторном рендеринге его родителя, даже если пропсы компонента не изменились.

<!-- If further performance optimizations are necessary, you may consider wrapping your function component in `React.memo()`: -->
Если необходима дополнительная оптимизация производительности, вы можете подумать о том, чтобы обернуть компонент функции в `React.memo()`:

```jsx
const CounterComponent = ({ name }) => {
  const counter = useSelector((state) => state.counter)
  return (
    <div>
      {name}: {counter}
    </div>
  )
}

export const MemoizedCounterComponent = React.memo(CounterComponent)
```

<!-- ## Hooks Recipes -->
## Рецепты хуков

<!-- We've pared down our hooks API from the original alpha release, focusing on a more minimal set of API primitives.
However, you may still wish to use some of the approaches we tried in your own apps. These examples should be ready
to copy and paste into your own codebase. -->
Мы сократили наше API хуков, начиная с альфа-версии сосредоточивлись на более минималистичном наборе примитивов API.
Однако вы все равно можете использовать некоторые из наших испробованных подходов в свои собственные приложения. Эти примеры готовы для копирования и добавления в свою кодовую базу.

<!-- ### Recipe: `useActions()` -->
### Рецепт: `useActions()`

<!-- This hook was in our original alpha release, but removed in `v7.1.0-alpha.4`, based on [Dan Abramov's suggestion](https://github.com/reduxjs/react-redux/issues/1252#issuecomment-488160930).
That suggestion was based on "binding action creators" not being as useful in a hooks-based use case, and causing too
much conceptual overhead and syntactic complexity. -->
Этот хук был в нашем первоначальном альфа-релизе, но был удален в версии `v7.1.0-alpha.4` на основании [предложения Дэна Абрамова](https://github.com/reduxjs/react-redux/issues/1252#issuecomment-488160930).
Это предложение было основано на том, что «связывание создателей действий» не так полезно в случае использования на основе хуков и вызывают слишком много концептуальных накладных расходов и синтаксической сложности.

<!-- You should probably prefer to call the [`useDispatch`](#usedispatch) hook in your components to retrieve a reference to `dispatch`,
and manually call `dispatch(someActionCreator())` in callbacks and effects as needed. You may also use the Redux
[`bindActionCreators`](https://redux.js.org/api/bindactioncreators) function in your own code to bind action creators,
or "manually" bind them like `const boundAddTodo = (text) => dispatch(addTodo(text))`. -->
Вероятно, вам следует вызывать хук [`useDispatch`](#usedispatch) в ваших компонентах, чтобы получить ссылку на `dispatch`, и вручную вызвать `dispatch(someActionCreator())` в колбэках и эффектах по мере необходимости. Вы также можете использовать Redux [`bindActionCreators`](https://redux.js.org/api/bindactioncreators) в вашем собственном коде для привязки создателей действий или «вручную» привязать их как `constboundAddTodo = (text) => dispatch(addTodo(text))`.

<!-- However, if you'd like to still use this hook yourself, here's a copy-pastable version that supports passing in action
creators as a single function, an array, or an object. -->
Однако, если вы предпочитаете использовать хуки самостоятельно, вы может скопировать здесь версию, поддерживающую предоставление функции, массива или объекта в создателей действий.

```js
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

export function useActions(actions, deps) {
  const dispatch = useDispatch()
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    },
    deps ? [dispatch, ...deps] : [dispatch]
  )
}
```

### Рецепт: `useShallowEqualSelector()`

```js
import { useSelector, shallowEqual } from 'react-redux'

export function useShallowEqualSelector(selector) {
  return useSelector(selector, shallowEqual)
}
```

<!-- ### Additional considerations when using hooks -->
### Дополнительные соображения при использовании хуков

<!-- There are some architectural trade offs to take into consideration when deciding whether to use hooks or not. Mark Erikson summarizes these nicely in his two blog posts [Thoughts on React Hooks, Redux, and Separation of Concerns](https://blog.isquaredsoftware.com/2019/07/blogged-answers-thoughts-on-hooks/) and [Hooks, HOCs, and Tradeoffs](https://blog.isquaredsoftware.com/2019/09/presentation-hooks-hocs-tradeoffs/). -->
Есть некоторые архитектурные компромиссы, которые следует учитывать при принятии решения об использовании хуков или нет. Марк Эриксон хорошо резюмирует их в своих двух постах в блоге [Мысли о React Hooks, Redux и разделении ответственности](https://blog.isquaredsoftware.com/2019/07/blogged-answers-thoughts-on-hooks/) и [Хуки, HOC и компромиссы](https://blog.isquaredsoftware.com/2019/09/presentation-hooks-hocs-tradeoffs/).
