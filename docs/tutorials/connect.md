---
id: connect
title: 'Руководство: Connect API'
hide_title: true
sidebar_label: 'Руководство: Connect API'
description: 'Руководство > Connect API: как использовать устаревшее connect API'
---

&nbsp;

# Руководство: Использование `connect` API

:::tip Подсказка

<!-- We now recommend using [the React-Redux hooks API as the default](../api/hooks.md). However, the `connect` API still works fine. -->
На данный момент мы рекомендуем использовать [React-Redux хуки](../api/hooks.md). Как бы то ни было, `connect` по-прежнему работает.

<!-- This tutorial also shows some older practices we no longer recommend, like separating Redux logic into folders by type. We've kept this tutorial as-is for completeness, but recommend reading through [the "Redux Essentials" tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) and the [Redux Style Guide](https://redux.js.org/style-guide/style-guide) in the Redux docs for our current best practices. -->
Это руководство также покажет несколько устаревших практик, которые мы больше не рекомендуем, как например, разделять Redux логику по папкам по типам. Мы сохранили это руководство как есть ради преемственности, при этом рекомендуем прочитать ["Redux Essentials"](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) и [стилистический гайд Redux](https://redux.js.org/style-guide/style-guide) в документации Redux для понимания лучших практик.


<!-- We're working on a new tutorial that will introduce the hooks APIs. Until then, we suggest reading [**Redux Fundamentals, Part 5: UI and React**](https://redux.js.org/tutorials/fundamentals/part-5-ui-react) for a hooks tutorial. -->
Мы работаем над новым вводным туториалом про API хуков. А пока предлагаем прочитать [**Redux Fundamentals, Part 5: UI and React**](https://redux.js.org/tutorials/fundamentals/part-5-ui-react) для руководства по хукам.

:::

<!-- To see how to use React Redux in practice, we’ll show a step-by-step example by creating a todo list app. -->
Чтобы увидеть как используется React Redux на практике, мы шаг за шагом разберём пример приложения со списком дел.

## Пример приложения со списком дел

**Переместиться**

- 🤞 [Просто покажите мне код](https://codesandbox.io/s/9on71rvnyo)
- 👆 [Внедрение хранилища](#внедрение-хранилищаstore)
- ✌️ [Соединение с компонентами](#привязываем-компоненты)

**React компоненты для UI**

Мы реализуем React компоненты интерфейса следующим образом:

<!-- - `TodoApp` is the entry component for our app. It renders the header, the `AddTodo`, `TodoList`, and `VisibilityFilters` components. -->
- `TodoApp` — начальный компоненты нашего приложения. Он отрисовывает заголовок и компоненты: `AddTodo`, `TodoList`, `VisibilityFilters`.
- `AddTodo` — компонент, позволяющий пользователю создать задачу и добавить её к списку дел через кнопку  “Add Todo”:
  - Компонент использует "контроллируемый" input, который обновляет своё состояние при вызове события `onChange`.
  - Когда пользователь нажимает на кнопку “Add Todo”, отправляется действие (которые мы предоставим с помощью React Redux) для добавления задачи в хранилище.
- `TodoList` — компонент, отрисовывающий список задач:
  - При активации фильтра `VisibilityFilters` отрисовывается отфильтрованный список задач.
- `Todo` — компонент, отображающий сущность задачи:
  - Отображает содержимое задачи и показывает её статус. Завершённая задача будет вычеркнута.
  - В нём отправляет действие при изменении статуса через событие `onClick`.
- `VisibilityFilters` отрисовывает простой набор фильтров: _all_, _completed_ и _incomplete._ Фильтрация будет происходить при нажатии:
  - Компонент принимает свойство `activeFilter` от его родителя, указывающее выбранный пользователем фильтр. Активный фильтр выделяется подчеркиванием.
  - Компонент отправляет действие `setFilter` при выборе фильтра.
- `constants` содержит данные констант для нашего приложения.
- И, наконец, `index` отрисовывает наше приложение в DOM дерево.

<br />

**Redux хранилище(store)**

<!-- The Redux portion of the application has been set up using the [patterns recommended in the Redux docs](https://redux.js.org): -->
Redux-часть приложения была настроена с использованием [шаблона, рекомендованного в документации Redux](https://redux.js.org):

- Хранилище(store)
  - `todos`: нормализованный редюсер(reducer) задач. Он содержит в себе `byIds` — выборку из задач и `allIds`, содержащий список из id всех задач.
  - `visibilityFilters`: строка `all`, `completed` или `incomplete`.
- Создатели Действий
  - `addTodo` создаёт действие для добавления задачи. Он принимает строку `content` и возвращает действие `ADD_TODO` с переменной `payload`, содержащей самоувеличивающийся `id` и `content`
  - `toggleTodo` создаёт действие для переключения статуса задачи. Принимает номер задачи `id` и возвращает действие `TOGGLE_TODO` с `payload`, содержащей только её `id`
  - `setFilter` создаёт действие для установки состояния активного фильтра. Принимает строку `filter` и возвращает действие `SET_FILTER` с `payload`, содержащей сам фильтр `filter`
- Редюсеры(Reducers)
  - `todos` редюсер
    - Добавляет `id` к своему полю `allIds` и устанавливает задачу в своем поле `byIds` после получения действия `ADD_TODO`.
    - Переключает состояние поля `completed` для задачи, получая действие `TOGGLE_TODO`
  - `visibilityFilters` редюсер задаёт свой срез хранилища(state) для нового фильтра, который он получает из payload действия `SET_FILTER`
- Типы действий (actions)
  - Мы используем файл `actionTypes.js`, который хранит константы для типов действий, чтобы их переиспользовать
- Селекторы
  - `getTodoList` возвращает список `allIds` из хранилища `todos`
  - `getTodoById` находит задачу в хранилище по `id`
  - `getTodos` немножко более сложный. Он принимает в себя `id` из `allIds`, ищет каждую задачу из `byIds` и возвращает массив из задач
  - `getTodosByVisibilityFilter` фильтрует задачи согласно выбранному фильтру

<!-- You may check out [this CodeSandbox](https://codesandbox.io/s/6vwyqrpqk3) for the source code of the UI components and the unconnected Redux store described above. -->
Вы можете посмотреть код на [CodeSandbox](https://codesandbox.io/s/6vwyqrpqk3), там есть UI компоненты и описанное выше, но ещё не подключенное Redux хранилище(store).


<br />

<!-- We will now show how to connect this store to our app using React Redux. -->
Теперь мы покажем, как подключить хранилище(store) к приложению, используя React Redux.

### Внедрение хранилища(store)

<!-- First we need to make the `store` available to our app. To do this, we wrap our app with the `<Provider />` API provided by React Redux. -->
Сначала нам нужно сделать хранилище `store` доступным нашему приложению. Для этого мы оборачиваем наше приложение в компонент `<Provider />`, импортируемый из React Redux.

```jsx
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'

import { Provider } from 'react-redux'
import store from './redux/store'

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
```

<!-- Notice how our `<TodoApp />` is now wrapped with the `<Provider />` with `store` passed in as a prop. -->
Обратите внимание, `<TodoApp />` сейчас обёрнут в `<Provider />`, куда мы через пропсы передаём `store`.

![](https://i.imgur.com/LV0XvwA.png)

<!-- ### Connecting the Components -->
### Привязываем компоненты

<!-- React Redux provides a `connect` function for you to read values from the Redux store (and re-read the values when the store updates). -->
React Redux предоставляет функцию `connect` для чтения из Redux хранилища (и повторного чтения при обновлении хранилища).

<!-- The `connect` function takes two arguments, both optional: -->
Функция `connect` принимает 2 не обязательных аргумента:

<!-- - `mapStateToProps`: called every time the store state changes. It receives the entire store state, and should return an object of data this component needs. -->
- `mapStateToProps`: вызывается каждый раз, когда состояние хранилища(store) изменяется. Он получает всё содержимое хранилища(store) и возвращает объект с данными для этого компонента.

<!-- - `mapDispatchToProps`: this parameter can either be a function, or an object.
  - If it’s a function, it will be called once on component creation. It will receive `dispatch` as an argument, and should return an object full of functions that use `dispatch` to dispatch actions.
  - If it’s an object full of action creators, each action creator will be turned into a prop function that automatically dispatches its action when called. **Note**: We recommend using this “object shorthand” form. -->
- `mapDispatchToProps`: этот параметр может быть объектом или функцией.
  - Если это функция, она вызывается единожды при создании компонента. В аргументах она получает `dispatch` и должна возвращать объект с функциями, использующими `dispatch` для отправки действий в хранилище(store).
  - Если это объект, он должен содержать Создателей Действий, где каждый Создатель Действия будет превращен во вспомогательную функцию, которая автоматически отправляет своё действие при вызове. **Обратите внимание**: мы рекомендуем использовать форму “object shorthand”.

<!-- Normally, you’ll call `connect` in this way: -->
Обычно `connect` вызывается так:

```js
const mapStateToProps = (state, ownProps) => ({
  // ... вычисляемые данные из состояния и, опционально, ownProps
})

const mapDispatchToProps = {
  // ... обычно это объект, полный Создателей Действий
}

// `connect` возвращает функцию, которая принимает компонент для обёртки:
const connectToStore = connect(mapStateToProps, mapDispatchToProps)
// Эта функция принимает наш компонент и возвращает подключенный к Redux хранилищу(store) компонент-обёртку:
const ConnectedComponent = connectToStore(Component)

// Обычно мы делаем и то, и другое за один шаг, например:
connect(mapStateToProps, mapDispatchToProps)(Component)
```

<!-- Let’s work on `<AddTodo />` first. It needs to trigger changes to the `store` to add new todos. Therefore, it needs to be able to `dispatch` actions 
to the store. Here’s how we do it. -->
Давайте сперва поработаем над компонентом `<AddTodo />`. Ему будет необходимо вызывать изменения в хранилище `store` для создания новых задач. Следовательно, он должен уметь отправлять `dispatch` действия в хранилище(store).

Наш Cоздатель Действия `addTodo` выглядит так:

```js
// redux/actions.js
import { ADD_TODO } from './actionTypes'

let nextTodoId = 0
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
})

// ... другие действий
```

<!-- By passing it to `connect`, our component receives it as a prop, and it will automatically dispatch the action when it’s called. -->
При передаче его в `connect`, наш компонент получит в пропсах функцию и при её вызове автоматически отправит действие в хранилище(store).

```js
// components/AddTodo.js

// ... другие import
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {
  // ... реализация компонента
}

export default connect(null, { addTodo })(AddTodo)
```

<!-- Notice now that `<AddTodo />` is wrapped with a parent component called `<Connect(AddTodo) />`. Meanwhile, `<AddTodo />` now gains one prop: the `addTodo` action. -->
Обратите внимание, что `<AddTodo />` обёрнут в родительский компонент `<Connect(AddTodo) />`. Тем временем, `<AddTodo />` теперь получит 1 пропс: функцию `addTodo` для отправки действия `ADD_TODO`.


![](https://i.imgur.com/u6aXbwl.png)

<!-- We also need to implement the `handleAddTodo` function to let it dispatch the `addTodo` action and reset the input -->
Нам также потребуется реализовать функцию `handleAddTodo`, которая вызовет действие `addTodo` и сбросит значение `input`

```jsx
// components/AddTodo.js

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {
  // ...

  handleAddTodo = () => {
    // Отправляет действие для добавления задачи
    this.props.addTodo(this.state.input)

    // Приводит в изначальное состояние
    this.setState({ input: '' })
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    )
  }
}

export default connect(null, { addTodo })(AddTodo)
```

<!-- Now our `<AddTodo />` is connected to the store. When we add a todo it would dispatch an action to change the store. We are not seeing it in the app because the other components are not connected yet. If you have the Redux DevTools Extension hooked up, you should see the action being dispatched: -->
Теперь наш `<AddTodo />` связан с хранилищем(store). При добавлении задачи компонент отправит действие для изменения хранилища(store). Пока что мы не видим этого в приложении, потому что остальные компоненты ещё не подключены. Если у вас установлено Redux DevTools Extension, вы сможете увидеть отправленное действие:


![](https://i.imgur.com/kHvkqhI.png)

<!-- You should also see that the store has changed accordingly: -->
Вы также увидите изменение хранилища(store):

![](https://i.imgur.com/yx27RVC.png)

<!-- The `<TodoList />` component is responsible for rendering the list of todos. Therefore, it needs to read data from the store. We enable it by calling `connect` with the `mapStateToProps` parameter, a function describing which part of the data we need from the store. -->
Компонент `<TodoList />` ответственен за отрисовку списка задач. Следовательно, он будет читать данные задач из хранилища. Мы реализуем это, вызывая `connect` с параметром `mapStateToProps` — функцией, описывающей часть данных, которая нам нужна из хранилища(store).


<!-- Our `<Todo />` component takes the todo item as props. We have this information from the `byIds` field of the `todos`. However, we also need the information from the `allIds` field of the store indicating which todos and in what order they should be rendered. Our `mapStateToProps` function may look like this: -->
Наш компонент `<Todo />` принимает задачу как пропс. Мы получим эту информацию из поля `byIds` объекта `todos`. Нам также нужна информация из поля `allIds`, указывающего какие задачи и в каком порядке должны быть отрисованы. Наша функция `mapStateToProps` может выглядеть так:

```js
// components/TodoList.js

// ...другие import
import { connect } from "react-redux";

const TodoList = // ... реализация UI компонента

const mapStateToProps = state => {
  const { byIds, allIds } = state.todos || {};
  const todos =
    allIds && allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
```

<!-- Luckily we have a selector that does exactly this. We may simply import the selector and use it here. -->
К счастью, для этого у нас уже есть селектор `getTodos`. Мы можем просто импортировать его и использовать здесь.


```js
// redux/selectors.js

export const getTodosState = (store) => store.todos

export const getTodoList = (store) =>
  getTodosState(store) ? getTodosState(store).allIds : []

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {}

export const getTodos = (store) =>
  getTodoList(store).map((id) => getTodoById(store, id))
```

```js
// components/TodoList.js

// ...other imports
import { connect } from "react-redux";
import { getTodos } from "../redux/selectors";

const TodoList = // ... реализация UI компонента

export default connect(state => ({ todos: getTodos(state) }))(TodoList);
```

<!-- We recommend encapsulating any complex lookups or computations of data in selector functions. In addition, you can further optimize the performance by using [Reselect](https://github.com/reduxjs/reselect) to write “memoized” selectors that can skip unnecessary work. (See [the Redux docs page on Computing Derived Data](https://redux.js.org/recipes/computing-derived-data#sharing-selectors-across-multiple-components) and the blog post [Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance](https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/) for more information on why and how to use selector functions.) -->
Мы рекомендуем инкапсулировать сложные вычисления или поиск в функции селекторы. Кроме того, вы можете дополнительно оптимизировать производительность, используя [Reselect](https://github.com/reduxjs/reselect) для написания мемоизированных(“memoized”) селекторов, которые пропустят необязательную работу. (Посмотрите [страницу документации Redux: Вычисление производных данных](https://redux.js.org/recipes/computing-derived-data#sharing-selectors-across-multiple-components) и запись из блога [Идиоматический Redux: использование Reselect селекторов для инкапсуляции и производительности](https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/) для получения информации о том, как и зачем использовать селекторы.)


<!-- Now that our `<TodoList />` is connected to the store. It should receive the list of todos, map over them, and pass each todo to the `<Todo />` component. `<Todo />` will in turn render them to the screen. Now try adding a todo. It should come up on our todo list! -->
Теперь, когда наш компонент `<TodoList />` подключен к хранилищу(store), он получит список задач и передаст каждую задачу в компонент `<Todo />`. `<Todo />` в свою очередь отобразит их на экране. Теперь попытаемся добавить задачу. Она должна появиться в нашем списке задач!

![](https://i.imgur.com/N68xvrG.png)

<!-- We will connect more components. Before we do this, let’s pause and learn a bit more about `connect` first. -->
Мы подключим больше компонентов. Перед этим, давайте остановимся и узнаем немного о `connect`.

### Распространенные способы вызова `connect`

<!-- Depending on what kind of components you are working with, there are different ways of calling `connect` , with the most common ones summarized as below: -->
В зависимости от типа компонента, с которым вы работаете, существуют различные способы вызова `connect` , наиболее распространённые из них представлены в таблице:

|                               | Не подписываются на хранилище(store)                  | Подписываются на хранилище(store)                                    |
| ----------------------------- | ---------------------------------------------- | --------------------------------------------------------- |
| Не включают Создателей Действий | `connect()(Component)`                         | `connect(mapStateToProps)(Component)`                     |
| Включают Создателей Действий        | `connect(null, mapDispatchToProps)(Component)` | `connect(mapStateToProps, mapDispatchToProps)(Component)` |

<!-- #### Do not subscribe to the store and do not inject action creators -->
#### Компонент, не подписанный на хранилище(store) и без Создателей Действий

<!-- If you call `connect` without providing any arguments, your component will: -->
Если вы вызовете `connect` без аргументов, ваш компонент:

- _не_ перерисовывается при изменении хранилища(store)
- получит `props.dispatch`, который вы можете использовать для отправки действий

```js
// ... Реализация компонента Component
export default connect()(Component) // Компонент получит `dispatch` (Прямо как наш <TodoList />!)
```

<!-- #### Subscribe to the store and do not inject action creators -->
 #### Компонент, подписанный на хранилище(store), но без Создателей Действий

<!-- If you call `connect` with only `mapStateToProps`, your component will: -->
Если вы вызываете `connect` только с `mapStateToProps`, ваш компонент:

<!-- - subscribe to the values that `mapStateToProps` extracts from the store, and re-render only when those values have changed
- receive `props.dispatch` that you may use to manually dispatch action -->
- подписывается на значения из извлечённые `mapStateToProps` из хранилища(store) и будет перерисовываться только при изменении этих значений
- получит `props.dispatch`, который вы можете использовать для отправки действий

```js
// ... Реализация компонента Component
const mapStateToProps = (state) => state.partOfState
export default connect(mapStateToProps)(Component)
```

<!-- #### Do not subscribe to the store and inject action creators -->
#### Компонент, не подписанный на хранилище(store), но включающий Создателей Действий

<!-- If you call `connect` with only `mapDispatchToProps`, your component will: -->
Если вы вызываете `connect` только с `mapDispatchToProps`, ваш компонент:

- _не_ перерисовывается при изменении хранилища(store)
- получит как пропс каждый из Создателей Действий, который вы включите в `mapDispatchToProps` и при вызове автоматически отправит действия.

```js
import { addTodo } from './actionCreators'
// ... Реализация компонента Component
export default connect(null, { addTodo })(Component)
```

#### Компонент, подписанный на хранилище(store) и включающий Создателей Действий

Если вы вызываете `connect`, передавая оба `mapStateToProps` и `mapDispatchToProps`, ваш компонент:

- подписывается на значения из извлечённые `mapStateToProps` из хранилища(store) и будет перерисовываться только когда эти значения меняются
- получит как пропс каждый из Создателей Действий, который вы включите в `mapDispatchToProps` и при вызове автоматически отправит действия.

```js
import * as actionCreators from './actionCreators'
// ... Реализация компонента Component
const mapStateToProps = (state) => state.partOfState
export default connect(mapStateToProps, actionCreators)(Component)
```

<!-- These four cases cover the most basic usages of `connect`. To read more about `connect`, continue reading our [API section](../api/connect.md) that explains it in more detail. -->
Эти 4 случая покрывают основные пути использования `connect`. Чтобы узнать больше о `connect`, прочитайте [описание API](../api/connect.md), которое объяснит это более подробно.


<!-- TODO: Put up link to the page that further explains connect -->

---

Теперь, давайте подключим остальную часть приложения `<TodoApp />`.

<!-- How should we implement the interaction of toggling todos? A keen reader might already have an answer. If you have your environment set up and have followed through up until this point, now is a good time to leave it aside and implement the feature by yourself. There would be no surprise that we connect our `<Todo />` to dispatch `toggleTodo` in a similar way: -->
Как нам следует реализовать взаимодействие с переключением статуса задач? Внимательный читатель уже может дать ответ. Если вы настроили своё окружение и дошли до этого момента, самое время оставить статью в стороне и реализовать эту функцию самостоятельно. Не будет ничего удивительного в том, как мы подключим компонент `<Todo />`, чтобы он отправлял `toggleTodo`:

```js
// components/Todo.js

// ... другие import
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = // ... реализация компонента

export default connect(
  null,
  { toggleTodo }
)(Todo);
```

<!-- Now our todo’s can be toggled complete. We’re almost there! -->
Теперь можно изменить статус задачи. Мы почти закончили!

![](https://i.imgur.com/4UBXYtj.png)

<!-- Finally, let’s implement our `VisibilityFilters` feature. -->
Наконец, давайте реализуем `VisibilityFilters`

<!-- The `<VisibilityFilters />` component needs to be able to read from the store which filter is currently active, and dispatch actions to the store. Therefore, we need to pass both a `mapStateToProps` and `mapDispatchToProps`. The `mapStateToProps` here can be a simple accessor of the `visibilityFilter` state. And the `mapDispatchToProps` will contain the `setFilter` action creator. -->
Компонент `<VisibilityFilters />` должен доставать из хранилища(store) активный фильтр и отправлять действия в хранилище(store). Следовательно, нам нужно реализовать оба `mapStateToProps` и `mapDispatchToProps`. `mapStateToProps` может просто получать состояние `visibilityFilter`. И `mapDispatchToProps` будет содержать в себе Создатель Действия `setFilter`.


```js
// components/VisibilityFilters.js

// ... другие import
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

const VisibilityFilters = // ... Реализация компонента

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
```

<!-- Meanwhile, we also need to update our `<TodoList />` component to filter todos according to the active filter. Previously the `mapStateToProps` we passed to the `<TodoList />` `connect` function call was simply the selector that selects the whole list of todos. Let’s write another selector to help filtering todos by their status. -->
Тем временем, нам необходимо обновить наш компонент `<TodoList />` для фильтрации задач в соответствии с активным фильтром. Ранее, вызов `mapStateToProps`, который мы передали в функцию `connect` для `<TodoList />`, был простым селектором, который возвращал весь список задач. Давайте напишем еще один селектор, который поможет фильтровать задачи по их статусу.

```js
// redux/selectors.js

// ... другие селекторы
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store)
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed)
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos
  }
}
```

<!-- And connecting to the store with the help of the selector: -->
И подключаем к хранилищу(store) с помощью селектора:


```js
// components/TodoList.js

// ...

const mapStateToProps = (state) => {
  const { visibilityFilter } = state
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todos }
}

export default connect(mapStateToProps)(TodoList)
```

<!-- Now we've finished a very simple example of a todo app with React Redux. All our components are connected! Isn't that nice? 🎉🎊 -->
Теперь мы закончили очень простой пример приложения списка задач с React Redux. Все наши компоненты подключены! Разве это не прекрасно? 🎉🎊


![](https://i.imgur.com/ONqer2R.png)

## Ссылки

- [Использование Redux с React](https://redux.js.org/basics/usage-with-react)
- [Использование связки React Redux](https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/react-redux.html)
- [Подробно о компонентах высшего порядка](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e)
- [Вычисление производных данных](https://redux.js.org/recipes/computing-derived-data#sharing-selectors-across-multiple-components)
- [Идиоматический Redux: Используем селекторы Reselect для инкапсуляции и производительности](https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/)

## Помощь

- [Reactiflux](https://www.reactiflux.com) Redux канал
- [StackOverflow](https://stackoverflow.com/questions/tagged/react-redux)
- [GitHub Issues](https://github.com/reduxjs/react-redux/issues/)
