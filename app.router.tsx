import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from './src/shop/layouts/ShopLayout';
import { HomePages } from './src/shop/pages/home/HomePages';
import { GenderPage } from './src/shop/layouts/gender/GenderPage';
import { AdminProductPage } from './src/admin/pages/product/AdminProductPage';
import { LoginPage } from './src/auth/pages/login/LoginPage';
import { RegisterPage } from './src/auth/pages/register/RegisterPage';
import { DashboardPage } from './src/admin/pages/dashboard/DashboardPage';
import { AdminProductsPage } from './src/admin/pages/products/AdminProductsPage';
import { ProductPage } from './src/shop/product/ProductPage';
import { AdminRoute, NotAuthenticatedRoute } from "@/auth/routes/ProtectedRoutes";


const AuthLayout = lazy(() => import('./src/auth/layouts/AuthLayout'));
const AdminLayout = lazy(() => import('./src/admin/layouts/AdminLayout'));

export const AppRouter = createBrowserRouter([
    //Main routes
    {
        path: "/",
        element: <ShopLayout/>,
        children: [
            {
                index:true,
                element: <HomePages/>
            },
            {
                path: 'product/:idSlug',
                element: <ProductPage/>
            },
            {
                path: 'gender/:gender',
                element: <GenderPage/>
            }
        ]
    },
    //Auth routes
    {
        path: "/auth",
        element: (<NotAuthenticatedRoute><AuthLayout/></NotAuthenticatedRoute>),
        children: [
             {
                index:true,
                element: <Navigate to='/auth/login'/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'register',
                element: <RegisterPage/>
            },
            
        ]
    },
    //Admin routes
    {
        path: "/admin",
        element: (<AdminRoute><AdminLayout/></AdminRoute>),
        children: [
             {
                index:true,
                element: <DashboardPage/>
            },
            {
                path: 'products',
                element: <AdminProductsPage/>
            },
            {
                path: 'products/:id',
                element: <AdminProductPage/>
            },
            
        ]
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    }
])