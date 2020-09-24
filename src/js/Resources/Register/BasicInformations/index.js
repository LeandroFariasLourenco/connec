export default [
  {
    id: 1,
    readOnly: false,
    label: 'Nome:',
    fill: true,
    required: true,
    spaced: false,
    maxLength: 50,
    type: 'text',
    name: 'nome',
    pattern: /[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ]/gi,
    hasMask: false
  },
  {
    id: 2,
    readOnly: false,
    label: 'Rg:',
    fill: false,
    required: true,
    spaced: false,
    maxLength: 12,
    type: 'text',
    name: 'registroGeral',
    pattern: /(\d{1,2})\.?(\d{3})\.?(\d{3})-?(\d{1})/i,
    hasMask: true,
    replace: '$1.$2.$3-$4'
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
    name: 'CPF',
    pattern: /(\d{3})-?(\d{3})-?(\d{3}).?(\d{2})/i,
    hasMask: true,
    replace: '$1-$2-$3.$4'
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
    required: null,
    maxLength: 15,
    type: 'text',
    name: 'celular',
    pattern: /[(]?(\d{2})[)]?\s?(\d{5})-?(\d{4})/i,
    hasMask: true,
    replace: '($1) $2-$3'
  },
  {
    id: 6,
    readOnly: false,
    label: 'Telefone:',
    spaced: true,
    fill: false,
    required: null,
    maxLength: 9,
    type: 'text',
    name: 'telefone',
    pattern: /(\d{4})-?(\d{4})/i,
    hasMask: true,
    replace: '$1-$2'
  },
  {
    id: 7,
    label: 'Cep:',
    fill: true,
    required: true,
    spaced: false,
    maxLength: 13,
    readOnly: false,
    type: 'text',
    name: 'cep',
    pattern: /(\d{5})-?(\d{3})/i,
    hasMask: true,
    replace: '$1-$2'
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
    name: 'logradouro'
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
    name: 'localidade'
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
    type: 'text',
    name: 'complemento'
  }
];
