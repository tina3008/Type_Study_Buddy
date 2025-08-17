import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import Loader from "../../components/Loader/Loader.jsx";
// import { selectLoading, selectError } from "../../redux/selectors.js";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

export default function App() {
  // const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);

  return (
    <div>
      <HelmetProvider>    
        <Navigation />
        {/* {loading && <Loader />} */}
        {/* <Suspense fallback={<Loader />}> */}
          <Routes>
            <Route path="/" element={<HomePage />} />


            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        {/* </Suspense> */}
      </HelmetProvider>
    </div>
  );
}
