import React from 'react';

type TMainProps = {children: React.ReactNode};
export const Main: React.FC<TMainProps> = ({children}): JSX.Element => <main id="main">{children}</main>;

export default Main;
