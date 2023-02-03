import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
<<<<<<< Updated upstream
import { useContext } from "react";
import Store, { Val } from "../../Store";
const Layout = () => {


    const data =useContext(Val)
    console.log(data)


=======
import { useParams } from "react-router-dom";


const Layout = () => {


const { slug } = useParams();


  console.log(slug)

>>>>>>> Stashed changes

  return (
    <Fragment>

<<<<<<< Updated upstream
    {data.isVisible &&  <Header />}

     
=======
      
      <Header />
>>>>>>> Stashed changes
      <div>
        <Routers />
      </div>


      {data.isVisible &&    <Footer />}
    
    </Fragment>
  );
};

export default Layout;
