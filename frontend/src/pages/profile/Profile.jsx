import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";




const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {authUser} = useAuthContext();
    const user = authUser.data.user;
    console.log(user)

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0a0f1d]">
      <div className="w-96 p-6 border border-red-500 rounded-lg shadow-lg relative" style={{boxShadow: '0 0 15px red'}}>
        <div className="text-center mb-4">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border border-red-500"
          />
          <h2 className="text-white text-xl mt-3">{user.username}</h2>
        
        </div>

        <div className="space-y-4">
          <div className="border border-red-500 p-2 rounded text-white text-sm" style={{boxShadow: '0 0 5px red'}}>
            {user.email}
          </div>
          
          <div className="border border-red-500 p-2 rounded text-white text-sm" style={{boxShadow: '0 0 5px red'}}>
            {user.fullName}
          </div>
        </div>

        <button className="mt-4 w-full p-2 border border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all rounded" style={{boxShadow: '0 0 5px red'}} onClick={()=>setIsModalOpen(true)}>
          Edit Profile
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 p-6 bg-[#0a0f1d] border border-red-500 rounded-lg shadow-lg relative" style={{boxShadow: '0 0 15px red'}}>
            <h2 className="text-white text-lg mb-4">Edit Profile</h2>
            <input type="text" placeholder="Name" className="w-full p-2 mb-2 border border-red-500 rounded bg-black text-white" />
            <input type="email" placeholder="Email" className="w-full p-2 mb-2 border border-red-500 rounded bg-black text-white" />
            <input type="text" placeholder="Full Name" className="w-full p-2 mb-2 border border-red-500 rounded bg-black text-white" />
            <div className="flex justify-end space-x-2">
              <button className="p-2 border border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all rounded" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="p-2 border border-red-500 text-red-400 hover:bg-red-500 hover:text-black transition-all rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
