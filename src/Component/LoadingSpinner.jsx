import { FaSpinner } from "react-icons/fa";


// Full screen loading spinner
const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-white backdrop-blur-sm flex items-center justify-center z-50">
      <div>

        {/* Spinning icon */}
      <FaSpinner className=" animate-spin text-red-500" size={70}/>
      </div>
      
    </div>
  );
  
  export default LoadingSpinner;