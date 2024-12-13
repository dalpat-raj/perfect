import { useState } from 'react'
import { DeleteBanner } from '@/action/banner'
import ButtonWithSpinner from '@/app/ui/button/ButtonWithSpinner'
import { toast } from 'sonner';

const BannerDelete = ({id}: {id: number}) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleDelete=async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        setLoading(true)
        const formData = new FormData(event.currentTarget)
        try {
          const data = await DeleteBanner(formData)
          if(data?.success) toast.success(data.success)
          if(data?.error) toast.error(data.error)
        } catch (error) {
          toast.error('Error submitting form 😢')
        } finally {
            setLoading(false)
        }
      }

  return (
    <form onSubmit={handleDelete}>
        <input type="number" defaultValue={id} name="id" className='hidden'/>
        <div className='w-20 h-7'>
        <ButtonWithSpinner loading={loading}>
            Delete
        </ButtonWithSpinner>
        </div>
    </form>
  )
}

export default BannerDelete