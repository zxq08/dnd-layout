export enum ActionType {
    'increment',
    'decrement',
    'toggle',
  }
  
export type CounterState = { counter: any };

export type CounterAction = { type: ActionType; payload?: any };
  