<template>
    <div class="main">
        <div class="card">
            <div class="photo">
                <img :src="imgSrc" alt="八重神子">
            </div>
            <h2>{{name}}</h2>
            <h3>{{nickName}}</h3>
            <p>{{introduction}}</p>
            <a :href="herf">了解更多</a>
        </div>
    </div>
</template>

<script>


export default {
    props: ["imgSrc", "name", "nickName", "introduction", "herf"],
    setup(props) {

    }

}
</script>

<style lang="scss" scoped>
* {
    // font-family: 'Courier New', Courier, monospace;
    font-family: PingFang SC;

}

.main {
    border-radius: 20px;
}

.card {
    box-sizing: border-box;
    width: 300px;
    height: 450px;
    color: white;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background: linear-gradient(360deg, blue, white);
    zoom: 0.65;
}

.photo {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 0.5s ease-out;
}

.photo::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, #222)
}

.card:hover .photo {
    top: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}

.card:hover a {
    z-index: 3;
}

.card:hover h2 {
    top: 130px;
}

.photo img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    object-fit: cover;
}

.card h2 {
    position: absolute;
    bottom: 36px;
    transition: all 0.5s;

}



.card h3 {
    margin-top: 180px;
    width: 80%;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, .3);
    padding-bottom: 15px;
    margin-bottom: 20px;

}

.card p {
    width: 90%;
    text-indent: 32px;
    font-size: 16px;
    line-height: 25px;
    height: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

}

.card a {
    margin-top: 20px;
    text-decoration: none;
    font-size: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, .5);
    text-align: center;
    padding: 8px 32px;
    border-radius: 8px;
}

.card a:hover {
    background-color: rgba(255, 255, 255, .2);
}
</style>