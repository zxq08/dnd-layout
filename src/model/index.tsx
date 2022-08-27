import * as React from 'react'
import { createContext, FC, useReducer } from 'react'
import { List } from 'immutable'
import { CounterState, CounterAction, ActionType, attribute,Context ,LayoutProps } from '../types'

export const CounterContext = createContext<Context>({} as Context)

const counterReducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case ActionType.increment: 
            state.counter = state.counter.push({
                id: state.counter.size, 
                attribute: {
                    width: 50,
                    height: 50
                }
            })
            return state
        
        case ActionType.decrement:
            state.counter = state.counter.pop()
            return state
        
        case ActionType.update:
            if (action.id || action.id === 0) {
                const index = state.counter.findIndex((value: attribute) => value.id === action.id)
                state.counter = state.counter.set(index, {
                    id: action.id,
                    attribute: action.attribute
                })
            }
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