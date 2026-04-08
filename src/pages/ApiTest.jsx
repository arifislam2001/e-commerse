import React, { useEffect, useState } from 'react'

const ApiTest = () => {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users')
        return res.json()
      })
      .then((data) => setUserData(data))
      .catch((err) => setError(err.message || 'Unable to load data'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className='min-h-screen bg-slate-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-200/40'>
          <div className='bg-slate-950 px-6 py-8 text-white sm:px-10'>
            <p className='text-xs uppercase tracking-[0.35em] text-slate-400'>API Test</p>
            <h1 className='mt-4 text-3xl font-semibold tracking-tight sm:text-4xl'>JSONPlaceholder Users</h1>
            <p className='mt-3 max-w-2xl text-sm text-slate-300 sm:text-base'>Fetching data from a public API and showing the result in a clean Tailwind table.</p>
          </div>

          <div className='px-4 py-6 sm:px-8 sm:py-8'>
            <div className='mb-6 flex flex-col gap-3 rounded-3xl bg-slate-50 p-4 text-slate-700 sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <p className='text-sm font-medium text-slate-900'>Result overview</p>
                <p className='text-sm text-slate-500'>Loaded users from the API.</p>
              </div>
              <div className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700'>
                {loading && 'Loading users...'}
                {error && 'Failed to load data'}
                {!loading && !error && `${userData.length} users loaded`}
              </div>
            </div>

            {error ? (
              <div className='rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700'>
                {error}
              </div>
            ) : (
              <div className='overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm'>
                <table className='min-w-full divide-y divide-slate-200 text-left'>
                  <thead className='bg-slate-100'>
                    <tr>
                      <th className='px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>Name</th>
                      <th className='px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>Username</th>
                      <th className='px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>Email</th>
                      <th className='px-4 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>Phone</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-200 bg-white'>
                    {loading ? (
                      <tr>
                        <td colSpan={4} className='px-4 py-8 text-center text-sm text-slate-500'>Loading users...</td>
                      </tr>
                    ) : userData.length ? (
                      userData.map((user) => (
                        <tr key={user.id} className='hover:bg-slate-50'>
                          <td className='px-4 py-4'>
                            <p className='font-medium text-slate-900'>{user.name}</p>
                            <p className='text-sm text-slate-500'>{user.company?.name}</p>
                          </td>
                          <td className='px-4 py-4 text-slate-700'>{user.username}</td>
                          <td className='px-4 py-4 text-slate-700'>{user.email}</td>
                          <td className='px-4 py-4 text-slate-700'>{user.phone}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className='px-4 py-8 text-center text-sm text-slate-500'>No users available.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ApiTest
