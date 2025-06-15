"use client"
import Pembatas from '@/components/Pembatas'
import { getDataProfile } from '@/Services/Global.Services'
import React from 'react'
import { toast } from 'sonner'
import Loading from '../../(components)/Loading'

const VisiMisi = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => { 
    try {
      const response = await getDataProfile();
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error("Gagal memuat data visi misi");
    } finally {
      setLoading(false);
  }}
  if (loading) {
    return <Loading />
  }
  return (
    <>
    
    <div className='px-4 lg:px-8 '>
        <div>
            <h2 className='text-3xl font-bold text-center  text-green-800'>Visi & Misi</h2>
            <Pembatas />

        </div>
    </div>
    <div className='flex flex-col lg:pb-8 items-center justify-center gap-4 '>
      <img src={data?.imgVisiMisi} alt="Logo" className='object-cover lg:w-[50%] w-full' />
    </div>
    </>
  )
}

export default VisiMisi