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
      images: { avatar: EMPTYSTRING, background: EMPTYSTRING },
      updateImages: (newImages) => set(() => ({ images: newImages })),
    }),
    { name: STORE.login }
  )
);

export default useLoginStore;
