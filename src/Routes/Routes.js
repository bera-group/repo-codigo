import React, { useContext } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { Main as MainLayout } from "../layout";
import RouteWithLayout  from './RouteWithLayout'
//import { AuthContext } from "../context/AuthContext"; 
import { Formulario1, MainView, VistaGenerica } from "../views";

const Routes = () => {
  //const { authState } = useContext(AuthContext);
  console.log("AdminV Routes");
  return (
    <Switch>
      <Redirect exact from="/" to="/" />
      
      <Route path="/inicio" component={MainView} />
      <Route path="/formulario1" component={Formulario1}/>
      <Route path="/vistagenerica" component={VistaGenerica}/>
    </Switch>
  );
};

export default Routes;


/**
 * <Route path="*" component={PageNotFound} />

 */