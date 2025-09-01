import { X, Star, MapPin, Smartphone, DollarSign, Clock, Globe, Calendar, Users, Shield, CheckCircle, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProfileModalProps {
  profile: any
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProfileModal({ profile, open, onOpenChange }: ProfileModalProps) {
  if (!profile) return null

  const mockImages = [
    profile.image,
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
  ]

  const middlemen = [
    { name: "TrustGuard Pro", rating: 4.9, deals: 1200, verified: true },
    { name: "SecureDeals", rating: 4.8, deals: 890, verified: true },
    { name: "SafeTrade", rating: 4.7, deals: 650, verified: false }
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {profile.name}
            {profile.ofVerified && (
              <Badge variant="verified">
                <CheckCircle className="w-3 h-3 mr-1" />
                OF Verified
              </Badge>
            )}
            {profile.isOnline && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-xs text-success">Online</span>
              </div>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Gallery */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {mockImages.map((img, index) => (
                <div key={index} className={`relative overflow-hidden rounded-2xl ${index === 0 ? 'col-span-2 h-64' : 'h-32'}`}>
                  <img
                    src={img}
                    alt={`${profile.name} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {index === 3 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold">
                      +5 more
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="middlemen">Middlemen</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted/20 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">Age: {profile.age} years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-primary" />
                    <span className="text-sm">{profile.smartphone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-sm">Salary: ${profile.salary}k</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">{profile.timePerDay}/day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-sm">English: {profile.englishLevel}/10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Socials: {profile.socialsSetUp ? 'Ready' : 'Setup needed'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">Start: {profile.startDate}</span>
                  </div>
                </div>

                {profile.countriesBlocked.length > 0 && (
                  <div className="p-4 bg-warning/10 rounded-2xl">
                    <h4 className="font-medium mb-2">Blocked Countries</h4>
                    <div className="flex flex-wrap gap-1">
                      {profile.countriesBlocked.map((country: string) => (
                        <Badge key={country} variant="warning" className="text-xs">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="content" className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {profile.content.map((type: string) => (
                    <Badge key={type} variant="outline" className="justify-center py-2">
                      {type}
                    </Badge>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="middlemen" className="space-y-3">
                {middlemen.map((middleman) => (
                  <div key={middleman.name} className="flex items-center justify-between p-3 border border-border rounded-xl">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{middleman.name}</span>
                        {middleman.verified && (
                          <Badge variant="success" className="text-xs">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        ⭐ {middleman.rating} • {middleman.deals} deals completed
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Contact
                    </Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Price & Guarantee */}
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20">
              <div className="text-center">
                <Badge variant="price" className="text-lg font-bold px-4 py-2 mb-3">
                  ${profile.cost}
                </Badge>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-4">
                  <Shield className="w-4 h-4" />
                  {profile.guaranteeDays} days guarantee
                </div>
                <div className="space-y-2">
                  <Button className="w-full gradient-primary neon-glow" size="lg">
                    Buy Now - ${profile.cost}
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Make Custom Offer
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-4 bg-muted/20 rounded-2xl space-y-3">
              <h4 className="font-medium">Quick Stats</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="text-success font-medium">&lt; 2h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="text-success font-medium">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completed Deals</span>
                  <span className="font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg. Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-warning text-warning" />
                    <span className="font-medium">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middleman Available */}
            {profile.middlemanAvailable && (
              <div className="p-4 bg-neon-mint/10 border border-neon-mint/30 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-neon-mint" />
                  <span className="font-medium">Middleman Protection</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Secure transaction with trusted middleman services available.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}