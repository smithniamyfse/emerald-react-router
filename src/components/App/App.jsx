// Lecture notes:
// https://github.com/PrimeAcademy/emerald-syllabus/blob/main/lecture-notes/week-11-redux/11-01_react-router.md
// https://github.com/PrimeAcademy/emerald-syllabus/blob/main/lecture-notes/week-11-redux/11-01_optional_url_params.md
import React from "react";
// * STEP: 2 *
// Aliasing means replacing the origin word 'HashRouter' uses and use Router, Route instead
// * STEP 5a: Adding Link *
import { HashRouter as Router, Route, Link } from "react-router-dom";
import AnimalDetails from "../AnimalDetails/AnimalDetails";
import "./App.css";

import Animals from "../Animals/Animals.jsx";
import Plants from "../Plants/Plants.jsx";
import Home from "../Home/Home.jsx";
import Search from "../Search/Search.jsx";

function App() {
  return (
    // * Step 3: Adding the Router Tag *
    // * The Router code needs to be the HIGHEST-PARENT / TOP-TIER
    <Router>
      <div className="App">
        <h1>SPAs!</h1>
        {/* STEP 5b: Adding a Nav Bar / Link Component */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/plants">Plants</Link>
            </li>
            <li>
              <Link to="/bears">Bears</Link>
            </li>
            <li>
              <Link to="/animals/details/47">Details for animal with id of 47</Link>
            </li>
            <li>
              <Link to="/search?legs=1000&type=insect">Search for an insect with 1000 legs</Link>
            </li>
          </ul>
        </nav>

        {/* STEP 4: Determine which view is shown based on the URL path: */}
        <Route path="/animals" exact>
          {/* STEP 1: Adding the Components */}
          <Animals />
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* Route Parameter /:id */}
       {/* this route parameter can be 👇 any word we want it to be, e.g. /:butts */}
        <Route path="/animals/details/:id">
          <AnimalDetails />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </div>
    </Router>
  );
}

export default App;
//** OBJECTIVE */
// We want to show the components ONE AT A TIME,
// depending on what the URL is.

//** BASIC ROUTING: <Route path="/URLname"></Route> paths */
/* 
You can think of these as if blocks. 
If our path matches, show that component. path is our URL matcher and 
component is the component we want to show when we match that route. 
One thing that's weird is that the Home Component is showing up everywhere. 
That's because / matches all of these (/plants and /animals both include /). 
If we only want it to show the home component when it matches / exactly, 
we have to include the word exact.
*/

// ** LINKING **
/*
These routes should now be working when we go to localhost:3000, 
localhost:3000/#/plants, and localhost:3000/#/animals, but no user will type those in. 
We need links. Let's add Link to our import.
*/

// ** Change View Programmatically **
/*
Link components are great if all we want to do is change where we are. 
But what if we want to do other things, too? We'd need to change view after we do other things. 
Which a Link can't do...

Let's add a button to our Home Component. 
onClick let's fire a function that makes an alert, and then changes where we are.
*/


// Common Pattern
// 1. A list/grid of items (glue from Target)
// 2. When a product is clicked, then specific information/details are loaded and shown (glitter glue)