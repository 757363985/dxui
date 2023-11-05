<template>
  <div class="dx-page-content-warpper">
    <h1>Carousel 走马灯</h1>

    <p class="dx-components-description">
      Carousel（轮播）组件是一个常用于网页和移动应用程序中的用户界面元素，它允许用户在一组内容项之间进行滑动或轮播，以查看不同的内容。通常用于展示图片、新闻、产品或其他多个项目的列表。
    </p>

    <h2>代码演示</h2>

    <CardGroup :columnNumber="2">
      <Card title="基本用法">
        <p class="dx-components-description">
          采用无缝轮播的形式，visionCount变量决定了无缝轮播的内容配置
        </p>
        <p class="dx-components-description">
          真正的轮播内容是1 2 3
          4,visionCount为1时，为了实现无缝轮播，必须在最前面重复最后一个4，在最后面重复最前一个1。
        </p>

        <Carousel :visionCount="1">
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">2</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">3</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
        </Carousel>

        <Code
          :content="`<Carousel :visionCount='1'>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>2</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>3</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
</Carousel>
<style lang='scss'>
  .carousel-item-content {
    background: rgb(54, 77, 121);
    height: 100%;
    text-align: center;
    line-height: 150px;
    color: #fff;
}
</style>`"
        />
      </Card>

      <Card title="visionCount 同时展示的item数量">
        <p class="dx-components-description">
          visionCount变量为2时，为了实现无缝轮播，得在最前面重复最后两个34，最后面重复前面两个12
        </p>
        <Carousel :visionCount="2">
          <CarouselItem> <div class="carousel-item-content">3</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">2</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">3</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">2</div> </CarouselItem>
        </Carousel>
        <Code
          :content="`
<Carousel :visionCount='2'>
  <CarouselItem> <div class='carousel-item-content'>3</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>2</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>3</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>2</div> </CarouselItem>
</Carousel>
          `"
        />
      </Card>

      <Card title="openAutoPlay 是否需要自动播放">
        <p class="dx-components-description">
          openAutoPlay 默认为true，开启时，当鼠标移入轮播范围内，将会暂停,鼠标移除轮播范围会恢复播放
        </p>

        <Carousel :openAutoPlay="false">
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">2</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">3</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
        </Carousel>

        <Code
          :content="`<Carousel :openAutoPlay='false'>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>2</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>3</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
</Carousel>`"
        />
      </Card>

      <Card title="openDot 是否需要dot">
        <p class="dx-components-description">
          openDot 默认为true，开启时，会显示下方的圆点，关闭则不会显示
        </p>

        <Carousel :openDot="false">
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">2</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">3</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
        </Carousel>

        <Code
          :content="`<Carousel :openAutoPlay='false'>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>2</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>3</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
</Carousel>`"
        />
      </Card>

      <Card title="intervalTime 轮播间隔时间">
        <p class="dx-components-description">
          intervalTime 默认为4000，单位ms，设置数字越大，轮播间隔越久
        </p>

        <Carousel :intervalTime="10000">
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">2</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">3</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
        </Carousel>

        <Code
          :content="`<Carousel :intervalTime='10000'>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>2</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>3</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
</Carousel>`"
        />
      </Card>

      <Card title="transitionSpeed 轮播动画的速度">
        <p class="dx-components-description">transitionSpeed 默认为6，数字越大，轮播动画越快</p>

        <Carousel :transitionSpeed="24">
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">2</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">3</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
        </Carousel>

        <Code
          :content="`<Carousel :transitionSpeed='24'>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>2</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>3</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
</Carousel>`"
        />
      </Card>

      <Card title="carouselItemHeight 轮播高度">
        <p class="dx-components-description">
          carouselItemHeight 默认为150，单位px，数字越大，轮播高度越高
        </p>

        <Carousel :carouselItemHeight="300">
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">2</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">3</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
        </Carousel>

        <Code
          :content="`<Carousel :carouselItemHeight='300'>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>2</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>3</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
</Carousel>`"
        />
      </Card>

      <Card title="gap 轮播内容的间隙距离">
        <p class="dx-components-description">gap 默认为16，单位px，数字越大，间隙距离越大</p>

        <Carousel :gap="30" :visionCount="2">
          <CarouselItem> <div class="carousel-item-content">3</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">2</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">3</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">4</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">1</div> </CarouselItem>
          <CarouselItem> <div class="carousel-item-content">2</div> </CarouselItem>
        </Carousel>

        <Code
          :content="`<Carousel :gap='30' :visionCount='2'>
  <CarouselItem> <div class='carousel-item-content'>3</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>2</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>3</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>4</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>1</div> </CarouselItem>
  <CarouselItem> <div class='carousel-item-content'>2</div> </CarouselItem>
</Carousel>`"
        />
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Code from '@/components/code/Code.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import CarouselItem from '@/components/carousel/CarouselItem.vue'

export default {
  components: {
    Card,
    CardGroup,
    Code,
    Carousel,
    CarouselItem
  }
}
</script>

<style lang="scss">
.carousel-item-content {
  background: rgb(54, 77, 121);
  height: 100%;
  text-align: center;
  line-height: 150px;
  color: #fff;
}
</style>
