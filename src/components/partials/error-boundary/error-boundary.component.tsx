import React from 'react';
import {Fallback} from '../../pages/fallback/fallback.component';

interface IState {
  error: React.ReactNode;
}

interface IProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  state: IState = {
    error: null,
  };

  static getDerivedStateFromError(error: any) {
    return {error: error};
  }

  render(): JSX.Element {
    return <>{!this.state.error ? this.props.children : <Fallback message="Sorry page is currently unavailable." />}</>;
  }
}

export default ErrorBoundary;
