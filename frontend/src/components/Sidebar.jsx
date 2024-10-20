import { Link } from "react-router-dom";
import { Home, UserPlus, Bell } from "lucide-react";

export default function Sidebar({ user, isDark }) {
  return (
    <div className="rounded-lg max-w-sm mx-auto overflow-hidden dark:border-white border:black border-[1px] dark:bg-black dark:text-white  bg-white">
      <div className="relative">
        {/* Banner Image */}
        <div
          className="h-28 bg-cover bg-center"
          style={{
            backgroundImage: `url("${user.bannerImg || "/banner.png"}")`,
          }}
        />
        {/* Profile Picture */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <img
            src={user.profilePicture || "/avatar.png"}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 dark:text-white text-black  border-white shadow-md"
          />
        </div>
      </div>

      <div className={`mt-12 text-center p-4 dark:text-white text-black`}>
        {/* Name and Headline */}
        <Link to={`/profile/${user.username}`} className="block">
          <h2 className="text-2xl font-semibold dark:text-white">{user.name}</h2>
        </Link>
        <p className="mt-1">{ "Loop User" }</p>
        <p className="dark:text-white text-black text-sm mt-1">{user.location || "Earth"}</p>

        {/* Connections */}
        <p className="text-info text-sm mt-2">
          {user.connections.length} connections
        </p>

        {/* Education */}
        {user.education.length > 0 && (
          <div className={`mt-4 text-sm dark:text-white text-black`}>
            <p className="font-semibold">Education:</p>
            <p key={user.education[0]._id} className="mt-1">
              {user.education[0].school}, {user.education[0].fieldOfStudy} (
              {user.education[0].startYear} -{" "}
              {user.education[0].endYear || "Present"})
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-base-100 p-4">
        {/* Navigation Links */}
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className={`flex items-center py-2 px-4 rounded-md transition-colors ${!isDark ? 'hover:bg-violet-700 text-black dark:text-white ' : 'hover:bg-primary text-black'}`}
              >
                <Home className="mr-2" size={20} /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/network"
                className={`flex items-center py-2 px-4 rounded-md transition-colors hover:bg-violet-700 text-black dark:text-white  : 'hover:bg-primary text-black'}`}
              >
                <UserPlus className="mr-2" size={20} /> My Network
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className={`flex items-center py-2 px-4 rounded-md transition-colors ${!isDark ? 'hover:bg-violet-700 text-black dark:text-white ' : 'hover:bg-primary text-black'}`}
              >
                <Bell className="mr-2" size={20} /> Notifications
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-base-100 p-4 dark:text-white text-black">
        {/* Visit Profile Link */}
        <Link
          to={`/profile/${user.username}`}
          className={`text-sm font-semibold text-blue-400' : 'text-primary'}`}
        >
          Visit your profile
        </Link>
      </div>
    </div>
  );
}
