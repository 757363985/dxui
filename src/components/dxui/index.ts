import Button from '../button/Button.vue'
import Card from '../card/Card.vue'
import BreadCrumb from '../breadCrumb/Breadcrumb.vue'
import BreadCrumbItem from '../breadCrumb/BreadcrumbItem.vue'
import CardGroup from '../cardGroup/CardGroup.vue'
import Checkbox from '../checkbox/Checkbox.vue'
import CheckboxGroup from '../checkboxGroup/CheckboxGroup.vue'
import Dialog from '../dialog/Dialog.vue'
import Slider from '../slider/Slider.vue'
import Switch from '../switch/Switch.vue'
import Tag from '../tag/Tag.vue'
import Tooltip from '../tooltip/Tooltip.vue'
import AnimationIcon from '../animationIcon/AnimationIcon.vue'
import MessageApi from '../message/Message'
import Message from '../message/Message.vue'

import Icon from '../icon/Icon.vue'
import Affix from '../affix/Affix.vue'
import Carousel from '../carousel/Carousel.vue'
import CarouselItem from '../carousel/CarouselItem.vue'
// 分别导出，让别人可以按需引入
export {
  Button,
  Card,
  CardGroup,
  BreadCrumb,
  BreadCrumbItem,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Slider,
  Switch,
  Tag,
  Tooltip,
  AnimationIcon,
  MessageApi,
  Icon,
  Affix,
  Carousel,
  CarouselItem
}

const component = [
  Button,
  Card,
  CardGroup,
  BreadCrumb,
  BreadCrumbItem,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Slider,
  Switch,
  Tag,
  Tooltip,
  AnimationIcon,
  Message,
  Icon,
  Affix,
  Carousel,
  CarouselItem
]

const Dxui = {
  install(App: any) {
    component.forEach((item: any) => {
      App.component(item.name, Button)
    })
  }
}

export default Dxui
