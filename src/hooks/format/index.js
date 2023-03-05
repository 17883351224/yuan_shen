export const dateformate = (ds) => {
    const date = new Date(ds)
    const y = date.getFullYear()
    const m = date.getMonth() + 1
    const d = date.getDay()
    return `${y}-${m}-${d}`
}

export const numberFormat = (num) => {
    if (num < 1000) {
        return num
    }
    if (num < 100000) {
        return (num / 1000).toFixed(1) + 'k'
    }
    return (num / 10000).toFixed(1) + 'w'
}

export const numberFormat0 = (num) => {
    if (num < 10) {
        return '0' + num
    }
    return num
}
/**
 * 
 * @param {毫秒数} mm 
 * 格式化 eg: 03:55
 */
export const timeFormate = (mm) => {
    mm = mm / 1000
    const m = Math.floor(mm / 60)
    const s = Math.ceil(mm % 60)
    return numberFormat0(m) + ":" + numberFormat0(s)
}

/**
 * 
 * @param {*} time eg:'2022-10-20'
 * @returns 10月20日
 */
export const birthdayFormat = (time) => {
    const mouth = parseInt(time.slice(5, 7))
    const day = parseInt(time.slice(-2))

    return `${mouth}月${day}日`
}
