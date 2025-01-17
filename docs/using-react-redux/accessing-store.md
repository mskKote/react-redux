---
id: accessing-store
# title: Accessing the Store
title: Доступ к хранилищу(store)
hide_title: true
# sidebar_label: Accessing the Store
sidebar_label: Доступ к хранилищу(store)
# description: 'Usage > Accessing the Store: techniques for getting the store in your components'
description: 'Использование > Доступ к хранилищу(store): методы доступа к хранилищу(store) в ваших компонентах'
---

&nbsp;

<!-- # Accessing the Store -->
# Доступ к хранилищу(store)

<!-- React Redux provides APIs that allow your components to dispatch actions and subscribe to data updates from the store. -->
React Redux предоставляет API, которые позволяют вашим компонентам отправлять(dispatch) действия и подписываться на обновления данных хранилища(store).

<!-- As part of that, React Redux abstracts away the details of which store you are using, and the exact details of how that
store interaction is handled. In typical usage, your own components should never need to care about those details, and
won't ever reference the store directly. React Redux also internally handles the details of how the store and state are
propagated to connected components, so that this works as expected by default. -->
В рамках этого, React Redux абстрагируется от сведений о том, какое хранилище вы используете, и как происходит взаимодействие с ним. В большинстве случаев ваши собственные компоненты не должны заботиться об этих деталях и никогда напрямую не ссылаются на хранилище(store). React Redux внутренне обрабатывает детали того, как хранилище(store) и состояние(state) передаются в cвязанные компоненты, так эта работа выполняется должным образом по умолчанию.

<!-- However, there may be certain use cases where you may need to customize how the store and state are propagated to
connected components, or access the store directly. Here are some examples of how to do this. -->
Тем не менее, могут быть определенные сценарии использования, когда вам может потребоваться настроить способ передачи хранилища(store) и состояния(state) в cвязанные компоненты или получить прямой доступ к хранилищу(store). Вот несколько примеров того, как это сделать.

<!-- ## Understanding Context Usage -->
## Использования контекста

<!-- Internally, React Redux uses [React's "context" feature](https://reactjs.org/docs/context.html) to make the
Redux store accessible to deeply nested connected components. As of React Redux version 6, this is normally handled
by a single default context object instance generated by `React.createContext()`, called `ReactReduxContext`. -->
Внутри React Redux использует [функцию "контекста" React](https://reactjs.org/docs/context.html), чтобы сделать хранилище Redux доступным для глубоко вложенных cвязанных компонентов. Начиная с версии 6 React Redux, это обычно обрабатывается одним экземпляром объекта контекста по умолчанию, сгенерированным `React.createContext()`, называемым `ReactReduxContext`.

<!-- React Redux's `<Provider>` component uses `<ReactReduxContext.Provider>` to put the Redux store and the current store
state into context, and `connect` uses `<ReactReduxContext.Consumer>` to read those values and handle updates. -->
Компонент `<Provider>` из React Redux использует `<ReactReduxContext.Provider>`, чтобы поместить Redux хранилище(store) и текущее
состояние(state) хранилища в контекст, а `connect` использует `<ReactReduxContext.Consumer>`, чтобы считывать эти значения и обрабатывать обновления.

<!-- ## Using the `useStore` Hook -->
## Использование хука `useStore`

<!-- The [`useStore` hook](../api/hooks.md#useStore) returns the current store instance from the default `ReactReduxContext`. If you truly need to access the store, this is the recommended approach. -->
Хук [`useStore`](../api/hooks.md#useStore) возвращает текущий экземпляр хранилища из `ReactReduxContext`. Если вам действительно нужно получить доступ к хранилищу(store), 
рекомендуется использовать такой подход.

<!-- ## Providing Custom Context -->
## Предоставление собственного контекста

<!-- Instead of using the default context instance from React Redux, you may supply your own custom context instance. -->
Вместо использования экземпляра контекста по умолчанию из React Redux вы можете предоставить свой собственный пользовательский экземпляр контекста.

```jsx
<Provider context={MyContext} store={store}>
  <App />
</Provider>
```

<!-- If you supply a custom context, React Redux will use that context instance instead of the one it creates and exports by default. -->
Если вы предоставляете собственный контекст, React Redux будет использовать этот экземпляр контекста вместо того, который он создает и экспортирует по умолчанию.

<!-- After you’ve supplied the custom context to `<Provider />`, you will need to supply this context instance to all of your connected components that are expected to connect to the same store: -->
После предоставления пользовательского контекста в `<Provider />`, вам нужно будет предоставить этот экземпляр контекста всем вашим cвязанным компонентам, которые, как ожидается, 
будут подключаться к одному и тому же хранилищу(store):

```js
// Вы можете предоставить контекст как параметр в connect
export default connect(
  mapState,
  mapDispatch,
  null,
  { context: MyContext }
)(MyComponent)

// Или вызывать connect как обычно...
const ConnectedComponent = connect(
  mapState,
  mapDispatch
)(MyComponent)

// ...и затем предоставить пользовательский контекст 
// как пропс в подключенный компонент
<ConnectedComponent context={MyContext} />
```

<!-- The following runtime error occurs when React Redux does not find a store in the context it is looking. For example: -->
В случае, когда React Redux не находит хранилище(store) в своём контексте, возникает ошибка во время исполнения. Например:

<!-- - You provided a custom context instance to `<Provider />`, but did not provide the same instance (or did not provide any) to your connected components.
- You provided a custom context to your connected component, but did not provide the same instance (or did not provide any) to `<Provider />`. -->
- Вы предоставили собственный экземпляр контекста для `<Provider />`, но не предоставили такой же экземпляр (или не предоставили вообще) cвязанным компонентам.
- Вы предоставили собственный контекст cвязанному компоненту, но не предоставили тот же экземпляр (или не предоставили его) для `<Provider />`.

Вид ошибка:
> **Invariant Violation**
>
> Could not find "store" in the context of "Connect(MyComponent)". Either wrap the root component in a `<Provider>`, or pass a custom React context provider to `<Provider>` and the corresponding React context consumer to Connect(Todo) in connect options.

<!-- ### Custom Context and the hooks API -->
### Собственный контекст и API хуков

<!-- To access the custom context via the hooks API, you can create custom hooks via the [hook creator functions](../api/hooks.md#custom-context). -->
Чтобы получить доступ к cобственному контексту через API хуков, вы можете создать собственные хуки с помощью [функций создания хуков](../api/hooks.md#custom-context).

<!-- ## Multiple Stores -->
## Несколько хранилищ(store)

<!-- [Redux was designed to use a single store](https://redux.js.org/api/store#a-note-for-flux-users).
However, if you are in an unavoidable position of needing to use multiple stores, as of v6 you may do so by providing (multiple) custom contexts.
This also provides a natural isolation of the stores as they live in separate context instances. -->
[Redux был разработан для использования с одним хранилищем(store)](https://redux.js.org/api/store#a-note-for-flux-users). Однако, если вам неизбежно приходится использовать несколько хранилищ, начиная с версии 6, вы можете предоставив несколько собственных контекстов.
Это обеспечивает изоляцию, поскольку хранилища(store) находятся в отдельных экземплярах контекста.

```js
// Наивный пример
const ContextA = React.createContext();
const ContextB = React.createContext();

// Предполагаем, что reducerA и reducerB являются правильными редюсерами(reducer)
const storeA = createStore(reducerA);
const storeB = createStore(reducerB);

// Предоставляем экземпляры контекста в Provider
function App() {
  return (
    <Provider store={storeA} context={ContextA} />
      <Provider store={storeB} context={ContextB}>
        <RootModule />
      </Provider>
    </Provider>
  );
}

// Чтобы получить ожидаемый экземпляр хранилища(store),
// используйте нужный контекст
connect(mapStateA, null, null, { context: ContextA })(MyComponentA)

// Вместо этого вы также можете предоставить альтернативный контекст напрямую в экземпляр
<ConnectedMyComponentA context={ContextA} />

// Возможно сделать цепочку вызовов connect().
// Так MyComponent будет получать пропсы из обоих хранилищ (stores)
compose(
  connect(mapStateA, null, null, { context: ContextA }),
  connect(mapStateB, null, null, { context: ContextB })
)(MyComponent);
```

<!-- ## Using `ReactReduxContext` Directly -->
## Использование `ReactReduxContext` напрямую

<!-- In rare cases, you may need to access the Redux store directly in your own components. This can be done by rendering
the appropriate context consumer yourself, and accessing the `store` field out of the context value. -->
В редких случаях вам может потребоваться доступ к Redux хранилищу(store) непосредственно в ваших собственных компонентах. Это можно сделать путем рендеринга соответствующего потребителя контекста и доступа к полю `store` из значения контекста.

:::caution Предупреждение

<!-- This is **_not_ considered part of the React Redux public API, and may break without notice**. We do recognize
that the community has use cases where this is necessary, and will try to make it possible for users to build additional
functionality on top of React Redux, but our specific use of context is considered an implementation detail.
If you have additional use cases that 
are not sufficiently covered by the current APIs, please file an issue to discuss
possible API improvements. -->
Это **_не_ считается частью общедоступного API React Redux и может перестать работать без предварительного уведомления**. Мы признаем, что у сообщества есть случаи использования, где это необходимо, и постараемся сделать так, чтобы пользователи могли создавать дополнительную функциональность поверх React Redux, но наше особое использование контекста считается деталью реализации. Если у вас есть дополнительные варианты использования, которые недостаточно охвачены текущими API, задайте вопрос для обсуждения возможных улучшений API.

:::

```jsx
import { ReactReduxContext } from 'react-redux'

// Где-то внутри <Provider>
function MyConnectedComponent() {
  // Доступ в хранилище(store) через хук `useContext`
  const { store } = useContext(ReactReduxContext)

  // В альтернативу используйте форму отрисовки пропсов из контекста
  /*
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        // Логика с хранилищем(store): передача его дочерним компонентам, 
        // где он может быть использован в методах жизненного цикла
      }}
    </ReactReduxContext.Consumer>
  )
  */
}
```

<!-- ## Further Resources -->
## Дополнительные ресурсы

<!-- - CodeSandbox example: [A reading list app with theme using a separate store](https://codesandbox.io/s/92pm9n2kl4), implemented by providing (multiple) custom context(s).
- Related issues:
  - [#1132: Update docs for using a different store key](https://github.com/reduxjs/react-redux/issues/1132)
  - [#1126: `<Provider>` misses state changes that occur between when its constructor runs and when it mounts](https://github.com/reduxjs/react-redux/issues/1126) -->
- Пример CodeSandbox: [Приложение списка чтения с темой, использующее отдельное хранилище(store)](https://codesandbox.io/s/92pm9n2kl4), реализованное путем предоставления пользовательского контекста или нескольких пользовательских контекстов.
- Связанные вопросы:
   - [#1132: Обновление документов для использования другого ключа хранилища(store)](https://github.com/reduxjs/react-redux/issues/1132)
   - [#1126: `<Provider>` пропускает изменения состояния, которые происходят между его созданием и его встраиванием](https://github.com/reduxjs/react-redux/issues/1126)
