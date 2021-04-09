import React, {useState} from 'react'
import {auth} from '../firebaseconfig'
import {useHistory} from 'react-router-dom'

function Login() {
    const historial = useHistory()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msgerror, setMsgerror] = useState(null)
    const RegistrarUsuario = (e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
        .then(r =>  historial.push('/'))
        .catch(e=>{
            if(e.code == 'auth/invalid-email'){
                setMsgerror('Formato de email incorrecto')
            }
            if(e.code == 'auth/weak-password'){
             setMsgerror('Contraseña debe de tener al menos 6 carácteres')
         }
        })
       
    }

    const LoginUsuario = ()=>{
        auth.signInWithEmailAndPassword(email,pass)
        .then(r =>  historial.push('/'))
        .catch((err)=>{
            //auth/wrong-password
            //"auth/user-not-found"
            if (err.code == "auth/wrong-password" ){
                setMsgerror('Password incorrecto')
            }
            if (err.code == "auth/user-not-found" ){
                setMsgerror('Usuario incorrecto')
            }
        })
    }
    return (
        <div className="row mt-5">
           <div className="col"></div>
           <div className="col">
               <form onSubmit= {RegistrarUsuario} className='form-group'>
                   <input 
                   onChange={(e)=>{setEmail(e.target.value)}}
                   className="form-control"
                   placeholder='Introduce el email'
                   type="email"/>
                   <input  
                   onChange={(e)=>{setPass(e.target.value)}}
                   className="form-control mt-4" 
                   placeholder='Introduce la contraseña'
                   type="password"/>
                   <input
                   className="btn btn-dark btn-block mt-4" 
                   value="Registrar usuario"
                   type="submit"/>
               </form>
               {
                   msgerror !=null ? 
                   (
                       <div>
                           {msgerror}
                       </div>
                   )
                   :
                   (
                       <span></span>
                   )
               }
               <button
               className="btn btn-success btn-block"
               onClick={LoginUsuario}>
                Iniciar sesión
               </button>
           </div>
           <div className="col"></div>
        </div>
    )
}

export default Login
