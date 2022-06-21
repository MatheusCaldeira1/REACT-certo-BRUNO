import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

import { excluirPaciente, buscarPacientesNome, listarTodosPacientes } from '../../api/pacienteAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './index.scss';


export default function Index() {
    const [pacientes, setPacientes] = useState([]);
    const [filtro, setFiltro] = useState('');

    const navigate = useNavigate();


    async function carregarTodosPacientes() {
        const resp = await listarTodosPacientes()
        setPacientes(resp);
    }
    async function filtrar() {
        const resp = await buscarPacientesNome(filtro);
        setPacientes(resp);
    }

    async function excluirPacienteClick(id, nome) {
        confirmAlert({
            title: 'Remover paciente',
            message: `Deseja mesmo REMOVER ${nome} ?`,
            buttons: [
                {
                    label: 'Sim', onClick: async () => {
                        const resposta = await excluirPaciente(id, nome);
                        if (filtro === '')
                            carregarTodosPacientes();
                        else
                            filtrar();
                        toast('Prontuário removido');
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


    useEffect(() => {
        carregarTodosPacientes();
    }, [])


    return (
        <main className='page-consultar' >
            <ToastContainer/>

            <div className='divb'>
                <div> <Link  className='b1' to="/menu">Voltar</Link> </div>
                <div> </div>
                    
               </div>
            <div className='main'>
            

                <h1>Consultar um Prontuário</h1>
                <div className='cx'>

                    <div> <input type="text" className='search-txt' placeholder='Buscar por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />

                    </div>

                    <div ><img src='./image/622669.png' onClick={filtrar} /></div>

                </div>

                <div>
                    {pacientes.map(item =>
                        <div className='c1'>
                            <div>
                                <button className='btnome' style={{width: '2.5em', textAlign: 'center'}}>
                                 {item.id}
                                </button>
                                &nbsp;
                                 <button className='btnome' style={{width: '13em', textAlign: 'left'}}>
                                    {item.nome}
                                </button>
                                &nbsp;
                                <button className='btnome' onClick={() => alterarPacienteClick(item.id)}>Editar</button>
                                &nbsp;
                                <button className='btnome' onClick={() => excluirPacienteClick(item.id, item.nome)} >Remover</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </main>

    )
}
