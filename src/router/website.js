export default[
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: '/home',
        name: 'home',
        component: ()=> import ( '../views/website/pages/Home'),
        meta:{
        title:'home'
        }
    },
    {
        path: '/about',
        name: 'website',
        component: ()=> import ( '../views/website/pages/About'),
        meta:{
            title:'about'
            }
    },
    {
        path: '/panda',
        name: 'website',
        component: ()=> import ( '../views/website/pages/products/components/Panda.vue'),
        meta:{
            title:'panda'
            }
    },
    // {
    //     path: '/contact',
    //     name: 'website',
    //     component: ()=> import ( '../views/website/pages/Contact')
    // },

]