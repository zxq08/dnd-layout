import * as React from 'react'
import { createContext, Dispatch, FC, useReducer } from 'react'
import { setIn } from 'immutable'
import { CounterState, CounterAction, ActionType } from '../types'

type Context = {
    store: CounterState;
    dispatch: Dispatch<CounterAction>
}

interface LayoutProps {
    children: React.ReactNode
}

export const CounterContext = createContext<Context>({} as Context)

const counterReducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case ActionType.increment:
            return setIn(state, ['counter'], state.counter + 1)
        
        case ActionType.decrement:
            return setIn(state, ['counter'], state.counter - 1)

        case ActionType.toggle:
            return setIn(state, ['showCounter'], !state.showCounter)

        default:
            return state

    }
}

const initialState: CounterState = { counter: 0, showCounter: true}

const Provider = (props: LayoutProps) => {
    const [store, dispatch] = useReducer(counterReducer, initialState)
    return <CounterContext.Provider value={{ store, dispatch }}>{ props?.children }</CounterContext.Provider>
}

export default Provider