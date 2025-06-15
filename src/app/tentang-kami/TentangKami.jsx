"use client"
import Pembatas from '@/components/Pembatas'
import { getDataProfile } from '@/Services/Global.Services'
import React from 'react'
import { toast } from 'sonner'
import Loading from '../(Landing-Page)/(components)/Loading'


const TentangKami = () => {
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
          <img src={"/Logoweb.png"} alt="Logo" className='w-96  mx-auto mb-4' />
            <Pembatas />

        </div>
    </div>
    <div className='flex flex-col items-center justify-center gap-4 lg:pb-8 '>
      <img src={data?.ImgTentangKami} alt="Logo" className='object-cover lg:w-[50%] w-full' />
    </div>
    </>
  )
}

export default TentangKami