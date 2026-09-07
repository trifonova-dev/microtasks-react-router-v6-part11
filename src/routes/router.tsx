import {Error404} from "../components/pages/Error404";
import {App} from "../App";
import {createBrowserRouter} from "react-router-dom";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma.tsx";
import {Abibas} from "../components/pages/Abibas.tsx";
import {Prices} from "../components/pages/Prices.tsx";
import {Model} from "../components/pages/Model";
import {ProtectedRoute} from "../components/pages/ProtectedRoute";
import {ProtectedPage} from "../components/pages/ProtectedPage";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    PROTECTED: '/protectedPage',
    ERROR404: '/error',

} as const


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {path: PATH.ADIDAS, element: (<Adidas/>)},
            {path: PATH.PUMA, element: (<Puma/>)},
            {path: PATH.ABIBAS, element: (<Abibas/>)},
            {path: PATH.PRICES, element: (<Prices/>)},
            {path: PATH.MODEL, element: (<Model/>)},
            {path: PATH.PROTECTED, element: (<ProtectedRoute><ProtectedPage/></ProtectedRoute>)},
            {path: PATH.ERROR404, element: (<Error404/>)}

        ],
    },
]);
