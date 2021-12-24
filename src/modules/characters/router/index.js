export default{
    name:'characters',
    component: () => import(/* webpackChunkName: "layout" */ '@/modules/characters/layouts/CharactersLayout.vue'),
    children:[
        {
            path:':id',
            name:'character-option',
            component: ()=>import('../views/Characters.vue')
        },
        {
            path:'',
            name:'character-group',
            component: ()=>import('../views/CharactersGroup.vue')
        }
    ]
}