import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import Login from '../pages/login.vue'
import Home from '../pages/home.vue'
import Project from '../pages/project.vue'
import ProjectDesc from '../pages/projectDesc.vue'
import Workorder from '../pages/workOrder.vue'
import Allorder from '../components/workorder/allorder.vue'
import Myorder from '../components/workorder/myorder.vue'
import AlarmCenter from '../pages/alarmCenter.vue'
import PendingOrder from '../components/workorder/approvalPendingOrder.vue'
import AdmissibleOrder from '../components/workorder/admissibleorder.vue'
import CanceledOrder from '../components/workorder/canceledOrder.vue'
import ClosedOrder from '../components/workorder/closedOrder.vue'
import ReturnToVisitOrder from '../components/workorder/returnToVisitOrder.vue'
import ToBeAssistedOrder from '../components/workorder/toBeAssistedOrder.vue'
import ToBeTreatedOrder from '../components/workorder/toBeTreatedOrder.vue'
import OrderDesc from '../pages/orderDesc.vue'
import PlatformSettings from '../pages/platformSettings'
import Organizers from '../pages/platformSettings/organizers'
import serviceOutlets from '../components/platformSettings/organizers/serviceOutlets'
import customRoleFields from '../components/platformSettings/organizers/customRoleFields'
import roleManagement from '../components/platformSettings/organizers/roleManagement'
import personnelManagement from '../components/platformSettings/organizers/personnelManagement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login',
      component: Index,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/project',
          component: Project
		},
		{
			path: 'alarmCenter',
			component: AlarmCenter
		},
		{
			path: '/project/desc/:id',
			component: ProjectDesc
    	},
		{
			path: '/workorder',
			redirect: '/workorder/allorder',
			component: Workorder,
			children: [
				{
					path: '/workorder/allorder',
					component: Allorder
				},
				{
					path: '/workorder/myorder',
					component: Myorder
				},
				{
					path: '/workorder/pendingOrder',
					component: PendingOrder
				},
				{
					path: '/workorder/admissOrder',
					component: AdmissibleOrder
				},
				{
					path: '/workorder/treatedOrder',
					component: ToBeTreatedOrder
				},
				{
					path: '/workorder/assistedOrder',
					component: ToBeAssistedOrder
				},
				{
					path: '/workorder/returnOrder',
					component: ReturnToVisitOrder
				},
				{
					path: '/workorder/closedOrder',
					component: ClosedOrder
				},
				{
					path: '/workorder/canceledOrder',
					component: CanceledOrder
				}
			]
		},
		{
			path:'/workorder/desc/:id',
			component: OrderDesc
		},
        {
          path:'/platformSettings',
          component:PlatformSettings
        },
        {
          path: '/organizers',
          redirect: '/organizers/serviceOutlets',
          component: Organizers,
          children: [
            {
              path:'/organizers/serviceOutlets',
              component:serviceOutlets
            },
            {
              path:'/organizers/customRoleFields',
              component:customRoleFields
            },
            {
              path:'/organizers/roleManagement',
              component:roleManagement
            },
            {
              path:'/organizers/personnelManagement',
              component:personnelManagement
            },
          ]
        }
      ]
    }
  ]
})
