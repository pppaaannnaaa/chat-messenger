// Import React and render
import * as React from 'react'
import { render } from 'react-dom'

// Create simple component
const App = () => <div>Hello!</div>

// Render the component in DOM
const rootElement = document.getElementById('root')
render(<App />, rootElement)