import _request from "./request"
export const reqLogin = (user) => _request.post('/user/login', user)

export const reqAuthCode = (message) => _request.post('/message/register', message)

export const reqRegister = (register) => _request.put('/user/register', register)

export const reqUpadatePasswordAuthCode = (message) => _request.post('/message/forgetPassword', message)

export const reqUpdatePassword = (updatePasswordInfo) => _request.post('/user/updatePassword', updatePasswordInfo)

export const reqPostUpload = (formData) => _request({
    method: 'put',
    url: '/post/upload',
    data: formData,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export const reqChangeUserAvatar = (formData) => _request({
    method: 'post',
    url: '/upload/avatar',
    data: formData,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export const reqUserInfo = (userAccount) => _request.get('/user/information', { params: { userAccount: userAccount } })

export const reqUpdateUserInfo = (user) => _request.post('/user/change', user)

export const reqDeleteImage = (imageList) => _request({
    method: "DELETE",
    url: '/upload/image',
    data: imageList
})

export const reqPublishPost = (post) => _request.put('/post/publish', post)

export const reqEmotions = () => _request.get('/emotion/all')

export const reqCommentImgUrl = (formData) => _request({
    method: "PUT",
    data: formData,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
    url: '/comment/image'
})


export const reqLatestNews = () => _request.get('/news/latest')

export const reqNewsByType = (type) => _request.get('/news/type', { params: { type: type } })

export const reqNewsDetail = (newsId) => _request.get('/news/detail', { params: { newsId: newsId } })

export const reqWorldInfo = () => _request.get('/world/cities')

export const reqUploadCreationImage = (formData) => _request({
    method: 'put',
    url: '/creation/image',
    data: formData,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export const reqSaveCreation = (creation) => _request.put('/creation', creation)

export const reqGetAllCreationByType = (type) => _request.get('/creation', { params: { type: type } })


export const reqGetCreationDetailByCreationId = (creationId) => _request.get('/creation/detail', { params: { creationId: creationId } })

export const reqGetAllPost = () => _request.get('/post')

export const reqGetPostByUserAccount = (userAccount) => _request.get('/post/user', { params: { userAccount } })

export const reqPostDetailByPostId = (postId) => _request.get('post/detail', { params: { postId: postId } })

export const reqCreationCommentByCreatiionId = (creationId) => _request.get('comment/creation', { params: { creationId: creationId } })

export const reqSaveCreationComment = (creationComment) => _request.put('comment/creation', creationComment)

export const reqUserCreation = (userAccount) => _request.get('/creation/user', { params: { userAccount } })

export const reqPostCommentBypostId = (postId) => _request.get('comment/post', { params: { postId: postId } })

export const reqSavePostComment = (postComment) => _request.put('comment/post', postComment)

export const reqUserCommentList = (userAccount) => _request.get('comment/user', { params: { userAccount } })

export const reqLikedInfo = (likedInfo) => _request.get('/liked', { params: likedInfo })

export const reqLikedUpdate = (likedInfo) => _request.post('/liked', likedInfo)

export const reqCollectUpdate = (collectInfo) => _request.post('/collect', collectInfo)

export const reqGetCollectInfo = (collectInfo) => _request.get('/collect', { params: collectInfo })

export const reqCollectByUserAccount = (userAccount) => _request.get('/collect/user', { params: { userAccount } })
/**
 * 
 * 获取角色列表
 */
export const reqGetRoleList = () => _request.get('/role')
/**
 * 
 * @param {角色id} roleId 
 * @returns 角色详情
 */
export const reqRoleDetailByRoleId = (roleId) => _request.get('role/detail', { params: { roleId } })
/**
 * 
 * @returns 获取每日一图
 */
export const reqDayPhotoList = () => _request.get('/day/photo')

export const reqUploadDayPhoto = (formData) => _request({
    method: 'put',
    url: 'day/photo',
    data: formData,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export const reqAbyssRoleListByFloor = (floor) => _request.get('/abyss/role', { params: { floor } })

export const reqAbyssRoleTeamList = () => _request.get('/abyss/team')

