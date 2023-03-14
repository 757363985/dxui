<template>
  <div class="dx-page-content-warpper">
    <h1>Select</h1>

    <CardGroup :columnNumber="1">
      <Card title="基本用法">
        <Select :options="options1" />
        <Code
          :content="`
<Select :options='options1' />
export default {
  components: {
    Select
  },
  data() {
    return {
      options1: [
        { name: 'dx', value: 18 },
        { name: 'yx', value: 19 }
      ]
    }
  }
}
          `"
        />
      </Card>
      <Card title="placeholder">
        <Select :options="options1" placeholder="请选择一个选项" />
        <Code
          :content="`
<Select :options='options1' placeholder='请选择一个选项' />
export default {
  components: {
    Select
  },
  data() {
    return {
      options1: [
        { name: 'dx', value: 18 },
        { name: 'yx', value: 19 }
      ]
    }
  }
}
          `"
        />
      </Card>
      <Card title="多选">
        <Select :options="options1" type="multiple" />
        <Code
          :content="`
<Select :options='options1' type='multiple'/>
export default {
  components: {
    Select
  },
  data() {
    return {
      options1: [
        { name: 'dx', value: 18 },
        { name: 'yx', value: 19 }
      ]
    }
  }
}
          `"
        />
      </Card>

      <Card title="设置初始值">
        <Select :options="options2" type="multiple" />
        <Code
          :content="`
<Select :options='options1' type='multiple'/>
export default {
  components: {
    Select
  },
  data() {
    return {
      options1: [
        { name: 'dx', value: 18, selected: true },
        { name: 'yx', value: 19 }
      ]
    }
  }
}
          `"
        />
      </Card>

      <Card title="禁用">
        <Select :options="options2" :disabled="true" type="multiple" />
        <Code
          :content="`
<Select :options='options1' />
export default {
  components: {
    Select
  },
  data() {
    return {
      options1: [
        { name: 'dx', value: 18 },
        { name: 'yx', value: 19 }
      ]
    }
  }
}
          `"
        />
      </Card>

      <Card title="tag模式">
        <Select :options="options2" mode="tag" type="multiple" />
        <Code
          :content="`
<Select :options='options1' mode='tag' type='multiple' />
export default {
  components: {
    Select
  },
  data() {
    return {
      options1: [
        { name: 'dx', value: 18 },
        { name: 'yx', value: 19 }
      ]
    }
  }
}
          `"
        />
      </Card>

      <Card title="search模式">
        <Select :options="options2" mode="tag" type="multiple" :search="true" />
        <Code
          :content="`
<Select :options='options1' mode='tag' type='multiple' :search='true' />
export default {
  components: {
    Select
  },
  data() {
    return {
      options1: [
        { name: 'dx', value: 18 },
        { name: 'yx', value: 19 }
      ]
    }
  }
}
          `"
        />
      </Card>

      <Card title="change监听">
        <Select :options="options1" mode="tag" type="multiple" @changeSelect="changeSelect" />
        <Code
          :content="`
<Select :options='options1' mode='tag' type='multiple' @changeSelect='changeSelect' />
export default {
  components: {
    Select
  },
  data() {
    return {
      options1: [
        { name: 'dx', value: 18 },
        { name: 'yx', value: 19 }
      ]
    }
  },
  methods: {
    changeSelect(params) {
      console.log(params)
    }
  }
}
          `"
        />
      </Card>
    </CardGroup>
    <Button @click="handleClickButton">11111</Button>
    <Tag :closable="true">2222</Tag>
  </div>
</template>

<script lang="ts" scoped>
import Card from '@/components/card/Card.vue'
import CardGroup from '@/components/cardGroup/CardGroup.vue'
import Code from '@/components/code/Code.vue'
import Select from '@/components/select/Select.vue'
import { Button, Tag } from 'vue3-dxui'

export default {
  components: {
    Card,
    CardGroup,
    Code,
    Select,
    Button,
    Tag
  },
  data() {
    return {
      options1: [
        { name: 'dx', value: 18 },
        { name: 'yx', value: 19 }
      ],
      options2: [
        { name: 'dx', value: 18, selected: true },
        { name: 'yx', value: 19 }
      ]
    }
  },
  methods: {
    changeSelect(params:any) {
      console.log(params)
      // console.log(getRandomNumber)
      // console.log(Button)
    },
    handleClickButton() {
      console.log(1111)
    }
  }
}
</script>

<style>

</style>
