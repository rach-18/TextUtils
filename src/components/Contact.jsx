import { useContext } from 'react';
import { ThemeContext } from '../App';

function Contact() {
  const { state } = useContext(ThemeContext);

  return (
    <div className={`w-full px-20 flex flex-col items-center py-20 ${state.isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-black'}`}>
      <p className="text-3xl font-semibold">Contact Me</p>
      <div className="mt-10 mb-28 text-lg border-[0.1rem] border-gray-400 shadow-xl p-5 rounded-lg flex flex-col gap-4">
        <p>Created by : Shubham Bawankar</p>
        <p>Email Address : shubhambawankar735@gmail.com</p>
        <p>Github Link : <a href="https://github.com/Shubham56-droid" target="_blank" rel="noopener noreferrer">https://github.com/Shubham56-droid</a></p>
      </div>
    </div>
  );
}

export default Contact;
