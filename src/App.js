import './Styles/globals.css'
import Search from './Presenters/searchPresenter';
//import Route from "react-router-dom"

function App(props) {
  return (
    <>
    {/*<Route>
      
  </Route>*/}
     
      <div className='w-screen h-screen bg-blue-500'>
      <span className="p-10 text-sm bg-red-500 block">Hej</span>
      <div> {props.model.doSearch("vodka")}</div> 
      <div className="w-[300px] h-[500px] bg-blue-500"></div>
      </div>
    </>
  );
}
 
export default App;
