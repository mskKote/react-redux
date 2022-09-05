---
id: connect
title: Connect
sidebar_label: connect()
hide_title: true
description: 'API > connect: компонент высшего порядка для взаимодействия с Redux'
---

&nbsp;

# `connect()`

:::tip подсказка

<!-- `connect` still works and is supported in React-Redux 8.x. However, [**we recommend using the hooks API as the default**](./hooks.md). -->
`connect` всё ещё работает и поддерживается в React-Redux версии 8.x. Как бы то ни было, [**мы настоятельно рекомендуем по умолчанию использовать хуки**](./hooks.md).

:::

<!-- ## Overview -->
## Введение

<!-- The `connect()` function connects a React component to a Redux store. -->
Функция `connect()` соединяет компонент React с Redux хранилищем (store).

<!-- It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store. -->
Она возвращает подключенный компонент с необходимой ему частью состояния и функция для отправки (dispatch) действий в хранилище (store).

<!-- It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in. -->
Она не изменяет получаемый на вход компонент; вместо этого, она возвращает новый компонент-обёртку, подключенный к хранилищу (store) и содержащий пользовательский компонент.


```js
function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
```

<!-- The `mapStateToProps` and `mapDispatchToProps` deals with your Redux store’s `state` and `dispatch`, respectively. `state` and `dispatch` will be supplied to your `mapStateToProps` or `mapDispatchToProps` functions as the first argument. -->
Функции `mapStateToProps` и `mapDispatchToProps` работают с состоянием `state` Redux хранилища (store) и отправкой действий `dispatch` соотвественно. `state` и `dispatch` будут поставляться первым параметром в функции `mapStateToProps` или `mapDispatchToProps`.

<!-- The returns of `mapStateToProps` and `mapDispatchToProps` are referred to internally as `stateProps` and `dispatchProps`, respectively. They will be supplied to `mergeProps`, if defined, as the first and the second argument, where the third argument will be `ownProps`. The combined result, commonly referred to as `mergedProps`, will then be supplied to your connected component. -->
Возвращаемые значения из функций `mapStateToProps` и `mapDispatchToProps` именуются как `stateProps` и `dispatchProps`, соответственно. Если они определены, то они будут поставляться в `mergeProps` как первый и второй параметр, в то время как третьим параметром будет `ownProps`. Скомбинированный результат обычно именуется как `mergedProps` и будет поставляться в ваш подключенный компонент.

<!-- ## `connect()` Parameters -->
## Параметры `connect()`

<!-- `connect` accepts four different parameters, all optional. By convention, they are called: -->
`connect` принимает 4 разные опциональных параметра. По конвенции они называются:

1. `mapStateToProps?: Function`
2. `mapDispatchToProps?: Function | Object`
3. `mergeProps?: Function`
4. `options?: Object`

### `mapStateToProps?: (state, ownProps?) => Object`

<!-- If a `mapStateToProps` function is specified, the new wrapper component will subscribe to Redux store updates. This means that any time the store is updated, `mapStateToProps` will be called. The results of `mapStateToProps` must be a plain object, which will be merged into the wrapped component’s props. If you don't want to subscribe to store updates, pass `null` or `undefined` in place of `mapStateToProps`. -->
Если функция `mapStateToProps` определена, новый компонент-обёртка будет подписываться на обновления Redux хранилища (store). Это означает, что при каждом обновлении хранилища (store) будет вызываться `mapStateToProps`. Результатом `mapStateToProps` должен быть простым объектом, который будет объединён с пропсами обёрнутого компонента. Если вы не хотите подписываться на обновления хранилища (store), укажите `null` или `undefined` вместо `mapStateToProps`.


<!-- #### Parameters -->
#### Параметры

1. `state: Object`
2. `ownProps?: Object`

<!-- A `mapStateToProps` function takes a maximum of two parameters. The number of declared function parameters (a.k.a. arity) affects when it will be called. This also determines whether the function will receive ownProps. See notes [here](#the-arity-of-maptoprops-functions). -->
Функция `mapStateToProps` принимает максимум 2 параметра. Количество объявленных параметров функции (т.н. арность) влияет на то, когда функция будет вызвана. Это также определяет получит ли функция `ownProps`. Смотрите записи [здесь](#the-arity-of-maptoprops-functions).

##### `state`

<!-- If your `mapStateToProps` function is declared as taking one parameter, it will be called whenever the store state changes, and given the store state as the only parameter. -->
Если ваша функция `mapStateToProps` объявлена с 1 параметром, она будет вызываться при каждом изменении в хранилище (store) и получать аргументом актуальное состояние хранилище в качестве.


```js
const mapStateToProps = (state) => ({ todos: state.todos })
```

##### `ownProps`

<!-- If your `mapStateToProps` function is declared as taking two parameters, it will be called whenever the store state changes _or_ when the wrapper component receives new props (based on shallow equality comparisons). It will be given the store state as the first parameter, and the wrapper component's props as the second parameter. -->
Если ваша функция `mapStateToProps` объявлена с 2-мя параметрами, она будет вызываться при каждом изменении состояния хранилища (store) _или_ когда компонент-обёртка получит новые пропсы (основываясь на неглубоком проверке на равенство). Она получит состояние хранилища (store) первым аргументом и пропсы компонента-обёртки вторым аргументом.

<!-- The second parameter is normally referred to as `ownProps` by convention. -->
Второй параметр по конвенции называется `ownProps`.


```js
const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.id],
})
```

<!-- #### Returns -->
### Возвращаемое значение

<!-- Your `mapStateToProps` functions are expected to return an object. This object, normally referred to as `stateProps`, will be merged as props to your connected component. If you define `mergeProps`, it will be supplied as the first parameter to `mergeProps`. -->
Ожидается, что ваша функция `mapStateToProps` вернёт объект. Этот объект обычно называется как `stateProps` и  он будет объединен с пропсам вашего подключаемого компонента. Если вы укажете параметр `mergeProps`, он будет поставляться первым аргументом в `mergeProps`.

<!-- The return of the `mapStateToProps` determine whether the connected component will re-render (details [here](../using-react-redux/connect-extracting-data-with-mapStateToProps.md#return-values-determine-if-your-component-re-renders)). -->
Возвращаемое значение `mapStateToProps` определяет будет ли подключенный компонент перерисовываться (детали [здесь](../using-react-redux/connect-extracting-data-with-mapStateToProps.md#return-values-determine-if-your-component-re-renders)).

<!-- For more details on recommended usage of `mapStateToProps`, please refer to [our guide on using `mapStateToProps`](../using-react-redux/connect-extracting-data-with-mapStateToProps.md). -->
За подробностями использования `mapStateToProps` мы рекомендуем обращайться к [нашему гайду по использованию `mapStateToProps`](../using-react-redux/connect-extracting-data-with-mapStateToProps.md).

<!-- > You may define `mapStateToProps` and `mapDispatchToProps` as a factory function, i.e., you return a function instead of an object. In this case your returned function will be treated as the real `mapStateToProps` or `mapDispatchToProps`, and be called in subsequent calls. You may see notes on [Factory Functions](#factory-functions) or our guide on performance optimizations. -->
> Вы можете определить `mapStateToProps` и `mapDispatchToProps` как фабричную функцию, т.е. вы вернёте функцию вместо объекта. В этом случае возвращаемая функция будет рассматриваться в качестве настоящего аргумента  `mapStateToProps` или `mapDispatchToProps`, и будет вызываться при последующих вызовах. Вы можете посмотреть записи на [фабричные функции](#factory-functions) или наш гайд на оптимизацию производительности.

### `mapDispatchToProps?: Object | (dispatch, ownProps?) => Object`

<!-- Conventionally called `mapDispatchToProps`, this second parameter to `connect()` may either be an object, a function, or not supplied. -->
По конвенции `mapDispatchToProps` - второй параметр функции `connect()` также может быть объектом, функцией или быть не указан вовсе.

<!-- Your component will receive `dispatch` by default, i.e., when you do not supply a second parameter to `connect()`: -->
Ваш компонент буедт получать функцию `dispatch` по умолчанию, т.е. когда вы не указываете второй аргумент для `connect()`:

```js
// не указываем `mapDispatchToProps`
connect()(MyComponent)
connect(mapState)(MyComponent)
connect(mapState, null, mergeProps, options)(MyComponent)
```

<!-- If you define a `mapDispatchToProps` as a function, it will be called with a maximum of two parameters. -->
Если вы определите `mapDispatchToProps` как функцию, она будет вызываться с максимум 2 аргументами.

<!-- #### Parameters -->
#### Параметры

1. `dispatch: Function`
2. `ownProps?: Object`

##### `dispatch`

<!-- If your `mapDispatchToProps` is declared as a function taking one parameter, it will be given the `dispatch` of your `store`. -->
Если ваш `mapDispatchToProps` объявлен как функция, принимающая 1 параметр, она получит `dispatch` вашего `store`.

```js
const mapDispatchToProps = (dispatch) => {
  return {
    // отправляем (dispatch) простые действия (action)
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  }
}
```

##### `ownProps`

<!-- If your `mapDispatchToProps` function is declared as taking two parameters, it will be called with `dispatch` as the first parameter and the props passed to the wrapper component as the second parameter, and will be re-invoked whenever the connected component receives new props. -->
Если ваша функция `mapDispatchToProps` объявлена с 2-мя параметрами, она будет вызываться с `dispatch` как первый аргумент и с пропсами, переданными компоненту-оболочке, в качестве второго аргумента и будет повторно вызваться, когда подключенный компонент получает новые пропсы.

<!-- The second parameter is normally referred to as `ownProps` by convention. -->
Второй параметр по конвенции называется `ownProps`.

```js
// привязываемся к повторному рендерингу компонента
<button onClick={() => this.props.toggleTodo(this.props.todoId)} />

// Привязываемся к изменению `props`
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: () => dispatch(toggleTodo(ownProps.todoId)),
})
```

<!-- The number of declared function parameters of `mapDispatchToProps` determines whether they receive ownProps. See notes [here](#the-arity-of-maptoprops-functions). -->
Количество определённых параметров функции `mapDispatchToProps` определяет получит ли она ownProps. Смотрите записи [здесь](#the-arity-of-maptoprops-functions).


<!-- #### Returns -->
#### Возвращаемое значение

<!-- Your `mapDispatchToProps` functions are expected to return an object. Each fields of the object should be a function, calling which is expected to dispatch an action to the store. -->
Ожидается, что ваша функция `mapDispatchToProps` вернёт объект. Каждое из полей объекта следует указывать как функцией, вызывая которую calling ожидается отправка (dispatch) действия (action) в хранилище (store).

<!-- The return of your `mapDispatchToProps` functions are regarded as `dispatchProps`. It will be merged as props to your connected component. If you define `mergeProps`, it will be supplied as the second parameter to `mergeProps`. -->
Возвращаемые функции из `mapDispatchToProps` расцениваться как `dispatchProps`. Они будут объединены с пропсам вашего подключаемого компонента.  Если вы укажете параметр `mergeProps`, он будет поставляться вторым аргументом в `mergeProps`.

```js
const createMyAction = () => ({ type: 'MY_ACTION' })
const mapDispatchToProps = (dispatch, ownProps) => {
  const boundActions = bindActionCreators({ createMyAction }, dispatch)
  return {
    dispatchPlainObject: () => dispatch({ type: 'MY_ACTION' }),
    dispatchActionCreatedByActionCreator: () => dispatch(createMyAction()),
    ...boundActions,
    // здесь вы также можете вернуть dispatch
    dispatch,
  }
}
```

<!-- For more details on recommended usage, please refer to [our guide on using `mapDispatchToProps`](../using-react-redux/connect-mapdispatch). -->
За подробностями использования `mapDispatchToProps` мы рекомендуем обращайться к [нашему гайду по использованию `mapDispatchToProps`](../using-react-redux/connect-mapdispatch).

<!-- > You may define `mapStateToProps` and `mapDispatchToProps` as a factory function, i.e., you return a function instead of an object. In this case your returned function will be treated as the real `mapStateToProps` or `mapDispatchToProps`, and be called in subsequent calls. You may see notes on [Factory Functions](#factory-functions) or our guide on performance optimizations. -->
> Вы можете определить `mapStateToProps` и `mapDispatchToProps` как фабричную функцию, т.е. вы вернёте функцию вместо объекта. В этом случае возвращаемая функция будет рассматриваться в качестве настоящего аргумента  `mapStateToProps` или `mapDispatchToProps`, и будет вызываться при последующих вызовах. Вы можете посмотреть записи на [фабричные функции](#factory-functions) или наш гайд на оптимизацию производительности.

<!-- #### Object Shorthand Form -->
#### Сокращенная форма объекта

<!-- `mapDispatchToProps` may be an object where each field is an [action creator](https://redux.js.org/glossary#action-creator). -->
`mapDispatchToProps` может быть объектом, где каждое поле является [создателем действия](https://redux.js.org/glossary#action-creator).


```js
import { addTodo, deleteTodo, toggleTodo } from './actionCreators'

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo,
}

export default connect(null, mapDispatchToProps)(TodoApp)
```

<!-- In this case, React-Redux binds the `dispatch` of your store to each of the action creators using `bindActionCreators`. The result will be regarded as `dispatchProps`, which will be either directly merged to your connected components, or supplied to `mergeProps` as the second argument. -->
В этом случае React-Redux привязывает `dispatch` вашего хранилища (store) к каждому создателю действий, используя `bindActionCreators`. Результат будет расцениваться как `dispatchProps`, которые также будут объединены с вашими подключенными компонентами или переданы в `mergeProps` в качестве второго аргумента.

```js
// Под капотом React-Redux вызывает bindActionCreators
// для привязки создателей действий к dispatch вашего хранилища (store)
bindActionCreators(mapDispatchToProps, dispatch)
```

<!-- We also have a section in our `mapDispatchToProps` guide on the usage of object shorthand form [here](../using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object). -->
У нас также есть секция про `mapDispatchToProps` в гайде про использование сокращенной формы объекта [здесь](../using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object).


### `mergeProps?: (stateProps, dispatchProps, ownProps) => Object`

<!-- If specified, defines how the final props for your own wrapped component are determined. If you do not provide `mergeProps`, your wrapped component receives `{ ...ownProps, ...stateProps, ...dispatchProps }` by default. -->
Если параметр указан, определяет окончательный вид пропсов для вашего компонента-обёртки. Если вы не предоставите `mergeProps`, ваш компонент-обёртка получит `{ ...ownProps, ...stateProps, ...dispatchProps }` по умолчанию.

<!-- #### Parameters -->
#### Параметры

<!-- `mergeProps` should be specified with maximum of three parameters. They are the result of `mapStateToProps()`, `mapDispatchToProps()`, and the wrapper component's `props`, respectively: -->
В функцию `mergeProps` указывается максимум 3 параметра. Они являются результатами `mapStateToProps()`, `mapDispatchToProps()` и `props` компонента-обёртки соответственно:


1. `stateProps`
2. `dispatchProps`
3. `ownProps`

<!-- The fields in the plain object you return from it will be used as the props for the wrapped component. You may specify this function to select a slice of the state based on props, or to bind action creators to a particular variable from props. -->
Поля объекта, возвраемого из неё, будут использоваться как пропсы для компонента-обёртки. Вы можете указать функцию `mergeProps`, чтобы выбрать часть состояния, основываясь на пропсах или чтобы привязать создателей действий к определённой переменной из пропсов.

<!-- #### Returns -->
#### Возвращаемое значение

<!-- The return value of `mergeProps` is referred to as `mergedProps` and the fields will be used as the props for the wrapped component. -->
Возвращаемое значение из функции `mergeProps` именуется `mergedProps` и его поля будут передаются как пропсы для компонента-обёртки.

<!-- > Note: Creating new values in mergeProps will cause re-renders. It is recommended that you memoize fields in order to avoid unnecessary re-renders.  -->
> Примечание: создание новых значений в функции mergeProps будет вызывать повторные отрисовки. Рекомендуется мемоизировать поля с целью избежать ненужных перерисовок. 


### `options?: Object`

```js
{
  context?: Object,
  areStatesEqual?: Function,
  areOwnPropsEqual?: Function,
  areStatePropsEqual?: Function,
  areMergedPropsEqual?: Function,
  forwardRef?: boolean,
}
```

#### `context: Object`

<!-- > Note: This parameter is supported in >= v6.0 only -->
> Примечание: этот параметр поддерживается только начиная с версии 6.0


<!-- React-Redux v6 allows you to supply a custom context instance to be used by React-Redux.
You need to pass the instance of your context to both `<Provider />` and your connected component.
You may pass the context to your connected component either by passing it here as a field of option, or as a prop to your connected component in rendering. -->
React-Redux версии 6 позволяет вам передать пользовательский экземпляр контекста, используемый React-Redux'ом.
Вам нужно передать экземпляр вашего контекста и в `<Provider />`, и в ваш подключенный компонент.
Вы можете передать контекст подключенному компоненту, указав его в поле параметра `connect()`, либо в качестве пропса к подключенному компоненту при рендеринге.

```js
// const MyContext = React.createContext();
connect(mapStateToProps, mapDispatchToProps, null, { context: MyContext })(
  MyComponent
)
```

#### `areStatesEqual: (next: Object, prev: Object) => boolean`

<!-- - default value: `strictEqual: (next, prev) => prev === next` -->
- Значение по умолчанию: `strictEqual: (next, prev) => prev === next`

<!-- Compares incoming store state to its previous value. -->
Сравнивает входящее состояние хранилища (store) с его предыдущим состоянием.

```js
const areStatesEqual = (next, prev) =>
  prev.entities.todos === next.entities.todos
```

<!-- You may wish to override `areStatesEqual` if your `mapStateToProps` function is computationally expensive and is also only concerned with a small slice of your state. The example above will effectively ignore state changes for everything but that slice of state. -->
Вам может понадобиться переопределить `areStatesEqual`, если ваша функция `mapStateToProps` содержит сложные вычислениях или если она касается только небольшой части вашего состояния. В примере выше будет эффективно игнорировать все изменения состояния не касающиеся используемого фрагмента состояния.

<!-- This would likely impact the other equality checks as well, depending on your `mapStateToProps` function. -->
Это, вероятно, повлияет и на другие проверки на равенство, в зависимости от вашей функции `mapStateToProps`.

#### `areOwnPropsEqual: (next: Object, prev: Object) => boolean`

<!-- - default value: `shallowEqual: (objA, objB) => boolean`
  ( returns `true` when each field of the objects is equal ) -->
- значение по умолчанию: `shallowEqual: (objA, objB) => boolean`
  ( возвращает `true`, когда все поля объектов соответственно равны между собой )

<!-- Compares incoming props to its previous value. -->
Сравнивает входящие пропсы и их предыдущее значение.

<!-- You may wish to override `areOwnPropsEqual` as a way to whitelist incoming props. You'd also have to implement `mapStateToProps`, `mapDispatchToProps` and `mergeProps` to also whitelist props. (It may be simpler to achieve this other ways, for example by using [recompose's mapProps](https://github.com/acdlite/recompose/blob/master/docs/API.md#mapprops).) -->
Вы можете переопределить `areOwnPropsEqual` чтобы заносить входящие пропсы в "белый список". Для этого Вам также нужно будет реализовать `mapStateToProps`, `mapDispatchToProps` и `mergeProps`. (Возможно, проще будет использовать другой способ, например [recompose's mapProps](https://github.com/acdlite/recompose/blob/master/docs/API.md#mapprops).)

#### `areStatePropsEqual: (next: Object, prev: Object) => boolean`

- Тип: `function`
- Значение по умолчанию: `shallowEqual`


<!-- Compares the result of `mapStateToProps` to its previous value. -->
Сравнивает результат функции `mapStateToProps` с его предыдущим значением.

#### `areMergedPropsEqual: (next: Object, prev: Object) => boolean`

- Значение по умолчанию: `shallowEqual`

Сравнивает результат функции `mergeProps` с его предыдущим значением.

<!-- You may wish to override `areStatePropsEqual` to use `strictEqual` if your `mapStateToProps` uses a memoized selector that will only return a new object if a relevant prop has changed. This would be a very slight performance improvement, since would avoid extra equality checks on individual props each time `mapStateToProps` is called. -->
Вы можете переопределить `areStatePropsEqual` для использования `strictEqual`, если ваш `mapStateToProps` использует мемоизированный селектор, возвращающий новый объект, если соответствующее свойство изменилось. Это может незначительно улучшить производительность, так как это позволит избежать дополнительных проверок на равенство для отдельных пропсов при каждом вызове `mapStateToProps`.

<!-- You may wish to override `areMergedPropsEqual` to implement a `deepEqual` if your selectors produce complex props. ex: nested objects, new arrays, etc. (The deep equal check may be faster than just re-rendering.) -->
Вы можете переопределить `areMergedPropsEqual` для реализации `deepEqual`, если ваши селекторы представляют собой сложные свойства, например: вложенные объекты, новые массивы итд (Глубокая проверка на равенство может быть быстрее, чем повторная отрисовка.)

#### `forwardRef: boolean`

<!-- > Note: This parameter is supported in >= v6.0 only -->
> Примечание: этот параметр поддерживается только начиная с версии 6.0

<!-- If `{forwardRef : true}` has been passed to `connect`, adding a ref to the connected wrapper component will actually return the instance of the wrapped component. -->
Если указано значение `{forwardRef : true}` в `connect`, то добавление ссылки на подключенный компонент-обёртку фактически вернёт экземпляр компонента-обёртки.

<!-- ## `connect()` Returns -->
## Возвращаемое значение `connect()` -->

<!-- The return of `connect()` is a wrapper function that takes your component and returns a wrapper component with the additional props it injects. -->
`connect()` возвращает функцию для обёртки, принимающую в себя компонент и возвращает компонент-обёртку с дополнительными пропсами.

```js
import { login, logout } from './actionCreators'

const mapState = (state) => state.user
const mapDispatch = { login, logout }

// Первый вызов: возвращает компонент высшего порядка, 
// который вы можете использовать, чтобы обернуть любой компонент
const connectUser = connect(mapState, mapDispatch)

// Второй вызов: возвращает компонент-обёртку с mergedProps.
// Вы можете использовать компонент высшего порядка, 
// чтобы дать разным компонентам одинаковое поведение
const ConnectedUserLogin = connectUser(Login)
const ConnectedUserProfile = connectUser(Profile)
```

<!-- In most cases, the wrapper function will be called right away, without being saved in a temporary variable: -->
В большинстве случаев функция для обёртки вызывается сразу, без временной переменной:

```js
import { login, logout } from './actionCreators'

const mapState = (state) => state.user
const mapDispatch = { login, logout }

// вызов connect для создания функции обёртки и незамедлительный вызов
// этой функции для генерации компонента-обёртки.

export default connect(mapState, mapDispatch)(Login)
```

<!-- ## Example Usage -->
## Пример использования

<!-- Because `connect` is so flexible, it may help to see some additional examples of how it can be called: -->
В силу гибкости `connect`, могут понадобиться дополнительные примеры того, как его можно вызвать:

<!-- - Inject just `dispatch` and don't listen to store -->
- Внедрить только `dispatch` и не подписываться на хранилище (store)

```js
export default connect()(TodoApp)
```

<!-- - Inject all action creators (`addTodo`, `completeTodo`, ...) without subscribing to the store -->
- Внедрение всех создателей действий (`addTodo`, `completeTodo`, ...) без подписки на хранилище (store)

```js
import * as actionCreators from './actionCreators'

export default connect(null, actionCreators)(TodoApp)
```

<!-- - Inject `dispatch` and every field in the global state -->
- Внедрение `dispatch` и каждого поля в глобальном состоянии (state)

<!-- > Don’t do this! It kills any performance optimizations because `TodoApp` will rerender after every state change. -->
> Не делайте этого! Это убивает любые оптимизации производительность, поскольку `TodoApp` будет перерисовываться после каждого изменения состояния.
<!-- > It’s better to have more granular `connect()` on several components in your view hierarchy that each only listen to a relevant slice of the state. -->
> Лучше иметь точечный вызов `connect()` в нескольких компонентах в вашей иерархии, которые будут подписываться только на релевантные части общего состояния (state).

```js
// Не делайте этого!
export default connect((state) => state)(TodoApp)
```

<!-- - Inject `dispatch` and `todos` -->
- Внедрение `dispatch` и `todos`

```js
function mapStateToProps(state) {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoApp)
```

<!-- - Inject `todos` and all action creators -->
- Внедрение `todos` и всех создателей действий

```js
import * as actionCreators from './actionCreators'

function mapStateToProps(state) {
  return { todos: state.todos }
}

export default connect(mapStateToProps, actionCreators)(TodoApp)
```

<!-- - Inject `todos` and all action creators (`addTodo`, `completeTodo`, ...) as `actions` -->
- Внеддрение `todos` и всех создателей действий (`addTodo`, `completeTodo`, ...) как `actions`

```js
import * as actionCreators from './actionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
```

<!-- - Inject `todos` and a specific action creator (`addTodo`) -->
- Внедрение `todos` и определённого создателя действия (`addTodo`)

```js
import { addTodo } from './actionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
```

<!-- - Inject `todos` and specific action creators (`addTodo` and `deleteTodo`) with shorthand syntax -->
- Внедрение `todos` и определённых создателей действий (`addTodo` и `deleteTodo`), используя сокращенный синтаксис

```js
import { addTodo, deleteTodo } from './actionCreators'

function mapStateToProps(state) {
  return { todos: state.todos }
}

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
```

<!-- - Inject `todos`, `todoActionCreators` as `todoActions`, and `counterActionCreators` as `counterActions` -->
- Внедрение `todos`, `todoActionCreators` как `todoActions` и `counterActionCreators` как `counterActions`

```js
import * as todoActionCreators from './todoActionCreators'
import * as counterActionCreators from './counterActionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch),
    counterActions: bindActionCreators(counterActionCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
```

<!-- - Inject `todos`, and todoActionCreators and counterActionCreators together as `actions` -->
- Внедрение `todos` и todoActionCreators вместе с counterActionCreators как `actions`

```js
import * as todoActionCreators from './todoActionCreators'
import * as counterActionCreators from './counterActionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { ...todoActionCreators, ...counterActionCreators },
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
```

<!-- - Inject `todos`, and all `todoActionCreators` and `counterActionCreators` directly as props -->
- Внедрение `todos` и всех создателей действий `todoActionCreators` и `counterActionCreators` напрямую в пропсы

```js
import * as todoActionCreators from './todoActionCreators'
import * as counterActionCreators from './counterActionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { ...todoActionCreators, ...counterActionCreators },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
```

<!-- - Inject `todos` of a specific user depending on props -->
- Внедрение `todos` определённого пользователя в зависимости от пропсов

```js
import * as actionCreators from './actionCreators'

function mapStateToProps(state, ownProps) {
  return { todos: state.todos[ownProps.userId] }
}

export default connect(mapStateToProps)(TodoApp)
```

<!-- - Inject `todos` of a specific user depending on props, and inject `props.userId` into the action -->
- Внедрение `todos` определённого пользователя в зависимости от пропсов и внедрение `props.userId` в действие

```js
import * as actionCreators from './actionCreators'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    todos: stateProps.todos[ownProps.userId],
    addTodo: (text) => dispatchProps.addTodo(ownProps.userId, text),
  })
}

export default connect(mapStateToProps, actionCreators, mergeProps)(TodoApp)
```

<!-- ## Notes -->
## Примечания

<!-- ### The Arity of `mapToProps` Functions -->
### Арность функций `mapToProps`

<!-- The number of declared function parameters of `mapStateToProps` and `mapDispatchToProps` determines whether they receive `ownProps` -->
Количество объявленных параметров функций `mapStateToProps` и `mapDispatchToProps` определяет, получат они в аргументы `ownProps` или нет.

<!-- > Note: `ownProps` is not passed to `mapStateToProps` and `mapDispatchToProps` if the formal definition of the function contains one mandatory parameter (function has length 1). For example, functions defined like below won't receive `ownProps` as the second argument. If the incoming value of `ownProps` is `undefined`, the default argument value will be used. -->
> Примечание: `ownProps` не передаётся в `mapStateToProps` и `mapDispatchToProps`, если формальное определение функции содержит один обязательный параметр (функция имеет длину 1). Например, функции определённые внизу  не получат `ownProps` вторым аргументом. Если входящее значение `ownProps` это `undefined`, будет использоваться значение аргумента по умолчанию.


```js
function mapStateToProps(state) {
  console.log(state) // state
  console.log(arguments[1]) // undefined
}

const mapStateToProps = (state, ownProps = {}) => {
  console.log(state) // state
  console.log(ownProps) // {}
}
```

<!-- Functions with no mandatory parameters or two parameters\*will receive `ownProps`. -->
Функции без обязательных параметров или с 2 параметрами\*будут получать `ownProps`.

```js
const mapStateToProps = (state, ownProps) => {
  console.log(state) // state
  console.log(ownProps) // ownProps
}

function mapStateToProps() {
  console.log(arguments[0]) // state
  console.log(arguments[1]) // ownProps
}

const mapStateToProps = (...args) => {
  console.log(args[0]) // state
  console.log(args[1]) // ownProps
}
```

<!-- ### Factory Functions -->
### Фабричные функции

<!-- If your `mapStateToProps` or `mapDispatchToProps` functions return a function, they will be called once when the component instantiates, and their returns will be used as the actual `mapStateToProps`, `mapDispatchToProps`, functions respectively, in their subsequent calls. -->
Если ваши `mapStateToProps` или `mapDispatchToProps` возвращают функцию, они будут вызываться единожды при инициализации компонента и их возвращаемая функция будет фактическим значением функций `mapStateToProps` и `mapDispatchToProps` соответственно в их последующих вызовах.

<!-- The factory functions are commonly used with memoized selectors. This gives you the ability to create component-instance-specific selectors inside the closure: -->
Фабричные функции обычно используются с мемоизированными селекторами. Это даёт возможность создать селекторы, специфичные для экземпляра компонента, внутри замыкания:

```js
const makeUniqueSelectorInstance = () =>
  createSelector([selectItems, selectItemId], (items, itemId) => items[itemId])
const makeMapState = (state) => {
  const selectItemForThisComponent = makeUniqueSelectorInstance()
  return function realMapState(state, ownProps) {
    const item = selectItemForThisComponent(state, ownProps.itemId)
    return { item }
  }
}
export default connect(makeMapState)(SomeComponent)
```

<!-- ## Legacy Version Docs -->
## Устаревшие версии документации

<!-- While the `connect` API has stayed almost entirely API-compatible between all of our major versions, there have been some small changes in options and behavior from version to version. -->
Пока что `connect` API осталось почти полностью совместимым между всеми основными версиями React Redux, были небольшие изменения в параметрах и поведении от версии к версии.

<!-- For details on the legacy 5.x and 6.x versions, please see these archived files in the React Redux repo: -->
Подробную информацию об устаревших версиях 5.x и 6.x смотрите в этих архивных файлах в репозитории React Redux:

- [5.x `connect` API reference](https://github.com/reduxjs/react-redux/blob/v7.2.2/website/versioned_docs/version-5.x/api/connect.md)
- [6.x `connect` API reference](https://github.com/reduxjs/react-redux/blob/v7.2.2/website/versioned_docs/version-6.x/api/connect.md)
