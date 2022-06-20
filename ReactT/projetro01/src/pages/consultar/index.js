import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

import {excluirPaciente, buscarPacientesNome, listarTodosPacientes} from '../../api/pacienteAPI';



import './index.scss';

export default function Index(){
    const [pacientes, setPacientes] = useState([]);
    const [filtro, setFiltro] = useState('');

    const navigate = useNavigate();


    async function carregarTodosPacientes(){
        const resp= await listarTodosPacientes()
        setPacientes(resp);
    }
    async function filtrar(){
        const resp = await buscarPacientesNome(filtro);
        setPacientes(resp);
    }
 
    async function excluirPacienteClick(id, nome){
        confirmAlert({
            title:'remover paciente',
            message:`deseja mesmo remover ${nome} ?`,
            buttons: [ 
            {
                label: 'Sim', onClick: async () => {
                    const resposta = await excluirPaciente(id,nome);
                    if(filtro === '')
                    carregarTodosPacientes();
                    else
                    filtrar();
                    alert('Prontuário removido');
                 }
            },
            {
                label: 'Não'
            }

             ]
        })
    }

    function alterarPacienteClick(id) {
        navigate(`/alterar/${id}`)
    }


    useEffect(()=> {
        carregarTodosPacientes();
    },[])


    return(
       <main className='page-consultar' >

         <div className='bca'>
                   <button className='b1'>
                       <Link className='c' to="/menu">Voltar</Link>
                   </button>
               </div>

           <div className='main'>
               
               <h1>Consultar um Prontuário</h1>
               <div className='cx'>
                   
                    <div> <input type="text"  className='search-txt' placeholder='consultar' value={filtro} onChange={e => setFiltro(e.target.value)}/> 

                    </div>
                  
                  <div ><img  src='./image/622669.png' onClick={filtrar}/></div> 
                 
               </div>

              <div>
              {pacientes.map(item=> 
               <div className='c1'> 
                <div>{item.id}</div>
               <div><button className='btnome'>{item.nome}</button></div>
               <div className='c2'>
                   <button className='btnome' onClick={() => alterarPacienteClick(item.id)}>Editar</button>
                 </div>

               <div className='c2'> 
                   <button className='btnome' onClick={() => excluirPacienteClick(item.id,item.nome)} >Remover</button>
              </div> 
              </div>
                )}

            </div>
          </div> 
       </main>

    )
 }
