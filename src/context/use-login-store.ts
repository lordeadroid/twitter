import { create } from "zustand";
import { persist } from "zustand/middleware";
import { EMPTYSTRING, STORE } from "../utils/constant";
import { TLoginStore } from "../utils/types";

const useLoginStore = create<TLoginStore>()(
  persist(
    (set) => ({
      loginStatus: false,
      updateLoginStatus: () =>
        set((state) => ({ loginStatus: !state.loginStatus })),
      email: EMPTYSTRING,
      updateEmail: (email) => set({ email }),
      resetEmail: () => set({ email: EMPTYSTRING }),
    }),
    { name: STORE.login }
  )
);

export default useLoginStore;
