## Topics for Today & Tomorrow

<!-- - 3rd party component libraries
- Display component libraries: reactstrap -->

<!-- - Container components (manage state) vs. Display components (render dom) -->

- Routing in a Single Page Application with React Router
- Browser Router
- Leaving out the path: Rendering 404 components"
- Browser Router vs Hash Router
- Navigation to a Path with <Link>
- The Browser History API 


## Steps to Follow for Implementing Routing inside React Application

- First Step: Install react router dom with command : `npm i react-router-dom`

- Import {BrowserRouter} from "react-router-dom" inside Index.js in our example

- Wrap you App component inside the <BrowserRouter> <App/> <BrowserRouter> component inside Index.js or where you want use it.

- In Our App.jsx we imported `Routes` from react-router-dom to define every single route
- Then we imported `Route` from react-router-dom to use it inside the `Routes` component to define path names and their respective component that we want to render.

- we created `*` route that will handle all request for the paths that are not defined. it can be use to render Page not found component.

- We created a NavBar and imported it inside the App.jsx. In side the Navbar we used the `Link` that was imported from react-router-dom to navigate between the components because if we use the `a` tag it will reload our application that we dont want.

- We have created a dynamic route that was achieved by writing `:` inside the path. e.g. `path="/users/:userId"`

- In above path userId will be url variable and what every we write in our url that comes after /users/ will be stored inside that variable.
that is actually parameter.

- We use `useParams` hook inside the `SingleUser` component to access the value of `userId`



-