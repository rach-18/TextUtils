import { useReducer, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Initial state
const initialState = {
  text: '',
  wordCount: 0,
  charCount: 0,
  readingTime: 0,
  isDarkMode: false,
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'SET_TEXT':
      const newText = action.payload;
      const wordCount = newText.split(/\s+/).filter(word => word.length > 0).length;
      const charCount = newText.length;
      const readingTime = (wordCount / 200).toFixed(2); // assuming average reading speed of 200 words per minute
      return {
        ...state,
        text: newText,
        wordCount,
        charCount,
        readingTime,
      };
    case 'CONVERT_UPPERCASE':
      return { ...state, text: state.text.toUpperCase() };
    case 'CONVERT_LOWERCASE':
      return { ...state, text: state.text.toLowerCase() };
    case 'CLEAR_TEXT':
      return { ...state, text: '', wordCount: 0, charCount: 0, readingTime: 0 };
    case 'REMOVE_EXTRA_SPACES':
      const cleanedText = state.text.replace(/\s+/g, ' ').trim();
      const newWordCount = cleanedText.split(/\s+/).filter(word => word.length > 0).length;
      const newCharCount = cleanedText.length;
      const newReadingTime = (newWordCount / 200).toFixed(2);
      return {
        ...state,
        text: cleanedText,
        wordCount: newWordCount,
        charCount: newCharCount,
        readingTime: newReadingTime,
      };
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}

// Create context
export const ThemeContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <div className={state.isDarkMode ? 'dark' : 'light'}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
