import './App.css';
import Tag from './components/Tag';
import Random from './components/Random';

function App() {
  return (
    <div className='w-full h-full flex flex-col background items-center'>
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[34px]
      px-8 py-1 text-2xl font-bold'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
