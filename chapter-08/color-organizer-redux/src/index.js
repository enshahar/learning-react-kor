import storeFactory from './store'
import { addColor, removeColor, rateColor, sortColors } from './actions'

const store = storeFactory()

//store.dispatch(addColor("미친 파랑", "#1122FF"))
//store.dispatch(rateColor("8658c1d0-9eda-4a90-95e1-8001e8eb6036", 5))
//store.dispatch(sortColors("title"))
//store.dispatch(removeColor("a5685c39-6bdc-4727-9188-6c9a00bf7f95"))

console.log('현재 상태', store.getState())
console.log('계속 진행. 액션 디스패치...')

console.clear()
store.dispatch(removeColor("a5685c39-6bdc-4727-9188-6c9a00bf7f95"))
store.dispatch(addColor("미친 파랑", "#1122FF"))
store.dispatch(addColor("구구 파랑", "#000099"))
store.dispatch(rateColor("8658c1d0-9eda-4a90-95e1-8001e8eb6036", 5))
store.dispatch(rateColor("f9005b4e-975e-433d-a646-79df172e1dbb", 3))
store.dispatch(sortColors("title"))


window.store = store
window.addColor = addColor
window.removeColor = removeColor
window.rateColor = rateColor
window.sortColors = sortColors