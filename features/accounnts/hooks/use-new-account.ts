import { create } from "zustand";

type newaccountstate = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};
export const useNewAccount = create<newaccountstate>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
