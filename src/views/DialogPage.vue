<template>
  <div class="dx-page-content-warpper">
    <h1>Dialog 对话框</h1>

    <p class="dx-components-description">
      Dialog组件是一种用户界面元素，通常用于显示模态对话框或弹出窗口，以展示重要信息、提示、确认、表单填写或其他互动内容。这种组件提供了一种方式来引导用户的注意力，以进行特定任务或获取用户的响应。
    </p>

    <h2>代码演示</h2>
    <CardGroup :columnNumber="2">
      <Card title="常规的dialog">
        <Button @click="changeNormalVisible">点击弹出dialog</Button>
        <Dialog
          :visible="normalViaible"
          @cancel="handleClickCancelButton"
          @confirm="handleConfirmButton"
          title="这是标题"
          width="500px"
        >
          这是内容这是内容这是内容这是内容这是内容
        </Dialog>

        <p class="dx-components-description">
          Dialog常规使用需要使用三个参数，visible控制dialog的显示，@cancel点击取消按钮或者关闭icon时的回调函数，@confirm点击确认按钮时的回调函数
        </p>

        <Code
          :content="`
<Dialog
  :visible='normalViaible'
  @cancel='handleClickCancelButton'
  @confirm='handleConfirmButton'
  title='这是标题'
  width='500px'
>
  这是内容这是内容这是内容这是内容这是内容
</Dialog>
          `"
        />
      </Card>
      <Card title="自定义footer的dialog">
        <Button @click="changeNormalVisible1">自定义footer</Button>
        <p class="dx-components-description">通过具名插槽footerContent，可以控制dialog的footer</p>
        <Dialog
          :visible="normalViaible1"
          @cancel="handleClickCancelButton1"
          @confirm="handleConfirmButton1"
          title="这是标题"
          width="500px"
        >
          这是内容这是内容这是内容这是内容这是内容
          <template v-slot:footerContent> 这是自定义footer的内容 </template>
        </Dialog>

        <Code
          :content="`
<Dialog
  :visible='normalViaible1'
  @cancel='handleClickCancelButton1'
  @confirm='handleConfirmButton1'
  title='这是标题'
  width='500px'
>
  这是内容这是内容这是内容这是内容这是内容
  <template v-slot:footerContent> 这是自定义footer的内容 </template>
</Dialog>
          `"
        />
      </Card>

      <Card title="自定义header的dialog">
        <Button @click="changeNormalVisible2">自定义header</Button>
        <p class="dx-components-description">通过具名插槽headerContent，可以控制dialog的header</p>
        <Dialog
          :visible="normalViaible2"
          @cancel="handleClickCancelButton2"
          @confirm="handleConfirmButton2"
          title="这是标题"
          width="500px"
        >
          <template v-slot:headerContent> 这是自定义header的内容 </template>
          这是内容这是内容这是内容这是内容这是内容
        </Dialog>
        <Code
          :content="`
<Dialog
  :visible='normalViaible1'
  @cancel='handleClickCancelButton1'
  @confirm='handleConfirmButton1'
  title='这是标题'
  width='500px'
>
  <template v-slot:headerContent> 这是自定义header的内容 </template>
  这是内容这是内容这是内容这是内容这是内容
</Dialog>
          `"
        />
      </Card>

      <Card title="自定义宽度的dialog">
        <Button @click="changeNormalVisible3">400px的dialog</Button>
        <p class="dx-components-description">通过width控制dialog的宽度</p>
        <Dialog
          :visible="normalViaible3"
          @cancel="handleClickCancelButton3"
          @confirm="handleConfirmButton3"
          title="这是标题"
          width="400px"
        >
          这是内容这是内容这是内容这是内容这是内容
        </Dialog>
        <Code
          :content="`
<Dialog
  :visible='normalViaible1'
  @cancel='handleClickCancelButton1'
  @confirm='handleConfirmButton1'
  title='这是标题'
  width='400px'
>
  这是内容这是内容这是内容这是内容这是内容
</Dialog>
          `"
        />
      </Card>

      <Card title="自定义按钮文字的dialog">
        <Button @click="changeNormalVisible4">自定义按钮文字的dialog</Button>
        <p class="dx-components-description">
          通过confirmText和cancelText控制确认按钮和取消按钮的文案
        </p>
        <Dialog
          :visible="normalViaible4"
          @cancel="handleClickCancelButton4"
          @confirm="handleConfirmButton4"
          confirmText="confirm"
          cancelText="cancel"
          title="这是标题"
        >
          这是内容这是内容这是内容这是内容这是内容
        </Dialog>
        <Code
          :content="`
<Dialog
  :visible='normalViaible1'
  @cancel='handleClickCancelButton1'
  @confirm='handleConfirmButton1'
  title='这是标题'
  width='400px'
  confirmText='confirm'
  cancelText='cancel'
>
  这是内容这是内容这是内容这是内容这是内容
</Dialog>
          `"
        />
      </Card>

      <Card title="通知的dialog">
        <Button @click="changeNormalVisible5">通知的dialog</Button>
        <p class="dx-components-description">
          通过showCancelButton可以不显示cancel按钮，通过showConfirmButton可以不显示确认按钮
        </p>
        <Dialog
          :visible="normalViaible5"
          @cancel="handleClickCancelButton5"
          @confirm="handleConfirmButton5"
          confirmText="知道了"
          :showCancelButton="false"
          width="400px"
          title="放假通知"
        >
          从今以后你都不用来了
        </Dialog>

        <Code
          :content="`
<Dialog
  :visible='normalViaible1'
  @cancel='handleClickCancelButton1'
  @confirm='handleConfirmButton1'
  title='放假通知'
  width='400px'
  confirmText='知道了'
  :showCancelButton='false'
>
  从今以后你都不用来了
</Dialog>
          `"
        />
      </Card>
    </CardGroup>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Button, Card, CardGroup, Dialog } from 'vue3-dxui'
import Code from '@/components/code/Code.vue'

@Options({
  components: {
    Dialog,
    Button,
    Card,
    CardGroup,
    Code
  }
})
export default class Home extends Vue {
  normalViaible = false
  changeNormalVisible() {
    this.normalViaible = !this.normalViaible
  }

  handleClickCancelButton() {
    this.normalViaible = !this.normalViaible
  }

  handleConfirmButton() {
    this.normalViaible = !this.normalViaible
    alert('点击了确定')
  }

  normalViaible1 = false
  changeNormalVisible1() {
    this.normalViaible1 = !this.normalViaible1
  }

  handleClickCancelButton1() {
    this.normalViaible1 = !this.normalViaible1
  }

  handleConfirmButton1() {
    this.normalViaible1 = !this.normalViaible1
  }

  normalViaible2 = false
  changeNormalVisible2() {
    this.normalViaible2 = !this.normalViaible2
  }

  handleClickCancelButton2() {
    this.normalViaible2 = !this.normalViaible2
  }

  handleConfirmButton2() {
    this.normalViaible2 = !this.normalViaible2
  }

  normalViaible3 = false
  changeNormalVisible3() {
    this.normalViaible3 = !this.normalViaible3
  }

  handleClickCancelButton3() {
    this.normalViaible3 = !this.normalViaible3
  }

  handleConfirmButton3() {
    this.normalViaible3 = !this.normalViaible3
  }

  normalViaible4 = false
  changeNormalVisible4() {
    this.normalViaible4 = !this.normalViaible4
  }

  handleClickCancelButton4() {
    this.normalViaible4 = !this.normalViaible4
  }

  handleConfirmButton4() {
    this.normalViaible4 = !this.normalViaible4
  }

  normalViaible5 = false
  changeNormalVisible5() {
    this.normalViaible5 = !this.normalViaible5
  }

  handleClickCancelButton5() {
    this.normalViaible5 = !this.normalViaible5
  }

  handleConfirmButton5() {
    this.normalViaible5 = !this.normalViaible5
  }
}
</script>

<style lang="sass"></style>
