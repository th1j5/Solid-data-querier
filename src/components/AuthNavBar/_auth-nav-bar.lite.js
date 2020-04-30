import React, { useState, useEffect, useCallback } from 'react';
import { NavBar, Notification } from '@components';
import { NavBarContainer } from './children';
import { ldflexHelper, errorToaster } from '@utils';
import { NavigationItems } from '@constants';

type Props = {
  webId: string
};

const AuthNavBar = React.memo((props: Props) => {
  const [inboxes, setInbox] = useState([]);
  const navigation = NavigationItems.map(item => ({ ...item, label: item.label }));
  const { webId } = props;
  /**
   * Looks for all of the inbox containers in the pod and sets inboxes state
   */
  const discoverInbox = useCallback(async () => {
    try {
      let inboxes = [];
      /**
       * Get user's global inbox path from pod.
       */
      const globalInbox = await ldflexHelper.discoverInbox(webId);

      if (globalInbox) {
        inboxes = [
          ...inboxes,
          { path: globalInbox, inboxName: 'navBar.notifications.global', shape: 'default' }
        ];
      }
      /**
       * If user doesn't has inbox in his pod will show an error and link to
       * know how fix it.
       */
      if (inboxes.length === 0)
        errorToaster('noInboxUser.message', 'Error', {
          label: 'noInboxUser.link.label',
          href: 'noInboxUser.link.href'
        });
      setInbox(inboxes);
    } catch (error) {
      /**
       * Show general errors
       */
      errorToaster(error.message, 'navBar.notifications.fetchingError');
    }
  }, [webId, inboxes]);

  useEffect(() => {
    if (webId) {
      discoverInbox();
    }
  }, [webId]);
  const { history } = props;

  return (
    <NavBar
      navigation={navigation}
      sticky
      toolbar={[
        {
          component: () => <Notification {...{ webId, inbox: inboxes }} />,
          id: 'notifications'
        },
        {
          component: props => <NavBarContainer {...{webId, history, ...props }} />,
          id: 'profile'
        }
      ]}
    />
  );
});

export default AuthNavBar;
