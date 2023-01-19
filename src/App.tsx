import { RouterProvider } from "react-router-dom";
import "./styles/main.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import router from "./router";

function App() {
  return (
    <div>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
