import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../AppLayout/AppLayout";
import { refreshUser } from "reduxFile/auth/operations";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks";
import { RestrictedRoute } from "components/RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";


const HomePage = lazy(()=> import ("pages/HomePage"));
const RegisterPage = lazy(()=> import ("pages/RegisterPage"));
const LoginPage = lazy(()=> import ("pages/LoginPage"));
const ContactsPage = lazy(()=> import ("pages/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  
    return isRefreshing ? (
      <b>Refreshing user...</b>
      ): (<div>
       <Routes>
  <Route path="/" element={<AppLayout />}>
     <Route index element={<HomePage />} />
     
     <Route path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
     <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
     <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        </Route> 
  <Route path="*" element={<Navigate to="/" />} />
       </Routes>
      </div>
    );
  };

  export default App;







  






