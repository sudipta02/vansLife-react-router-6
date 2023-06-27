Quick start:

```
$ npm install
$ npm start
````
Advanced concepts:
<br />
<br />
👉🏼Nested Routes
--------------
✅ When you want to keep displaying some UI in the page, but also want to display more.
<br />
✅ Add <Outlet/> in the Parent element layout to show it's matching children element.
<br />
✅ *path* starts with **/** -> absolute path, else -> relative path
<br />
✅ *index* keyword used to denote the default component to be shown
```
<Route path="host" element={<HostLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="income" element={<Income />} />
  <Route path="reviews" element={<Reviews />} />
</Route>
```

