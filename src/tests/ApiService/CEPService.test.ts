import { describe, test, expect } from "vitest";
import cepService from "../../services/CEPService";
import Address from "../../types/Address";

describe("CEPService", () => {
  test("Should return CEP data", async () => {
    const genericCEP = "01001000";
    const { city, region, ibge } = (await cepService.getAddress(genericCEP)) as Address;

    expect(city).toBe("São Paulo");
    expect(region).toBe("Sudeste");
    expect(ibge).toBe("3550308");
  });

  test("It should send an error message if the CEP does not exist", async () => {
    const invalidCEP = "00000000";
    await cepService.getAddress(invalidCEP).catch((error: Error) => {
      expect(error.message).toEqual("The request failed");
    });
  });

  test("It should send an error message if the CEP is invalid", async () => {
    const invalidCEP = "123456789";
    await cepService.getAddress(invalidCEP).catch((error: Error) => {
      expect(error.message).toEqual("Invalid CEP");
    });
  });
});
