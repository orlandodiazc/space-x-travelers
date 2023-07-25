import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/ui/card"
import { Rocket } from "../../types/rocket"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { toggleRocketReservation } from "../../redux/services/profile"
import Info from "../../components/info"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"

export default function RocketFactory({ rocket }: { rocket: Rocket }) {
  const dispatch = useAppDispatch()
  const reservedRockets = useAppSelector(
    ({ profileReducer }) => profileReducer.reservedRockets
  )
  const isReserved = reservedRockets.some((item) => item.id === rocket.id)
  return (
    <Card>
      <CardContent className="grid justify-stretch gap-2 lg:grid-flow-col lg:justify-start">
        <div className="flex items-center justify-center rounded-xl bg-black/20 lg:w-96">
          <img
            src={rocket.flickr_images[0]}
            alt="Rocket Image"
            className="h-full max-h-80 w-full rounded-t-lg object-contain lg:rounded-bl-lg lg:rounded-tr-none lg:object-cover "
          />
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="space-y-2">
            <CardTitle className="flex items-center gap-1.5">
              {isReserved && <Badge>Reserved</Badge>}
              {rocket.name}
            </CardTitle>
            <CardDescription>{rocket.description}</CardDescription>
          </div>
          <div className="flex gap-8">
            <Info title="Height" description={`${rocket.height.meters}Mts`} />
            <Info
              title="Diameter"
              description={`${rocket.diameter.meters}Mts`}
            />
            <Info title="Mass" description={`${rocket.mass.kg}Kg`} />
          </div>
          <Button
            variant={isReserved ? "destructive" : "default"}
            className="sm:me-auto"
            onClick={() =>
              dispatch(
                toggleRocketReservation({ id: rocket.id, name: rocket.name })
              )
            }
          >
            {isReserved ? "Cancel Reservation" : "Reserve Rocket"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
