import { Component } from 'react'
import { v4 } from 'uuid'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import '../../stylesheets/APP.scss'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            colors: [
// 기본 상태. 색이 없는 초기상태가 필요하다면
// 아래 세 객체를 지우면 된다.
{
"id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
"title": "해질녘 바다",
"color": "#00c4e2",
"rating": 5
},
{
"id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
"title": "잔디",
"color": "#26ac56",
"rating": 3
},
{
"id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
"title": "밝은 빨강",
"color": "#ff0000",
"rating": 0
}
			]
        }
        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor(title, color) {
        this.setState(prevState => ({
            colors: [
                ...prevState.colors,
                {
                    id: v4(),
                    title,
                    color,
                    rating: 0
                }
            ]
        }))
    }

    rateColor(id, rating) {
        this.setState(prevState => ({
            colors: prevState.colors.map(color =>
                (color.id !== id) ?
                    color :
                    {
                        ...color,
                        rating
                    }
            )
        }))
    }

    removeColor(id) {
        this.setState(prevState => ({
          colors: prevState.colors.filter(color => color.id !== id)
        }))
    }

    render() {
        const { addColor, rateColor, removeColor } = this
        const { colors } = this.state
        return (
            <div className="app">
                <AddColorForm onNewColor={addColor} />
                <ColorList colors={colors}
                           onRate={rateColor}
                           onRemove={removeColor} />
            </div>
        )
    }

}
