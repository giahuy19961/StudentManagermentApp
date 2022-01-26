import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import { SidebarData } from '../../models';
import { Dashboard } from '@material-ui/icons';

export const ListSidebarData: SidebarData[] = [
  { title: 'Dashboard', icon: Dashboard, path: '/admin/dashboard' },
  { title: 'Student', icon: GroupIcon, path: '/admin/student' },
  { title: 'Home', icon: HomeIcon, path: '/admin' },
];
