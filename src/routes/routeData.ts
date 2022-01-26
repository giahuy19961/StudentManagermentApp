import { IRouteData } from '../models';
import { Student } from '../features/dashboard copy/pages/Student';
import { Dashboard } from '../features/dashboard/pages/Dashboard';

export const routeAdmin: IRouteData[] = [
  {
    routeName: 'dashboard',
    path: '/admin/dashboard',
    Component: Dashboard,
  },
  {
    routeName: 'student',
    path: '/admin/student',
    Component: Student,
  },
];
