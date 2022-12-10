import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Books from "./routes/books/Books";
import Categories from "./routes/Categories";

const App = () => (
  <>
    <main>
      <section className="app-container">
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Routes>
      </section>
    </main>
  </>
);

export default App;
