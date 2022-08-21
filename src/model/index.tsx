import * as React from 'react'
import { createContext, Dispatch, FC, useReducer } from 'react'
import { setIn, List } from 'immutable'
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
        console.log('counter', state)
            state.counter = state.counter.push({id: state.counter.size})
            return state
        
        case ActionType.decrement:
            state.counter = state.counter.pop()
            return state

        default:
            return state
    }
}

const initialState: CounterState = { counter: List() }

const Provider = (props: LayoutProps) => {
    const [store, dispatch] = useReducer(counterReducer, initialState)
    return <CounterContext.Provider value={{ store, dispatch }}>{ props?.children }</CounterContext.Provider>
}

export default Provider