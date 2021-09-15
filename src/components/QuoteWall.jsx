import { Card } from 'react-bootstrap'

function QuoteWall() {
    return(
        <div style={{ display: 'flex' }}>
            <Card style={{ width: '18rem', height: '15rem', margin: 20 }}>
                <Card.Body>
                    <Card.Title>Quote</Card.Title>
                    <Card.Text>
                        "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">By Matthew McKney</Card.Subtitle>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', height: '15rem', margin: 20 }}>
                <Card.Body>
                    <Card.Title>Quote</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">By</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default QuoteWall