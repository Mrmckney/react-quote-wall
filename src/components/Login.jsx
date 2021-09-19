import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FloatingLabel, Form, Button } from 'react-bootstrap'

function Login({setUser}){

    let history = useHistory()

    const [password, setPassword] = useState(null)
    const [email, setEmail] = useState(null)

    const handleSubmit = () => {
        if(email !== null && password !== null){
        fetch('http://localhost:5000/login', {
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
            if(data.status === 401){
                return alert(data.message)
            }
            if(data.status === 200){
                setUser(data)
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
            <h1 style={{ marginLeft: 150, marginBottom: 20}}>Login</h1>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </FloatingLabel>
            <Button style={{ marginTop: 30 }} onClick={handleSubmit}>Login</Button>
        </div>
    )
}

export default Login