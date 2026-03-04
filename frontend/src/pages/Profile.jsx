const Profile = () => {
  return (
    <div>

      <h1 className="text-2xl font-semibold mb-6">
        Profile
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-lg p-6">
          <h2 className="font-medium mb-4">
            Personal Information
          </h2>

          <div className="space-y-3 text-sm">

            <div>
              <p className="text-gray-500">Name</p>
              <p className="font-medium">John Doe</p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">john@example.com</p>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium">+91 9876543210</p>
            </div>

          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="font-medium mb-4">
            Account Settings
          </h2>

          <div className="space-y-4">

            <button className="border px-4 py-2 rounded">
              Change Password
            </button>

            <button className="border px-4 py-2 rounded">
              Update Profile
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Profile;