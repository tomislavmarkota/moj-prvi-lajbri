import React from 'react'

import { ExampleComponent } from 'moj-prvi-lajbri'
import 'moj-prvi-lajbri/dist/index.css'
import TransformToUppercase from 'moj-prvi-lajbri'

const App = () => {
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <TransformToUppercase text={'Moj prvi lajbri'} />
    </>
  )
}

export default App
