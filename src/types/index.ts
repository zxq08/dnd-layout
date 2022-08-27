import { Dispatch } from 'react'

export enum ActionType {
  'increment',
  'decrement',
  'update',
  'toggle',
}
  
export type CounterState = { counter: any };

export interface attribute {
  id: Number | String,
  width: Number | String,
  height: Number | String,
}

export type CounterAction = { 
  type: ActionType; 
  payload?: any;
  id?: Number | String;
  attribute?: attribute
};
  
export type Context = {
  store: CounterState;
  dispatch: Dispatch<CounterAction>
}

export interface LayoutProps {
  children: React.ReactNode
}