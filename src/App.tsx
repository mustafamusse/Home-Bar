import LoginPresenter from "./reactjs/loginPresenter";
import MyIngredientsPresenter from "./reactjs/myIngredientsPresenter";
import AddIngredientsPresenter from "./reactjs/addIngredientsPresenter";
import StartscreenPresenter from "./reactjs/startscreenPresenter";
import SearchPresenter from "./reactjs/searchPresenter";
import DetailPresenter from "./reactjs/detailPresenter"
import RegisterPresenter from "./reactjs/registerPresenter"
import Show from "./reactjs/show";

/*VIEWS SHOULD PROBABLY NOT BE RENDERED UNTIL LOGIN IS COMPLETED*/
function App(props: any) {
  //  return <div style={{"display" : "none"}}><LoginPresenter model={props.model} /></div>
  return (
  <div>
    <Show hash="#register"><RegisterPresenter model={props.model} /> </Show>
    <Show hash="#detail"><DetailPresenter model={props.model} /> </Show>
    <Show hash="#login"><LoginPresenter model={props.model} /> </Show>
    <Show hash="#search"> <SearchPresenter model={props.model} /> </Show>
    <Show hash="#start"> <StartscreenPresenter model={props.model} /> </Show>
    <Show hash="#ingredients"> <MyIngredientsPresenter model={props.model} /> </Show>
    <Show hash="#add_ingredients"> <AddIngredientsPresenter model={props.model}/> </Show> 
  </div>)

}
 /*
    <Show hash="#login"><LoginPresenter model={props.model} /> </Show>
    <Show hash="#search"> <SearchPresenter model={props.model} /> </Show>
    <Show hash="#start"> <StartscreenPresenter model={props.model} /> </Show>
    <Show hash="#ingredients"> <MyIngredientsPresenter model={props.model} /> </Show>
    <Show hash="#add_ingredients"> <AddIngredientsPresenter model={props.model}/> </Show> 
    */

export default App;
