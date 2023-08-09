import { Filter } from '../interfaces/filter';

export const FILTERS: Filter[] = [
  {
    name: 'All',
    path: ''
  },
  {
    name: 'Pending',
    path: '/pending'
  },
  {
    name: 'Completed',
    path: '/completed'
  },
  {
    name: 'Deleted',
    path: '/deleted'
  }
];
