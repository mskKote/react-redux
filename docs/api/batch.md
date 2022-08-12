---
id: batch
title: batch
sidebar_label: batch()
hide_title: true
description: 'API > batch: batching React rendering updates'
---

&nbsp;

# `batch()`

```js
batch((fn: () => void))
```

<!-- _added in v7.0.0_ -->
_добавлено в v7.0.0_

:::info

<!-- **If you're using React 18, you do not need to use the `batch` API**. React 18 automatically batches _all_ state updates, no matter where they're queued. -->
**Если вы используете React 18, вам не нужно использовать `batch` API**. React 18 автоматически группирует _все_ обновления состояния, независимо от того, где они находятся в очереди.

:::

<!-- React's `unstable_batchedUpdates()` API allows any React updates in an event loop tick to be batched together into a single render pass. React already uses this internally for its own event handler callbacks. This API is actually part of the renderer packages like ReactDOM and React Native, not the React core itself. -->
API `unstable_batchedUpdates()` React позволяет объединять любые обновления React в цикле событий в один проход рендеринга. React уже использует это внутри для собственных обратных вызовов обработчиков событий. Этот API на самом деле является частью пакетов рендеринга, таких как ReactDOM и React Native, а не самого ядра React.

<!-- Since React-Redux needs to work in both ReactDOM and React Native environments, we've taken care of importing this API from the correct renderer at build time for our own use. We also now re-export this function publicly ourselves, renamed to `batch()`. You can use it to ensure that multiple actions dispatched outside of React only result in a single render update, like this: -->
Поскольку React-Redux должен работать как в среде ReactDOM, так и в среде React Native, мы позаботились об импорте этого API из правильного средства визуализации во время сборки для нашего собственного использования. Теперь мы также сами реэкспортируем эту функцию публично, переименовав ее в `batch()`. Вы можете использовать ее, чтобы гарантировать, что несколько действий, отправленных вне React, приведут только к одному обновлению рендеринга, например:

```ts
import { batch } from 'react-redux'

function myThunk() {
  return (dispatch, getState) => {
    // Должно привести только к одному комбинированному рендерингу, а не к двум
    batch(() => {
      dispatch(increment())
      dispatch(increment())
    })
  }
}
```

<!-- ## References -->
## Ссылки

<!-- - [`unstable_batchedUpdates()` API from React](https://github.com/facebook/react/commit/b41883fc708cd24d77dcaa767cde814b50b457fe) -->
- [API `unstable_batchedUpdates()` из React](https://github.com/facebook/react/commit/b41883fc708cd24d77dcaa767cde814b50b457fe)
<!-- - [React 18 Working Group: Automatic Batching for Fewer Renders in React 18](https://github.com/reactwg/react-18/discussions/21) -->
- [Рабочая группа React 18: Автоматическое пакетирование для меньшего количества рендеров в React 18](https://github.com/reactwg/react-18/discussions/21)
