import { ref, SetupContext } from 'vue'
/**
 * @params ctx 组件的执行期上下文 slotName 默认是default
 * @return isShowSlot Boolean
 * */
export const useShowSlotOrDefaultNode = function (ctx: SetupContext, slotName: string = 'default') {
  const isShowSlot = ref(false)
  if (ctx.slots && ctx.slots[slotName]) {
    isShowSlot.value = true
  }

  return isShowSlot
}

/**
 * @params len 随机字符串的位数，默认为4位
 * @return pwd string
 * */
export const randomString = function (len: number = 4) {
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
