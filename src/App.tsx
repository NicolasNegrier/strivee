import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Login } from './pages/Administration/pages/Login'
import { MantineProvider, createTheme } from '@mantine/core'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const queryClient = new QueryClient()
const theme = createTheme({
  cursorType: 'pointer'
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {

  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>

  )
}

export default App
