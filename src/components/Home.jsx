import { useContext } from 'react';
import { ThemeContext } from '../App';

function Home() {
  const { state, dispatch } = useContext(ThemeContext);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(state.text);
    alert('Text copied to clipboard');
  };

  return (
    <div className={state.isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-black'}>
      <div className='flex flex-col items-center justify-center pt-20'>
        <p className='text-4xl text-center font-semibold w-[70%] mx-auto'>TextUtis - Word Counter, Character Counter, Remove Extra Space</p>
        <div className="w-5/6 mx-auto mt-10 mb-5">
          <p className="text-xl font-semibold mb-2">Enter Your Text Here:</p>
          <textarea 
            className="border-[0.1rem] border-gray-300 w-full h-[12rem] rounded-lg p-2"
            value={state.text}
            onChange={(e) => dispatch({ type: 'SET_TEXT', payload: e.target.value })}
          ></textarea>
        </div>
        <div className='flex gap-5'>
          <button 
            className='bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold'
            onClick={() => dispatch({ type: 'CONVERT_UPPERCASE' })}
          >
            Convert UpperCase
          </button>
          <button 
            className='bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold'
            onClick={() => dispatch({ type: 'CONVERT_LOWERCASE' })}
          >
            Convert LowerCase
          </button>
          <button 
            className='bg-red-500 text-white py-2 px-4 rounded-lg font-semibold'
            onClick={() => dispatch({ type: 'CLEAR_TEXT' })}
          >
            Clear Text
          </button>
          <button 
            className='bg-green-500 text-white py-2 px-4 rounded-lg font-semibold'
            onClick={copyToClipboard}
          >
            Copy To Clipboard
          </button>
          <button 
            className='bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold'
            onClick={() => dispatch({ type: 'REMOVE_EXTRA_SPACES' })}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className='w-5/6 mx-auto flex flex-col gap-2 my-10'>
        <p className='text-4xl font-semibold'>Summary of your text</p>
        <p>Number of words: {state.wordCount}</p>
        <p>Number of characters: {state.charCount}</p>
        <p>Reading Time: {state.readingTime} minutes</p>
      </div>
      <div className='w-5/6 mx-auto flex flex-col items-center'>
        <p className='text-2xl font-semibold'>Preview Document</p>
        <textarea 
          className='w-full border-[0.1rem] border-gray-400 h-[10rem] rounded-lg my-5'
          value={state.text}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}

export default Home;
