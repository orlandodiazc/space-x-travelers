import { useSpinDelay } from "spin-delay";
import Spinner from "../../components/spinner";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useGetMissionsQuery } from "../../redux/services/spacex";
import MissionFactory from "./mission";

export default function Missions() {
  const { data, isError, isLoading } = useGetMissionsQuery();
  const loading = useSpinDelay(isLoading, { delay: 750, minDuration: 400 });

  if (isError) return <div>Unable to fetch missions.</div>;
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
        {data && (
          <>
            <h1 className="mb-3 text-4xl md:text-5xl">Active Missions</h1>
            <div className="rounded-lg bg-black/25 backdrop-blur-xl">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Manufacturers</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((mission) => (
                    <MissionFactory
                      mission={mission}
                      key={mission.mission_id}
                    />
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
