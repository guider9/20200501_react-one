import React, { Component } from 'react'
import { Form, Input, Button, Icon } from 'antd'
import logo from './images/logo192.png'
import './login.less'
const Item = Form.Item
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault()
        //const form = this.props.form
        // 统一规则验证
        this.props.form.validateFields((err,{username,password})=>{
            if(!err){
            //    console.log('请输入正确的用户名密码',values)
               alert(`发登录AJAX请求,username=${username},password=${password}`)
            }else{
                alert('验证失败')
            }
        })
        // const form = this.props.form
        // const values = form.getFieldsValue()
        // const user = form.getFieldValue('username')
        // const pwd = form.getFieldValue('password')
        // console.log(values, user, pwd)
        //alert('发送AJAX请求数据')
    }
    // 自定义规则验证
    validatorpwd = (rule, value, callback) => {
        value = value.trim()
        if (!value) {
            callback('必须输入')
        } else if (value.length < 6) {
            callback('必须大于6位')
        } else if (value.length > 12) {
            callback('必须小于12位')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('必须以字母数字下划线组成')
        } else {
            callback()
        }

    }
    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <div className='login'>
                <div className="login-header">
                    <img src={logo} alt="logo192" />
                    <h1>React项目:后台管理应用</h1>
                </div>
                <div className="login-content">
                    <h2>用户登录</h2>
                    <Form
                        onSubmit={this.handleSubmit}
                        className="login-form"
                    >
                        <Item>
                            {
                                getFieldDecorator('username',
                                    {
                                        initialValue:'',//配置初始值
                                        //内置规则验证,输入时时验证
                                        rules: [
                                            { required: true, message: '请输入用户名' },
                                            { whitespace: true, message: '不能为空格' },
                                            { min: 4, message: '用户名必须大于4位' },
                                            { max: 8, message: '用户名必须小于8位' },
                                            { pattern: /^[a-zA-Z0-9_]+$/, message: '必须以字母数字下划线组成' }
                                        ]
                                    })(
                                        <Input prefix={<Icon type='user' className='site-form-item-icon' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='用户名' />
                                    )
                            }



                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password', {
                                    initialValue:'',
                                    rules: [
                                        {
                                            validator: this.validatorpwd
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type='lock' className='site-form-item-icon' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='用户名密码' />
                                )
                            }



                        </Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='login-form-button'>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrapperForm = Form.create()(Login)
export default WrapperForm