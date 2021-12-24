
export default{
    name: 'episodes',
    component: () => import(/* webpackChunkName: "layout-episodes" */ '../layouts/EpisodesLayout.vue'),
    children:[
        {
            path:':id',
            name:'episodes-option',
            component: () => import('../views/Episodes.vue')
        },
        {
            path:'',
            name:'episodes-group',
            component:() => import('../views/EpisodesGroup.vue')
        }
        // {
        //     path:'',
        //     redirect:{ name:'episodes-group' }
        // }
    ]
}