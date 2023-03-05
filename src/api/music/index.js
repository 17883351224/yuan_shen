import _http from "./music"

export const reqBanner = (type) => _http.get("/banner", { params: { type } })

export const reqRecommendPlayList = (limt) => _http.get("/personalized", { params: { limt } })

export const reqRecommendMV = () => _http.get("/personalized/mv")

export const reqRecommendLatestMusic = (limit) => _http.get("personalized/newsong", { params: { limit } })

export const reqSongListInfo = (id) => _http.get('playlist/detail', { params: { id } })

export const reqSongList = (id) => _http.get('/playlist/track/all', { params: { id } })

export const reqHotSearchList = () => _http.get('/search/hot/detail')

export const reqMusicLyric = (id) => _http.get('/lyric', { params: { id } })

export const reqRecommendSearchKeyworlds = (keywords) => _http.get('/search/suggest', { params: { keywords } })

/**
 * 
 * @param {关键字} keywords 
 * @returns 放回搜索页面头部信息
 */
export const reqSearchMultiMatch = (keywords) => _http.get('/search/multimatch', { params: { keywords } })

export const reqSearchSingleListInfo = (keywords, limit) => _http.get('/cloudsearch', { params: { keywords, limit } })