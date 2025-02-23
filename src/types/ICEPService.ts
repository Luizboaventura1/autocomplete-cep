import type Address from "./Address";

export default abstract class ICEPService {
  protected readonly baseURL = "https://viacep.com.br/ws"

  abstract getAddress(cep: string | number): Promise<Address | string>;

  static isValidCEP(cep: string | number): boolean {
    const cepPattern = /^\d{5}-?\d{3}$/;
    return cepPattern.test(String(cep));
  }
}