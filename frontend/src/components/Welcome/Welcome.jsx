import Alert from 'react-bootstrap/Alert'

function Welcome() {
    return (
        <Alert variant="info" dismissible className="text-center">
            <Alert.Heading>Welcome to Epi.Books !</Alert.Heading>
        </Alert>
    )
}

export default Welcome
