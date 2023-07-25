import Spinner from "../../components/spinner"
import { useGetRocketsQuery } from "../../redux/services/spacex"
import RocketFactory from "./rocket"

export default function Rockets() {
  const { data, isError, isLoading } = useGetRocketsQuery()
  return (
    <div className="min-h-screen items-center bg-rockets-mobile bg-cover pb-8 pt-24 sm:pt-28 md:bg-rockets-tablet lg:bg-rockets-desktop lg:pt-40">
      <section className="container flex flex-col gap-4">
        {isLoading ? (
          <div className="mx-auto">
            <Spinner />
          </div>
        ) : isError || !data ? (
          <h1>Unable to fetch rockets</h1>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl">Active Rockets</h1>
            <div className="grid gap-4">
              {data.map((rocket) => (
                <RocketFactory rocket={rocket} key={rocket.id} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
