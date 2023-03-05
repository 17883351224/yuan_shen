// mySwiper(swiperList, btottons, indicatorList, [0, 200, 400], 1.3, 4000, ["white", "blue"], 0.7)
import throttle from "lodash/throttle";
export function useSwiper(swiperList, btottons, indicatorList, leftList, scaleNumber, intervalTime, colorList, opacity, brightness) {
    // 初始化
    let timer;
    let len = swiperList.length - 1;
    swiperList = Array.from(swiperList)
    for (let i = 0; i < swiperList.length; i++) {
        swiperList[i].style.opacity = opacity;
        swiperList[i].style.filter = `brightness(${brightness})`;
        if (i != len) {
            swiperList[i].setAttribute("data-id", len - i - 1)
        } else {
            swiperList[i].setAttribute("data-id", len)
        }
    }
    swiperList[len - 2].style.left = `${leftList[0]}px`;
    swiperList[len - 1].style.zIndex = 100;
    swiperList[len - 1].style.left = `${leftList[1]}px`;
    swiperList[len - 1].style.opacity = 1;
    swiperList[len - 1].style.filter = "brightness(100%)";
    swiperList[len - 1].style.transform = `scale(${scaleNumber})`;
    swiperList[len].style.left = `${leftList[2]}px`;
    indicatorList[0].style.backgroundColor = `${colorList[1]}`;
    function get_next() {
        let give_up = swiperList[len];
        swiperList.pop();
        swiperList.unshift(give_up);
        for (let i = 0; i < swiperList.length; i++) {
            swiperList[i].style.zIndex = i;
            swiperList[i].style.opacity = opacity;
            swiperList[i].style.transform = 'scale(1)';
            swiperList[i].style.filter = `brightness(${brightness})`;
        }
        swiperList[len - 2].style.left = `${leftList[0]}px`;
        swiperList[len - 1].style.zIndex = 100;
        swiperList[len - 1].style.left = `${leftList[1]}px`;
        swiperList[len - 1].style.transform = `scale(${scaleNumber})`;
        swiperList[len - 1].style.opacity = 1;
        swiperList[len - 1].style.filter = `brightness(100%)`;
        swiperList[len].style.left = `${leftList[2]}px`;
        active();
    }
    function get_pre() {
        let give_up = swiperList[0];
        swiperList.shift();
        swiperList.push(give_up);
        for (let i = 0; i < swiperList.length; i++) {
            swiperList[i].style.zIndex = i;
            swiperList[i].style.opacity = opacity;
            swiperList[i].style.transform = 'scale(1)';
            swiperList[i].style.filter = `brightness(${brightness})`;
        }
        swiperList[len - 2].style.left = `${leftList[0]}px`;
        swiperList[len - 1].style.zIndex = 100;
        swiperList[len - 1].style.left = `${leftList[1]}px`;
        swiperList[len - 1].style.transform = `scale(${scaleNumber})`;
        swiperList[len - 1].style.opacity = 1;
        swiperList[len - 1].style.filter = `brightness(100%)`;
        swiperList[len].style.left = `${leftList[2]}px`;
        active();
    }

    function autoPlay() {
        timer = setInterval(get_next, intervalTime);
    }
    function active() {
        for (let i = 0; i <= len; i++) {
            if (swiperList[len - 1].dataset.id == indicatorList[i].dataset.id) {
                indicatorList[i].style.backgroundColor = `${colorList[1]}`;
            } else {
                indicatorList[i].style.backgroundColor = `${colorList[0]}`;
            }
        }
    }
    //上一页
    btottons[0].addEventListener(
        'click',
        throttle(
            () => {
                clearInterval(timer);
                get_pre();
                autoPlay();
            },
            500,
            { leading: true, trailing: true }
        )
    );

    btottons[1].addEventListener(
        'click',
        throttle(
            () => {
                clearInterval(timer);
                get_next();
                autoPlay();
            },
            500,
            { leading: true, traling: false }
        )
    );

    //鼠标滑进停止轮播
    swiperList.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            clearInterval(timer)
        })
    })
    //鼠标离开开始轮播
    swiperList.forEach((e) => {
        e.addEventListener("mouseleave", () => {
            autoPlay()
        })
    })
    //通过指示器来控制图片
    const changeIndicatorIndex = throttle(function () {
        clearInterval(timer)
        let swiperIndex = swiperList[len - 1].dataset.id;
        let indicatorIndex = this.dataset.id;
        let dis = Math.max(swiperIndex, indicatorIndex) - Math.min(swiperIndex, indicatorIndex);
        if (swiperIndex > indicatorIndex) {
            while (dis--) {
                get_pre();
            }
        } else {
            while (dis--) {
                get_next();
            }
        }
        autoPlay()
    }, 500, { leading: true })
    for (let i = 0; i <= len; i++) {
        indicatorList[i].addEventListener('mouseenter', changeIndicatorIndex);
    }
    autoPlay()
    return timer;
}