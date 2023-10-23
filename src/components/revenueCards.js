

const RevenuesCards = () => {

return (
<div>
<div className='grid mt-8 grid-cols-3 gap-3 lg:gap-4'>
<div className="col-span-1 block max-w-lg p-6 bg-white  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   <div className='flex items-center justify-between mb-2'>
    <img src='images/dollor-1.svg' alt='no-imge'/>
    <div className='text-green-1 text-3xl'>$1682</div>
   </div>
   <div className='flex justify-between'>
    <div className='black-1 text-xl'>Total Revenue</div>
    <img src="images/graph-1.svg" alt='no-image1'/>
   </div>
   </div>
   <div className="col-span-1 block max-w-lg p-6 bg-white  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   <div className='flex items-center justify-between mb-2'>
    <img src='images/star-1.png' className='my-2' alt='no-imge'/>
    <p className='text-green-1 text-3xl'>60</p>
   </div>
   <div className='flex justify-between'>
    <div className='black-1 text-xl'>Total Customers</div>
    <img src="images/graph-1.svg" alt='no-image2'/>
   </div>
   </div>
   <div className="col-span-1 block max-w-lg p-6 bg-white  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   <div className='flex items-center justify-between mb-2'>
    <img src='images/Frame-6.svg' className='my-2' alt='no-imge'/>
    <div className='text-red-1 text-3xl'>78</div>
   </div>
   <div className='flex justify-between'>
    <div className='black-1 text-xl'>Total Appointment</div>
    <img src='images/graph-2.svg' alt='no-image3'/>
   </div>
   </div>
</div>
 </div>
  )
}

export default RevenuesCards;