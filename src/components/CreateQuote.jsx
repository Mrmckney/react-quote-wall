import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function CreateQuote() {

    const [credit, setCredit] = useState(null)
    const [quote, setQuote] = useState(null)

    const handleSubmit = () => {
        fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({credit, quote})
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => alert(err))
    }

    return(
        <Form style={{ margin: "100px" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Quote</Form.Label>
                <Form.Control as="textarea" rows={3} maxLength="100" placeholder="Write quote here" onChange={e => setQuote(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Credit</Form.Label>
                <Form.Control type="email" maxLength="26" placeholder="Name here" onChange={e => setCredit(e.target.value)}/>
            </Form.Group>
            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

export default CreateQuote