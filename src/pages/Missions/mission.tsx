import { Button } from "../../components/ui/button"
import { TableCell, TableRow } from "../../components/ui/table"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { Mission } from "../../types/mission"
import { toggleMissionReservation } from "../../redux/services/profile"
import { Badge } from "../../components/ui/badge"

export default function MissionFactory({ mission }: { mission: Mission }) {
  const dispatch = useAppDispatch()
  const reservedMissions = useAppSelector(
    ({ profileReducer }) => profileReducer.reservedMissions
  )
  const isReserved = reservedMissions.some(
    (item) => item.id === mission.mission_id
  )
  return (
    <TableRow>
      <TableCell>{mission.mission_name}</TableCell>
      <TableCell className="min-w-[380px]">
        {mission.description.split(".").slice(0, 1) + "."}
      </TableCell>
      <TableCell>{mission.manufacturers}</TableCell>
      <TableCell className="min-w-[128px] text-center">
        {isReserved ? (
          <Badge>Reserved</Badge>
        ) : (
          <Badge variant="outline">Not Reserved</Badge>
        )}
      </TableCell>
      <TableCell className="w-40">
        <Button
          variant={isReserved ? "destructive" : "default"}
          className="w-full"
          onClick={() =>
            dispatch(
              toggleMissionReservation({
                id: mission.mission_id,
                name: mission.mission_name,
              })
            )
          }
        >
          {isReserved ? "Cancel Reservation" : "Reserve Mission"}
        </Button>
      </TableCell>
    </TableRow>
  )
}
