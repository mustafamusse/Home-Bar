import FilterView from "../Views/filterView"

export default
function FilterPresenter(props: any) {
    return(
        <FilterView ingrList={props.model.mySavedIngredients}></FilterView>
    )
}