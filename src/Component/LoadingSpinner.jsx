import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-white bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div>
      <FaSpinner className=" animate-spin text-red-500" size={70}/>
      </div>
      
    </div>
  );
  
  export default LoadingSpinner;