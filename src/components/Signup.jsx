import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FloatingLabel, Form, Button } from 'react-bootstrap'

function Signup({setUser}){

    let history = useHistory()

    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)

    const handleSubmit = () => {
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password, email})
        })
        .then(response => response.json())
        .then(data => {
            setUser(data)
            history.push('/')
        })
        .catch(err => alert(err))
    }

    return(
        <div style={{ marginLeft: '500px', marginRight: '500px', marginTop: 100}}>
            <h1 style={{ marginLeft: 150, marginBottom: 20}}>Sign Up</h1>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </FloatingLabel>
            <Button style={{ marginTop: 30 }} onSubmit={handleSubmit}>Sign Up</Button>
        </div>
    )
}

export default Signup