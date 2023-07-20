import { useLoaderData } from "react-router-dom"
import { getClients } from "../Data/Clients";
import Client from "../components/Client";





export function loader() {    
 const clients = getClients()

 return clients
}


const Index = () => {

  const clients = useLoaderData();


  

  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>clients</h1>
    <p className='mt-3'>manage your clients</p>

    {clients.length ? (
      <table className="w-full bg-white shadow mt-5 table-auto">
        <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">client</th>
              <th className="p-2">contac</th>
              <th className="p-2">actions</th>
            </tr>
         </thead>


         <tbody>
          {clients.map( client => (
                <Client 
                  client={client}
                  key={client.id}
                />
          ))}
         </tbody>


      </table>

    ) : (
      <p className="text-center mt-10">There is no clients</p>
    )}
    </>
  )
}

export default Index