import { useSpinDelay } from "spin-delay";
import Spinner from "../../components/spinner";
import { useGetRocketsQuery } from "../../redux/services/spacex";
import RocketFactory from "./rocket";

export default function Rockets() {
  const { data, isError, isLoading } = useGetRocketsQuery();
  const loading = useSpinDelay(isLoading, { delay: 750, minDuration: 400 });

  if (isError) return <div>Unable to fetch rockets.</div>;
  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="pb-8 pt-2 sm:pt-8">
      <section className="container flex flex-col gap-4">
        <h1 className="mb-3 text-3xl md:text-5xl">Active Rockets</h1>
        <div className="grid gap-4 overflow-y-auto">
          {data?.map((rocket) => (
            <RocketFactory rocket={rocket} key={rocket.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
