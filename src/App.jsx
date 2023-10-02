
import './App.css'
import Layout from "./componenets/Layout";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import {Route, Routes} from "react-router-dom";

function App() {
    return(
        <Routes style={{display:"flex",justifyContent:'space-between',width:'300px'}}>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path={'/cart'} element={<CardPage/>}/>
            </Route>
        </Routes>
    )
}
export default App
