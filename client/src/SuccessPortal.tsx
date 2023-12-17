import { useLocation } from 'react-router-dom';
import success from "./assets/success.png";

interface Props {
  noWay?:{
    success: boolean;
    message: string;
    name: string;
    selectedBatch: string;
    id: string;
  }
}

const SuccessPortal: React.FC<Props> = () => {
  const location = useLocation();
  const { noWay } = location.state;
  return (
    <div className='bg-tertiary min-h-screen flex flex-col items-center'>
       <div className='relative mt-10'>
        <img src={success} alt="image" className='rounded-full' height={200} width={250} />
        <div className='absolute left-[-35px] right-0 bottom-[-300px] rounded-lg p-8 z-10 border-4 bg-white w-80 h-85'>     
          <h1 className='text-xl mb-2'>Payment</h1>

            <div className='relative '>
              <div>
              <label className='text-green-500 text-xl'>Id</label>
              <p className='text-md'>{noWay.id}</p> 
              </div>
              <div>
                <label className='text-green-500 text-xl'>Name:</label>
                <p className='text-md'>{noWay.name}</p>
              </div>
              
              <div>
                <label className='text-green-500 text-xl'>Selected Batch:</label>
                <p className='text-md'> {noWay.selectedBatch}</p>
              </div>
              <br/>
            <p className='text-xl text-green-600'>{noWay.message}</p>
            </div>
          </div>
      </div>
    </div>
  );}

export default SuccessPortal