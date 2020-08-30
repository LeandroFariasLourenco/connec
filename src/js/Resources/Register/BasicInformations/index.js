export default [
  {
    id: 1,
    readOnly: false,
    label: 'Nome Completo:',
    fill: true,
    required: true,
    spaced: false,
    maxLength: 50,
    type: 'text',
    name: 'nome'
  },
  {
    id: 2,
    readOnly: false,
    label: 'Rg:',
    fill: false,
    required: true,
    spaced: false,
    maxLength: 13,
    type: 'text',
    name: 'registroGeral'
  },
  {
    id: 3,
    readOnly: false,
    label: 'Cpf:',
    fill: false,
    required: true,
    spaced: true,
    maxLength: 14,
    type: 'text',
    name: 'CPF'
  },
  {
    id: 4,
    readOnly: false,
    label: 'Data de nascimento:',
    spaced: false,
    fill: true,
    required: true,
    type: 'date',
    name: 'dataNascimento'
  },
  {
    id: 5,
    readOnly: false,
    label: 'Celular:',
    spaced: false,
    fill: false,
    required: true,
    maxLength: 13,
    type: 'text',
    name: 'celular'
  },
  {
    id: 6,
    readOnly: false,
    label: 'Telefone:',
    spaced: true,
    fill: false,
    required: true,
    maxLength: 13,
    type: 'text',
    name: 'telefone'
  },
  {
    id: 7,
    label: 'Cep:',
    fill: true,
    required: true,
    spaced: false,
    maxLength: 13,
    readOnly: false,
    type: 'text'
  },
  {
    id: 8,
    label: 'Endereço:',
    fill: true,
    required: true,
    spaced: false,
    maxLength: 13,
    readOnly: true,
    type: 'text',
    name: 'endereco'
  },
  {
    id: 9,
    label: 'Cidade:',
    spaced: false,
    fill: false,
    required: true,
    maxLength: 13,
    readOnly: true,
    type: 'text',
    name: 'cidade'
  },
  {
    id: 10,
    label: 'UF:',
    fill: false,
    required: true,
    spaced: true,
    maxLength: 13,
    readOnly: true,
    type: 'text',
    name: 'uf'
  },
  {
    id: 11,
    label: 'Complemento:',
    fill: true,
    required: true,
    spaced: false,
    maxLength: 13,
    readOnly: true,
    type: 'text',
    name: 'complemento'
  }
];
