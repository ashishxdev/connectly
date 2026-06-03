import { Link } from "react-router";
import { MapPinIcon } from "lucide-react";

const FriendCard = ({ friend }) => {
  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow">
      <div className="card-body p-4 flex flex-col justify-between">
        <div>
          {/* USER INFO */}
          <div className="flex items-center gap-3 mb-3">
            <div className="avatar size-12">
              <img src={friend.profilePic} alt={friend.fullName} />
            </div>
            <div className="truncate">
              <h3 className="font-semibold truncate">{friend.fullName}</h3>
              {friend.location && (
                <p className="text-xs opacity-75 flex items-center mt-0.5 truncate">
                  <MapPinIcon className="size-3 mr-1 inline-block shrink-0" />
                  {friend.location}
                </p>
              )}
            </div>
          </div>
          {friend.bio && (
            <p className="text-xs opacity-70 mb-4 line-clamp-2">
              {friend.bio}
            </p>
          )}
        </div>

        <Link to={`/chat/${friend._id}`} className="btn btn-outline btn-sm w-full mt-auto">
          Message
        </Link>
      </div>
    </div>
  );
};
export default FriendCard;