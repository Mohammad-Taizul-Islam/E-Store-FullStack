"use client";


import { columns } from '@/components/collections/CollectionColumns';
import { DataTable } from '@/components/custom ui/DataTable';
import React, { useEffect, useState } from 'react'



import toast from 'react-hot-toast';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Collections = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState([]);

    const getCollections = async () => {
        try {
            const res = await fetch('/api/collections', {
                method: "GET"
            }
            )
            const data = await res.json();
            setCollections(data);
            setLoading(false);
        }
        catch (error) {
            toast.error("[Collection_GET] ${error}");
        }
    }

    useEffect(() => {
        getCollections();

    }, [3000])

    console.log(collections);
    return (
        <>
            <div className='p-10'>
                <div className='flex items-center justify-between'>
                    <p className='text-heading2-bold'>
                        Collections
                    </p>
                    <Button className='bg-blue-1 text-white-1 items-center flex gap-3' onClick={() => { router.push('/collections/new') }} >
                        <Plus className='w-4 h-4 mr-2' /> Create Collection
                    </Button>
                </div>
                <Separator className='mt-4 mb-7 bg-grey-1' />
            </div>
            <DataTable columns={columns} data={collections} searchKey='title' />
        </>
    )
}

export default Collections