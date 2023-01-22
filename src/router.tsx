import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/blogs",
//     element: <Blogs />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/404-not-found",
//     element: <ErrorPage />,
//   },
//   {
//     path: "*",
//     element: <ErrorPage />,
//   },
// ]);

const router = (callBack: any) =>
  createBrowserRouter(
    createRoutesFromElements(
      <>
        <Header callBack={callBack} />
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/404-not-found" element={<HomePage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
        <Footer />
      </>
    )
  );

export default router;
