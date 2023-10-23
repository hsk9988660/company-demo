import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

const Calender = () => {

  return (
    <div className='grid mt-8 grid-cols-2 gap-2'>
      <div className='col-span-1 mt-16'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar   className='bg-gray-1 w-100'/>
    </LocalizationProvider>
      </div>
     <div className='col-span-1'>
       <div className='text-light-black font-bold text-2xl text-bold mb-8'>
        Today's Appointments
       </div>
       <div className=" block p-6 bg-blue-2  rounded-lg shadow ">
        <div className='flex justify-between'>
       <div className='flex row'>
        <img src='images/hand-1.png' alt='no-imge'/>
          <div className='ml-2'>
            <div className='text-gray-900 text-light-black'>
              10:30 AM - 11:00AM
            </div>
            <div className='text-white text-md'>
              Menicure
            </div>
            <div className='text-gray-900 flex flex-row text-sm'>
              <img src='images/carbon_user-online.png' alt='no-img'/>
              <div className='text-light-black'>
              Fabinha Arshad
              </div>
            </div>
          </div>
   </div>
   <div className='flex flex-col'>
       <div className='text-white text-xl'>13</div>
       <div className='text-white text-xl'>July</div>
   </div>
   </div>
   </div>
   <div className=" block p-6 bg-blue-2  rounded-lg shadow mt-4 ">
        <div className='flex justify-between'>
       <div className='flex row'>
        <img src='images/image-10.png' alt='no-imge'/>
          <div className='ml-2'>
            <div className='text-gray-900 text-light-black'>
              10:30 AM - 11:00AM
            </div>
            <div className='text-white text-md'>
              Menicure
            </div>
            <div className='text-gray-900 flex flex-row text-sm'>
              <img src='images/carbon_user-online.png' alt='no-img'/>
              <div className='text-light-black'>
              Fabinha Arshad
              </div>
            </div>
          </div>
   </div>
   <div className='flex flex-col'>
       <div className='text-white text-xl'>13</div>
       <div className='text-white text-xl'>July</div>
   </div>
   </div>
   </div>
   <div className=" block p-6 bg-blue-2  rounded-lg shadow mt-4">
        <div className='flex justify-between'>
       <div className='flex row'>
        <img src='images/hand-1.png' alt='no-imge'/>
          <div className='ml-2'>
            <div className='text-gray-900 text-light-black'>
              10:30 AM - 11:00AM
            </div>
            <div className='text-white text-md'>
              Menicure
            </div>
            <div className='text-gray-900 flex flex-row text-sm'>
              <img src='images/carbon_user-online.png' alt='no-img'/>
              <div className='text-light-black'>
              Fabinha Arshad
              </div>
            </div>
          </div>
   </div>
   <div className='flex flex-col'>
       <div className='text-white text-xl'>13</div>
       <div className='text-white text-xl'>July</div>
   </div>
   </div>
   </div>
   <div>
       </div>
     </div>
    </div>
  )
}

export default Calender;