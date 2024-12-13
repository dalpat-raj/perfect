"use client"
import React, { useState } from 'react'
import { deleteCollection } from '@/action/collection';
import ButtonWithSpinner from '../../button/ButtonWithSpinner';
import { toast } from 'sonner';

const CollectionDelete = ({id}: {id: number}) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleDelete = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault(); 
        setLoading(true);
        try {
            const formData = new FormData(event.currentTarget);
            const res = await deleteCollection(formData)
            if(res.success) toast.success(res.success)
            if(res.error) toast.error(res.error)
        } catch (error) {
            toast.error('Error submitting form:');
        } finally {
            setLoading(false)
        }
    }

  return (
    <form onSubmit={handleDelete}>
        <input type="number" value={id} className='hidden'/>
        <div className='w-20 h-8'>
            <ButtonWithSpinner loading={loading}>
                Delete
            </ButtonWithSpinner>
        </div>
    </form>
  )
}

export default CollectionDelete