import { useContext } from 'react';
import { ThemeContext } from '../App';

function About() {
  const { state } = useContext(ThemeContext);

  return (
    <div className={`w-full px-20 flex flex-col items-center py-20 ${state.isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-black'}`}>
      <p className="text-3xl font-semibold">About App</p>
      <div className="py-10 text-lg border-[0.1rem] border-gray-400 shadow-xl p-5 rounded-lg flex flex-col gap-4">
        <div>
          <p className="font-semibold">Analyse Your Text</p>
          <p>TextUtils give you a way to analyze your text quickly and efficiently. It lets you to count words, count characters or reading time required. It has both light and dark mode for better compatibility.</p>
        </div>
        <div>
          <p className="font-semibold">Free To Use</p>
          <p>TextUtils is a free character counter tool that provided instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus, it is suitable for writing text with word/character limit.</p>
        </div>
        <div>
          <p className="font-semibold">Browser Compatible</p>
          <p>This word counter works with any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, etc.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
