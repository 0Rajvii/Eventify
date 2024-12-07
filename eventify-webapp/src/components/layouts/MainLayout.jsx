import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAccessToken, getUserFromLocalstorage } from '../../services/localstorage';
import { Layout } from 'antd';

const { Content } = Layout;

const MainLayout = () => {
    const token = getAccessToken();
    const user = getUserFromLocalstorage();

    if (!token || !user) {
        return <Navigate to="/auth/login" />;
    }

    return (
        <Layout>
            <Content className="flex-grow-1 overflow-auto">
                <Outlet />
            </Content>
        </Layout>
    );
};

export default MainLayout;