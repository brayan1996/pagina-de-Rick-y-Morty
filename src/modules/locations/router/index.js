export default{
    name: 'locations',
    component: () => import(/* webpackChunkName: "layout-location" */ '../layouts/LocationsLayout.vue'),
    children:[
        {
            path:':id',
            name:'location-option',
            component: () => import('../views/Location.vue')
        },
        {
            path:'',
            name:'location-group',
            component:() => import('../views/LocationGroup.vue')
        }
    ]
}