import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Main from "./Components/Main/Main";
import Error from "./Components/Error/Error.jsx";
import Countries from "./Components/Countries/Countries.jsx";
import CardDetail from "./Components/CardDetail/CardDetail.jsx";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [inputVal, setInputVal] = useState("");

  const handleInputVal = (e) => {
    setInputVal(e.target.value);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: (
            <Countries
              data={data}
              inputVal={inputVal}
              handleInputVal={handleInputVal}
            />
          ),
        },
        {
          path: "/:name",
          element: <CardDetail data={data} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
