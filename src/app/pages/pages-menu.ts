import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home page',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Feature 1',
    icon: 'nb-home',
    link: '/pages/dashboard',
  },
  {
    title: 'Feature 2',
    icon: 'nb-home',
    link: '/pages/dashboard',
  },
  {
    title: 'Setting',
    group: true,
  },
  {
    title: 'Setting 1',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Setting a',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Setting b',
        link: '/pages/ui-features/grid',
      },
    ],
  },
];
