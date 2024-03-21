import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '../ui/button';
import { Plus, Trash } from 'lucide-react';
import Image from 'next/image';

interface ImageUploadProps {
    value: string[];
    onChange: (value: string) => void;
    onRemove: (value: string) => void;

}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    onRemove,
    value
}) => {

    const onUpload = (result: any) => {
        onChange(result.info.secure_url);
    }

    return (
        <div>
            <div className='mb-4 flex flex-wrap items-center gap-4'>
                {
                    value.map((url, index) => (
                        <li className='relative w-[200px] h-[200px]' key={index}>
                            <div className='absolute top-0 right-0 z-10'>
                                <Button onClick={() => onRemove(url)} size='sm'>
                                    <Trash className='w-4 h-4 bg-red-1 text-white' />
                                </Button>

                            </div>
                            <Image src={url} alt='collection' className='object-cover rounded-lg'
                                fill />
                        </li>
                    ))
                }
            </div>
            <CldUploadWidget uploadPreset="rny4ano5" onSuccess={onUpload}>
                {({ open }) => {
                    return (
                        <Button className='bg-grey-1 text-white' onClick={() => open()}>
                            <Plus className='h-4 w-4 mr-4' />  Upload Image
                        </Button>
                    );
                }}
            </CldUploadWidget>
        </div>
    )
}

export default ImageUpload