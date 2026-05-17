import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function EventCard({ event }: { event: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-primary/10">
      {/* ইমেজ সেকশন */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={event.image} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          alt="event" 
        />
        <Badge className="absolute top-3 right-3">{event.price}</Badge>
      </div>

      <CardHeader className="p-4">
        <CardTitle className="text-lg line-clamp-1">{event.title}</CardTitle>
      </CardHeader>

      <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
        <p>📅 {event.date}</p>
        <p>📍 {event.location}</p>
      </CardContent>

      <CardFooter className="p-4">
        <Button className="w-full rounded-lg">View Details</Button>
      </CardFooter>
    </Card>
  )
}