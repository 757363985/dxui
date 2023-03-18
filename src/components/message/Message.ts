import Vue, { createVNode, render } from 'vue'
import Message from '@/components/message/Message.vue'

let div: any = ''

const MessageApi = {
  open: (options: any) => {
    let timer: any = ''

    return new Promise((resolve) => {
      if (!div) {
        div = document.createElement('div')
        div.setAttribute('class', 'dx-message-list')
        document.body.appendChild(div)
      }

      const item = document.createElement('div')
      item.setAttribute('class', 'dx-message-item')

      div.appendChild(item)

      const MessageComponents = createVNode(Message, { type: 'info', ...options })
      render(MessageComponents, item)
      timer = setTimeout(() => {
        render(null, item)
        item.remove()

        const divCount = document.querySelectorAll('.dx-message-item').length
        if (!divCount) {
          div.remove()
          div = undefined
        }

        resolve('')
      }, options.duration)
    })
  }
}

export default MessageApi
