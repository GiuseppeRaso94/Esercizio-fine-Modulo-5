import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const navigate = useNavigate()

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setLoginData({
            ...loginData,
            [name]: value,
        })
    }
    const postRequest = async () => {
        try {
            const response = await fetch(`${process.env.BE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            })
            const data = await response.json()
            if (response.ok) {
                localStorage.setItem('auth', JSON.stringify(data.token))
                navigate('/homepage', { replace: true })
            }
            return response
        } catch (e) {
            console.log(e.message)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await postRequest()
    }
    return (
        <Container className="vh-100">
            <Row className="h-100">
                <Col className="vh-100">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <h1 className="text-white pb-5">Epi.Books login</h1>
                        <form
                            className="d-flex flex-column gap-4"
                            onSubmit={onSubmit}
                        >
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                onChange={onChangeInput}
                            />
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="E-password"
                                onChange={onChangeInput}
                            />
                            <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
