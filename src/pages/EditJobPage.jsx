import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

const EditJobPage = () => {
  const job = useLoaderData()
  return (
    <div>{job.title}</div>
  )
}

export default EditJobPage