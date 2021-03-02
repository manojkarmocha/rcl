import * as React from 'react'

interface IUIExample {
  text: string
}

export const UIExample = (props: IUIExample) => {
  <div>
    <h1>Share React Lib {props.text}</h1>
  </div>
}
