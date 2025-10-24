import { RouterProvider } from "react-router-dom"
import { routers } from "@/routes"
import HomePage from "./pages/home-page"
function App() {

    return (
        <>
            {/* <RouterProvider router={routers}/> */}
            <HomePage/>
        </>
    )
}

export default App
