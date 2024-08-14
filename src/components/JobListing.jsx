import React from "react";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
const JobListing = ({ job }) => {
   const [showDescription, setShowDescription] = useState(false);


   let description = job.description

   if (!showDescription) {
      description = description.substring(0, 90) + '...'
   }

   return (
      <div className="bg-white rounded-xl shadow-md relative">
         <div className="p-4">
            <div className="mb-6">
               <div className="text-gray-600 my-2">{job.type}</div>
               <h3 className="text-xl font-bold">{job.title}</h3>
            </div>

            <div className="mb-5">
               <p className="text-gray-600">{description}</p>
               <button className="absolute mb-4 right-4 hover:text-indigo-600 text-gray-500" onClick={() => setShowDescription(!showDescription)}><span className="text-indigo-500 underline">{showDescription ? 'Read Less' : 'Read More'}</span></button>
            </div>
            <h3 className="text-indigo-500 mb-2">{job.salary}/Year</h3>

            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
               <div className="text-indigo-500 mb-3">
                  <FaMapMarker className="inline text-lg mb-1 mr-1"/>
                  {job.location}
               </div>
               <Link
                  to={`/jobs/${job.id}`}
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
               >
                View
               </Link>
            </div>
         </div>
      </div>
   );
};

export default JobListing;
