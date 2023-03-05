import { createVNode, render } from "vue";
import MyMessage from "../components/message/MyMessage.vue"
const div = document.createElement('div')
div.setAttribute("class", "message-container")

document.body.appendChild(div)
let timer = null;
export default function Message({ type, text, delay }) {
    const vnode = createVNode(MyMessage, { type, text, delay })
    render(vnode, div)
    clearTimeout(timer)
    timer = setTimeout(() => {
        render(null, div)
    }, delay)
}