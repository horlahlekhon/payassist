export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      },
    },
    {
      name:'Accounts',
      url :'/dashboard/account',
      icon:'icon-speedometer',
      children :[
        {
          name: 'Add Account',
          url : '/dashboard/accounts/add',
          icon : 'icon-plus'
        },
        {
          name: 'View Accounts',
          url : '/dashboard/accounts',
        }
      ]
    },
    {
      name:'Services',
      url :'/dashboard/services',
      icon:'icon-puzzle',
      children :[
        {
          name: 'Add Service',
          url : '/dashboard/services/add',
          icon : 'icon-plus'
        },
        {
          name: 'View Services',
          url : '/dashboard/services',
        }
      ]
    }

  ],
};
