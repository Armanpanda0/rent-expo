import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { useContext } from "react";
import Store, { Val } from "../../Store";
const Layout = () => {


    const data =useContext(Val)
    console.log(data)




 



  return (
    <Fragment>

    {data.isVisible &&  <Header />}

     
      <div>
        <Routers />
      </div>


      {data.isVisible &&    <Footer />}
    
    </Fragment>
  );
};


export default Layout;
