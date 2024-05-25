"use client";
import React from "react";
import Image from "next/image";
import Underline from "./Underline";

import { useForm, ValidationError } from "@formspree/react";

import { FaMailBulk } from "react-icons/fa";

export default function Contact() {
  const [state, handleSubmit] = useForm("xrgnvynq");

  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-40 ">
        <h1 className="flex justify-center font-normal text-2xl text-slate-950 pb-2">
          <FaMailBulk />
        </h1>
        <h1 className="text-center font-normal text-lg text-slate-600 pb-2">
          Let's connect
        </h1>

        <h1 className="text-center font-bold text-4xl text-slate-900">
          Contact
          <Underline />
        </h1>
        <br />
        {state.succeeded && (
          <p className="text-2xl text-slate-600 font-semibold text-center">
            Message Sent!!!
          </p>
        )}
        <div className="flex flex-col lg:flex-row lg:space-y-0 border-[2px] border-slate-200 rounded-md">
          <div className="hidden lg:flex lg:w-1/2 lg:flex-col justify-center p-8">
            <Image
              src="/programmer.png"
              alt=""
              width={600}
              height={600}
              className=" shadow-xl p-2 rounded-md"
            />
          </div>
          <form
            className="flex flex-col  w-full lg:w-1/2 space-y-2 bg-slate-200 p-8"
            action="https://formspree.io/f/xrgnvynq"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              className=" border-[1px] border-slate-900 rounded-md px-3 py-2"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              className="border-[1px] border-slate-900 rounded-md px-3 py-2"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Write Message"
              className="border-[1px] border-slate-900 rounded-md  px-3 py-2"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="text-slate-50 font-semibold px-6 py-2 bg-slate-900 rounded shadow hover:bg-slate-800 border-2 border-slate-900 cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Underline from "./Underline";

// import { useForm, ValidationError } from "@formspree/react";

// import { FaMailBulk } from "react-icons/fa";

// export default function Contact() {
//   const [formOpened, setFormOpened] = useState(true);
//   const [state, handleSubmit] = useForm("xrgnvynq");

//   const handleFormOpen = () => {
//     setFormOpened(true);
//   };
//   if (state.succeeded) {
//     // handleFormOpen();
//     setFormOpened(false);
//   }
//   //   return (
//   //     <>
//   //       {formOpened === true ? (
//   //         <section id="contact">
//   //           <div className="my-12 pb-12 md:pt-16 md:pb-40 ">
//   //             <h1 className="flex justify-center font-normal text-2xl text-slate-950 pb-2">
//   //               <FaMailBulk />
//   //             </h1>
//   //             <h1 className="text-center font-normal text-lg text-slate-600 pb-2">
//   //               Let's connect
//   //             </h1>

//   //             <h1 className="text-center font-bold text-4xl text-slate-900">
//   //               Contact
//   //               <Underline />
//   //             </h1>
//   //             <br />
//   //             <div className="flex flex-col lg:flex-row lg:space-y-0 border-[2px] border-slate-200 rounded-md">
//   //               <div className="hidden lg:flex lg:w-1/2 lg:flex-col justify-center p-8">
//   //                 <Image
//   //                   src="/programmer.png"
//   //                   alt=""
//   //                   width={600}
//   //                   height={600}
//   //                   className=" shadow-xl p-2 rounded-md"
//   //                 />
//   //               </div>

//   //               <form
//   //                 className="flex flex-col  w-full lg:w-1/2 space-y-2 bg-slate-200 p-8"
//   //                 action="https://formspree.io/f/xrgnvynq"
//   //                 method="POST"
//   //                 onSubmit={handleSubmit}
//   //               >
//   //                 <input
//   //                   id="name"
//   //                   type="text"
//   //                   placeholder="Name"
//   //                   name="name"
//   //                   className=" border-[1px] border-slate-900 rounded-md px-3 py-2"
//   //                 />
//   //                 <ValidationError
//   //                   prefix="Name"
//   //                   field="name"
//   //                   errors={state.errors}
//   //                 />
//   //                 <input
//   //                   id="email"
//   //                   type="email"
//   //                   placeholder="Email"
//   //                   name="email"
//   //                   className="border-[1px] border-slate-900 rounded-md px-3 py-2"
//   //                 />
//   //                 <ValidationError
//   //                   prefix="Email"
//   //                   field="email"
//   //                   errors={state.errors}
//   //                 />
//   //                 <textarea
//   //                   name="message"
//   //                   id="message"
//   //                   cols={30}
//   //                   rows={10}
//   //                   placeholder="Write Message"
//   //                   className="border-[1px] border-slate-900 rounded-md  px-3 py-2"
//   //                 />
//   //                 <ValidationError
//   //                   prefix="Message"
//   //                   field="message"
//   //                   errors={state.errors}
//   //                 />
//   //                 <button
//   //                   type="submit"
//   //                   className="text-slate-50 font-semibold px-6 py-2 bg-slate-900 rounded shadow hover:bg-slate-800 border-2 border-slate-900 cursor-pointer"
//   //                 >
//   //                   Send
//   //                 </button>
//   //               </form>
//   //             </div>
//   //           </div>
//   //         </section>
//   //       ) : (
//   //         <>
//   //           <section id="contact">
//   //             <div className="my-12 pb-12 md:pt-16 md:pb-40 ">
//   //               <h1 className="flex justify-center font-normal text-2xl text-slate-950 pb-2">
//   //                 <FaMailBulk />
//   //               </h1>
//   //               <h1 className="text-center font-normal text-lg text-slate-600 pb-2">
//   //                 Let's connect
//   //               </h1>

//   //               <h1 className="text-center font-bold text-4xl text-slate-900">
//   //                 Contact
//   //                 <Underline />
//   //               </h1>
//   //               <br />
//   //               <div className="flex flex-col items-center text-center">
//   <p className="text-2xl text-slate-600 font-semibold">
//     Message Sent!!!
//   </p>
//   //                 <br />
//   //                 <button
//   //                   className="text-slate-50 font-semibold px-6 py-2 bg-slate-900 rounded shadow hover:bg-slate-800 border-2 border-slate-900 cursor-pointer"
//   //                   onClick={handleFormOpen}
//   //                 >
//   //                   Return to Form
//   //                 </button>
//   //               </div>
//   //             </div>
//   //           </section>
//   //         </>
//   //       )}
//   //     </>
//   //   );
// //   return (
// //     <section id="contact">
// //       <div className="my-12 pb-12 md:pt-16 md:pb-40 ">
// //         <h1 className="flex justify-center font-normal text-2xl text-slate-950 pb-2">
// //           <FaMailBulk />
// //         </h1>
// //         <h1 className="text-center font-normal text-lg text-slate-600 pb-2">
// //           Let's connect
// //         </h1>

// //         <h1 className="text-center font-bold text-4xl text-slate-900">
// //           Contact
// //           <Underline />
// //         </h1>
// //         <br />
// //         {formOpened === true && (
// //           <div className="flex flex-col lg:flex-row lg:space-y-0 border-[2px] border-slate-200 rounded-md">
// //             <div className="hidden lg:flex lg:w-1/2 lg:flex-col justify-center p-8">
// //               <Image
// //                 src="/programmer.png"
// //                 alt=""
// //                 width={600}
// //                 height={600}
// //                 className=" shadow-xl p-2 rounded-md"
// //               />
// //             </div>

// //             <form
// //               className="flex flex-col  w-full lg:w-1/2 space-y-2 bg-slate-200 p-8"
// //               action="https://formspree.io/f/xrgnvynq"
// //               method="POST"
// //               onSubmit={handleSubmit}
// //             >
// //               <input
// //                 id="name"
// //                 type="text"
// //                 placeholder="Name"
// //                 name="name"
// //                 className=" border-[1px] border-slate-900 rounded-md px-3 py-2"
// //               />
// //               <ValidationError
// //                 prefix="Name"
// //                 field="name"
// //                 errors={state.errors}
// //               />
// //               <input
// //                 id="email"
// //                 type="email"
// //                 placeholder="Email"
// //                 name="email"
// //                 className="border-[1px] border-slate-900 rounded-md px-3 py-2"
// //               />
// //               <ValidationError
// //                 prefix="Email"
// //                 field="email"
// //                 errors={state.errors}
// //               />
// //               <textarea
// //                 name="message"
// //                 id="message"
// //                 cols={30}
// //                 rows={10}
// //                 placeholder="Write Message"
// //                 className="border-[1px] border-slate-900 rounded-md  px-3 py-2"
// //               />
// //               <ValidationError
// //                 prefix="Message"
// //                 field="message"
// //                 errors={state.errors}
// //               />
// //               <button
// //                 type="submit"
// //                 className="text-slate-50 font-semibold px-6 py-2 bg-slate-900 rounded shadow hover:bg-slate-800 border-2 border-slate-900 cursor-pointer"
// //               >
// //                 Send
// //               </button>
// //             </form>
// //           </div>
// //         )}
// //         <>
// //           {formOpened === false && (
// //             <div className="flex flex-col items-center text-center">
// //               <p className="text-2xl text-slate-600 font-semibold">
// //                 Message Sent!!!
// //               </p>
// //               <br />
// //               <button
// //                 className="text-slate-50 font-semibold px-6 py-2 bg-slate-900 rounded shadow hover:bg-slate-800 border-2 border-slate-900 cursor-pointer"
// //                 onClick={handleFormOpen}
// //               >
// //                 Return to Form
// //               </button>
// //             </div>
// //           )}
// //         </>
// //       </div>
// //     </section>
// //   );

// }
