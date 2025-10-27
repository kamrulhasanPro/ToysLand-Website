import React, { useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { user, updateUserProfile } = useAuth();
  // console.log(user);
  const { photoURL, displayName, email } = user;
  const firstLatter = user?.displayName?.slice(0, 1);
  const [edit, setEdit] = useState(false);

  const updateSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    if(!photoURL?.startsWith('http')){
        return toast.error('Please enter valid photoURL')
    }
    updateUserProfile({ displayName, photoURL })
      .then(() => {
        Swal.fire({
          title: "Your profile update success",
          icon: "success",
          draggable: true,
        });
        setEdit(false);
        e.target.reset()
      })
      .catch((err) => {
        Swal.fire({
          title: `${err.code}`,
          icon: "error",
          draggable: true,
        });
      });
  };
  return (
    <section className="flex grow flex-col items-center justify-center">
    <title>ToysLand || Profile</title>
      {/* profile image */}
      <figure className="rounded-full overflow-hidden outline-green-400 outline-3 outline-offset-4">
        {photoURL?.startsWith("rgb") ? (
          <div
            className={`bg-[${user?.photoURL}] w-40 h-40 flex items-center justify-center`}
            style={{ background: photoURL }}
          >
            <p className="text-6xl text-white">{firstLatter}</p>
          </div>
        ) : (
          <img className="w-40 h-40 " src={photoURL} alt="Profile image" />
        )}
      </figure>

      {/* name */}
      <p className="text-3xl font-semibold mt-4">{displayName}</p>

      {/* email */}
      <p>{email}</p>

      {/* edit profile */}
      <button
        onClick={() => setEdit(!edit)}
        className="btn btn-success text-white mt-4"
      >
        {edit ? "Cancel Edit" : "Edit Profile"}
      </button>

      {/* edit from */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          edit ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form onSubmit={updateSubmit} className="space-y-2 w-72 mt-7">
          <input
            required
            className="my-input w-full"
            type="text"
            name="name"
            placeholder="Enter New Name"
          />
          <input
            required
            className="my-input w-full"
            type="text"
            name="photoURL"
            placeholder="Enter New Profile URL"
          />
          <button className="btn btn-secondary text-white btn-block">
            Update Profile
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProfilePage;
