<template>
  <div class="choiceness-d" @scroll="handleScroll">
        <!-- 搜索 -->
        <sear></sear>
        <!-- 轮播图 -->
        <div class="banner bg">
            <van-swipe class="bg" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in banner[0]" :key="index">
                    <img :src="item.url" alt="" height="230px" width="100%">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 引导 -->
        <div class="channel bg">
            <span class="for bg" v-for="(item, index) in channel[0]" :key="index">
                <img :src="item.iconUrl" alt="" height="20px" width="20px" style="display: block; margin: 0 auto;">
                <!-- <span style="display: block;">1</span> -->
                <span style="margin-top: 5px; display: block;">
                    {{ item.name }}
                </span>
            </span>
        </div>
        <!-- 优惠卷 -->
        <div class="coupon bg">
            优惠卷
        </div>
        <div class="discount bg" v-show="coupne">
            <div class="num1 bg" v-for="(item, index) in couponLists[0]" :key="index">
                <!-- {{ item }} -->
                <h2>
                    <span style="font-size: 14px;">￥</span><span>{{ item.discount }}元</span><span
                        style="margin-left: 40px; color: black; font-size: 18px;">{{ item.name }}</span>
                    <span style="display: block; font-size: 14px; color: #969799;">{{ item.desc }}-{{ item.name }}：{{item.days }}元</span>
                </h2>
            </div>
        </div>
   <!-- 团购专区 -->
  <div class="coupon bg">
            团购专区 <span>更多团购商品></span>
        </div>
        <!-- 品牌商直供 -->
        <div>
            <div class="coupon bg">
                品牌商直供<span>更多品牌商></span>
            </div>
            <div class="purchase bg">
                <div v-for="(item, index) in brandList[0]" :key="index">
                    <img :src="item.picUrl" alt="" width="90%" height="80%">
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
        <!-- 新品首发 -->
        <div>
            <div class="coupon bg">
                新品首发<span>更多新品首发></span>
            </div>
            <div class="product bg">
                <div v-for="(item, index) in newGoodsList[0]" :key="index" class="bg">
                    <img :src="item.picUrl" alt="" width="80%" height="70%">
                    <p style="color: gray;">{{ item.name }}</p>
                    <p style="color: #AB956D;">￥ {{ item.counterPrice }}</p>
                </div>
            </div>
        </div>
        <!-- 人气推荐 -->
        <div>
            <div class="coupon bg">
                人气推荐<span>更多人气推荐></span>
            </div>
            <div class="moods bg" v-for="(item, index) in hotGoodsList[0]" :key="index">
                <div class="left bg">
                    <img :src="item.picUrl" alt="" width="100%" height="100%">
                </div>
                <div class="right bg">
                    <div class="top bg">
                        <br>
                        <div>{{ item.name }}</div>
                        <div style="color: gray;">{{ item.brief }}</div>
                    </div>
                    <br>
                    <div class="buttom bg">
                        ￥{{ item.retailPrice }} <span>￥{{ item.counterPrice }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 专题精选 -->
        <div>
            <div class="coupon bg">
                专题精选<span>更多专题精选></span>
            </div>
            <div class="special bg">
                <div v-for="(item, index) in topicList[0]" :key="index">
                    <img :src="item.picUrl" alt="" width="90%">
                    <p>{{ item.title }}</p>
                    <p :class="item.subtitle.length > 11 ? 'abc' : 'add'">{{ item.subtitle }}</p>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
import { loginIn } from '../../api/index'
import sear from '../../components/search.vue'
export default {
  name: 'choiceness-d',
  data () {
    return {
      banner: [],
      channel: [],
      couponLists: [],
      brandList: [],
      newGoodsList: [],
      hotGoodsList: [],
      topicList: [],
      coupne: true
    }
  },
  methods: {
    handleScroll () {
      // 判断滚动条是否到达底部
      const scrollContainer = this.$refs.scrollContainer
      if (
        scrollContainer.scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight
      ) {
        // 到达底部，加载更多数据
        // this.loadMore()
        console.log(1)
      }
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    sear
  },
  mounted () {
    loginIn().then((res) => {
      console.log(res.data.data)
      this.banner.push(res.data.data.banner)
      this.channel.push(res.data.data.channel)
      this.couponLists.push(res.data.data.couponList)
      this.brandList.push(res.data.data.brandList)
      this.newGoodsList.push(res.data.data.newGoodsList)
      this.hotGoodsList.push(res.data.data.hotGoodsList)
      this.topicList.push(res.data.data.topicList)
      if (res.data.data.couponList <= 0) {
        this.coupne = false
      }
      console.log(res.data.data)
    })
    console.log(this.hotGoodsList)
    // coupne
  }
}
</script>

<style lang="scss">
.abc {
  text-align: left;
}

.add {
  text-align: center;
}

.special {
  width: 100%;
  overflow: hidden;
  background-color: white;

  div {
    box-sizing: border-box;
    width: 50%;
    padding: 16px 8px;
    height: 200px;
    float: left;
    border: 1px solid #eef0f2;
    text-align: center;

    img {
      height: 100px;
    }

    p {
      margin: 0;
      color: #ab956d;
      width: 100%;
      padding: 0;
      float: left;
      font-size: 12px;
      // text-align: center;
    }
  }
}

.moods {
  // width: 100%;
  overflow: hidden;
  padding: 10px 16px;
  // margin-top: 5px;
  // border: 1px solid red;
  background-color: white;

  .left {
    width: 17%;
    // border: 1px solid red;
    height: 88px;
    float: left;
  }

  .right {
    width: 72%;
    height: 88px;
    padding-left: 10px;
    float: left;

    .top {
      font-size: 14px;
    }

    .buttom {
      span {
        font-size: 14px;
        color: gray;
        text-decoration: line-through;
      }
    }
  }
}

.product {
  width: 100%;
  text-align: center;
  background-color: white;
  overflow: hidden;

  div {
    background-color: white;
    box-sizing: border-box;
    float: left;
    width: 48vw;
    height: 49.667vw;

    p {
      margin: 0 0;
      opacity: 0.9;
    }
  }
}

.purchase {
  width: 100%;
  height: 76vw;
  background-color: white;

  div {
    box-sizing: border-box;
    padding: 15px;
    width: 50%;
    border: 1px solid #eef0f2;
    height: 50%;
    float: left;
    text-align: center;

    span {
      display: block;
    }
  }
}

.group {
  width: 100%;
  height: 30px;
  padding: 5px;
  border: 1px solid red;
}

.discount {
  width: 100%;
  height: 240px;
  background-color: white;
  margin-top: -15px;

  .num1 {
    width: 90%;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 100px;
    border: 1px solid red;
    margin-top: 15px;

    h2 {
      // position: relative;
      padding: 10px 0 0 20px;

      span {
        color: red;
        font-weight: 500;
      }
    }
  }
}

.coupon {
  margin-top: 20px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;

  span {
    display: block;
    float: right;
    // width: 85%;
    color: #989898;
    text-align: right;
  }
}

.channel {
  width: 100%;
  padding-bottom: 10px;
  background-color: white;

  .for {
    display: inline-block;
    width: 50px;
    margin-left: 10px;
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
  }
}

.Search {
  height: 30px;
  padding: 10px;
  background-color: white;

  .input {
    background-color: #f7f8fa;
    height: 30px;
    border-radius: 2px;

    i {
      line-height: 30px;
      margin-left: 10px;
    }

    input {
      width: 85%;
      border: none;
      margin-left: 3px;
      background-color: #f7f8fa;
    }

    input::-webkit-input-placeholder {
      /* placeholder颜色 */
      color: #aab2bd;
      /* placeholder字体大小 */
      font-size: 12px;
    }
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 5.333vw;
  line-height: 230px;
  text-align: center;
  background-color: #39a9ed;
}

.banner {
  height: 230px;
}

.choicenesss {
  background-color: #f2f2f2;
}
</style>
