import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='profile'
            element={
              <ProtectedLayout>
                <h2>Olá! Você acabou de logar no nosso sistema.</h2>
              </ProtectedLayout>
          }>
          </Route>

          <Route
            path='login'
            element={
              <Login />
            }
          >

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
