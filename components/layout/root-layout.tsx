import * as React from 'react'
import * as s from './root-layout.css'
import Navigation from '../navigation/navigation'

export const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <>
      <div className={s.container}>
        <Navigation />
        <main className={s.main}>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}
