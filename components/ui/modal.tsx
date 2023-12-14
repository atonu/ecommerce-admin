"use client";

import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {FC, ReactNode} from "react";

interface ModalProps {
    title: string;
    desc: string;
    isOpen: boolean;
    onClose: () => void
    children?: ReactNode
}

export const Modal: FC<ModalProps> = ({title, desc, onClose, isOpen, children}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{desc}</DialogDescription>
                </DialogHeader>
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    )
}
