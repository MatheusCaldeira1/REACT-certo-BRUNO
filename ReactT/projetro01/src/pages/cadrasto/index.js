import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import storage, { set } from 'local-storage' ;

import { alterarProntuario, cadastrarProntuario, listarId } from '../../api/pacienteAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import { confirmAlert } from 'react-confirm-alert';


export default function Index(){
const [nome,setNome] = useState('');
const [dtNascimento,setDtNascimento] = useState('');
const [cep,setCep] = useState('');
const [endereco,setEndereco] = useState('');
const [telefone,setTelefone] = useState('');
const [consulata,setConsulta] = useState('');
const [queixaprincipal,setQueixaPrincipal] = useState('');
const [outrasqueixas,setOutrasQueixas] = useState('');
const [anamnese,setAnamnese] = useState('');
const [hipotese,setHipotese] = useState('');
const [temtratant,setTemtratant] = useState(false);
const [usamedicamentos,setUsamedicamentos] = useState(false);
const [trat_ant,setTratant] = useState('');
const [medicamentosUtilizados, setMedicamentosUtilizados] = useState('');
const [diagnostico,setDiagnostico] = useState('');
const [metasalcancadas,setmetasalcacandas] = useState('');
const [sessoesrealizadas,setSessoesrealizadas] = useState('');
const [proximassessoes,setProximassessoes] = useState('');
const [id,setId] = useState(0);


const { idParam } = useParams();

useEffect(() => {
    if (idParam) {
        carregarProntuario();
    }
}, [])

async function carregarProntuario() {
    const r = await listarId(idParam);

    setId(r.id);
    setNome(r.nome);
    setDtNascimento(r.nascimento.substr(0, 10));
    setCep(r.cep);
    setEndereco(r.endereco);
    setTelefone(r.telefone);
    setConsulta(r.dataConsulta.substr(0, 10));
    setQueixaPrincipal(r.queixaprincipal);
    setOutrasQueixas(r.outrasqueixas);
    setAnamnese(r.anamnese);
    setHipotese(r.hipotese);
    setTemtratant(r.temtratant);
    setUsamedicamentos(r.usamedicamento);
    setTratant(r.tratamentoanteriores);
    setMedicamentosUtilizados(r.medicamentousados);
    setDiagnostico(r.diagnostico);
    setmetasalcacandas(r.metasalcancadas);
    setSessoesrealizadas(r.sessoesrealizadas);
    setProximassessoes(r.proximassessoes);

    console.log(r);
}


async function botaoCadastrar(){
    try{
        const usuario = storage('usuario-logado').id;
        if(id === 0){ 
        const r = await cadastrarProntuario(nome,dtNascimento,cep,endereco,telefone,
            consulata, queixaprincipal, outrasqueixas,anamnese,hipotese,temtratant,
            usamedicamentos,trat_ant,medicamentosUtilizados,diagnostico,metasalcancadas,
            sessoesrealizadas,proximassessoes,usuario);
            setId(r.id);
            toast(`Paciente Cadastrado 🔥🔥`)
            }
            else
            { 
            await alterarProntuario(id,nome,dtNascimento,cep,endereco,telefone,
                consulata, queixaprincipal, outrasqueixas,anamnese,hipotese,temtratant,
                usamedicamentos,trat_ant,medicamentosUtilizados,diagnostico,metasalcancadas,
                sessoesrealizadas,proximassessoes,usuario)  
                toast('PRONTUÁRIO ALTERADO COM SUCESSO 😁')
            }
          
    }catch(err){
        toast(err.response.data.erro)
    }
}
function botaoAlterarSalvar(){
    setId(0);
    setNome('');
    setDtNascimento('');
    setCep('');
    setEndereco('');
    setTelefone('');
    setConsulta('');
    setQueixaPrincipal('');
    setOutrasQueixas('');
    setAnamnese('');
    setHipotese('');
    setTemtratant(false);
    setUsamedicamentos(false);
    setTratant('');
    setMedicamentosUtilizados('');
    setDiagnostico('');
    setmetasalcacandas('');
    setSessoesrealizadas('');
    setProximassessoes('');
}

    return(

       <main className='page-cadrastro' >
            <ToastContainer />

        <div className='c2'>
            <Link className='button' to="/menu">Voltar</Link>
        </div>


      <div className='main'>

    
     
      <div className='cabecalho'>
       <h3 className='titulo'>Cadastrar um Prontuário</h3>
      </div>
    
    
      
     <div className='formulario1'>
                        <div className='cadrasto1'>
                            <div>
                                <h3>Nome</h3>
                                <input  type="text" value={nome} onChange={e => setNome(e.target.value)} />
                            </div>
                            <div>
                                <h3>
                                Cep
                                </h3>
                                <input type="text"value={cep} onChange={e => setCep(e.target.value)}/>
                            </div>
                            <div >
                                <h3>
                                Endereço
                                </h3>
                                <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
                            </div>
                        </div>

                        <div className='cadrastro1'>
                            <div>
                                <h3>
                                Data de Nascimento
                                </h3>
                                <input type="date" value={dtNascimento} onChange={e => setDtNascimento(e.target.value)}/>
                            </div>
                            <div >
                            <h3>
                                Telefone
                            </h3>
                            <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                        </div>
                        <div >
                            <h3>
                                Data da Consulta
                            </h3>
                            <input type="date" value={consulata} onChange={e => setConsulta(e.target.value)}/>
                        </div>
                        
                        </div>
    </div>

    <div className='formulario2'>
                        <div >
                            <h2>Queixa Principal </h2>
                            <textarea  className='c1' value={queixaprincipal} onChange={e => setQueixaPrincipal(e.target.value)}> </textarea>
                        </div>
                        <div  className='p1'>
                            <h2>Queixa Secundária </h2>
                            <textarea  className='c1' value={outrasqueixas} onChange={e => setOutrasQueixas(e.target.value)}></textarea>
                        </div>
                        <div className='p1' >
                            <h2>Anamnese </h2>
                            <textarea  className='c1' value={anamnese} onChange={e => setAnamnese(e.target.value)}></textarea>
                   </div>
                   <div className='p1' >
                            <h2>Hipótese </h2>
                            <textarea  className='c1' value={hipotese} onChange={e => setHipotese(e.target.value)}></textarea>
                   </div>
   </div>

   <div className='formulario3' >
    <h1>Tratamentos e Medicamentos</h1>
    <div>
                <div >
                    <div >
                    <label for="input">Realizou Tratamentos Anteriores</label>
                    <input  type="checkbox" checked={temtratant} onChange={e => setTemtratant(e.target.checked)}/>
                    </div>
                    <div>
                    <label  className='c2' for="input">Usa Medicamentos</label>
                    <input  type="checkbox" checked={usamedicamentos} onChange={e => setUsamedicamentos(e.target.checked)}/>
                </div>

                <div className='p1' >
                    <h2>Tratamentos Anteriores </h2>
                    <textarea   className='c1' type="text" value={trat_ant} onChange={e => setTratant(e.target.value)}></textarea>
                   
                </div>
                <div  className='p1'>
                    <h2>Medicamentos Utilizados </h2>
                    <textarea  className='c1' type="text" value={medicamentosUtilizados} onChange={e => setMedicamentosUtilizados(e.target.value)}></textarea>
                </div>
                <div className='p1'  > 
                    <h2>Diagnósticos </h2>
                    <textarea   className='c1' type="text" value={diagnostico} onChange={e => setDiagnostico(e.target.value)}></textarea>
                </div>    
                <div  className='p1' >
                    <h2>Metas Desejadas </h2>
                    <textarea  className='c1' type="text" value={metasalcancadas} onChange={e => setmetasalcacandas(e.target.value)}></textarea>
                </div>  
                
                <div  className='p1'>
                    <h2>Sessões Realizadas</h2>
                    <textarea   className='c1' value={sessoesrealizadas} onChange={e => setSessoesrealizadas(e.target.value)}></textarea>
                </div>  
                <div className='p1'>
                    <h2> Próximas Sessões  </h2>
                    <textarea  className='c1' value={proximassessoes} onChange={e => setProximassessoes(e.target.value)}></textarea>
                
              </div>
      </div>
      </div> 
    </div>      
   </div> 
   <div className='x2'>
       <button onClick={botaoCadastrar}> 
        {id === 0 ? 'Cadastrar Prontuário' : 'Alterar Prontuário'}
       </button> &nbsp;  &nbsp;
       <button onClick={botaoAlterarSalvar}> Novo </button> &nbsp;  &nbsp;
       
       </div>
     



      </main>

    )
}