import { createStore } from 'vuex'
import user from '@/store/stores/user'
import forum from '@/store/stores/forum'
import news from '@/store/stores/news'
import world from '@/store/stores/world'
import creation from '@/store/stores/creation'
import post from '@/store/stores/post'
import comment from '@/store/stores/comment'
import music from '@/store/stores/music/music'
import find_music from '@/store/stores/music/find_music'
import music_list from './stores/music/music_list'
import search_music from './stores/music/search_music'
import role from '@/store/stores/role'
import collect from '@/store/stores/collect'
import dayphoto from '@/store/stores/dayphoto'
import abyss from '@/store/stores/abyss'

export default createStore({

  modules: {
    user,
    forum,
    news,
    world,
    creation,
    post,
    comment,
    music,
    find_music,
    music_list,
    search_music,
    role,
    collect,
    dayphoto,
    abyss

  }
})
