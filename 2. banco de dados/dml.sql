INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
     VALUES ('admin', 'admin@admin.com.br', '1234');




-- CSU01:: efetuar login
select id_usuario 		id,
       nm_usuario		nome,
       ds_email			email
  from tb_usuario
 where ds_email 		= 'admin@admin.com.br'
   and ds_senha			= '1234';



  insert into  tb_prontuario_paciente(
id_usuario,
nm_paciente,             	   dt_nascimento,
ds_cep,                        ds_endereco,
ds_telefone,                   dt_consulta,
ds_queixa_principal,   	       ds_outras_queixas,
ds_anamnese,                   ds_hipotese,
bt_tem_trat_ant,               bt_usa_medic,
ds_trat_ant,                   ds_medic_utili,
ds_diagnostico,                ds_metas_alcancadas,
ds_sessoes_realizadas,         ds_proximas_sessoes
)

value (
1,
'João Victor',                                     '2005-12-10', 
500898658,                                         'Av.Miguel yunes', 
961770510,                                         '2022-07-20', 
'Ele é muito chato',                               'Ele é realmente MUITO chato', 
'Não faço a minima ideia do que é isso',           'Hipotese dele ser muito irritante', 
true,                                              true,
true,                                        	   'nada',
'Ele é chato por natureza',                        'nenhuma, ele é um caso perdido', 
'todas',                                           'mais nenhuma por favor'
);



 select id_prontuario	   id,
     nm_paciente			   nome,
     dt_nascimento               nascimento,
     ds_telefone               telefone,
     ds_queixa_principal     queixaprincipal,
     ds_anamnese             anamnese,
     bt_tem_trat_ant        temtratant,
     ds_trat_ant             tramentoanteriores,
     ds_diagnostico          diagnostico,
     ds_sessoes_realizadas    sessoesrealizadas,
	 ds_endereco                 endereço,
	 dt_consulta                consultas,
	 ds_outras_queixas          outrasqueixas,
	 ds_hipotese                 hipotese,
	 bt_usa_medic              usamedicamento,
	 ds_medic_utili            medicamentousados,
	 ds_metas_alcancadas        metasalcancadas,
	 ds_proximas_sessoes       proximasssoes
	from tb_prontuario_paciente;

  select id_prontuario	   id,
     nm_paciente			   nome,
     dt_nascimento               nascimento,
     ds_telefone               telefone,
     ds_queixa_principal     queixaprincipal,
     ds_anamnese             anamnese,
     bt_tem_trat_ant        temtratant,
     ds_trat_ant             tramentoanteriores,
     ds_diagnostico          diagnostico,
     ds_sessoes_realizadas    sessoesrealizadas,
	 ds_endereco                 endereço,
	 dt_consulta                consultas,
	 ds_outras_queixas          outrasqueixas,
	 ds_hipotese                 hipotese,
	 bt_usa_medic              usamedicamento,
	 ds_medic_utili            medicamentousados,
	 ds_metas_alcancadas        metasalcancadas,
	 ds_proximas_sessoes       proximasssoes
	 from tb_prontuario_paciente
 where nm_paciente  like '%a%'
     