import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FloatingLabel, Form, Button } from 'react-bootstrap'

function Signup({setUser}){

    let history = useHistory()

    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)

    const handleSubmit = () => {
        if(email !== null && password !== null){
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password, email})
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 500){
                return alert(data.message)
            }
            if(data.status === 200){
                setUser(data.user.email)
                localStorage.setItem('user', data.user.email)
                history.push('/')
                return
            }
        })
        .catch(err => alert(err.message))
    }
    else {
        return alert("Missing email or password")
    }
    }

    return(
        <div style={{ marginLeft: '500px', marginRight: '500px', marginTop: 100}}>
            <h1 style={{ marginLeft: 150, marginBottom: 20}}>Sign Up</h1>
            <Form>
                <Form.Group>
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </FloatingLabel>
                </Form.Group>
                <Button style={{ marginTop: 30 }} onClick={handleSubmit}>Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup