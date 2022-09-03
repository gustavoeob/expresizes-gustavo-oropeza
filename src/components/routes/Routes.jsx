import React from 'react'
import Navbar from '../views/navbar/NavBar'
import Home from '../views/home/Home'
import ItemDetailContainer from '../pages/itemDetail/itemDetailContainer/ItemDetailContainer'
import Footer from '../views/footer/Footer'
import {BrowserRouter, Route, Routes as Routing} from 'react-router-dom'


const Routes = () => {

  return (
        <>
            <div className="App">

                <BrowserRouter>

                    <Navbar/>

                    <Routing>
                        <Route path="/" element={<Home />} />
                        <Route path='/course/:id' element={<ItemDetailContainer/>}/>
                        {/* <Route path='/checkout/cart' element={} />  */}
                    </Routing>

                    <Footer/>
                
                </BrowserRouter>

            </div>
        </>
    )
}

export default Routes