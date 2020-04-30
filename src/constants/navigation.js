/**
 * Object mapping of known possible inboxes for the user
 */
export const NavigationItems = [
  {
    id: 'iot-graph',
    icon: '/img/icon/things.svg',
    label: 'IoT Graph',
    to: '/iot-graph'
  }
];

export const ProfileOptions = [
  {
    label: 'Log Out',
    onClick: 'logOut',
    icon: 'lock'
  }
];