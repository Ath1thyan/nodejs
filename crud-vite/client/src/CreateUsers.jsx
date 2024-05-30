import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function CreateUser(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/createUser',{name,email,age})
       .then(res=>{
        console.log(res)
        navigate('/')
    })
    }

    return(
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"> 
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={handleSubmit}>
                        <h2>Add User</h2>
                        <div className="mb-2">
                            Name:
                            <input type="text" placeholder="Enter Name" className="form-control" onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                            Email:
                            <input type="text" placeholder="Enter Email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                            Age:
                            <input type="text" placeholder="Enter Age" className="form-control" onChange={(e) => setAge(e.target.value)}/>
                        </div>
                        <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;