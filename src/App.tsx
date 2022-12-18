import LoginPresenter from "./reactjs/loginPresenter";
import MyIngredientsPresenter from "./reactjs/myIngredientsPresenter";
import StartscreenPresenter from "./reactjs/startscreenPresenter";
import SearchPresenter from "./reactjs/searchPresenter";
import DetailPresenter from "./reactjs/detailPresenter"
import Show from "./reactjs/show";

function App(props: any) {

  return (
  <div>
    <Show hash="#detail"><DetailPresenter model={props.model} /> </Show>
    <Show hash="#login"><LoginPresenter model={props.model} /> </Show>
    <Show hash="#search"> <SearchPresenter model={props.model} /> </Show>
    <Show hash="#start"> <StartscreenPresenter model={props.model} /> </Show>
    <Show hash="#ingredients"> <MyIngredientsPresenter model={props.model} /> </Show>
  </div>)

}

export default App;
