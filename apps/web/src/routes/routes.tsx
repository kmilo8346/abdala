import React from 'react';
import { Route, Routes} from 'react-router-dom';

import {LoginPage, RootPage} from "../pages"

const Router: React.FC = () => {
    return (
        <Routes>
          <Route path="/" component={RootPage} />
          <Route path="/login" component={LoginPage} />
        </Routes>
    );
  };
  
  export default Router;