import { create } from "zustand";
import { persist } from "zustand/middleware";
import { EMPTYSTRING, STORE } from "../utils/constant";
import { TLoginStore } from "../utils/types";

const useLoginStore = create<TLoginStore>()(
  persist(
    (set) => ({
      loggedIn: false,
      setLoggedIn: () => set((state) => ({ loggedIn: !state.loggedIn })),
      email: EMPTYSTRING,
      updateEmail: (email) => set({ email }),
      resetEmail: () => set({ email: EMPTYSTRING }),
    }),
    { name: STORE.login },
  ),
);

export default useLoginStore;
