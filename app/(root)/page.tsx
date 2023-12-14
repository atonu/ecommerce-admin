"use client"

import {UserButton} from "@clerk/nextjs";
import {Modal} from "@/components/ui/modal";

const Homepage = () => {
    return (
        <div className='p-4'>
            <UserButton afterSignOutUrl="/"/>
            <Modal title="modal" desc="desc" isOpen onClose={() => {}}>
                Hello dudu!
            </Modal>
        </div>
    )
}

export default Homepage
