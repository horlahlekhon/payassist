import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const AccountHome = Loadable({
  loader:() => import('./views/accounts/AccountHome'),
  loading: Loading,
});
const NewAccount = Loadable({
  loader:() => import('./views/accounts/NewAccount'),
  loading: Loading,
});
const ServicesHome = Loadable({
  loader : () => import('./views/services/ServicesHome'),
  loading: Loading,
})
const NewServices = Loadable({
  loader:() => import('./views/services/NewServices'),
  loading: Loading,
})

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});
const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});





// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {path:'/dashboard/accounts', exact: true, name: 'Accounts - home', component: AccountHome},
  {path:'/dashboard/accounts/add', exact: true, name: 'Add new - home', component: NewAccount},
  {path:'/dashboard/services', exact: true, name: 'Services - home', component: ServicesHome},
  {path:'/dashboard/services/Add', exact: true, name: 'Services - Add New', component: NewServices},
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
  { path: '/users', exact: true,  name: 'Users', component: Users },
   { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
