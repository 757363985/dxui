import Button from '../button/Button.vue'
import Card from '../card/Card.vue'
import BreadCrumb from '../breadCrumb/Breadcrumb.vue'
import CardGroup from '../cardGroup/CardGroup.vue'
import Checkbox from '../checkbox/Checkbox.vue'
import CheckboxGroup from '../checkboxGroup/CheckboxGroup.vue'
import Dialog from '../dialog/Dialog.vue'
import Slider from '../slider/Slider.vue'
import Switch from '../switch/Switch.vue'
import Tag from '../tag/Tag.vue'
import Tooltip from '../tooltip/Tooltip.vue'
import AnimationIcon from '../animationIcon/AnimationIcon.vue'

// 分别导出，让别人可以按需引入
export {
  Button,
  Card,
  CardGroup,
  BreadCrumb,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Slider,
  Switch,
  Tag,
  Tooltip,
  AnimationIcon
}

const component = [
  Button,
  Card,
  CardGroup,
  BreadCrumb,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Slider,
  Switch,
  Tag,
  Tooltip,
  AnimationIcon
]

const Dxui = {
  install(App: any) {
    component.forEach((item: any) => {
      App.component(item.name, Button)
    })
  }
}

export default Dxui
