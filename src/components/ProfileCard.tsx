import { Star, MapPin, Smartphone, DollarSign, Clock, Globe, Calendar, Users, Shield, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProfileCardProps {
  profile: {
    id: string
    name: string
    image: string
    age: number
    location: string
    smartphone: string
    salary: number
    timePerDay: string
    englishLevel: number
    content: string[]
    startDate: string
    socialsSetUp: boolean
    countriesBlocked: string[]
    ofVerified: boolean
    cost: number
    guaranteeDays: number
    middlemanAvailable: boolean
    isOnline: boolean
  }
  onView: (profile: any) => void
}

export function ProfileCard({ profile, onView }: ProfileCardProps) {
  return (
    <Card className="glass-card group hover:shadow-strong hover:scale-[1.02] cursor-pointer overflow-hidden">
      <div onClick={() => onView(profile)} className="p-0">
        {/* Media Section */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 overflow-hidden">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {profile.isOnline && (
            <div className="absolute top-3 right-3">
              <div className="w-3 h-3 bg-success rounded-full border-2 border-white shadow-glow"></div>
            </div>
          )}
          {profile.middlemanAvailable && (
            <Badge variant="middleman" className="absolute top-3 left-3">
              Middleman Available
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-card-foreground">{profile.name}</h3>
            {profile.ofVerified && (
              <Badge variant="verified" className="ml-2">
                <CheckCircle className="w-3 h-3 mr-1" />
                OF Verified
              </Badge>
            )}
          </div>

          {/* Profile Stats Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{profile.age}y</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Smartphone className="w-3 h-3" />
              <span>{profile.smartphone}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-3 h-3" />
              <span>${profile.salary}k</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{profile.timePerDay}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <div className="flex items-center">
                <span>EN {profile.englishLevel}/10</span>
                <div className="ml-1 flex">
                  {[...Array(Math.floor(profile.englishLevel / 2))].map((_, i) => (
                    <Star key={i} className="w-2 h-2 fill-warning text-warning" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Types */}
          <div className="flex flex-wrap gap-1">
            {profile.content.map((type) => (
              <Badge key={type} variant="outline" className="text-xs">
                {type}
              </Badge>
            ))}
          </div>

          {/* Social Setup & Availability */}
          <div className="flex items-center gap-2 text-xs">
            <Badge variant={profile.socialsSetUp ? "success" : "outline"}>
              <Users className="w-3 h-3 mr-1" />
              Socials {profile.socialsSetUp ? "Ready" : "Setup Needed"}
            </Badge>
          </div>

          {/* Countries Blocked */}
          {profile.countriesBlocked.length > 0 && (
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Blocked:</span> {profile.countriesBlocked.join(", ")}
            </div>
          )}

          {/* Price & Guarantee */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div>
              <Badge variant="price" className="text-sm font-bold">
                ${profile.cost}
              </Badge>
              <div className="text-xs text-muted-foreground mt-1">
                <Shield className="w-3 h-3 inline mr-1" />
                {profile.guaranteeDays} days guarantee
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 pt-0 flex gap-2">
        <Button className="flex-1 gradient-primary neon-glow" size="sm">
          Buy Now
        </Button>
        <Button variant="outline" className="flex-1" size="sm">
          Make Offer
        </Button>
      </div>
    </Card>
  )
}