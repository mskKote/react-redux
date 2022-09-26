---
id: troubleshooting
# title: Troubleshooting
title: Устранение неполадок
# sidebar_label: Troubleshooting
sidebar_label: Устранение неполадок
hide_title: true
---

&nbsp;

<!-- ## Troubleshooting -->
## Устранение неполадок

<!-- The **[#redux channel](https://discord.gg/0ZcbPKXt5bZ6au5t)** of the **[Reactiflux Discord community](http://www.reactiflux.com)** is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us! -->
Канал **[#redux](https://discord.gg/0ZcbPKXt5bZ6au5t)** в Discord **[сообщества Reactiflux](http://www.reactiflux.com)** является нашим официальным ресурсом по всем вопросам, связанным с обучением и использованием Redux. Reactiflux - отличное место, чтобы пообщаться, задать вопросы и обучаться - присоединяйтесь к нам!

<!-- You can also ask questions on [Stack Overflow](https://stackoverflow.com) using the **[#redux tag](https://stackoverflow.com/questions/tagged/redux)**. -->
Вы также можете задать вопросы на [Stack Overflow](https://stackoverflow.com), используя тег **[#redux](https://stackoverflow.com/questions/tagged/redux)**.

<!-- ### My views aren’t updating! -->
### Мои компоненты не обновляются!

<!-- In short, -->
Вкратце:

<!-- - Reducers should never mutate state, they must return new objects, or React Redux won’t see the updates. -->
- Редюсеры(Reducers) никогда не должны изменять состояние, они должны возвращать новые объекты, иначе React Redux не увидит изменений.
<!-- - Make sure you are actually _dispatching_ actions. For example, if you have an action creator like `addTodo`, just calling the imported `addTodo()` function by itself won't do anything because it just _returns_ an action, but does not _dispatch_ it. You either need to call `dispatch(addTodo())` (if using the hooks API) or `props.addTodo()` (if using `connect` + `mapDispatch`). -->
- Убедитесь, что вы действительно _отправляете_ действия. Например, если у вас есть создатель действия, такой как `addTodo`, простой вызов импортированной функции `addTodo()` сам по себе ничего не обновит, потому что эта функция просто _возвращает_ действие, но не _отправляет_ его. Вам нужно либо вызвать `dispatch(addTodo())` (если вы используете API хуков), либо `props.addTodo()` (при использовании `connect` + `mapDispatch`).

<!-- ### Could not find "store" in either the context or props -->
### Не удалось найти "контейнер" ни в контексте, ни в пропсах (Could not find "store" in either the context or props)

<!-- If you have context issues, -->
Если у вас есть проблемы с контекстом,

<!-- 1. [Make sure you don’t have a duplicate instance of React](https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375) on the page. -->
1. [Убедитесь, что на странице нет дубликата экземпляра React](https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375).
<!-- 2. Make sure you don't have multiple instances/copies of React Redux in your project. -->
2. Убедитесь, что в вашем проекте нет нескольких экземпляров/копий React Redux.
<!-- 3. Make sure you didn’t forget to wrap your root or some other ancestor component in [`<Provider>`](#provider-store). -->
3. Убедитесь, что вы не забыли обернуть свой корневой компонент или какой-либо другой компонент-предок в `<Provider>`.
<!-- 4. Make sure you’re running the latest versions of React and React Redux. -->
4. Убедитесь, что вы используете последние версии React и React Redux.

### Инвариантное нарушение: addComponentAsRefTo(...): только ReactOwner может иметь ссылки. Чаще всего это означает, что вы пытаетесь добавить ссылку на компонент, который не имеет владельца (Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you’re trying to add a ref to a component that doesn’t have an owner)

<!-- If you’re using React for web, this usually means you have a [duplicate React](https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375). Follow the linked instructions to fix this. -->
Если вы используете React для web, это обычно означает, что у вас есть [дубликат React](https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375). Следуйте приложенным инструкциям для исправления этого.

<!-- ### I'm getting a warning about useLayoutEffect in my unit tests -->
### Я получаю предупреждение о useLayoutEffect в своих юнит-тестах.

<!-- ReactDOM emits this warning if `useLayoutEffect` is used "on the server". React Redux tries to get around the issue by detecting whether it is running within a browser context. Jest, by default, defines enough of the browser environment that React Redux thinks it's running in a browser, causing these warnings. -->
ReactDOM выдает это предупреждение, если `useLayoutEffect` используется "на сервере". React Redux пытается обойти проблему, определяя, работает ли он в контексте браузера. Jest, по умолчанию, определяет достаточную ему среду браузера, чтобы React Redux считал, что он запущен в браузере, вызывая эти предупреждения.

<!-- 
You can prevent the warning by setting the `@jest-environment` for a single test file: -->
Вы можете предотвратить появление этого предупреждения, установив `@jest-environment` для одного тестового файла:

```jsx
// my.test.jsx
/**
 * @jest-environment node
 */
```

<!-- Or by setting it globally: -->
Или установив его глобально:

```js
// package.json
{
  "name": "my-project",
  "jest": {
    "testEnvironment": "node"
  }
}
```

<!-- See https://github.com/facebook/react/issues/14927#issuecomment-490426131 -->
Смотрите https://github.com/facebook/react/issues/14927#issuecomment-490426131
