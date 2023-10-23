const TopProducts = () => {

  return (
    <div className='my-16 grid mt-8 grid-cols-2 gap-3 lg:gap-4'>
      <div className='col-span-1'>
<div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-light-black">Top Products</h5>
        <div className="text-sm  text-gray-500">
            This Month
        </div>
   </div>
   <div className="flow-root">
        <ul  className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="images/hand-1.png" alt="Neil"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Menicure
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            24 services
                        </p>
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="images/hand-1.png" alt="Bonni"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Menicure
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        24 services
                        </p>
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="images/hand-1.png" alt="Michael"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Menicure
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        24 services
                        </p>
                    </div>
                </div>
            </li>
</ul>
   </div>
</div>

      </div>
      <div className='col-span-1'>
<div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-light-black">Top Team Members</h5>
        <div className="text-sm  text-gray-500">
            This Month
        </div>
   </div>
   <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="images/Group-83.png" alt="Neil"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Alina Arshad
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            24 Appointments
                        </p>
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="images/Group-84.png" alt="Bonni"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Irtaza Zaidi
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        24 Appointments
                        </p>
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="images/Group-85.png" alt="Michael"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Faheem Ashraf
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        24 Appointments
                        </p>
                    </div>
                </div>
            </li>
</ul>
   </div>
</div>

      </div>
    </div>
  )
}

export default TopProducts