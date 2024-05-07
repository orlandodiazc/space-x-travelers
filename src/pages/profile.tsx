import { useAppSelector } from "../hooks/hooks";

export default function Profile() {
  const { reservedRockets, reservedMissions } = useAppSelector(
    ({ profileReducer }) => profileReducer,
  );
  return (
    <div className="min-h-screen items-center bg-profile-mobile bg-cover pb-8 pt-24 sm:pt-32 md:bg-profile-tablet lg:bg-profile-desktop lg:pt-40">
      <section className="container grid gap-4 sm:grid-flow-col">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl">My Rockets</h2>
          <div className="flex flex-col rounded-lg border bg-background text-muted-foreground">
            {reservedRockets.length > 0 ? (
              reservedRockets.map((rocket) => (
                <div
                  className="border-b px-4 py-2 last:border-b-transparent"
                  key={rocket.id}
                >
                  {rocket.name}
                </div>
              ))
            ) : (
              <p className="px-4 py-2">No rockets liked</p>
            )}
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl">My Missions</h2>
          <div className="flex flex-col rounded-lg border bg-background text-muted-foreground">
            {reservedMissions.length > 0 ? (
              reservedMissions.map((mission) => (
                <div
                  className="border-b px-4 py-2 last:border-b-transparent"
                  key={mission.id}
                >
                  {mission.name}
                </div>
              ))
            ) : (
              <p className="px-4 py-2">No missions joined</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
