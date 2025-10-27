# Modern React/NextJS

When you choose React, you can go "vanilla" (React only/primarily) or you can select among different frameworks (which are often competing). Here's a quick overview.

As of **Nov 2025**, the current versions are:

| Library/Framework | Version | Notes |
|-------------------|:-------:|-------|
| **React** | [19.2.0](https://github.com/facebook/react/releases/tag/v19.2.0) | The heart and soul, this library is at the core of an astounding number of real-world projects. |
| NextJS | [16.0.0](https://github.com/vercel/next.js/releases/tag/v16.0.0) | Created and maintained by Vercel, NextJS is a framework built on React. It aims to address the "wider concerns" of modern day apps (routing, SSR, SSG, etc). |
| React Router | [7.9.4](https://github.com/remix-run/react-router/releases/tag/react-router%407.9.4) | This framework focuses on Routing and Navigation for your React apps. |
| *Astro* 🚀 | [5.15.1](https://github.com/withastro/astro/releases/tag/astro%405.15.1) | Astro is more of a "meta-framework" in that it can support not only React, but other component-focused libraries such as [Svelte](https://svelte.dev/), [Vue](https://vuejs.org/), and [SolidJS](https://www.solidjs.com/). (It's **Dan's personal favorite**) |


## More than a Roadmap

I thought a map demo could be fun to try, if only for the bling. Here, we'll focus on a vanilla React implementation built on Vite. This example also uses [Leaflet](https://github.com/Leaflet/Leaflet) - check them out.

- Open the [map-demo](./map-demo/) folder and run **`pnpm i`** (or *`npm i`*)
- Add Leaflet to the project - `pnpm install leaflet`
  - If you like TypeScript, also run `pnpm install -D @types/leaflet`

## 🚀 Astro + React



----

## Self-Study

### TanStack

> See this clip on [What is React](https://youtube.com/clip/Ugkx9BhBncwvb2pHSbmQBLrArsBozLB9WI5f?si=3lab64ad08GZg82k), and then watch the full [Why React Query](https://youtu.be/OrliU0e09io?si=n7cISGF2BENoFumV) video.

[**TanStack Start**](https://tanstack.com/start/latest) "is a full-stack React framework powered by TanStack Router. It provides a full-document SSR, streaming, server functions, bundling, and more using tools like Nitro and Vite.".
