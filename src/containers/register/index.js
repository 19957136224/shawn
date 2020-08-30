import React, { useState } from 'react'
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Layout from '../../components/Layout'
import ButtonGroup from '../../components/ButtonGroup'
import Logo from '../../components/Logo'

const Register = (props) => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [pwdConfirm, setPwdConfirm] = useState('')
  // const [type, setType] = useState('')


  const handleGoToLogin = () => {
    props.history.push('/login')
  }

  const onFinish = values => {
    console.log('Success:', values)
  }

  return <Layout>
    <Form
      layout="vertical"
      className="login-form"
      onFinish={onFinish}
    >
      <Form.Item>
        <Logo />
      </Form.Item>
      <Form.Item
        label="用户名:"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        <Input
          placeholder="Username"
          prefix={<UserOutlined />}
        />
      </Form.Item>
      <Form.Item
        label="密码:"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password
          placeholder="Password"
          prefix={<LockOutlined />}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      <Form.Item
        label="密码确认:"
        name="repeat password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password
          placeholder="Repeat Password"
          prefix={<LockOutlined />}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      <Form.Item>
        <ButtonGroup
          content={[{
            label: "注册",
            options: {
              type: "primary",
              shape: "round",
              htmlType: "submit"
            }
          }, {
            label: "已有帐号，去登录",
            options: {
              shape: "round",
              onClick: handleGoToLogin
            }
          }]}
        />
      </Form.Item>
    </Form>
  </Layout>
}

export default Register