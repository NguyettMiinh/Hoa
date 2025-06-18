import LayoutDefault from "../layout/Layout";
import LoginForm from "../page/auth/LoginForm";
import SignupForm from "../page/auth/SignupForm";
const routes = [
    {
        path:"/layout",
        element: <LayoutDefault />,
        children: [
            {path: "login", element: <LoginForm />},
            {path: "register", element: <SignupForm />}
        ]
    }
]

export default routes;