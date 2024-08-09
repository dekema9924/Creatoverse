import Creators from "./components/ShowCreators"
import Home from "./components/Home"
import {Route, Routes} from 'react-router-dom'
import AddCreator from "./components/AddCreator"
import EditCreator from "./components/EditCreator"
import ViewCreator from "./components/ViewCreator"


function App() {

  return (
    <>
      <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/viewcreators" element={<Creators/>}/>
           <Route path="/addcreator" element={<AddCreator/>}/>
           <Route path="/editcreator/:id" element={<EditCreator/>}/>
           <Route path="/readmore/:id" element={<ViewCreator/>}/>

      </Routes> 
    </>
  )
}

export default App
