
import { Link } from 'react-router-dom';
import { login } from '../../api/usuarioAPI'
import storage from 'local-storage'
import  LoadingBar  from 'react-top-loading-bar'
import {useNavigate} from 'react-router-dom'
import {useState, useRef, useEffect} from 'react'

import './index.scss'

export default function Index() {

    const [email, setEmail ] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();
    
    useEffect(() => {
        if(storage('asuario-logado'))
            navigate('/menu') ;
    }, [])
    

     async function   entrarClick(){
        ref.current.continuousStart();
        setCarregando(true);

         try{
              const r = await login(email,senha);
              storage('asuario-logado', r);
              

            setTimeout(()=>{
                navigate('/menu');
            }, 3000);

          

        }catch(err){
            ref.current.complete();
            setCarregando(false)
             
            if(err.response.status===401){
                setErro(err.response.data.erro)
            }
            
            
        }
    }


    return(
    
       <main className='page-login' >
       
                <LoadingBar color='#f11946' ref={ref}/>
         
            <div className='body'>
         
            <div>
                   <button className='button2'>
                   <Link to="/"> voltar </Link>
                   </button>
              

              </div>
            

                    <div className='div1'>
                        <h1>Login</h1>
                        <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} /> 
                    <br />   <br />
                        <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                        <br />
                        <br />
                        <button className='button' onClick={ entrarClick} disabled={carregando}>  Entrar </button>
                        <div> {erro} </div>
                        
                    </div>
            
                   
            </div>
    </main>
    )
  
}