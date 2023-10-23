const Customer = () => {

  return (
        <div className='grid mt-8 grid-cols-6 gap-4'>
            <div className='col-span-4'>
            <div className='text-4xl'>
              <span className='text-gray-500 dark:text-gray-400'>Good Morning,</span>
              <span className='font-bold  text-dark'>Bella Fatima</span>
                </div>
            </div>
            <div className='flex row col-span-2 justify-center'>
              <div className='mt-2'>
              <button type="button" className="flex row  items-center text-white bg-gray-900 font-medium rounded-lg ">
              <img src='images/Frame-1.svg' className='text-white' alt='no-img'/>
                 <span className='ml-4'>New Appointment</span>  
              </button>
              </div>
            </div>
        </div>   
  )
}

export default Customer;