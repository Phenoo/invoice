import { create} from "zustand"

interface InvoiceModalStore{
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const useInvoiceModal = create<InvoiceModalStore>((set) => ({
    isOpen: false,
    onClose: () => set({isOpen: false}),
    onOpen: () => set({isOpen: true})
}))

export default useInvoiceModal;