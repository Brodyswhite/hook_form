import React, {useState} from 'react';

const Person = props => {

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
    }

    return (
        <>
        <form className="col-5 mx-auto my-5" onSubmit={handleSubmit}>
            <h2 className="text-center">Create ID</h2>
            <div className="form-group">
                <label >First Name</label>
                <input 
                type="text"
                className="form-control"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value) }
                />
            </div>
            <div className="form-group">
                <label >Last Name</label>
                <input 
                type="text"
                className="form-control"
                value={lastname}
                onChange={(e) => setLastname(e.target.value) }
                />
            </div>
            <div className="form-group">
                <label >Email</label>
                <input 
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value) }
                />
            </div>
            <div className="form-group">
                <label >Password</label>
                <input 
                type="text"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value) }
                />
            </div>
            <div className="form-group">
                <label >Confirm Password</label>
                <input 
                type="text"
                className="form-control"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value) }
                />
            </div>
            <input type="submit" value="Create ID" className="btn btn-success"/>
        </form>
        <div className="col-5 mx-auto card">
            <div className="card-body">
                <h4 className="card-title">{firstname} {lastname}</h4>
                <p className="card-text">{email}</p>
                <p className="card-text">{password}</p>
                <p className="card-text">{confirmpassword}</p>
            </div>
        </div>
        </>
    );
}

export default Person;