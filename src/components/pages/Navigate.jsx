// Sometimes you want to Navigate programmatically  -->  like Redirecting after Form Submission, navigating based on user action, or implementing a Back button...

import { useNavigate } from "react-router-dom";

export default function Navigate() {

    const navigateHook = useNavigate();

    return (
        <button
            onClick={() => navigateHook('/contact')}
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-4 focus:outline-none cursor-pointer translate-x-165 my-15"
        >Navigate Hook</button>
    );
}

// Also  -->  our navigation history is stored in the history stack, so  useNavigate  hook can be used for these 3 purposes:

// 1) navigating to a new location.
// 2) navigate to forward or backward in history stack.
// 3) replace the previous location with the current location.  ***

// const navigateHook = useNavigate();
// navigateHook('/contact', {replace: true})