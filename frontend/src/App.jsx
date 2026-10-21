import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./components/First";
import Home from "./pages/Home";
import AddProduct from "./pages/admin/AddProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/add",
        element: <AddProduct />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
