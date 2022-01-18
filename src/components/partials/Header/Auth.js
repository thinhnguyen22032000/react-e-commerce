import React, { useContext, useState } from "react";
import { authContext } from "../../../context/authContext";
import { Button, Divider, Input, Modal } from 'antd'




const Auth = ({acitive}) => {
    const { user } = useContext(authContext)
    const [ isLogin, setIsLogin] = useState(false)
    const [ loginToggle, setLoginToggle ] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [textError, setTextError] = useState(null)

    const handleLoginForm = () => {
        
        if(user.username === username && user.password === password) {
            setLoginToggle(false)
            setIsLogin(true)
            console.log('success')
        }else{
            setTextError('Username or password not match') 
        }
    }

    const handleLogout = () => {
        const confirm = window.confirm("Ban muon dang xuat")
        if(confirm == true)
        setIsLogin(false)
    }


    return (
        <>
            {isLogin? (
                <Button onClick={handleLogout}>Logout</Button>
            ):(
                <>
                <Button onClick={() => setLoginToggle(true)}>Login</Button>
                <Modal
                 visible={loginToggle}
                 title="Login Form"
                 onCancel={() => setLoginToggle(false)}
                 onOk={handleLoginForm}
                 okText="Login"
                >
                {textError && (
                    <Divider orientation="center">{textError}</Divider>
                )}
                <Input value={username} onChange={e => setUsername(e.target.value)} placeholder="username"/>
                <br />
                <br />
                <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="password"/>
                <br />
                </Modal>
                </>
            )}
        </>
    )
}

export default Auth