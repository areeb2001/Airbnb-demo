import Image from "next/image"
import {SearchIcon,MenuIcon,UserCircleIcon,UsersIcon,GlobeAltIcon} from '@heroicons/react/solid'
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";
function Header ({placeholder}) {
  const [searchInput,setSearchInput]=useState("");
  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setEndDate]=useState(new Date());
  const[noOfGuest,setNoOfGuest]=useState(1);
  const router=useRouter();
  const selectionRange={
    startDate:startDate,
    endDate:endDate,
    key:'selection'
  }
  const handleSelect=(ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const resetInput=()=>{
    setSearchInput("")
  }

  const search=()=>{
    router.push({
      pathname:'/search',
      query:{
        location:searchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfGuest,
      }
    })
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-5 " >
        {/* style={{position:'relative',display:'flex',alignItems:'center', height:'2.5rem',cursor:'pointer',marginTop:'auto',marginLeft:'auto' }}  */}
        <div
         className="relative flex items-center h-10 cursor-pointer my-auto"
        >
            <Image onClick={()=>router.push('/')} src='https://links.papareact.com/qd3'
             fill
             quality={100}
             priority={true}
             style={{objectFit:"contain", objectPosition:"left",}}

             alt=""
             /></div>
       
        <div className="flex items-center
         md:border-2 rounded-full py-2
          md:shadow-sm">
          <input
          value={searchInput} 
          onChange={(e)=>setSearchInput(e.target.value)}
           className="pl-5 bg-transparent 
          flex-grow outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder={placeholder||"Start your search"}/>
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


        {searchInput &&( <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={['#FD5B61']}
          onChange={handleSelect}/>
          <div className=" flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5"/>
            <input value={noOfGuest} onChange={(e)=> setNoOfGuest(e.target.value)} min={1} type="number" className="w-12 pl-2 text-lg outline-none text-red-400"/>
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow">Cancel</button>
            <button onClick={search} className=" flex-grow text-red-400">Search</button>
          </div>
          </div>)}
    </header>
    
  )
}

export default Header