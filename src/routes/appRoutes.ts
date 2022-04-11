import IRoute from '../types/routes.types'
import ListPage from '../pages/ListPage'

const adminRoutes: IRoute[] = [
  {
    path: '/ranking/mpix',
    name: 'List',
    component: ListPage,
    exact: true
  }
]

export default adminRoutes
