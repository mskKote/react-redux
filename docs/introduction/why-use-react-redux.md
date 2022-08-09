---
id: why-use-react-redux
title: С какой целью использовать React Redux?
hide_title: true
sidebar_label: С какой целью использовать React Redux?
description: 'Основы > С какой целью использовать React Redux: привелегии использования React Redux в React приложении'
---

&nbsp;

# С какой целью использовать React&nbsp;Redux?

<!-- Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other. -->
Redux является независимой библиотекой, которая может использоваться с любой UI логикой или любым фреймворком, включая React, Angular, Vue, Ember, и vanilla JS. Несмотря на то, что Redux и React часто используются вместе, они независимы.

<!-- If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code. -->
Использование Redux с любым UI фреймворком обычно включает библиотеку "UI привязки" для связи между Redux и этим фреймворком, нежели прямое взаимодействие с Redux контейнером из UI кода.

<!-- **React Redux is the official Redux UI binding library for React**. If you are using Redux and React together, you should also use React Redux to bind these two libraries. -->
**React Redux - это официальная библиотека привязки Redux к React**. Если вы используете Redux и React вместе, вам следует также рассмотреть React Redux для их связи.

<!-- To understand why you should use React Redux, it may help to understand what a "UI binding library" does. -->
Чтобы понять, почему вам следует использовать React Redux, стоит понять, что делает "библиотека привязки UI".

:::info

<!-- If you have questions about whether you should use Redux in general, please see these articles for discussion of when and why you might want to use Redux, and how it's intended to be used: -->
Если вы задаётесь вопросом касательно использования Redux в общем, пожалуйста, прочитайте следующие статьи. Их понимание необходимо для дискуссии о том, когда и почему вы можете захотеть использовать Redux и как конкретно его использовать:

- [Документация Redux: мотивация](https://redux.js.org/introduction/motivation)
- [Документация Redux: FAQ - Когда стоит использовать Redux?](https://redux.js.org/faq/general#when-should-i-use-redux)
- [Возможно, вам не нужен Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
- [Идиоматичный Redux: Дао Redux'а, Часть 1 - Реализация и Замысел](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)

:::

## Интегрируем Redux в UI

<!-- Using Redux with _any_ UI layer requires [the same consistent set of steps](https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/ui-layer.html#/4): -->
Используя Redux с _любым_ UI слоем логики требует [одной и той же последовательности шагов](https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/ui-layer.html#/4):


<!-- 1. Create a Redux store
2. Subscribe to updates
3. Inside the subscription callback:
   1. Get the current store state
   2. Extract the data needed by this piece of UI
   3. Update the UI with the data
4. If necessary, render the UI with initial state
5. Respond to UI inputs by dispatching Redux actions -->
1. Создать Redux контейнер
2. Подписаться на обновления
3. Внутри обратного вызова подписки: (Inside the subscription callback):
   1. Получить текущее состояние контейнера
   2. Извлечь используемые в этой части UI данные
   3. Обновить UI с извлечёнными данными
4. Если необходимо, отрисовать UI с изначально задаваемым значением
5. Отвечать на ввод данные с UI путём отправки действий в Redux контейнер

<!-- While it is possible to write this logic by hand, doing so would become very repetitive. In addition, optimizing UI performance would require complicated logic. -->
Эту логику можно написать вручную, однако она будет повторяться. Вдобавок, оптимизация производительности потребует сложной логики.

<!-- The process of subscribing to the store, checking for updated data, and triggering a re-render can be made more generic and reusable. **A UI binding library like React Redux handles the store interaction logic, so you don't have to write that code yourself.** -->
Процесс подписки на контейнер, проверки на наличие обновленых данных и запуска перерисовки UI может быть более шаблонным и переиспользуемым. **Библиотека привязки UI как React Redux обрабатывает логику взаимодействия с Redux контейнером, поэтому при её использовании вам не придётся писать этот код самостоятельно.**


:::info Информация

<!-- For a deeper look at how React Redux works internally and how it handles the store interaction for you, see **[Idiomatic Redux: The History and Implementation of React Redux](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/)**. -->
Для глубокого погружения во внутреннюю работу библиотеки React Redux и как она обрабатывает взаимодействия с контейнером, прочитайте **["Идиоматика Redux: История и Имплементация React Redux"](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/)**.
:::

## Причины использовать React Redux

### Это официальная библиотека привязки Redux к React

<!-- While Redux can be used with any UI layer, it was originally designed and intended for use with React. There are [UI binding layers for many other frameworks](https://redux.js.org/introduction/ecosystem#library-integration-and-bindings), but React Redux is maintained directly by the Redux team. -->
Несмотря на то, что Redux может быть использован с любой UI логикой, он был изначально спроектирован для использования с React. У нас есть [библиотеки привязки UI для многих других фреймворков](https://redux.js.org/introduction/ecosystem#library-integration-and-bindings), но React Redux поддерживается напрямую командой Redux.

<!-- As the official Redux binding for React, React Redux is kept up-to-date with any API changes from either library, to ensure that your React components behave as expected. Its intended usage adopts the design principles of React - writing declarative components. -->
Будучи официальной библиотекой привязки Redux к React, React Redux следит за всеми изменениями API обоих библиотек, чтобы гарантировать, что ваши React компоненты будут вести себя так, как ожидалось. Использование React Redux будет соответствует принципу дизайна React - написание декларативных компонентов.

### Она оптимизирует производительность для вас

<!-- React is generally fast, but by default any updates to a component will cause React to re-render all of the components inside that part of the component tree. This does require work, and if the data for a given component hasn't changed, then re-rendering is likely some wasted effort because the requested UI output would be the same. -->
React в целом быстрый, но по умолчанию любые изменения в компонентах будут вызывать перерисовки всех компонентов внутри этой части дерева компонентов. Это требует работы и, если данные используемые компонентом не изменились, эта работа будет выполнена впустую, поскольку UI на выходе будет одним одинаковым.

<!-- If performance is a concern, the best way to improve performance is to skip unnecessary re-renders, so that components only re-render when their data has actually changed. **React Redux implements many performance optimizations internally, so that your own component only re-renders when it actually needs to.** -->
Если вас волнует быстродействие, то лучший путь для улучшения производительности - это пропустить ненужные перерисовки, чтобы компоненты перерисовывались исключительно при изменении данных, которые они используют. **React Redux реализует множество оптимизаций производительности, таким образом ваши компоненты будут перезагружаться только при необходимости.**


<!-- In addition, by connecting multiple components in your React component tree, you can ensure that each connected component only extracts the specific pieces of data from the store state that are needed by that component. This means that your own component will need to re-render less often, because most of the time those specific pieces of data haven't changed. -->
Кроме того, путем соединения нескольких компонентов в вашем дереве компонентов React, вы можете убедиться, что каждый соединённый компонент извлекает конкретные фрагменты данных из состояния Redux контейнера. Это значит, что вашим компонентам будет необходимо перерисовываться реже, потому что большую часть времени конкретные фрагменты не будут меняться.

### Поддержка сообщества

Будучи официальной библиотекой связки Redux к React, React Redux имеет большое сообщество пользователей. Это упрощает поиск помощи, изучение лучших практик, использование библиотек, сделанных поверх React Redux и переиспользовать знания в различных приложениях.

## Ссылки и рекомендации

### Понимание React Redux

- [Идиоматика Redux: История и Имплементация React Redux](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/)
- [Объяснение `connect.js`](https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e)
- [Слайды семинара "Redux Fundamentals"](https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/)
  - [UI слой интеграции](https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/ui-layer.html)
  - [Использование React Redux](https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/react-redux.html)

### Ссылки на сообщества

- Канал в Discord: [#redux на Reactiflux](https://discord.gg/0ZcbPKXt5bZ6au5t) ([Reactiflux](https://reactiflux.com))
- Stack Overflow обсуждения: [Redux](https://stackoverflow.com/questions/tagged/redux), [React Redux](https://stackoverflow.com/questions/tagged/redux)
- Reddit: [/r/reactjs](https://www.reddit.com/r/reactjs/), [/r/reduxjs](https://www.reddit.com/r/reduxjs/)
- GitHub issues (отчёты об ошибках и просьбы добавить функции): https://github.com/reduxjs/react-redux/issues
- Руководства, статьи и дальнейшие ресурсы: [React/Redux Links](https://github.com/markerikson/react-redux-links)
