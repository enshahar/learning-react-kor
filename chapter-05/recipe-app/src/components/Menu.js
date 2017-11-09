import Recipe from './Recipe'
import '../../stylesheets/Menu.css'

const Menu = ({ recipes }) =>
    <article>
        <header>
            <h1>맛있는 조리법</h1>
        </header>
        <div className="recipes">
            { recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>

Menu.displayName = 'Menu'

export default Menu
