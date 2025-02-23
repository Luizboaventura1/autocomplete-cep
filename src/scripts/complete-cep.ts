import type Address from "../types/Address";
import cepService from "../services/CEPService";

const CEPInput = document.getElementById("CEPInput") as HTMLInputElement | null;
const NumberInput = document.getElementById("NumberInput") as HTMLInputElement | null;
const StreetInput = document.getElementById("StreetInput") as HTMLInputElement | null;
const NeighborhoodInput = document.getElementById("NeighborhoodInput") as HTMLInputElement | null;
const CityInput = document.getElementById("CityInput") as HTMLInputElement | null;
const StateInput = document.getElementById("StateInput") as HTMLInputElement | null;

type DebouncedFunction<T extends any[]> = (...args: T) => void;

const debounce = <T extends any[]>(func: DebouncedFunction<T>, debounceDelay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: any, ...args: T) {
    const context = this;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args);
      timeoutId = undefined;
    }, debounceDelay);
  };
};

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
};
