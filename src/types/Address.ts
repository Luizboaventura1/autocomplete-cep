export default interface Address {
  cep: string;
  street: string;
  complement?: string;
  unit: string;
  neighborhood: string;
  city: string;
  stateAbbreviation: string;
  state: string;
  region: string;
  ibge: string;
  gia: string;
  areaCode: string;
  siafi: string;
}