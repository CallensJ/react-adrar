// https://react.dev/reference/react/Suspense
import { Suspense } from 'react'
import './App.css'
// import { Loading } from './components/Loading'

import FetchApi from './utils/FetchApi'

const App = () => {
    return (
      <Suspense fallback={<p>Chargement...</p>}>
        <FetchApi />
      </Suspense>
    );
  };
export default App
