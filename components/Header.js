import Image from "next/image"
import {SearchIcon,MenuIcon,UserCircleIcon,UsersIcon,GlobeAltIcon} from '@heroicons/react/solid'

function Header () {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-5 " >
        {/* style={{position:'relative',display:'flex',alignItems:'center', height:'2.5rem',cursor:'pointer',marginTop:'auto',marginLeft:'auto' }}  */}
        <div
         className="relative flex items-center h-10 cursor-pointer my-auto"
        >
            <Image src='https://links.papareact.com/qd3'
             fill
             quality={100}
             priority={true}
             style={{objectFit:"contain", objectPosition:"left",}}

             alt=""
             /></div>
       
        <div className="flex items-center
         md:border-2 rounded-full py-2
          md:shadow-sm">
          <input className="pl-5 bg-transparent 
          flex-grow outline-non placeholder-grey-400" type="text" placeholder="Start your search"/>
          <SearchIcon className=" hidden h-8 bg-red-400 text-white
           md:inline-flex rounded-full p-2 
           cursor-pointer md:mx-2"/>
        </div>
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer"/>
          <div className="flex items-center space-x-2 border-2 rounded-full">
            <MenuIcon className="h-6"/>
            <UserCircleIcon className="h-6"/>
          </div>
        </div>
        
    </header>
    
  )
}

export default Header