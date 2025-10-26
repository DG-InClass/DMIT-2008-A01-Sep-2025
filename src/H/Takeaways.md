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
