import { RouterProvider } from '@tanstack/react-router';
import router from './router';
import './app.css';

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
