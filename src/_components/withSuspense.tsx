import { Suspense } from 'react'
// import MySpinner from './MainLayout/MySpinner'

const withSuspense = (Component: any) => {
  return (
    <Suspense fallback={<div className='loader' />}>
      <Component />
    </Suspense>
  )
}

export default withSuspense
