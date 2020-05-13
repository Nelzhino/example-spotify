import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import '../shared/sass/main.sass'
//Layout
import NavBarComponent from './layouts/NavBarComponent';

//Pages
import HomeComponent  from './pages/HomeComponent';
import SearchComponent from './pages/SearchComponent';
import ArtistComponent from './pages/ArtistComponent';

const App = () => {
  return ( 
    <div>
        <BrowserRouter>
          <NavBarComponent title="Spotify App" />
          <div className="container-pages-body">
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route exact path="/home" component={HomeComponent} />
            <Route path="/search" component={SearchComponent} />
            <Route path="/artist/:id" component={ArtistComponent} />
          </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
