import { create} from "zustand"

interface DeleteModalStore{
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const useDeleteModal = create<DeleteModalStore>((set) => ({
    isOpen: false,
    onClose: () => set({isOpen: false}),
    onOpen: () => set({isOpen: true})
}))

export default useDeleteModal;