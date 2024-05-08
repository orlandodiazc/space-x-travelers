import { Icons } from "../components/icons";
import Info from "../components/info";
import Spinner from "../components/spinner";
import { buttonVariants } from "../components/ui/button";
import { useGetCompanyQuery } from "../redux/services/spacex";
import { useSpinDelay } from "spin-delay";

export default function Home() {
  const { data, isError, isLoading } = useGetCompanyQuery();
  const loading = useSpinDelay(isLoading);

  if (isError) return <div>Unable to fetch company information.</div>;
  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="h-full pt-2 sm:pt-32 lg:pt-40">
      <div className="container flex">
        {data && (
          <section className="flex max-w-3xl flex-col items-center gap-3 self-center text-center sm:items-start sm:text-left">
            <h1 className="mb-2 text-5xl font-medium md:text-6xl">
              {data.name}
            </h1>
            <span className="flex items-center gap-2 text-sm sm:text-base">
              <Icons.location size="20" />
              <p>
                {data.headquarters.address}, {data.headquarters.city},{" "}
                {data.headquarters.state}
              </p>
            </span>
            <p className="text-muted-foreground">{data.summary}</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-flow-col sm:grid-cols-1 sm:gap-x-8">
              <Info title="Founder" description={data.founder} />
              <Info title="Employees" description={data.employees.toString()} />
              <Info title="Vehicles" description={data.vehicles.toString()} />
              <Info
                title="Launch Sites"
                description={data.launch_sites.toString()}
              />
            </div>
            <nav className="flex items-center">
              <a href={data.links.website} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.website className="h-5 w-5" />
                  <span className="sr-only">Website</span>
                </div>
              </a>
              <a href={data.links.twitter} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.twitter />
                  <span className="sr-only">Twitter</span>
                </div>
              </a>
              <a href={data.links.flickr} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.flickr />
                  <span className="sr-only">Flick R</span>
                </div>
              </a>
            </nav>
          </section>
        )}
      </div>
    </div>
  );
}
