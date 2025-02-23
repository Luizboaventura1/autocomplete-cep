import debounce from "../utils/debounce";
import InputValidator from "../utils/InputValidator";

const CEPInput = document.getElementById("CEPInput") as HTMLInputElement | null;
const NumberInput = document.getElementById("NumberInput") as HTMLInputElement | null;
const StreetInput = document.getElementById("StreetInput") as HTMLInputElement | null;
const NeighborhoodInput = document.getElementById("NeighborhoodInput") as HTMLInputElement | null;
const CityInput = document.getElementById("CityInput") as HTMLInputElement | null;
const StateInput = document.getElementById("StateInput") as HTMLInputElement | null;

const CEPInputError = document.getElementById("CEPInputError") as HTMLSpanElement | null;
const NumberInputError = document.getElementById("NumberInputError") as HTMLSpanElement | null;
const StreetInputError = document.getElementById("StreetInputError") as HTMLSpanElement | null;
const NeighborhoodInputError = document.getElementById(
  "NeighborhoodInputError"
) as HTMLSpanElement | null;
const CityInputError = document.getElementById("CityInputError") as HTMLSpanElement | null;
const StateInputError = document.getElementById("StateInputError") as HTMLSpanElement | null;

enum ValidationBorderColors {
  errorColor = "border-red-400",
  successColor = "border-neutral-600",
}

const handleFocus = (inputElement: HTMLInputElement | null) => {
  inputElement?.addEventListener("focus", () => {
    inputElement?.classList.add("focus:border-lime-400");
  });

  inputElement?.addEventListener("blur", () => {
    inputElement?.classList.remove("focus:border-lime-400");
  });
};

handleFocus(CEPInput);
handleFocus(NumberInput);
handleFocus(StreetInput);
handleFocus(NeighborhoodInput);
handleFocus(CityInput);
handleFocus(StateInput);

CEPInput?.addEventListener(
  "input",
  debounce((event) => {
    const cepValue = (event?.target as HTMLInputElement)?.value || "";

    if (!InputValidator.validateCep(cepValue)) {
      CEPInput.classList.add(ValidationBorderColors.errorColor);
      CEPInput.classList.remove("focus:border-lime-400");
      CEPInputError!.textContent = "Invalid ZIP code";
      return;
    }

    CEPInput.classList.remove(ValidationBorderColors.errorColor);
    CEPInput.classList.add(ValidationBorderColors.successColor);
    CEPInputError!.textContent = "";
  }, 1500)
);

NumberInput?.addEventListener(
  "input",
  debounce((event) => {
    const numberValue = (event?.target as HTMLInputElement)?.value || "";

    if (!InputValidator.validateNumber(numberValue)) {
      NumberInput.classList.add(ValidationBorderColors.errorColor);
      NumberInput.classList.remove("focus:border-lime-400");
      NumberInputError!.textContent = "Invalid number";
      return;
    }

    NumberInput.classList.remove(ValidationBorderColors.errorColor);
    NumberInput.classList.add(ValidationBorderColors.successColor);
    NumberInputError!.textContent = "";
  }, 1500)
);

StreetInput?.addEventListener(
  "input",
  debounce((event) => {
    const streetValue = (event?.target as HTMLInputElement)?.value || "";

    if (!InputValidator.validateStreet(streetValue)) {
      StreetInput.classList.add(ValidationBorderColors.errorColor);
      StreetInput.classList.remove("focus:border-lime-400");
      StreetInputError!.textContent = "Invalid street";
      return;
    }

    StreetInput.classList.remove(ValidationBorderColors.errorColor);
    StreetInput.classList.add(ValidationBorderColors.successColor);
    StreetInputError!.textContent = "";
  }, 1500)
);

NeighborhoodInput?.addEventListener(
  "input",
  debounce((event) => {
    const neighborhoodValue = (event?.target as HTMLInputElement)?.value || "";

    if (!InputValidator.validateNeighborhood(neighborhoodValue)) {
      NeighborhoodInput.classList.add(ValidationBorderColors.errorColor);
      NeighborhoodInput.classList.remove("focus:border-lime-400");
      NeighborhoodInputError!.textContent = "Invalid neighborhood";
      return;
    }

    NeighborhoodInput.classList.remove(ValidationBorderColors.errorColor);
    NeighborhoodInput.classList.add(ValidationBorderColors.successColor);
    NeighborhoodInputError!.textContent = "";
  }, 1500)
);

CityInput?.addEventListener(
  "input",
  debounce((event) => {
    const cityValue = (event?.target as HTMLInputElement)?.value || "";

    if (!InputValidator.validateCity(cityValue)) {
      CityInput.classList.add(ValidationBorderColors.errorColor);
      CityInput.classList.remove("focus:border-lime-400");
      CityInputError!.textContent = "Invalid city";
      return;
    }

    CityInput.classList.remove(ValidationBorderColors.errorColor);
    CityInput.classList.add(ValidationBorderColors.successColor);
    CityInputError!.textContent = "";
  }, 1500)
);

StateInput?.addEventListener(
  "input",
  debounce((event) => {
    const stateValue = (event?.target as HTMLInputElement)?.value || "";

    if (!InputValidator.validateState(stateValue)) {
      StateInput.classList.add(ValidationBorderColors.errorColor);
      StateInput.classList.remove("focus:border-lime-400");
      StateInputError!.textContent = "Invalid state";
      return;
    }

    StateInput.classList.remove(ValidationBorderColors.errorColor);
    StateInput.classList.add(ValidationBorderColors.successColor);
    StateInputError!.textContent = "";
  }, 1500)
);
