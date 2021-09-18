import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

function QuoteWall() {

    const [quoteData, setQuoteData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getallquotes')
        .then(response => response.json())
            .then(quotes => setQuoteData(quotes))
            .catch(err => alert(err))
    }, [])

    return(
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {quoteData.map(quote => {
                return (
                    <Card style={{ width: '18rem', height: '15rem', margin: 20 }} key={quote._id}>
                        <Card.Body>
                            <Card.Title>Quote</Card.Title>
                            <Card.Text>
                                "{quote.quote}"
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">By {quote.credit}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                )
        })}
        </div>
    )
}

export default QuoteWall