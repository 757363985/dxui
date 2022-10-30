import { ref, SetupContext } from 'vue'
/**
 * @params ctx 组件的执行期上下文 slotName 默认是default
 * @return isShowSlot Boolean
 * */
export const useShowSlotOrDefaultNode = function(ctx: SetupContext, slotName: string = 'default') {
  const isShowSlot = ref(false)
  if (ctx.slots && ctx.slots[slotName]) {
    isShowSlot.value = true
  }

  return isShowSlot
}
