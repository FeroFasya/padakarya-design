import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { projects } from '../data/projects'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Padakarya Design | Integrated Design & Build Partner Bali',
      description: 'Architectural design and turnkey construction for tropical villas and residences in Bali. Handled by experienced professionals since 2013 (CV Pada Karya).'
    }
  },
  {
    path: '/projects/:slug',
    name: 'ProjectDetail',
    component: ProjectDetailView,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: '404 - Halaman Tidak Ditemukan | Padakarya Design'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  if (to.name === 'ProjectDetail') {
    const slug = to.params.slug
    const proj = projects.find(p => p.slug === slug)
    if (proj) {
      document.title = `${proj.title} | Padakarya Design Portfolio`
    } else {
      document.title = 'Project Detail | Padakarya Design'
    }
  } else if (to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
