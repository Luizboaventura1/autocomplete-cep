import type Address from "../types/Address";
import cepService from "../services/CEPService";
import debounce from "../utils/debounce";

const CEPInput = document.getElementById("CEPInput") as HTMLInputElement | null;
const StreetInput = document.getElementById("StreetInput") as HTMLInputElement | null;
const NeighborhoodInput = document.getElementById("NeighborhoodInput") as HTMLInputElement | null;
const CityInput = document.getElementById("CityInput") as HTMLInputElement | null;
const StateInput = document.getElementById("StateInput") as HTMLInputElement | null;

const StreetInputError = document.getElementById("StreetInputError") as HTMLSpanElement | null;
const NeighborhoodInputError = document.getElementById(
  "NeighborhoodInputError"
) as HTMLSpanElement | null;
const CityInputError = document.getElementById("CityInputError") as HTMLSpanElement | null;
const StateInputError = document.getElementById("StateInputError") as HTMLSpanElement | null;

CEPInput?.addEventListener(
  "input",
  debounce(async (event) => {
    const cepValue = (event?.target as HTMLInputElement)?.value || "";

    try {
      const address: Address | string = await cepService.getAddress(cepValue);

      if (typeof address === "string") {
        throw new Error(address);
      }

      resetInputs();
      fillInputs(address);
    } catch (error: unknown) {
      console.error("Error fetching address:", error);
    }
  }, 2000)
);

const fillInputs = (data: Address) => {
  if (StreetInput) {
    StreetInput.value = data.street;
  }

  if (NeighborhoodInput) {
    NeighborhoodInput.value = data.neighborhood;
  }

  if (CityInput) {
    CityInput.value = data.city;
  }

  if (StateInput) {
    StateInput.value = data.state;
  }
};

const resetInputs = () => {
  if (StreetInput) {
    StreetInput.value = "";
  }

  if (NeighborhoodInput) {
    NeighborhoodInput.value = "";
  }

  if (CityInput) {
    CityInput.value = "";
  }

  if (StateInput) {
    StateInput.value = "";
  }

  StreetInputError!.textContent = "";
  NeighborhoodInputError!.textContent = "";
  CityInputError!.textContent = "";
  StateInputError!.textContent = "";

  StreetInput?.classList.add("border-neutral-600");
  StreetInput?.classList.remove("border-red-400");
  NeighborhoodInput?.classList.add("border-neutral-600");
  NeighborhoodInput?.classList.remove("border-red-400");
  CityInput?.classList.add("border-neutral-600");
  CityInput?.classList.remove("border-red-400");
  StateInput?.classList.add("border-neutral-600");
  StateInput?.classList.remove("border-red-400");
};
