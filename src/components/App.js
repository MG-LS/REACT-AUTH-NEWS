import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NewsPage from "./pages/NewsPage";


function App() {
  const token = useSelector((state) => state.application.token);

  // if (!token) {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        {/* <Route path="/signin" element={<Navigate replace to="/" />} /> */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          {/* <Route path="/" element={<Navigate replace to="/signin" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
