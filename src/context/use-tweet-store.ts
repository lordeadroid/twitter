import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORE } from "../utils/constant";

type TTweetStore = {
  rerenderTweets: number;
  refreshTweets: () => void;
};

const useTweetStore = create<TTweetStore>()(
  persist(
    (set) => ({
      rerenderTweets: 0,
      refreshTweets: () => set({ rerenderTweets: Date.now() }),
    }),
    { name: STORE.tweet },
  ),
);

export default useTweetStore;
