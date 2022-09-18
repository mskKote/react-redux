---
id: usage-with-typescript
title: Работа с TypeScript
hide_title: true
sidebar_label: Работа с TypeScript
description: 'Работа с TypeScript: корректная типизация React Redux API'
---

&nbsp;

# Работа с TypeScript

<!-- As of React-Redux v8, React-Redux is fully written in TypeScript, and the types are included in the published package. The types also export some helpers to make it easier to write typesafe interfaces between your Redux store and your React components. -->
Начиная с 8-ой версии, React-Redux полностью написан на TypeScript и типизация включена в распространяемый пакет. Вдобавок, типизация содержит в себе несколько помощников (helpers) для упрощения написания типобезопасных интерфейсов между Redux хранилищем(store) и React компонентами.

:::info Информация

<!-- The recently updated `@types/react@18` major version has changed component definitions to remove having `children` as a prop by default. This causes errors if you have multiple copies of `@types/react` in your project. To fix this, tell your package manager to resolve `@types/react` to a single version. Details: -->

В недавно обновлённой главной версии `@types/react@18` изменилось объявление компонентов: был удалён пропс по умолчанию - `children`. Это является причиной ошибок при множестве установленных версий `@types/react` в вашем проекте. Для решения воспользуйтесь вашим пакетным менеджером, чтобы привести `@types/react` к единой версии. Детали:

https://github.com/facebook/react/issues/24304#issuecomment-1094565891

:::

<!-- ## Standard Redux Toolkit Project Setup with TypeScript -->
## Стандартная настройка проекта с Redux Toolkit и TypeScript

<!-- We assume that a typical Redux project is using Redux Toolkit and React Redux together. -->
Мы предполагаем, что типичный Redux проект использует Redux Toolkit вместе с React Redux.

<!-- [Redux Toolkit](https://redux-toolkit.js.org) (RTK) is the standard approach for writing modern Redux logic. RTK is already written in TypeScript, and its API is designed to provide a good experience for TypeScript usage. -->
[Redux Toolkit](https://redux-toolkit.js.org) (RTK) - стандартный подход для написания современной Redux логики. RTK написан на TypeScript и его API разработано с целью дать хороший опыт вместе с TypeScript.

<!-- The [Redux+TS template for Create-React-App](https://github.com/reduxjs/cra-template-redux-typescript) comes with a working example of these patterns already configured. -->
[Redux+TS шаблон для Create-React-App](https://github.com/reduxjs/cra-template-redux-typescript) устанавливается с рабочим примером. -->


<!-- ### Define Root State and Dispatch Types -->
### Определение корневого состояния (Root State) и типов отправки (Dispatch Types)

<!-- Using [configureStore](https://redux-toolkit.js.org/api/configureStore) should not need any additional typings. You will, however, want to extract the `RootState` type and the `Dispatch` type so that they can be referenced as needed. Inferring these types from the store itself means that they correctly update as you add more state slices or modify middleware settings. -->
Использование [configureStore](https://redux-toolkit.js.org/api/configureStore) не нуждается в дополнительной типизации. Как бы то ни было, вам захочется извлечь типы `RootState` и `Dispatch`, чтобы ссылаться на них при необходимости. Выведение этих типов из контейнера само по себе означает их корректное обновление при добавлении ещё нескольких срезов состояния контейнера или модификации настроек middleware.

<!-- Since those are types, it's safe to export them directly from your store setup file such as `app/store.ts` and import them directly into other files. -->
В силу того, что это типы, можно не опасаться за безопасность при экспорте их из файла с настройкой контейнера `app/store.ts` и последующем импорте в другие файлы.


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
// Выведение типов `RootState` и `AppDispatch` из контейнера
export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// highlight-end
```

<!-- ### Define Typed Hooks -->
### Определяем типизированные хуки

<!-- While it's possible to import the `RootState` and `AppDispatch` types into each component, it's better to **create pre-typed versions of the `useDispatch` and `useSelector` hooks for usage in your application**. This is important for a couple reasons: -->
Пускай, возможно импортировать типы `RootState` и `AppDispatch` в каждый компонент, **лучше создать типизированные версии хуков `useDispatch` и `useSelector` для использовании в вашем приложении**. Это важно по нескольким причинам:

<!-- - For `useSelector`, it saves you the need to type `(state: RootState)` every time
- For `useDispatch`, the default `Dispatch` type does not know about thunks or other middleware. In order to correctly dispatch thunks, you need to use the specific customized `AppDispatch` type from the store that includes the thunk middleware types, and use that with `useDispatch`. Adding a pre-typed `useDispatch` hook keeps you from forgetting to import `AppDispatch` where it's needed. -->
- Для `useSelector` это избавляет от необходимости каждый раз печатать `(state: RootState)`
- Для `useDispatch`, тип значение по умолчанию `Dispatch` не знаком с thunks. С целью корректной отправки thunks, вам необходимо использовать тип `AppDispatch` из хранилища, который включает типы из thunk middleware и использует это с `useDispatch`. Добавление предварительного хука `useDispatch` помогает вам не забыть о необходимости импортировать `AppDispatch`, где это необходимо.

<!-- Since these are actual variables, not types, it's important to define them in a separate file such as `app/hooks.ts`, not the store setup file. This allows you to import them into any component file that needs to use the hooks, and avoids potential circular import dependency issues. -->
Поскольку это настоящие переменные, а не типы, важно определить их в отдельном файле, таком как `app/hooks.ts`, а не в файле настройки контейнера. Это позволит вам импортировать их в любой компонент, который должен использовать хуки, и избежать потенциальную проблему с импортом из-за циклической зависимости.

```ts title="app/hooks.ts"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// highlight-start
// Используйте во всем приложении вместо обычных `useDispatch` и `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// highlight-end
```

## Ручная типизация хуков

<!-- We recommend using the pre-typed `useAppSelector` and `useAppDispatch` hooks shown above. If you prefer not to use those, here is how to type the hooks by themselves. -->
Мы рекомендуем использовать хуки `useAppSelector` и `useAppDispatch`, показанные выше. Если вы предпочитаете их не использовать, то здесь мы покажем, как типизировать сами хуки.

### Типизация хука `useSelector`

<!-- When writing selector functions for use with `useSelector`, you should explicitly define the type of the `state` parameter. TS should be able to then infer the return type of the selector, which will be reused as the return type of the `useSelector` hook: -->
Когда вы пишете функцию селектор в `useSelector`, вам следует явно определить тип параметра `state`. Так TS сможет вывести тип возвращаемого значения функции селектора, который в свою очередь будет использован как возвращаемый тип самого хука `useSelector`:

```ts
interface RootState {
  isOn: boolean
}

// TS выводит тип: (state: RootState) => boolean
const selectIsOn = (state: RootState) => state.isOn

// TS выводит `isOn` как boolean
const isOn = useSelector(selectIsOn)
```

This can also be done inline as well:

```ts
const isOn = useSelector((state: RootState) => state.isOn)
```

### Типизация хука `useDispatch`

<!-- By default, the return value of `useDispatch` is the standard `Dispatch` type defined by the Redux core types, so no declarations are needed: -->
По умолчанию возвращаемое значение `useDispatch` - стандартный тип `Dispatch`, определённый в  основных типах Redux, следовательно типизация не потребуется:

```ts
const dispatch = useDispatch()
```

<!-- If you have a customized version of the `Dispatch` type, you may use that type explicitly: -->
Если у вас видоизменённая версия типа `Dispatch`, вы можете использовать её явно:

```ts
// store.ts
export type AppDispatch = typeof store.dispatch

// MyComponent.tsx
const dispatch: AppDispatch = useDispatch()
```

<!-- ## Typing the `connect` higher order component -->
## Типизация компонента высшего порядка `connect` 

<!-- ### Inferring The Connected Props Automatically -->
### Автовыведение типов подключенных пропсов

<!-- `connect` consists of two functions that are called sequentially. The first function accepts `mapState` and `mapDispatch` as arguments, and returns a second function. The second function accepts the component to be wrapped, and returns a new wrapper component that passes down the props from `mapState` and `mapDispatch`. Normally, both functions are called together, like `connect(mapState, mapDispatch)(MyComponent)`. -->
`connect` содержит 2 функции, которые вызываются одна за другой. Первая функция в качестве аргументов принимает `mapState` и `mapDispatch` и возвращает вторую функцию. Вторая функция принимает компонент для того, чтобы обёрнуть его, и возвращает новый компонент обёртку, который принимает пропсы из `mapState` и `mapDispatch`. Обычно обе функции вызываются вместе: `connect(mapState, mapDispatch)(MyComponent)`.


<!-- The package includes a helper type, `ConnectedProps`, that can extract the return types of `mapStateToProps` and `mapDispatchToProps` from the first function. This means that if you split the `connect` call into two steps, all of the "props from Redux" can be inferred automatically without having to write them by hand. While this approach may feel unusual if you've been using React-Redux for a while, it does simplify the type declarations considerably. -->
В пакет включен помощник для типов, `ConnectedProps`, который может извлечь типы возвращаемых значений `mapStateToProps` и `mapDispatchToProps` из первой функции. Это означает, что при разъединении вызова `connect` на 2 шага, все "пропсы из Redux" могут быть выведены автоматически, без необходимости писать их вручную. Этот подход может показаться непривычным, если вы использовали React-Redux ранее, это значительно упрощает объявления типов.

```ts
import { connect, ConnectedProps } from 'react-redux'

interface RootState {
  isOn: boolean
}

const mapState = (state: RootState) => ({
  isOn: state.isOn,
})

const mapDispatch = {
  toggleOn: () => ({ type: 'TOGGLE_IS_ON' }),
}

const connector = connect(mapState, mapDispatch)

// Выведенный тип будет выглядеть так:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>
```

<!-- The return type of `ConnectedProps` can then be used to type your props object. -->
Возвращаемый тип из `ConnectedProps` может быть использован для типизации ваших пропсов.

```tsx
interface Props extends PropsFromRedux {
  backgroundColor: string
}

const MyComponent = (props: Props) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? 'ON' : 'OFF'}
    </button>
  </div>
)

export default connector(MyComponent)
```

<!-- Because types can be defined in any order, you can still declare your component before declaring the connector if you want. -->
В силу того, что типы могут быть определены в любом порядке, при желании вы всё ещё можете объявить ваш компонент перед объявлением функции connector.


```tsx
// Альтернативно объявляем `type Props = PropsFromRedux & {backgroundColor: string}`
interface Props extends PropsFromRedux {
  backgroundColor: string;
}

const MyComponent = (props: Props) => /* также как выше */

const connector = connect(/* также как выше */)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(MyComponent)
```

<!-- ### Manually Typing `connect` -->
### Ручная типизация `connect`

Компонент высшего порядка `connect` несколько сложно типизировать, ведь у него 3 источника пропсов: `mapStateToProps`, `mapDispatchToProps` и пропсы, которые были переданы из родительского компонента. Здесь полный пример, как выглядит его типизация вручную:

```tsx
import { connect } from 'react-redux'

interface StateProps {
  isOn: boolean
}

interface DispatchProps {
  toggleOn: () => void
}

interface OwnProps {
  backgroundColor: string
}

type Props = StateProps & DispatchProps & OwnProps

const mapState = (state: RootState) => ({
  isOn: state.isOn,
})

const mapDispatch = {
  toggleOn: () => ({ type: 'TOGGLE_IS_ON' }),
}

const MyComponent = (props: Props) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? 'ON' : 'OFF'}
    </button>
  </div>
)

// Типичное использование: `connect` вызывается после определения компонента
export default connect<StateProps, DispatchProps, OwnProps>(
  mapState,
  mapDispatch
)(MyComponent)
```

<!-- It is also possible to shorten this somewhat, by inferring the types of `mapState` and `mapDispatch`: -->
Также возможно несколько сократить это, выведением типов `mapState` и `mapDispatch`:

```ts
const mapState = (state: RootState) => ({
  isOn: state.isOn,
})

const mapDispatch = {
  toggleOn: () => ({ type: 'TOGGLE_IS_ON' }),
}

type StateProps = ReturnType<typeof mapState>
type DispatchProps = typeof mapDispatch

type Props = StateProps & DispatchProps & OwnProps
```

<!-- However, inferring the type of `mapDispatch` this way will break if it is defined as an object and also refers to thunks. -->
Тем не менее, выведение типа `mapDispatch` так не будет работать, если он определен как объект, а также ссылается на thunk'и.


## Рекомендации

<!-- The hooks API is generally simpler to use with static types. **If you're looking for the easiest solution for using static types with React-Redux, use the hooks API.** -->
API хуков в целом проще использовать со статическими типами. **Если вы ищете наиболее простое решение для использования статических типов с React-Redux, посмотриет API хуков.**

<!-- If you're using `connect`, **we recommend using the `ConnectedProps<T>` approach for inferring the props from Redux**, as that requires the fewest explicit type declarations. -->
Если вы используете `connect`, **мы рекомендуем использовать `ConnectedProps<T>` подход для выведения типов пропсов из Redux**, так как это требует наименьшего количества явных объявлений типа.

## Ресурсы

<!-- For additional information, see these additional resources: -->
Для дополнительной информации посмотрите:

- [Документация Redux: Использование с Typescript](https://redux.js.org/recipes/usage-with-typescript): Примеры использования Redux Toolkit, ядра Redux и React Redux с TypeScript
- [Документация Redux Toolkit: Быстрый старт с Typescript](https://redux-toolkit.js.org/tutorials/typescript): показывает, как использовать RTK и API React-Redux хуков с TypeScript
- [React+TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet): доступный гайд для использования React с TypeScript
- [React + Redux в гайде TypeScript](https://github.com/piotrwitek/react-redux-typescript-guide): обширная информация о шаблонах использования React и Redux с TypeScript
