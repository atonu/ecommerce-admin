"use client";

import {Modal} from "@/components/ui/modal";
import useStoreModal from "@/hooks/use-store-modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();
    return (<Modal title="Create Store"
                   desc="Add a new vendor store"
                   isOpen={storeModal.isOpen}
                   onClose={
                       storeModal.onClose
                   }>
        Create Store Form!
    </Modal>)
}


