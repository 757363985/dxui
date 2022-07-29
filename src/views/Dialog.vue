<template>
  <div class="content-warpper">
    <h1>Dialog</h1>
    <div class="components-show-warpper">
      <div class="components-show-item">
        <h2>常规的dialog</h2>
        <Button @click="changeNormalVisible">常规的dialog</Button>
        <Dialog
          :visible="normalViaible"
          @cancel="handleClickCancelButton(1, 2, 3, $event)"
          @confirm="handleConfirmButton"
          title="这是标题"
          width="500px"
        >
          这是内容这是内容这是内容这是内容这是内容
        </Dialog>
      </div>

      <div class="components-show-item">
        <h2>自定义footer的dialog</h2>
        <Button @click="changeNormalVisible1">自定义footer</Button>
        <Dialog
          :visible="normalViaible1"
          @cancel="handleClickCancelButton1(1, 2, 3, $event)"
          @confirm="handleConfirmButton1"
          title="这是标题"
          width="500px"
        >
          这是内容这是内容这是内容这是内容这是内容
          <template v-slot:footerContent> 这是自定义footer的内容 </template>
        </Dialog>
      </div>

      <div class="components-show-item">
        <h2>自定义header的dialog</h2>
        <Button @click="changeNormalVisible2">自定义header</Button>
        <Dialog
          :visible="normalViaible2"
          @cancel="handleClickCancelButton2(1, 2, 3, $event)"
          @confirm="handleConfirmButton2"
          title="这是标题"
          width="500px"
        >
          <template v-slot:headerContent> 这是自定义header的内容 </template>
          这是内容这是内容这是内容这是内容这是内容
        </Dialog>
      </div>

      <div class="components-show-item">
        <h2>自定义宽度的dialog</h2>
        <Button @click="changeNormalVisible3">1000px的dialog</Button>
        <Dialog
          :visible="normalViaible3"
          @cancel="handleClickCancelButton3(1, 2, 3, $event)"
          @confirm="handleConfirmButton3"
          title="这是标题"
          width="1000px"
        >
          这是内容这是内容这是内容这是内容这是内容
        </Dialog>
      </div>

      <div class="components-show-item">
        <h2>自定义按钮文字的dialog</h2>
        <Button @click="changeNormalVisible4">自定义按钮文字的dialog</Button>
        <Dialog
          :visible="normalViaible4"
          @cancel="handleClickCancelButton4(1, 2, 4, $event)"
          @confirm="handleConfirmButton4"
          confirmText="confirm"
          cancelText="cancel"
          title="这是标题"
        >
          这是内容这是内容这是内容这是内容这是内容
        </Dialog>
      </div>

      <div class="components-show-item">
        <h2>通知的dialog</h2>
        <Button @click="changeNormalVisible5">通知的dialog</Button>
        <Dialog
          :visible="normalViaible5"
          @cancel="handleClickCancelButton5(1, 2, 5, $event)"
          @confirm="handleConfirmButton5"
          confirmText="知道了"
          :showCancelButton="false"
          width="400px"
          title="年终奖通知"
        >
          明天发年终奖10w
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Dialog from '@/components/dialog/Dialog.vue'
import Button from '@/components/button/Button.vue'

@Options({
  components: {
    Dialog,
    Button
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

<style lang="sass" scoped></style>
