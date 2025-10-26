# Takeaways - Routing and Pages

In order to better understand routing and pages, it's important to have a clear grasp of the ***Request* and *Response*** cycle of communication between the browser and the web server.

- The browser requests *resources* from the web server
- Each resource has an *endpoint* or URL
- That *endpoint*/URL is the ***route*** to the resource
- It might be for a whole page, for part of a page, or for an API call.
- **Multi-Page Apps**
  - Often share common **layout** components
  - Can share other components among separate pages
  - Requesting a new page means a **full page refresh**; these are more "expensive" in terms of the volume of data sent to the browser and the amount of time for the browser to load the data
  - Caching can help reduce response time
- **Single-Page Apps** (SPAs)
  - Only ***partial* page refreshes** are necessary
  - The URL is usually updated to reflect the ***route***, but the call is made as an AJAX request instead of a full page request.
- Routes can include **"slugs"**, which are *placeholders* for data (e.g.: the file `pages/agency/[id].js` where `[id]` is the "slug" that holds a value that can be programmatically obtained via the `useRouter()` hook)

    ```
    const router = useRouter()
    const { id } = router.query 
    ```

- Note that this demo is using **NextJS version *12.3.1***. When consulting [the docs](https://nextjs.org/docs) for things like [`useRouter()`](https://nextjs.org/docs/13/app/building-your-application/upgrading/app-router-migration), be aware of what version of notes you are looking at.
  - Another really good option is to leverage the trusty old `console.log()` to get object properties, et.al. If you want some "real-time" exploration, add in a line like `window.aboutRouter = useRouter()` and then play with `window.aboutRouter.` and see what comes up with the properties/functions for that object.
