import { Outlet } from 'react-router-dom'

import { IntroduceLayout } from 'layouts/Introduce'

export const IntroduceRoute = () => {
  return (
    <IntroduceLayout>
      <Outlet />
    </IntroduceLayout>
  )
}
