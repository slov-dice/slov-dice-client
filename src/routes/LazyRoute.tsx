import { lazy, Suspense } from 'react'

export const LazyRoute = (
  callback: () => Promise<{
    default: React.ComponentType<any>
  }>,
) => {
  const Page = lazy(callback)

  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}
