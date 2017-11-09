import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({ name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <IngredientsList list={ingredients} />
        <Instructions title="조리 절차"
                      steps={steps} />
    </section>

Recipe.displayName = 'Recipe'

export default Recipe
