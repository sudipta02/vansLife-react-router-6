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

