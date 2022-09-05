---
id: connect-mapdispatch
# title: 'Connect: Dispatching Actions with mapDispatchToProps'
title: 'Connect: Отправка (dispatch) действий с помощью mapDispatchToProps'
hide_title: true
# sidebar_label: 'Connect: Dispatching Actions with mapDispatchToProps'
sidebar_label: 'Connect: Отправка действий с помощью mapDispatchToProps'
# description: 'Usage > mapDispatch: options for dispatching actions with connect'
description: 'Использование > mapDispatch: параметры отправки (dispatch) действий с connect'
---

&nbsp;

<!-- # Connect: Dispatching Actions with `mapDispatchToProps` -->
# Connect: Отправка (dispatch) действий с помощью mapDispatchToProps`

<!-- As the second argument passed in to `connect`, `mapDispatchToProps` is used for dispatching actions to the store. -->
В качестве второго аргумента, передаваемого в `connect`, `mapDispatchToProps` используется для отправки (dispatch) действий в хранилище (store).

<!-- `dispatch` is a function of the Redux store. You call `store.dispatch` to dispatch an action.
This is the only way to trigger a state change. -->
`dispatch` — это функция хранилища (store) Redux. Вы вызываете `store.dispatch`, чтобы отправить (dispatch) действие.
Это единственный способ вызвать изменение состояния.

<!-- With React Redux, your components never access the store directly - `connect` does it for you.
React Redux gives you two ways to let components dispatch actions: -->
С React Redux ваши компоненты никогда не обращаются к хранилищу (store) напрямую — `connect` делает это за вас.
React Redux дает вам два способа разрешить компонентам отправлять действия:

<!-- - By default, a connected component receives `props.dispatch` and can dispatch actions itself.
- `connect` can accept an argument called `mapDispatchToProps`, which lets you create functions that dispatch when called, and pass those functions as props to your component. -->
- По умолчанию подключенный компонент получает `props.dispatch` и может сам отправлять (dispatch) действия.
- `connect` может принимать аргумент с именем `mapDispatchToProps`, который позволяет вам создавать функции, которые отправляются (dispatch) при вызове, и передавать эти функции в качестве пропсов вашему компоненту.

<!-- The `mapDispatchToProps` functions are normally referred to as `mapDispatch` for short, but the actual variable name used can be whatever you want. -->
Функции `mapDispatchToProps` обычно для краткости называются `mapDispatch`, но фактическое используемое имя переменной может быть любым.

<!-- ## Approaches for Dispatching -->
## Подходы к отправке (dispatch)

<!-- ### Default: `dispatch` as a Prop -->
### По умолчанию: `dispatch` как пропс

<!-- If you don't specify the second argument to `connect()`, your component will receive `dispatch` by default. For example: -->
Если вы не укажете второй аргумент для `connect()`, ваш компонент по умолчанию получит `dispatch`. Например:

```js
connect()(MyComponent)
// что эквивалентно
connect(null, null)(MyComponent)

// или
connect(mapStateToProps /** нет второго аргумента */)(MyComponent)
```

<!-- Once you have connected your component in this way, your component receives `props.dispatch`. You may use it to dispatch actions to the store. -->
После того, как вы подключили свой компонент таким образом, ваш компонент получает `props.dispatch`. Вы можете использовать его для отправки (dispatch) действий в хранилище (store).

```js
function Counter({ count, dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </div>
  )
}
```

<!-- ### Providing A `mapDispatchToProps` Parameter -->
### Используем параметр `mapDispatchToProps`

<!-- Providing a `mapDispatchToProps` allows you to specify which actions your component might need to dispatch. It lets you provide action dispatching functions as props. Therefore, instead of calling `props.dispatch(() => increment())`, you may call `props.increment()` directly. There are a few reasons why you might want to do that. -->
Использование `mapDispatchToProps` позволяет вам указать, какие действия может потребоваться отправить вашему компоненту. Он позволяет вам предоставлять функции отправки (dispatch) действий в качестве пропсов. Поэтому вместо вызова `props.dispatch(() => increment())` вы можете напрямую вызвать `props.increment()`. Есть несколько причин, по которым вы можете захотеть это сделать.

<!-- #### More Declarative -->
#### Более декларативный

<!-- First, encapsulating the dispatch logic into function makes the implementation more declarative. -->
<!-- Dispatching an action and letting the Redux store handle the data flow is _how to_ implement the behavior, rather than _what_ it does. -->
Во-первых, инкапсуляция логики отправки (dispatch) в функцию делает реализацию более декларативной.
Отправка действия и предоставление возможности хранилищу (store) Redux обрабатывать поток данных — отвечает на вопрос _как_ реализовать поведение, нежели _что_ оно делает.

<!-- A good example would be dispatching an action when a button is clicked. Connecting the button directly probably doesn't make sense conceptually, and neither does having the button reference `dispatch`. -->
Хорошим примером может быть отправка (dispatch) действия при нажатии кнопки. Вызов функции отправки (dispatch) напрямую в кнопке не имеет смысла концептуально, поскольку в таком случае кнопка должна знать о функции `dispatch`.

```js
// кнопка должна знать об "dispatch"
<button onClick={() => dispatch({ type: "SOMETHING" })} />

// кнопка не знает об "dispatch",
<button onClick={doSomething} />
```

<!-- Once you've wrapped all our action creators with functions that dispatch the actions, the component is free of the need of `dispatch`.
Therefore, **if you define your own `mapDispatchToProps`, the connected component will no longer receive `dispatch`.** -->
После того, как вы обернули все наши создатели действий функциями, которые отправляют действия, компонент свободен от необходимости вызывать функцию `dispatch`.
Следовательно, **если вы определите свой собственный `mapDispatchToProps`, подключенный компонент больше не будет получать `dispatch`.**

<!-- #### Pass Down Action Dispatching Logic to ( Unconnected ) Child Components -->
#### Передача логику отправки (dispatch) действия в ( неподключенные ) дочерние компоненты

<!-- In addition, you also gain the ability to pass down the action dispatching functions to child ( likely unconnected ) components.
This allows more components to dispatch actions, while keeping them "unaware" of Redux. -->
Кроме того, вы также получаете возможность передавать функции отправки (dispatch) действий дочерним (вероятно, неподключенным) компонентам.
Это позволяет большему количеству компонентов отправлять (dispatch) действия, оставляя их «не осведомленными» о Redux.

```jsx
// передача toggleTodo дочернему компоненту
// предоставление Todo возможности отправлять (dispatch) действие toggleTodo
const TodoList = ({ todos, toggleTodo }) => (
  <div>
    {todos.map((todo) => (
      <Todo todo={todo} onClick={toggleTodo} />
    ))}
  </div>
)
```

<!-- This is what React Redux’s `connect` does — it encapsulates the logic of talking to the Redux store and lets you not worry about it. And this is what you should totally make full use of in your implementation. -->
Это то, что делает `connect` React Redux — он инкапсулирует логику общения с хранилищем (store) Redux и позволяет вам не беспокоиться об этом. И это то, что вы точно должны использовать в своей реализации.

<!-- ## Two Forms of `mapDispatchToProps` -->
## Две формы `mapDispatchToProps`

<!-- The `mapDispatchToProps` parameter can be of two forms. While the function form allows more customization, the object form is easy to use. -->
Параметр mapDispatchToProps может иметь две формы. В то время как функциональная форма допускает больше настроек, объектная форма более проста в использовании.

<!-- - **Function form**: Allows more customization, gains access to `dispatch` and optionally `ownProps`
- **Object shorthand form**: More declarative and easier to use -->
- **Функциональная форма**: допускает больше настроек, получает доступ к `dispatch` и, при необходимости, к `ownProps`
- **Сокращенная объектная форма**: более декларативная и простая в использовании.

<!-- > ⭐ **Note:** We recommend using the object form of `mapDispatchToProps` unless you specifically need to customize dispatching behavior in some way. -->
> ⭐ **Примечание.** Мы рекомендуем использовать объектную форму `mapDispatchToProps`, если только вам не нужно каким-то образом настроить поведение отправки (dispatch).

<!-- ## Defining `mapDispatchToProps` As A Function -->
## Объявление `mapDispatchToProps` как функции

<!-- Defining `mapDispatchToProps` as a function gives you the most flexibility in customizing the functions your component receives, and how they dispatch actions.
You gain access to `dispatch` and `ownProps`.
You may use this chance to write customized functions to be called by your connected components. -->
Объявление `mapDispatchToProps` как функции дает вам максимальную гибкость в настройке функций, которые получает ваш компонент, и того, как они отправляют действия.
Вы получаете доступ к `dispatch` и `ownProps`.
Вы можете использовать эту возможность для написания пользовательских функций, которые будут вызываться вашими подключенными компонентами.

<!-- ### Arguments -->
### Аргументы

1. **`dispatch`**
2. **`ownProps` (необязателен)**
<!-- 2. **`ownProps` (optional)** -->

**`dispatch`**

<!-- The `mapDispatchToProps` function will be called with `dispatch` as the first argument.
You will normally make use of this by returning new functions that call `dispatch()` inside themselves, and either pass in a plain action object directly or pass in the result of an action creator. -->
Функция `mapDispatchToProps` будет вызываться с `dispatch` в качестве первого аргумента.
Обычно это используется для возврата новых функций, которые вызывают `dispatch()` внутри себя и передают ему либо простой объект действия напрямую, либо результат создателя действия.

```js
const mapDispatchToProps = (dispatch) => {
  return {
    // отправка (dispatch) простых действий
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  }
}
```

<!-- You will also likely want to forward arguments to your action creators: -->
Вы также, вероятно, захотите передать аргументы создателям действий:

```js
const mapDispatchToProps = (dispatch) => {
  return {
    // явная пересылка аргументов
    onClick: (event) => dispatch(trackClick(event)),

    // неявная пересылка аргументов
    onReceiveImpressions: (...impressions) =>
      dispatch(trackImpressions(impressions)),
  }
}
```

<!-- **`ownProps` ( optional )** -->
**`ownProps` ( необязателен )**

<!-- If your `mapDispatchToProps` function is declared as taking two parameters, it will be called with `dispatch` as the first parameter and the `props` passed to the connected component as the second parameter, and will be re-invoked whenever the connected component receives new props. -->
Если ваша функция `mapDispatchToProps` объявлена с двумя параметрами, она будет вызываться с `dispatch` в качестве первого параметра и `props`, переданным подключенному компоненту в качестве второго параметра, и будет повторно вызываться всякий раз, когда подключенный компонент получает новые пропсы.

<!-- This means, instead of re-binding new `props` to action dispatchers upon component re-rendering, you may do so when your component's `props` change. -->
Это означает, что вместо повторной привязки новых пропсов к отправителям действий при повторном рендеринге компонента вы можете сделать это при изменении пропсов вашего компонента.

**Привязывается к монтированию компонента**

```js
render() {
  return <button onClick={() => this.props.toggleTodo(this.props.todoId)} />
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: todoId => dispatch(toggleTodo(todoId))
  }
}
```

**Привязывается к изенению `props`**

```js
render() {
  return <button onClick={() => this.props.toggleTodo()} />
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))
  }
}
```

<!-- ### Return -->
### Возвращаемое значение

<!-- Your `mapDispatchToProps` function should return a plain object: -->
Ваша функция `mapDispatchToProps` должна возвращать простой объект:

<!-- - Each field in the object will become a separate prop for your own component, and the value should normally be a function that dispatches an action when called.
- If you use action creators ( as oppose to plain object actions ) inside `dispatch`, it is a convention to simply name the field key the same name as the action creator: -->
- Каждое поле объекта станет независимым пропсом вашего компонента и его значение обычно является функцией, отпраляющей (dispatch) действия при вызове.
- Если вы используете `dispatch` внутри создателей действий ( в качестве альтернативы действиям из объекта ), то по конвенции следует назвать поле объекта тем же именем что и создателя действий:

```js
const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const reset = () => ({ type: 'RESET' })

const mapDispatchToProps = (dispatch) => {
  return {
    // отправка (dispatch) действий возвращаемых из создателей действий
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  }
}
```

<!-- The return of the `mapDispatchToProps` function will be merged to your connected component as props. You may call them directly to dispatch its action. -->
Результат функции `mapDispatchToProps` будет объединён с пропсами подключенного компонента. Вы можете вызвать их, тем самым отправить (dispatch) их действие.

```js
function Counter({ count, increment, decrement, reset }) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
```

<!-- (Full code of the Counter example is [in this CodeSandbox](https://codesandbox.io/s/yv6kqo1yw9)) -->
(Полный пример с кодом Counter [на этом CodeSandbox](https://codesandbox.io/s/yv6kqo1yw9))

<!-- ### Defining the `mapDispatchToProps` Function with `bindActionCreators` -->
### Определяем функцию `mapDispatchToProps` с `bindActionCreators`

<!-- Wrapping these functions by hand is tedious, so Redux provides a function to simplify that. -->
Ручная обёртка этих функций утомительна, так Redux предоставляет функцию, упрощающую это.

<!-- > `bindActionCreators` turns an object whose values are [action creators](https://redux.js.org/glossary#action-creator), into an object with the same keys, but with every action creator wrapped into a [`dispatch`](https://redux.js.org/api/store#dispatch) call so they may be invoked directly. See [Redux Docs on `bindActionCreators`](https://redux.js.org/api/bindactioncreators) -->
> `bindActionCreators` превращает объект, значениями которого выступают [создатели действий](https://redux.js.org/glossary#action-creator), в объект с теми же ключами, но при этом каждый создатель действия оборачивается в вызов [`dispatch`](https://redux.js.org/api/store#dispatch), таким образом они могут быть вызваны напрямую. Посмотрите [документацию Redux `bindActionCreators`](https://redux.js.org/api/bindactioncreators)

<!-- `bindActionCreators` accepts two parameters: -->
`bindActionCreators` принимает 2 параметра:

<!-- 1. A **`function`** (an action creator) or an **`object`** (each field an action creator)
2. `dispatch` -->
1. **`function`** (создатель действия) или **`object`** (каждым полем которого является создатель действия)
2. `dispatch`

<!-- The wrapper functions generated by `bindActionCreators` will automatically forward all of their arguments, so you don't need to do that by hand. -->
Функции обёртки сгенерированные `bindActionCreators` будут автоматически пробрасывать их аргументы, поэтому у вас нет необходимости делать это вручную.

```js
import { bindActionCreators } from 'redux'

const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const reset = () => ({ type: 'RESET' })

// Привязка создателя действия
// Возвращает (...args) => dispatch(increment(...args))
const boundIncrement = bindActionCreators(increment, dispatch)

// Привящка объекта с создателями действий
const boundActionCreators = bindActionCreators(
  { increment, decrement, reset },
  dispatch
)
// Возвращает
// {
//   increment: (...args) => dispatch(increment(...args)),
//   decrement: (...args) => dispatch(decrement(...args)),
//   reset: (...args) => dispatch(reset(...args)),
// }
```

<!-- To use `bindActionCreators` in our `mapDispatchToProps` function: -->
Чтобы использовать `bindActionCreators` в нашей функции `mapDispatchToProps`:

```js
import { bindActionCreators } from 'redux'
// ...

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement, reset }, dispatch)
}

// компонент получит props.increment, props.decrement, props.reset
connect(null, mapDispatchToProps)(Counter)
```

<!-- ### Manually Injecting `dispatch` -->
### Ручное внедрение `dispatch`

<!-- If the `mapDispatchToProps` argument is supplied, the component will no longer receive the default `dispatch`. You may bring it back by adding it manually to the return of your `mapDispatchToProps`, although most of the time you shouldn’t need to do this: -->
В случае если аргумент `mapDispatchToProps` указан, компонент больше не будет получать `dispatch` по умолчанию. Вы можете получить его, добавив вручную к возвращаемому значению функции `mapDispatchToProps`, хотя в большинстве случаев вам не нужно этого делать:

```js
import { bindActionCreators } from 'redux'
// ...

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ increment, decrement, reset }, dispatch),
  }
}
```

<!-- ## Defining `mapDispatchToProps` As An Object -->
## Определяем `mapDispatchToProps` как объект

<!-- You’ve seen that the setup for dispatching Redux actions in a React component follows a very similar process: define an action creator, wrap it in another function that looks like `(…args) => dispatch(actionCreator(…args))`, and pass that wrapper function as a prop to your component. -->
Вы видели, что настройка отправки (dispatch) действий Redux в компоненте React выполняется очень похожим образом: определяем создатель действия, оборачиваем его в другую функцию, выглядящую как `(…args) => dispatch(actionCreator(…args))` и передаём функцию обёртки как пропс вашему компоненту.

<!-- Because this is so common, `connect` supports an “object shorthand” form for the `mapDispatchToProps` argument: if you pass an object full of action creators instead of a function, `connect` will automatically call `bindActionCreators` for you internally. -->
Поскольку это распространено, `connect` поддерживает форму "сокращённого объекта" (“object shorthand”) для аргумента `mapDispatchToProps`: если вы передадите объект, состоящий из создателей действивй вместо функции, `connect` автоматически вызовет `bindActionCreators` за вас.

<!-- **We recommend always using the “object shorthand” form of `mapDispatchToProps`, unless you have a specific reason to customize the dispatching behavior.** -->
**Мы рекомендуем всегда использовать форму "сокращённого объекта" (“object shorthand”) для `mapDispatchToProps`, если только у вас есть конкретная причина для настройки поведения отправки (dispatch).**

<!-- Note that: -->
Обратите внимание на это:

<!-- - Each field of the `mapDispatchToProps` object is assumed to be an action creator
- Your component will no longer receive `dispatch` as a prop -->
- Предполагается, что каждое поле объекта `mapDispatchToProps`, является создателем действия
- Ваши компоненты больше не получат `dispatch` пропсом

```js
// React Redux делает это за вас автоматически:
;(dispatch) => bindActionCreators(mapDispatchToProps, dispatch)
```

<!-- Therefore, our `mapDispatchToProps` can simply be: -->
Следовательно, наш `mapDispatchToProps` может быть упрощён:

```js
const mapDispatchToProps = {
  increment,
  decrement,
  reset,
}
```

<!-- Since the actual name of the variable is up to you, you might want to give it a name like `actionCreators`, or even define the object inline in the call to `connect`: -->
Поскольку фактическое имя переменной зависит от вас, вы можете дать ей имя, например `actionCreators`, или даже определить объект внутри вызова `connect`:

```js
import { increment, decrement, reset } from './counterActions'

const actionCreators = {
  increment,
  decrement,
  reset,
}

export default connect(mapState, actionCreators)(Counter)

// или
export default connect(mapState, { increment, decrement, reset })(Counter)
```

<!-- ## Common Problems -->
## Частые проблемы

<!-- ### Why is my component not receiving `dispatch`? -->
### Почему мой компонент не получает `dispatch`?

<!-- Also known as -->
Также встречается как

```js
TypeError: this.props.dispatch is not a function
```

<!-- This is a common error that happens when you try to call `this.props.dispatch` , but `dispatch` is not injected to your component. -->
Это распространённая ошибка, которая случается при попытке вызвать `this.props.dispatch`, при этом `dispatch` не внедрён в ваш компонент.

<!-- `dispatch` is injected to your component _only_ when: -->
`dispatch` внедряется в ваш компонент _исключительно_ когда:

<!-- **1. You do not provide `mapDispatchToProps`** -->
**1. Вы не передаёте `mapDispatchToProps`**

<!-- The default `mapDispatchToProps` is simply `dispatch => ({ dispatch })`. If you do not provide `mapDispatchToProps`, `dispatch` will be provided as mentioned above. -->
Значение по умолчанию функции `mapDispatchToProps` - это просто `dispatch => ({ dispatch })`. Если вы не передадите `mapDispatchToProps`, то ваш компонент будет получать `dispatch`.

<!-- In another words, if you do: -->
Другими словами, если вы сделаете:

```js
// Компонент принимает `dispatch`
connect(mapStateToProps /** без второго аргумент*/)(Component)
```

<!-- **2. Your customized `mapDispatchToProps` function return specifically contains `dispatch`** -->
**2. Ваша функция `mapDispatchToProps` возвращает `dispatch`**

Вы можете вернуть `dispatch` из вашей функции `mapDispatchToProps`:

```js
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
    dispatch,
  }
}
```

Или альтернативно с `bindActionCreators`:

```js
import { bindActionCreators } from 'redux'

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ increment, decrement, reset }, dispatch),
  }
}
```

<!-- See [this error in action in Redux’s GitHub issue #255](https://github.com/reduxjs/react-redux/issues/255). -->
Посмотрите [эту ошибку в действии в Redux GitHub issue #255](https://github.com/reduxjs/react-redux/issues/255).

<!-- There are discussions regarding whether to provide `dispatch` to your components when you specify `mapDispatchToProps` ( [Dan Abramov’s response to #255](https://github.com/reduxjs/react-redux/issues/255#issuecomment-172089874) ). You may read them for further understanding of the current implementation intention. -->
Существуют дискуссии по поводу передачи `dispatch` в пользовательские компоненты при указании `mapDispatchToProps` ( [ответ Дэна Абрамова на #255](https://github.com/reduxjs/react-redux/issues/255#issuecomment-172089874) ). Вы можете прочитать их для дальнейшего понимания текущих намерений по реализации.

<!-- ### Can I `mapDispatchToProps` without `mapStateToProps` in Redux? -->
### Могу ли я вызывать `mapDispatchToProps` без `mapStateToProps` в Redux?

<!-- Yes. You can skip the first parameter by passing `undefined` or `null`. Your component will not subscribe to the store, and will still receive the dispatch props defined by `mapDispatchToProps`. -->
Да. Вы можете пропустить первый параметр указанием `undefined` или `null`. Ваш компонент не будет подписываться на хранилище (store) и всё ещё будет получать пропсом dispatch, определённым в `mapDispatchToProps`.

```js
connect(null, mapDispatchToProps)(MyComponent)
```

<!-- ### Can I call `store.dispatch`? -->
### Могу ли я вызвать `store.dispatch`?

<!-- It's an anti-pattern to interact with the store directly in a React component, whether it's an explicit import of the store or accessing it via context (see the [Redux FAQ entry on store setup](https://redux.js.org/faq/storesetup#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself) for more details). Let React Redux’s `connect` handle the access to the store, and use the `dispatch` it passes to the props to dispatch actions. -->
Взаимодействие с хранилищем (store) напрямую из React компонента является антипаттерном, будь то явный импорт магазина или доступ к нему через контекст (смотрите [запись Redux FAQ по настройке хранилища (store)](https://redux.js.org/faq/storesetup#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself) для дальнейших деталей). Позвольте функции `connect` от React Redux обработать доступ в хранилище (store) и используйте `dispatch`, передаваемый в пропсы, для отправки (dispatch) to действий.


<!-- ## Links and References -->
## Ссылки и источники

**Руководства**

- [Возможно, вам не нужна функция `mapDispatchToProps`](https://daveceddia.com/redux-mapdispatchtoprops-object-form/)

**Связанная документация**

- [Redux документация про `bindActionCreators`](https://redux.js.org/api/bindactioncreators)

**Вопросы и ответы**

- [Как получить обычный dispatch из `this.props`, используя connect с Redux?](https://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux)
- [`this.props.dispatch` равен `undefined` при указании `mapDispatchToProps`](https://github.com/reduxjs/react-redux/issues/255)
- [Не вызывайте `store.dispatch`, вместо него используйте `this.props.dispatch` внедрённый функцией `connect`](https://github.com/reduxjs/redux/issues/916)
- [Могу ли я указать `mapDispatchToProps` без `mapStateToProps` в Redux?](https://stackoverflow.com/questions/47657365/can-i-mapdispatchtoprops-without-mapstatetoprops-in-redux)
- [Redux документация FAQ: React Redux](https://redux.js.org/faq/reactredux)
