"use client"
import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Avatar, Space, Dropdown, Button, Flex, Tooltip } from 'antd';
import type { MenuProps } from 'antd';
import { MdWorkspacesOutline } from 'react-icons/md';
import Link from 'next/link';
import { DownOutlined, SmileOutlined, LogoutOutlined } from '@ant-design/icons';
import { signOut } from "next-auth/react";

const { Header, Content, Footer, Sider } = Layout;


const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                content
            </div>
        </Content>
    );
};

export default App;