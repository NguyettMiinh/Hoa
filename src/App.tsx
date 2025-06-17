import { createBrowserRouter, RouterProvider} from 'react-router';
import routes from "./routes/routes";

const router = createBrowserRouter(routes);
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
