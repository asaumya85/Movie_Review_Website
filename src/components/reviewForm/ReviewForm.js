// // import {Form,Button} from 'react-bootstrap';

// // const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
// //   const colStyle = {
// //     backgroundColor: 'lightblue',
// //     padding: '10px',
// //     border: '1px solid #ddd',
// //     font:'50px'
// //     // Add more styles as needed
// //   };
// //   return (

// //     <Form style={colStyle}>
// //         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
// //             <Form.Label>{labelText}</Form.Label>
// //             <br/>
// //             <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
// //         </Form.Group>
// //         <br/>
// //         <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
// //     </Form>   

// //   )
// // }
// import React,{useState} from 'react'
// import {Form,Button} from 'react-bootstrap';
// // import '../Login_page/Login.css'

// const ReviewForm = () => {

//     const [userRegistration, setUserRegistration] = useState({
//         username: "",
//         email: "",
//         phone: "",
//         password: ""
//     });

//     const [records, setRecords] = useState([]);

//     const handleInput = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         console.log(name, value);
        
//         setUserRegistration({ ...userRegistration, [name]: value });
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const newRecord = { ...userRegistration, id:new Date().getTime().toString() } 
//         console.log(records);
//         setRecords([...records, newRecord]);
//         console.log(records);   

//         setUserRegistration({ username:"", email: "", phone: "", password: "" });
//     }

//     return (
//         <>
//             <form action="" onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">Fullname</label>
//                     <input type="text" autoComplete="off" 
//                       value={userRegistration.username}  
//                       onChange={handleInput}
//                      name="username" id="username"/>
//                 </div>

//                 <div>
//                     <label htmlFor="email">email</label>
//                     <input type="text" autoComplete="off" 
//                       value={userRegistration.email}  
//                       onChange={handleInput}
//                      name="email" id="email"/>
//                 </div>

//                 <div>
//                     <label htmlFor="phone">phone</label>
//                     <input type="text" autoComplete="off" 
//                       value={userRegistration.phone}  
//                       onChange={handleInput}
//                      name="phone" id="phone"/>
//                 </div>

//                 <div>
//                     <label htmlFor="password">password</label>
//                     <input type="password" autoComplete="off" 
//                       value={userRegistration.password}  
//                       onChange={handleInput}
//                      name="password" id="password"/>
//                 </div>

//                 <button type="submit">Registration</button>
//             </form>

//             <div>
//                 {
//                     records.map((curElem) => {
//                         const { id, username, email, phone, password } = curElem;
//                         return (
//                             <div className="showDataStyle" key={id} >
//                                 <p>{username}</p>
//                                 <p>{email}</p>
//                                 <p>{phone}</p>
//                                 <p>{password}</p>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )   
// }

// // export default Login
// export default ReviewForm

import {Form,Button} from 'react-bootstrap';

const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  return (

    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>   

  )
}

export default ReviewForm