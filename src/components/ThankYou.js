import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="md:w-full h-[580px] px-5 mt-6 text-center md:h-screen flex flex-col items-center md:mt-56 md:my-12">
      <div className="service-card md:w-96 rounded-md shadow-xl border-2 border-gray-100 hover:text-white cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center gap-3 transition-all duration-300 group hover:bg-gray-300">
        <div>
          <CircleCheckBig
            size={40}
            color="#01bc52"
            strokeWidth={4}
            absoluteStrokeWidth
          />
        </div>
        <h3 className="text-xl font-bold">Thank You!</h3>
        <p className="text-sm">
          Your order has been placed successfully. You&apos;ll receive an email
          confirmation shortly.
        </p>
      </div>
      <button className=" p-3 mt-3 md:my-4 md:p-2 md:w-1/4 rounded-md bg-orange-400 hover:bg-orange-600/85 text-white font-bold shadow-lgs">
        <Link to="/">Go Back to Home</Link>
      </button>
    </div>
  );
}

export default ThankYou;
