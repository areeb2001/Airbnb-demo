import Footer from "@/components/Footer"
import Header from "@/components/Header"
import InfoCard from "@/components/InfoCard";
import { format } from "date-fns";
import { useRouter } from "next/router"


function search({searchResults}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router=useRouter();
    // const {location,startDate,endDate,noOfGuest} =router.query;
    // const formattedStartDate= format(new Date(startDate),"dd MMM yy")
    // const formattedEndDate=format(new Date(endDate) ,"dd-MMM-yy");
    // const range=   ` ${formattedStartDate}-${formattedEndDate}`
    // console.log(formattedStartDate)
    const dayjs = require('dayjs');

    const { location, startDate, endDate, noOfGuest } = router.query;

// Assuming startDate and endDate are valid date values
    const formattedStartDate = dayjs(startDate).format('DD MMM YY');
    const formattedEndDate = dayjs(endDate).format('DD-MMM-YY');
    const range = `${formattedStartDate}   -   ${formattedEndDate}`;

    console.log(range); // Outputs the formatted date range

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest}`}/>
      <main className=" flex">
        <section  className=" flex-grow pt-14 px-6">
            <p className=" text-xs">300+ Stays  -{range}-  for {noOfGuest} number of guests</p>
            <h1 className=" text-3xl font-semibold mt-2 mb-6">Stay in {location}</h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nonwrap">
                <p className="button">Cancellation Flexibility</p>
                <p className="button">Type of place</p>
                <p className="button">Price</p>
                <p className=" button">Rooms and Beds</p>
                <p className="button">More filter</p>
            </div>
            <div className="flex flex-col">
            {searchResults.map(({img,location,title,description,star,price,total})=>(
                <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}/>
            ))}
            </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default search


export async function getServerSideProps(){
    const searchResults=await fetch('https://www.jsonkeeper.com/b/5NPS').then(res=>res.json());
    return{
        props:{
            searchResults,
        }
    }
}
