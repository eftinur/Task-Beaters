import { createBrowserRouter } from 'react-router-dom';
import AddTask from '../pages/Home/AddTask/AddTask';
import Home from '../pages/Home/Home/Home';
import Register from '../pages/Home/Register/Register';
import SignIn from '../pages/Home/SignIn/SignIn';
import Main from '../pages/layout/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/addtask',
                element: <AddTask />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/signin',
                element: <SignIn/>
            }
        ]
    }
]);

export default router;