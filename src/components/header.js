import { useState } from 'react';
import SideBar from './sidebar';

const Header = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  return (
    <div>
        <div className='grid mt-8 grid-cols-6 gap-4'>
            <div className='col-span-4 cursor-pointer'  onClick={()=>setIsOpenSidebar(true)}>
              <img  src='images/Group-49133.svg' alt='no-img'/>
            </div>
            <div className='flex row col-span-1'>
              <img src="images/Ellipse-4.png" alt='no-img'/>
              <div className='mt-2 ml-4 '>
                <div className='text-2xl'>
                Bella Fatima
                </div>
                <div className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  Joined 2 month ago
                </div>
              </div>
            </div>
            <div className='flex row col-span-1 text-end'>
              <img src='images/customer-service 2.svg' alt='no-img'/>
                <img src='images/notification.svg' alt='no-img'/>
            </div>
        </div>   
       {isOpenSidebar && <SideBar setIsOpenSidebar={setIsOpenSidebar}/>}
        </div>   
  )
}

export default Header;