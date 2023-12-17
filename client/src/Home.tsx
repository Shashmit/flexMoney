import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
function Home() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  interface UserData {
    name: string;
    age: number
    selectedBatch: string;
  }

  interface FormalData {
    success: boolean;
    message: string;
    user: UserData;
    id: string;
  }

  const [formData, setFormData] = useState<UserData>({
    name: '',
    age: 0,
    selectedBatch: '',
  });

  const handleChange =(e: any)=>{
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleAge=(e: any)=>{
    e.preventDefault();
    const inputValue = parseInt(e.target.value, 10);
    setFormData({ ...formData, age: inputValue });
    if(inputValue < 18 || inputValue > 65){
      setErrorMessage('Age should be a number between 18 and 65');

    }else{
      setFormData({ ...formData, age: inputValue });
      setErrorMessage('');
    }
  }
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      const response = await axios.post<FormalData>(import.meta.env.VITE_API + "/api/paymentForm",formData);
      setSuccessMessage(!successMessage);
      navigate('/success', {state: {noWay: response.data}});
    }catch(err :any){
      console.log(err);
    }
  }

  return (
   <div className='bg-primary min-h-screen'>
      <div className="flex max-md:flex-col p-10 mx-4 flex-1 justify-around flex-row align-items gap-9">
          <div className='flex flex-col mt-10'>
            <h2 className="font-oswald text-9xl max-md:text-7xl text-green-600">Yoga Class</h2>
            <p className='text-2xl max-md:text-xl font-sans text-slate-100'><span className=' text-green-500 font-sans'>Flex</span>money</p>
          </div>
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <label className='text-white'>What is your name?
            <input
              type="text"
              className="w-full p-4 bg-tertiary border border-gray-600  text-slate-950  focus:outline-none rounded-lg focus:bg-black focus:text-tertiary "
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              name='name'
              required
            />
            </label>
            <label className='text-white'>What is your age?
            <input
              type="number"
              className="w-full p-4 bg-tertiary border border-gray-600 text-slate-950  focus:outline-none rounded-lg focus:bg-black focus:text-tertiary "
              value={formData.age}
              onChange={handleAge}
              name='age'
              required
            />
            <p>{errorMessage}</p>
            </label>
            <label className='text-white'>What is your batch?
           <select name="selectedBatch" value={formData.selectedBatch} onChange={handleChange} 
                  required className="w-full p-4 bg-tertiary text-slate-950 border border-gray-600 focus:outline-none rounded-lg focus:bg-black focus:text-tertiary ">
                    <option value="">Select Batch</option>
                    <option value="6-7AM">6-7AM</option>
                    <option value="7-8AM">7-8AM</option>
                    <option value="8-9AM">8-9AM</option>
                    <option value="5-6PM">5-6PM</option>
            </select>
            </label>
            <label className='text-white'>Fees Calculated
            <input
              type="text"
              className="w-full p-4 bg-gray-500 border border-gray-600   rounded-lg text-gray-300"
              placeholder="Fees"
              value={"500 Rs"}
              readOnly
            />
            </label>
            <button
              className={`relative inline-block px-4 py-2 font-medium group
                          ${!!errorMessage ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!!errorMessage}
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-lg"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black rounded-lg"></span>
              <span className="relative text-black group-hover:text-white">Let's Go</span>
            </button>
          </form>
          </div>     
     
      <div className="bg-blue-500 text-white p-4 mx-10 rounded-lg flex-wrap flex max-md:relative max-md:bottom-2">
        <div className='flex justify-center gap-2'>
          <span className="text-xl">Thank you for visiting! ❤️</span> 
            <span className=''>If you want to check out the code, it's on <a href="https://github.com/Shashmit" className="underline">GitHub</a></span>
            <span className=''>Connect with me on <a href="https://www.linkedin.com/in/shashmit-kumar-23b75620a/" className="underline">LinkedIn</a></span>
            </div>
      </div>
    </div>
  )
}

export default Home

