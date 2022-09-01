import { useState } from 'react';
import { Navbar } from './components/Navbar'
import { Planets } from './components/Planets'
import { People } from './components/People'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()

function App() {
  let [page, setpage] = useState('planets')
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="h-full bg-gray-900 text-center justify-center items-center">
          <h1 className='text-[60px] text-yellow-600 font-extrabold pt-32 pb-11'>Starwars info</h1>
          <Navbar setpage={setpage} />

          <div className=''>
            {
              page === 'planets' ? <Planets /> : <People />
            }
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
