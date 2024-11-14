import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./component/Navbar";
import Rentmachine from "./component/Rentmachine";
import About from "./component/About";
import Contact from "./component/Contact";
import Video from "./component/Video";
import { useRef } from "react";

function HomePage() {
  const contactRef = useRef(null);

  return (
    <>
      <Navbar contactRef={contactRef} />
      <Video />
      <About />
      <Contact ref={contactRef} />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage /> // Render the main page with Video, About, Contact sections
    },
    {
      path: '/about',
      element: <>
        <Navbar />
        <About />
      </>
    },
    {
      path: '/rentmachine',
      element: <>
        <Navbar />
        <Rentmachine />
      </>
    },
    {
      path: '/contact',
      element: <>
        <Navbar />
        <Contact />
      </>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
