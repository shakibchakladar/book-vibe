import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ListedBook from "./pages/ListedBook";
import PagesToRead from "./pages/PagesToRead";
import BookDetails from "./pages/BookDetails";
import ReadBooks from "./components/ReadBooks";
import WishList from "./components/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('../public/books.json')
      },
      {
        path:"/bookdetails/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../public/books.json')
      },
      {
        path:"/listedbook",
        element:<ListedBook></ListedBook>,
        loader:()=>fetch('../public/books.json'),
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>,
            loader:()=>fetch('../public/books.json'),
          },
          {
            path:"wishlist",
            element:<WishList></WishList>
          }
        ]
      },
      {
        path:"/pagestoread",
        element:<PagesToRead></PagesToRead>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
