import { create } from "zustand";
type TermsState = {
  photoshootTermsAccepted: boolean;
  termsAndConditionsAccepted: boolean;
  setPhotoshootTermsAccepted: (value: boolean) => void;
  setTermsAndConditionsAccepted: (value: boolean) => void;
};

export const useTermsStore = create<TermsState>((set) => ({
  photoshootTermsAccepted: false,
  termsAndConditionsAccepted: false,
  setPhotoshootTermsAccepted: (value: boolean) =>
    set(() => ({ photoshootTermsAccepted: value })),
  setTermsAndConditionsAccepted: (value: boolean) =>
    set(() => ({ termsAndConditionsAccepted: value })),
}));
