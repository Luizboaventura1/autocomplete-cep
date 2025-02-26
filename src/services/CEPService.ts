import ICEPService from "../types/ICEPService";
import type Address from "../types/Address";

class CEPService extends ICEPService {
  async getAddress(cep: string | number): Promise<Address | string> {
    try {
      this.validateCEP(cep);

      const addressData = await this.fetchAddressData(cep);

      return this.transformAddressData(addressData);
    } catch (error: unknown) {
      return this.handleError(error);
    }
  }

  private validateCEP(cep: string | number): void {
    if (!ICEPService.isValidCEP(cep)) {
      throw new Error("Invalid CEP format");
    }
  }

  private async fetchAddressData(cep: string | number): Promise<any> {
    const response = await fetch(`${this.baseURL}/${cep}/json`);

    if (!response.ok) {
      throw new Error("The request failed");
    }

    const addressData = await response.json();

    if (addressData.cep === undefined) {
      throw new Error("Invalid CEP");
    }

    return addressData;
  }

  private transformAddressData(addressData: any): Address {
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
  }

  private handleError(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unknown error occurred";
  }
}

const cepService = new CEPService();
export default cepService;