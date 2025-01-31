// https://react.dev/reference/react/Suspense
import { Suspense } from 'react'
import './App.css'
import { Loading } from './components/Loading'

function App() {
<Suspense fallback={<Loading />}>
  
</Suspense>
}

export default App
