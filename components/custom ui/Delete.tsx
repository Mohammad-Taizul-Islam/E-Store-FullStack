"use client";
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Trash } from 'lucide-react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import toast from 'react-hot-toast';
interface DeleteProps {
    id: string,
}

const Delete: React.FC<DeleteProps> = ({ id }) => {


    const [loading, setLoading] = useState(false);


    const onDelete = async () => {
        try {

            setLoading(true);
            const res = await fetch(`/api/collections/${id}`, {
                method: "DELETE",
            })

            if (res.ok) {
                window.location.href = ('/collections')
                setLoading(false);
                toast.success("deletion of collection is successfully");
            }
        } catch (error) {
            console.log("[collectionId_DELETE ]", error);
            toast.error("Something went worng! Please try again.");
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button className='bg-red-1 text-white-1'>
                    <Trash className='w-4 h-4' onClick={onDelete} />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='bg-grey-2'>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-red-1'>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your collection
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='bg-white-1 text-red-1'>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default Delete