/* eslint-disable react/prop-types */
import { Form } from "@remix-run/react";

// eslint-disable-next-line react/prop-types
function RemarkForm({ complaint }) {
  console.log(complaint)
  return (
    <div className="w-4/5 h-auto mx-auto mt-14">
      {/* For Displaying any error messages */}
      {/* Include your error component here */}

      <p className="text-3xl font-[Kaisei] mb-2">Assign complaint to</p>

      {/* Form */}
      <Form className="w-11/12 mx-auto shadow-lg rounded-lg p-5" method="POST">
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
              value={complaint.title}
              placeholder="e.g. Printer is not working"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>

          <input value={complaint.id} type="hidden" name="compId" />
          {/* Assign Complaint To */}
          <div className="w-full md:w-1/2 px-3 mb-4">
            <label
              htmlFor="feedback"
              className="uppercase tracking-wide text-xs sm:text-sm font-normal mb-2"
            >
              Feed-back
            </label>
            <input
              type="text"
              id="feedback"
              name="feedback"
              value='Good'
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
            name="comp_body"
            rows={4}
            value={complaint.body}
            placeholder="Write your thoughts here..."
            className="appearance-none w-full p-2.5 text-sm bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:bg-white dark:placeholder-gray-700"
          />
        </div>

        {/* Submit button */}
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default RemarkForm;
