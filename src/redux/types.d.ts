declare module 'MyTypes' {
  import {StateType} from 'typesafe-actions';
  export type RootState = StateType<typeof import('./root.reducer').default>;
}
