import React from "react";

export default function Contactform() {
  return (
    <>
      <div class="flex flex-col justify-center sm:py-8">
        <div class="relative py-3 sm:max-w-md sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-4 sm:skew-y-0 sm:-rotate-3 sm:rounded-2xl"></div>
          <div class="text-white relative px-4 py-8 bg-indigo-400 shadow-lg sm:rounded-2xl sm:p-16">
            <div class="text-center pb-4">
              <h1 class="text-2xl">Contact Us!</h1>
              <p class="text-gray-300 text-sm">
                Fill out the form below to send us a message.
              </p>
            </div>

            <form>
              <input
                class="shadow mb-3 appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
              />

              <input
                class="shadow mb-3 appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />

              <input
                class="shadow mb-3 appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              />

              <textarea
                class="shadow mb-3 appearance-none border rounded h-40 w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
                // style="height: 100px;"
              ></textarea>

              <div class="flex justify-between">
                <input
                  class="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  class="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
