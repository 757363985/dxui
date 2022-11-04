<template>
  <div class="dx-page-content-warpper">
    <h1>CheckboxGroup</h1>
    <!-- <div class="content-breadcrumnb">
      <BreadCrumnb :config="config1" />
    </div> -->

    <CardGroup :columnNumber="1">
      <Card title="基本用法">
        <CheckboxGroup>
          <Checkbox>1111</Checkbox>
          <Checkbox>2222</Checkbox>
          <Checkbox>3333</Checkbox>
        </CheckboxGroup>

        <CheckboxGroup :options="options1"></CheckboxGroup>
        <p class="dx-components-description">
          通过options属性进行配置checbox，或者通过slot的方式直接使用checkbox组件
        </p>
      </Card>

      <Card title="排列方式有两种横向或者纵向">
        <CheckboxGroup>
          <Checkbox>1111</Checkbox>
          <Checkbox>2222</Checkbox>
          <Checkbox>3333</Checkbox>
        </CheckboxGroup>

        <p class="dx-components-description">通过isCloumns属性控制纵向排列</p>
        <CheckboxGroup :options="options1" :isCloumns="true"></CheckboxGroup>
      </Card>

      <Card title="将整组checkbox禁用">
        <CheckboxGroup :disabled="true">
          <Checkbox>1111</Checkbox>
          <Checkbox>2222</Checkbox>
          <Checkbox>3333</Checkbox>
        </CheckboxGroup>

        <p class="dx-components-description">
          通过CheckboxGroup的disabled属性，将所有的checkbox禁用
        </p>

        <CheckboxGroup :options="options1" :disabled="true"> </CheckboxGroup>

        <p class="dx-components-description">
          如果CheckboxGroup设置了disabled为true，Checkbox再设置disabled为false将会失效
        </p>
        <CheckboxGroup :disabled="true">
          <Checkbox>1111</Checkbox>
          <Checkbox :disabled="false">2222</Checkbox>
          <Checkbox>3333</Checkbox>
        </CheckboxGroup>

        <p class="dx-components-description">
          如果CheckboxGroup设置了disabled为false，Checkbox再设置disabled为true，只会让单个Checkbox处于禁用状态
        </p>
        <CheckboxGroup :disabled="false">
          <Checkbox>1111</Checkbox>
          <Checkbox :disabled="true">2222</Checkbox>
          <Checkbox>3333</Checkbox>
        </CheckboxGroup>
      </Card>

      <Card title="CheckboxGroup组件内部只能使用Checkbox">
        <CheckboxGroup>
          <Checkbox>1111</Checkbox>
          <Checkbox>2222</Checkbox>
          <Checkbox>3333</Checkbox>
          <h1>这是错误的标签h1</h1>
        </CheckboxGroup>

        <p class="dx-components-description">
          CheckboxGroup组件内部原则上只能使用Checkbox，当然如果你使用了其它组件或者标签，会有警告提示。
          Only Checkbox components can be used in CheckboxGroup
        </p>

        <p class="dx-components-description">
          如果你不在意这个警告，或者程序运行本身没什么问题(因为我做了一些内部的处理，希望不会和你的代码有巧合发生)，可以不用遵守
        </p>
      </Card>

      <Card title="整体控制checkbox是否checked">
        <p class="dx-components-description">
          使用defaultValue进行整体的控制，相当于设立初始值，整个group的状态可以更改
        </p>

        <CheckboxGroup :defaultValue="['1111', '2222']">
          <Checkbox value="1111">1111</Checkbox>
          <Checkbox value="2222">2222</Checkbox>
          <Checkbox value="3333">3333</Checkbox>
        </CheckboxGroup>

        <CheckboxGroup :defaultValue="['1111', '2222']" :options="options1"> </CheckboxGroup>
        <p class="dx-components-description">
          使用Value进行整体的控制，整个group的状态组件自身无法更改，需要从父组件改变传入的value值
        </p>
        <CheckboxGroup :value="['1111', '2222']">
          <Checkbox value="1111">1111</Checkbox>
          <Checkbox value="2222">2222</Checkbox>
          <Checkbox value="3333">3333</Checkbox>
        </CheckboxGroup>

        <CheckboxGroup :value="['1111', '2222']" :options="options1"> </CheckboxGroup>

        <p class="dx-components-description">
          使用CheckboxGroup后，checkbox组件自身的checked和defaultChecked将会失效
        </p>
      </Card>

      <Card title="@checkboxGroupChange">
        <CheckboxGroup @checkboxGroupChange="checkboxGroupChange" :defaultValue="['333']">
          <Checkbox value="111">111</Checkbox>
          <Checkbox value="222">222</Checkbox>
          <Checkbox :disabled="true" value="333">333</Checkbox>
        </CheckboxGroup>

        <CheckboxGroup
          :options="options1"
          :defaultValue="['1111']"
          @checkboxGroupChange="checkboxGroupChange"
        ></CheckboxGroup>
        <p class="dx-components-description">
          通过options属性进行配置checbox，或者通过slot的方式直接使用checkbox组件
        </p>
      </Card>

      <Card title="控制全组">
        <Checkbox :checked="allChecked" @clickCheckbox="clickAll">ALL</Checkbox>
        <CheckboxGroup
          :defaultValue="checkboxValueList"
          @checkboxGroupChange="checkboxGroupChange1"
        >
          <Checkbox value="dx">dx</Checkbox>
          <Checkbox value="yx">yx</Checkbox>
          <Checkbox value="18">18</Checkbox>
        </CheckboxGroup>
      </Card>
    </CardGroup>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
// import BreadCrumnb from '@/components/breadCrumb/Breadcrumb.vue'
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import CheckboxGroup from '@/components/checkboxGroup/CheckboxGroup.vue'
import Checkbox from '@/components/checkbox/Checkbox.vue'

@Options({
  components: {
    Card,
    CardGroup,
    // BreadCrumnb,
    // BreadCrumnbItem: BreadCrumnb.item,
    CheckboxGroup,
    Checkbox
  }
})
export default class TemplatePage extends Vue {
  config1 = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'checkboxGroup',
      path: 'checkboxGroup'
    }
  ]

  options1 = [
    {
      label: '1111',
      value: '1111'
    },
    {
      label: '2222',
      value: '2222'
    },
    {
      label: '3333',
      value: '3333'
    }
  ]

  checkboxValueList = []

  allChecked = false

  checkboxGroupChange(newval) {
    console.log(newval)
  }

  clickAll() {
    this.allChecked = !this.allChecked
    if (this.allChecked) {
      this.checkboxValueList = ['dx', 'yx', '18']
    } else {
      this.checkboxValueList = []
    }
  }

  checkboxGroupChange1(newval) {
    if (newval.length === 3) {
      this.allChecked = true
    } else {
      this.allChecked = false
    }
  }
}
</script>

<style></style>
