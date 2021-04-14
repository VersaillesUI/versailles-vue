import VueRouter from 'vue-router'
import App from './App'
import Components from './Components'
import Palettle from './Palettle'
import FlexBoxDoc from './components/FlexBoxDoc'
import ScrollPanelDoc from './components/ScrollPanelDoc'
import ButtonDoc from './components/ButtonDoc'
import AppBarDoc from './components/AppBarDoc'
import InputDoc from './components/InputDoc'
import PaperDoc from './components/PaperDoc'
import TypopraphyDoc from './components/TypopraphyDoc'
import Thunisoft from './Thunisoft/index'

const router = new VueRouter({
  routes: [
    {
      path: '/thunisoft',
      component: Thunisoft
    },
    { 
      path: '/', 
      component: App,
      children: [
        { 
          path: '/palettle', 
          component: Palettle
        },
        {
          path: '/thunisoft',
          component: Thunisoft
        },
        { 
          path: '/components', 
          component: Components,
          children: [
            {
              path: '/components/flex_box',
              component: FlexBoxDoc
            },
            {
              path: '/components/grid',
              component: FlexBoxDoc
            },
            {
              path: '/components/scroll_panel',
              component: ScrollPanelDoc
            },
            {
              path: '/components/button',
              component: ButtonDoc
            },
            {
              path: '/components/app_bar',
              component: AppBarDoc
            },
            {
              path: '/components/input',
              component: InputDoc
            },
            {
              path: '/components/paper',
              component: PaperDoc
            },
            {
              path: '/components/typography',
              component: TypopraphyDoc
            }
          ]
        }
      ]
    }
  ]
})

export default router