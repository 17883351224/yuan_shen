import { computed } from "vue";
import { useStore } from "vuex";



export function useUserInformation() {
    const _store = useStore()
    const userInformations = computed(() => _store.state.user.userInformations)

    if (userInformations.value.userAccount && userInformations.value.userName && userInformations.value.userLevel && userInformations.value.userAvatar) {
        return
    }
    if (localStorage.getItem("token") && JSON.parse(localStorage.getItem("token")).userAccount) {
        _store.dispatch("user/getUserInformations", JSON.parse(localStorage.getItem("token")).userAccount);
    }

}



export function useIsLogin() {
    const _store = useStore()
    const userInformations = computed(() => _store.state.user.userInformations)
    return computed(() => {
        if ((userInformations.value.userAccount)) {
            return true
        }
        return false;
    })

}

export function useUserAccount() {
    return computed(() => {
        if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')).userAccount)
            return JSON.parse(localStorage.getItem('token')).userAccount
        return ''
    })
}

export function useUserLevelColor(level) {
    if (level <= 4) return '#57D9AD'
    if (level <= 12) return '#4CC3FF'
    if (level <= 16) return '#FFBF00'
    return 'gold'

}



