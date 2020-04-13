/**
 * Object mapping of known possible inboxes for the user
 */
export const NavigationItems = [
  {
    id: 'iot-graph',
    icon: '/img/icon/things.svg',
    label: 'navBar.iot-graph',
    to: '/iot-graph'
  }
];

export const ProfileOptions = [
  {
    label: 'navBar.logOut',
    onClick: 'logOut',
    icon: 'lock'
  }
];