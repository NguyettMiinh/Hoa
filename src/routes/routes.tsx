import LayoutDefault from "../layout/Layout";
import LoginForm from "../page/auth/LoginForm";
import SignupForm from "../page/auth/SignupForm";
import Home from "../page/home/Home";
import ProductDetail from "../page/home/ProductDetailt";
const routes = [
    {
        path:"/layout",
        element: <LayoutDefault />,
        children: [
            {path: "login", element: <LoginForm />},
            {path: "register", element: <SignupForm />},
            {path: "home", element: <Home />},
            {path: "product/:id", element: <ProductDetail />}
        ]
    }
]

export default routes;