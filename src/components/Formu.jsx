const Formu = ({client}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="names"
                >Name:</label>
                <input 
                    id="names"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Name of the client"
                    name="names"
                    defaultValue={client?.names}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="company"
                >company:</label>
                <input 
                    id="company"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Company of the client"
                    name="company"
                    defaultValue={client?.company}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email from the client"
                    name="email"
                    defaultValue={client?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="tel"
                >Tel:</label>
                <input 
                    id="tel"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Phone number of the client"
                    name="tel"
                    defaultValue={client?.tel}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notes"
                >Notes:</label>
                <textarea
                    as="textarea"
                    id="notes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notes of the client"
                    name="notes"
                    defaultValue={client?.notes}
                />
            </div>
        </>
    )
}

export default Formu