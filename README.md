Quick start:

```
$ npm install
$ npm start
````
Advanced concepts:
<br />
<br />
👉🏼 Nested Routes
--------------
✅ When you want to keep displaying some UI in the page, but also want to display more.
<br />
✅ Add <Outlet/> in the Parent element layout to show it's matching children element.
<br />
✅ *path* starts with **/** -> absolute path, else -> relative path
<br />
✅ *index* keyword used to denote the default component to be shown
<br />
```
<Route path="host" element={<HostLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="income" element={<Income />} />
  <Route path="reviews" element={<Reviews />} />
</Route>
```
Nested Routes Quiz
---------------------
1. What is the primary reason to use a nested route?
Ans - Whenever we have some shared UI between routes in our app.

2. What is a "Layout Route"?
Ans - It's the parent route of some nested routes that contains just
the portion Of the UI that will be shared. It will use an Outlet
component.

3. What does the <Outlet /> component do? When do you use it?
Ans - We use it anytime we have a parent Route that's wrapping
children routes. It renders the matching child route's
`element` prop given in its route definition

4. What is an "Index Route"?
Ans - It's the "default route" we want to render when the path
of the parent route matches. It gives us a chance to render
an element inside the parent's <Outlet / > at the same path
as the parent route.

👉🏼 Query Parameters
-----------------------
✅ Reperesent a change in the UI - *Sorting, Filtering, Pagination*
<br />
✅ Used as a single source of truth for certain application state
    - Ask yourself: "should a user be able to revisit or share this page just like it is?" 
    If "yes", then you might consider **raising that state up** to the URL in a query parameter.

👉🏼 Storing state in links
------------------------------
-> Store state in Links
<br />
```
<Link to={id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }} ></Link>
```
-> Use `useLocation()` hook to access the state values
<br />
```
const searchLinkState = location.state?.search || "";
const typeLinkState = location.state?.type || "all";
```
👉🏼 Data layer apis
--------------------
1. When does the code in a loader function run ?
   Ans - Before the route change happens and the component for that route loads.
2. What are some benefits of using a data loader function instead of fetching our data in a useEffect in a component ?
  * Don't need to worry about handling loading state in the component
  * Don't need to have lengthy/confusing useEffect code in our component
  * Don't need to handle error state in the component
3. What change do we need to make to our BrowserRouter before we can use loaders (or any of the new data—layer API features) in our app?
  Ans - Get rid of the BrowserRouter component and use createBrowserRouter() instead. Can use createRoutesFromEIements() to make the transition a bit easier.
4. What are the steps we need to take in order to use loader on any given route?
  * Define and export a loader function
  * Import the loader and pass it to the route we' re wanting to fetch data for
  * Use the useLoaderData() hook to get the data from the loader function.
