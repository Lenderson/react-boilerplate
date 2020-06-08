import { lazy } from 'react'

export default [
  {
    path: '/',
    component: lazy(() => import('./views/Home')),
    name: 'home',
    exact: true
  }
]
