import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import { getAccessToken, getUserFromLocalstorage } from '../../services/localstorage';

const { Sider, Content } = Layout;

const MainLayout = () => {
  const token = getAccessToken();
  const user = getUserFromLocalstorage();

  if (!token || !user) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <Layout className="d-flex vh-100">
      <Sider className="text-white main-layout-section">
        <div className="main-navigation h-100 d-flex flex-column">
          <ul className='list-unstyled flex-grow-1'>
            <li className="px-3 py-2 mt-3">
              <Link className="text-white text-decoration-none" to={'/'}>Dashboard</Link>
            </li>
            <li className="px-3 py-2">
              <Link className="text-white text-decoration-none" to={'/event-lists'}>Events</Link>
            </li>
            <li className="px-3 py-2">
              <Link className="text-white text-decoration-none" to={'/contacts'}>Contacts</Link>
            </li>
            <li className="px-3 py-2">
              <Link className="text-white text-decoration-none" to={'/feedback'}>Feedback</Link>
            </li>
            <li className="px-3 py-2">
              <Link className="text-white text-decoration-none" to={'/event-bookings'}>Event Bookings</Link>
            </li>
          </ul>
        </div>
      </Sider>
      <Layout>
        <Content className="flex-grow-1 overflow-auto">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
