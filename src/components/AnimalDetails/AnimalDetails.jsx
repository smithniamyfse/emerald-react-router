import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function AnimalDetails() {
// Gives us back an object with any of the params we have 
// useParams gives us an object with our url params
// url params are set in the <Route> component in App.jsx ()
    const params = useParams();

    useEffect(() => {
        //                                                             👇
        // we get the params name from  <Route path="/animals/details/:id">
        console.log('route params are: ', params);
        // ** THIS IS MOST USEFUL WHEN... 
            // GET animal with id params.id (displaying details for many different items
            // and having those ROUTES change with three lines of code)
            // Provides access to information even following a refresh
                // The URL Route Params will be there!
    }, []);

    return (
        <div>
            <h1>Animal details</h1>
        </div>
    )
};

export default AnimalDetails;

// Can access our route parameters WITHIN the AnimalDetails Component

/*
Using URL Route Params for a Detail View
A common pattern in web applications is to see a listing view with many things to choose from (like a list of movies). When clicking on one of them, we want to load up all of the details for that item, often in a new component and usually getting more information from the database, too.

You can store these details in Redux, but this is not ideal. We're storing more than needed in Redux just in case a user picks that item. Typically there are way more details in the database we want. Plus, Redux is lost upon a refresh.
*/

