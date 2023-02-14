import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/incoming-reports',
    title: 'Raportet',
    icon: 'bi bi-eye-slash-fill',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/reviewed-reports',
    title: 'Raportet e shikuara',
    icon: 'bi bi-eye-fill',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/users',
    title: 'Perdoruesit',
    icon: 'bi bi-people-fill',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/profile',
    title: 'Profili',
    icon: 'bi bi-person-fill',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/administrators',
    title: 'Administratoret',
    icon: 'bi bi-microsoft-teams',
    class: '',
    extralink: false,
    submenu: []
  },
];
