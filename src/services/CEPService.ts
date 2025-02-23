import ICEPService from "../types/ICEPService";
import type Address from "../types/Address";

class CEPService extends ICEPService {
  async getAddress(cep: string | number): Promise<Address | string> {
    try {
      if (!ICEPService.isValidCEP(cep)) {
        throw new Error("Invalid CEP format");
      }

      const response = await fetch(`${this.baseURL}/${cep}/json`);

      if (!response.ok) {
        throw new Error("Invalid CEP");
      }

      const addressData = await response.json();

      return {
        zipcode: addressData.cep,
        street: addressData.logradouro,
        complement: addressData.complemento,
        unit: addressData.unidade,
        neighborhood: addressData.bairro,
        city: addressData.localidade,
        stateAbbreviation: addressData.uf,
        state: addressData.uf,
        region: addressData.regiao,
        ibge: addressData.ibge,
        gia: addressData.gia,
        areaCode: addressData.ddd,
        siafi: addressData.siafi,
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      }
      return "An unknown error occurred";
    }
  }
}

const cepService = new CEPService();
export default cepService;