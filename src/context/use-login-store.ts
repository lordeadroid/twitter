import { create } from "zustand";
import { persist } from "zustand/middleware";
import { EMPTYSTRING, STORE } from "../utils/constant";
import { TLoginStore } from "../utils/types";

const useLoginStore = create<TLoginStore>()(
  persist(
    (set) => ({
      UID: EMPTYSTRING,
      updateUID: (uid) => set(() => ({ UID: uid })),
      username: EMPTYSTRING,
      updateUsername: (username) => set({ username }),
      resetUsername: () => set({ username: EMPTYSTRING }),
    }),
    { name: STORE.login },
  ),
);

export default useLoginStore;
