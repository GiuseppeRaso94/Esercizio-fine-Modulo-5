import { Container } from 'react-bootstrap'

const Main = ({ children, classname }) => {
    return <Container className={classname}>{children}</Container>
}

export default Main
