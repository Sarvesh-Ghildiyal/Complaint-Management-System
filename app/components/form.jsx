import { Form} from "@remix-run/react";

// eslint-disable-next-line react/prop-types
function ComplainForm({name}) {

  return (
    <div className="w-4/5 h-auto mx-auto mt-14">
      {/* For Displaying any error messages */}
      {/* Include your error component here */}

      <p className="text-3xl font-[Kaisei] mb-2">Fill Your Complain</p>

      {/* Form */}
      <Form
        className="w-11/12 mx-auto shadow-lg rounded-lg p-5"
        method="POST"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Complain Title */}
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label
              htmlFor="title"
              className="uppercase tracking-wide text-xs sm:text-sm font-normal mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. Printer is not working"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>

          {/* Room number */}
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label
              htmlFor="room_no"
              className="uppercase tracking-wide text-xs sm:text-sm font-normal mb-2"
            >
              Room Number
            </label>
            <input
              type="text"
              id="room_no"
              name="room_no"
              pattern="[0-9]+"
              placeholder="e.g. 205"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>

          {/* Requested By */}
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label
              htmlFor="requested_by"
              className="uppercase tracking-wide text-xs sm:text-sm font-normal mb-2"
            >
              Requested By
            </label>
            <input
              type="text"
              id="requested_by"
              name="requested_by"
              placeholder="e.g. Manny"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>

          {/* Reported By */}
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label
              htmlFor="reported_by"
              className="uppercase tracking-wide text-xs sm:text-sm font-normal mb-2"
            >
              Reported By
            </label>
            <input
              type="text"
              id="reported_by"
              name="reported_by"
              defaultValue={name}
              placeholder="e.g. Dan"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        {/* Body */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="uppercase tracking-wide text-xs sm:text-sm font-normal mb-2"
          >
            Description
          </label>
          <textarea
            id="message"
            name="body"
            rows={4}
            placeholder="Write your thoughts here..."
            className="appearance-none w-full p-2.5 text-sm bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:bg-white dark:placeholder-gray-700"
          />
        </div>

        {/* Submit button */}
        <div className="flex justify-center mt-5">
          <button type="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ComplainForm;
