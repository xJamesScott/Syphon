import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import crosstabSync from 'redux-persist-crosstab';
import cart from './cart';

let store

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  test: "yoooo!!!!"
}

const nums = (state = initialState, action) => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: initialState.count,
      }
    default:
      return state
  }
}

const reducer = combineReducers({
  nums,
  cart,
})

// const persistConfig = {
//   key: 'primary',
//   storage,
//   whitelist: [reducer]
// }

// const persistedReducer = persistReducer(persistConfig, reducer)
// crosstabSync(persistedReducer)

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    // persistedReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
    // composeWithDevTools()
    // applyMiddleware()
  )
}
// const initStore2 = (preloadedState = initialState) => {
//   return createStore(
//     reducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware())
//   )
// }

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export const wrapper = createWrapper(initializeStore)