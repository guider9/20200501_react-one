import React, { Component } from 'react'
import { Form, Input, Button, Icon } from 'antd'
import logo from './images/logo192.png'
import './login.less'
const Item = Form.Item
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault()
        // const form = this.props.form
        // const values = form.getFieldsValue()
        // const username = form.getFieldValue('username')
        // const password = form.getFieldValue('password')
        // console.log(values, username, password)
        this.props.form.validateFields((err,{username,password})=>{
            if(!err){
                alert(`发ajax请求 username=${username}, password=${password}`)
            }else{
                // alert('用户名,密码不能为空,验证失败')
            }
        })
    }
    validatPwd=(rule, value, callback)=>{
        value=value.trim()
        if(!value){
            callback('密码不一致')
        }else if(value.length<6){
            callback('密码不能小于6位')
        }else if(value.length>12){
            callback('密码不能大于12位')
        }else if(/^[a-zA-Z0-9]+$/.test(value)){
            callback('必须以字母数字下划线组成')
        }else{
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
                                        initialValue:'admin',
                                        rules: [
                                            { required: true, message: '请输入用户名', whitespace:true },
                                            { min: 4, message: '用户名不小于4位' },
                                            { max: 12, message: '用户名不大于12位' },
                                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名不能为空' }
                                        ]
                                    })(
                                        <Input prefix={<Icon type='user' className='site-form-item-icon' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='用户名' />
                                    )
                            }

                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password',
                                    {
                                        rules: [
                                            { validator: this.validatPwd},
                                            
                                        ]
                                    }
                                )(
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