import React from 'react';
import { NavBar } from '@components';
import { NavBarContainer } from './children';
import { NavigationItems } from '@constants';

const AuthNavBar = (props) => {
  const navigation = NavigationItems.map(item => ({ ...item, label: item.label }));
  const { webId, history } = props;

  return (
    <NavBar
      navigation={navigation}
      sticky
      toolbar={[
        {
          component: props => <NavBarContainer {...{ webId, history, ...props }} />,
          id: 'profile'
        }
      ]}
    />
  );
};

export default AuthNavBar;
