import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formu from "../components/Formu"
import Mistake from "../components/Mistake"
 import { AddClient } from '../Data/Clients'


export async function action({request}) { //permite evitar los pasos del handle submit, que es comun usarse en formularios
    const formData = await request.formData()
   const dataValue = Object.fromEntries(formData)

   const email = formData.get('email')

  //validacion
  const mistakes = []
  if(Object.values(dataValue).includes('')) {
    mistakes.push('all fields are required')

  }


//gist para comprobar validar el email
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)) {
    mistakes.push('the email is not valid')
  }


  //retornar datos si hay errores

  if(Object.keys(mistakes).length) {
    return mistakes

  }

 await AddClient(dataValue)
 return redirect('/')
}


function NewClient() {

  const mistakes = useActionData()
  const navigate = useNavigate()

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>New Client</h1>
         <p className='mt-3'>Fill in all the fields to register a new client.</p>

         <div className='flex justify-end'>
          <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase' onClick={() => navigate('/')}>
            Back
          </button>
         </div>

         <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
          
          {mistakes?.length && mistakes.map( ( mistake, i ) => <Mistake key={i}>{mistake}</Mistake>)}
          <Form // para usar la funcion action, siempre se tiene que importar el componente de form
          method="post" //el metodo post es obligatorio para que funcione la funcion action
          noValidate
          >
            <Formu />
              <input
                type="submit"
                className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg" value='Add client'>         
              </input>
          </Form>
          



         </div>
    </>
  )
}

export default NewClient