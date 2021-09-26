import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastCont() {

  const showToast = () => {
    toast("I hope you enjoy this App🤩")
  };

  return (
    <div className="App">
      <div>
        <button onClick={showToast}>Touch Me!</button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ToastCont;