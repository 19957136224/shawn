import React from 'react'
import { Form, Checkbox, Input } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Layout from '../../components/Layout'
import ButtonGroup from '../../components/ButtonGroup'
import Logo from '../../components/Logo'
import './index.less'

const Login = (props) => {

  const handleGoToRegister = () => {
    props.history.push('/register')
  }

  const handleForgetPwd = () => {
    console.log('忘记密码')
  }

  const onFinish = values => {
    console.log('Success:', values)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return <Layout>
    <Form
      layout="vertical"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <span className="login-form-forgot" onClick={handleForgetPwd}>
          忘记密码
        </span>
      </Form.Item>
      <Form.Item>
        <ButtonGroup
          content={[{
            label: "登录",
            options: {
              type: "primary",
              shape: "round",
              htmlType: "submit"
            }
          }, {
            label: "注册",
            options: {
              shape: "round",
              onClick: handleGoToRegister
            }
          }]}
        />
      </Form.Item>
    </Form>
  </Layout>
}

export default Login