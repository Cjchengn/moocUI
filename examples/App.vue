<template>
  <nav>
    <Demo />

    <m-card
      imgSrc="1.jpg"
      summary="建的房卡切记区间为地球解决其二解放前未放弃将二维费偶尔机器文件"
    />
    <br>

    <m-card
    imgSrc="2.jpg"
    summary="建的房卡切记区间为地球解决其二解放前未放弃将二维费偶尔机器文件"
    >
    <template v-slot:footer>
      <div class="footer">
        <div class="level">中级-538人报名</div>
        <div class="price">￥299.00</div>
      </div>
    </template>
    </m-card>
    <br>

    <m-card
     imgSrc="3.jpg"
     :width="370"
     :height="90"
    >
    建的房卡切记区间为地球解决其二解放前未放弃将二维费偶尔机器文件
    <template v-slot:footer>
      <div class="footer-spring">
        <div class="level">4步骤 - 6门课</div>
        <div class="price">102389收藏</div>
      </div>
    </template>
    </m-card>
    <br>

  </nav>
  <router-view/>
</template>

<script>
export default{
  name: 'App'
}
</script>

<style>
.footer{
  padding: 0 8px;
  font-size:12px;
  text-align: left;
}
.level{
  color:#9199A1;
  margin-bottom:8px;
}
.price{
  color:#f01414;
}
.footer-spring{
  display: flex;
  justify-content: space-between;
  padding:0 8px;
  font-size:12px;
}
</style>
