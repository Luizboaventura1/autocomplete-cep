class InputValidator {
  constructor() {}

  validateNumber(number: string): boolean {
    if (!number) {
      return false;
    }
    return !isNaN(Number(number));
  }

  validateState(state: string): boolean {
    if (!state) {
      return false;
    }
    return state.length === 2;
  }

  validateCity(city: string): boolean {
    if (!city) {
      return false;
    }
    return city.length > 2;
  }

  validateStreet(street: string): boolean {
    if (!street) {
      return false;
    }
    return street.length > 3;
  }

  validateNeighborhood(neighborhood: string): boolean {
    if (!neighborhood) {
      return false;
    }
    return neighborhood.length > 3;
  }

  validateCep(cep: string): boolean {
    if (!cep) {
      return false;
    }

    const cleanedCep = cep.replace(/\D/g, "");
    return cleanedCep.length === 8;
  }
}

export default new InputValidator();
