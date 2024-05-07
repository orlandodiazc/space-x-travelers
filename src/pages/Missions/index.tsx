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

  return (
    <div className="min-h-screen items-center bg-missions-mobile bg-cover pb-8 pt-24 sm:pt-32 md:bg-missions-tablet lg:bg-missions-desktop lg:pt-40">
      <section className="container flex flex-col gap-4">
        {isLoading ? (
          <div className="mx-auto">
            <Spinner />
          </div>
        ) : isError || !data ? (
          <h1>Unable to fetch missions</h1>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl">Active Missions</h1>
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
