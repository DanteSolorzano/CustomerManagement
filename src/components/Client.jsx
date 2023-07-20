import { useNavigate, Form, redirect } from "react-router-dom"
import { deleteClient } from '../Data/Clients'

export async function action({params}) {
    await deleteClient(params.clientId)
    return redirect('/')
}



const Client = ({client}) => {

    const navigate = useNavigate()

    const { names, company, email, tel, id } = client

  return (
    <tr className="border-b ">
        <td className='p-6 space-y-2'>
        <p className="text-2xl text-gray-500">{names}</p>
        <p>{company}</p>
        </td>

        <td className="p-6">
            <p className="text-gray-600">
                <span className="text-grey-800 uppercase font-bold">Email:  </span>
                {email}
            </p>
            <p className="text-gray-600">
                <span className="text-grey-800 uppercase font-bold">Tel:  </span>
                {tel}
            </p>
        </td>

        <td className="p-6 flex gap-3">
            <button type="button" className="text-blue-400 hover:text-blue-700 uppercase font-bold text-xs"
            onClick={() => navigate(`/clients/${id}/edit`)}>
                Edit
            </button>
        </td>
        <td className="p-6 flex">

            <Form
            method="post"
            action={`/clients/${id}/delete`}
            onSubmit={() => {
                if(!confirm('Are you sure you want to delete this client?')) {
                    e.preventDefault()
                }
            }}
            >
                     <button type="submit" className="text-red-400 hover:text-red-700 uppercase font-bold text-xs">
                     Delete
                 </button> 
            </Form>
   
        </td>
    </tr>
  )
}

export default Client