import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobPage, { jobLoader } from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPage'
import AddJobPage from './pages/AddJobPage'
import EditJobs from './pages/EditJobPage'

const App = () => {

  const addJob = async (newJob) => {
    //add new job
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
    return
  }

  //delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/add-jobs" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/edit-jobs/:id" element={<EditJobs  />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App