import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// Commento al prof.: specifico delle istruzioni visto che putroppo per mancanza di tempo non sono riuscito
// a svolgere molto di tutte le funzionalitá affrontate nel programma di studio in questo modulo.
// Riassumo cosa é stato aggiunto dal vecchio modulo ad ora visto che il frontend é lo stesso:

// trasferiti i dati dei libri (importati, perché non vi é la possibilitá di crearli tramite l'app) e commenti sul db in cloud e le relative chiamate api tramite il
// backend, fatte le dovute referenziazioni, implementata la pagination nella home ed aggiunta la pagina di login con l'autenticazione e la generazione del token

// Cosa non é stato fatto:
// non vi é una pagina di registrazione perció é possibile creare uno user solo da PostMan, non c'é una sezione dedicata alla creazione/upload dei libri per gli utenti
// autori, non c'é un login tramite oAuth, non é stato deployato il sito.

// Manca molto per cui spero di recuperare se possibile.

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
                localStorage.setItem('user', JSON.stringify(loginData.email))
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
