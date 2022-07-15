import './App.css' ;
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { LogIn } from './Login/Login';
import { Header } from './Header/Header';
import  MoviesList  from './movies/MoviesList'
import { MoviesDetail } from './movies/MovieDetail';
import { WebshowList } from './Webshows/WebShowList';
import { WebShowDetail } from './Webshows/WebShowDetails'
import Detail from './Webshows/Season Details/Detail'

function App() {

  
  return (
    <div className="App">
    <Router>
      <Switch>

        <Route exact path='/movie/:id'>
          <MoviesDetail />
        </Route>

        <Route exact path='/'>
          <LogIn />
        </Route>

        <Route exact path='/movie'>
          <Header />
          <MoviesList />
        </Route>

        <Route exact path='/tv/:id'>
          <WebShowDetail />
        </Route>

        <Route exact path='/tv/:id/details' component={Detail} />
          
        <Route exact path='/webshows'>
          <WebshowList />
        </Route>


      </Switch>
      
    </Router>
    </div>
  );
}

export default App;
