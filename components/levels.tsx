import { getUserLevel } from "@/lib/services/userLevel";
import { getProfile } from "@/lib/services/users";
import { MapPin } from "lucide-react";
import { LevelProgress } from "./level-progress";
import UserAvatar from "./user-avatar";

interface LevelsProps {
  userId: string;
  hideProgress?: boolean;
}

export default async function Levels({
  userId,
  hideProgress = false,
}: LevelsProps) {
  const profile = await getProfile(userId);

  if (!profile) {
    throw new Error("Private user data not found");
  }

  const userLevel = await getUserLevel(userId);

  return (
    <section className="bg-gradient-hero flex justify-center py-6 px-4">
      <div className="w-full max-w-md flex flex-col items-stretch bg-white rounded-md p-6">
        <div className="flex items-center">
          <UserAvatar userProfile={profile} size="lg" />
          <div className="flex flex-col ml-6">
            <div className="text-lg font-bold leading-none">{profile.name}</div>
            <div className="flex items-center mt-2">
              <div className="flex items-baseline">
                <div className="text-sm font-bold">LV.</div>
                <div className="text-xxl font-bold ml-1 leading-none">
                  {userLevel ? userLevel.level : "1"}
                </div>
              </div>
              <div className="flex ml-4 text-sm items-center">
                <MapPin className="w-4 h-4 mr-0.5" />
                {profile.address_prefecture}
              </div>
            </div>
          </div>
        </div>
        {!hideProgress && (
          <div className="mt-4 flex flex-col items-start">
            <LevelProgress userLevel={userLevel} />
          </div>
        )}
      </div>
    </section>
  );
}
