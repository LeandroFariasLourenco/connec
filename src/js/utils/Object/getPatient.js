/**
 * @param {object} stored
 * @description Will return the object setup for registering a patient
 */
const getPatient = (stored, image, codigoEndereco) => {
  const patient = {
    celular: stored.celular,
    cpf: stored.cpf,
    dataNascimento: stored.dataNascimento,
    nome: stored.nome.split(/\s/g)[0],
    sobrenome: stored.nome.split(/\s/g)[1],
    rg: stored.rg,
    score: stored.score,
    orgaos: stored.orgaos,
    foto: image,
    telefone: stored.telefone,
    tipoSanguineo: stored.tipoSanguineo,
    endereco: {
      numero: stored.numero,
      complemento: stored.complemento,
      cidade: stored.cidade,
      uf: stored.uf,
      logradouro: stored.logradouro,
      cep: stored.cep
    }
  };

  if (codigoEndereco) {
    patient.endereco.codigo = codigoEndereco;
  }

  return patient;
};

export default getPatient;
