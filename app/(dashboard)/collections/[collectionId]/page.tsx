"use client"
import { useEffect, useState } from "react"
import Loader from "@/components/custom ui/Loader";
import CollectionForm from "@/components/collections/CollectionForm";

const CollectionDetails = ({ params }: { params: { collectionId: string } }) => {
    const [loading, setLoading] = useState(true);
    const [collletionDetails, setCollectionDetails] = useState<CollectionType | null>(null);
    const getCollectionDetails = async () => {
        try {
            const res = await fetch(`/api/collections/${params.collectionId}`, {
                method: "GET"
            })
            if (res.ok) {
                const data = await res.json();
                setCollectionDetails(data);
                setLoading(false);
            }
        } catch (error) {
            console.log("[collectionId_GET]", error);
        }
    }

    useEffect(() => {
        getCollectionDetails();
    })
    return (
        loading ? <Loader /> :
            <CollectionForm initialData={collletionDetails} />
    );
};

export default CollectionDetails