import { useState } from "react"
import { Search, UserPlus, LogIn, Star, TrendingUp, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProfileCard } from "@/components/ProfileCard"
import { FilterBar } from "@/components/FilterBar"
import { ProfileModal } from "@/components/ProfileModal"

// Mock data
const mockProfiles = [
  {
    id: "1",
    name: "Emma Rose",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    age: 23,
    location: "Los Angeles, CA",
    smartphone: "iPhone 14 Pro",
    salary: 85,
    timePerDay: "6-8h",
    englishLevel: 9,
    content: ["Fashion", "Lifestyle", "Beauty"],
    startDate: "Available now",
    socialsSetUp: true,
    countriesBlocked: ["China", "Russia"],
    ofVerified: true,
    cost: 2500,
    guaranteeDays: 30,
    middlemanAvailable: true,
    isOnline: true
  },
  {
    id: "2", 
    name: "Sofia Martinez",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    age: 26,
    location: "Miami, FL",
    smartphone: "Samsung S23 Ultra",
    salary: 120,
    timePerDay: "4-6h",
    englishLevel: 8,
    content: ["Fitness", "Health", "Travel"],
    startDate: "Jan 15, 2024",
    socialsSetUp: true,
    countriesBlocked: [],
    ofVerified: true,
    cost: 3200,
    guaranteeDays: 45,
    middlemanAvailable: true,
    isOnline: false
  },
  {
    id: "3",
    name: "Chloe Kim",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face", 
    age: 21,
    location: "New York, NY",
    smartphone: "iPhone 15 Pro Max",
    salary: 95,
    timePerDay: "8-10h",
    englishLevel: 10,
    content: ["Gaming", "Tech", "Lifestyle"],
    startDate: "Available now",
    socialsSetUp: true,
    countriesBlocked: ["Iran"],
    ofVerified: false,
    cost: 1800,
    guaranteeDays: 21,
    middlemanAvailable: false,
    isOnline: true
  },
  {
    id: "4",
    name: "Ashley Wilson", 
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
    age: 28,
    location: "Austin, TX",
    smartphone: "iPhone 14",
    salary: 110,
    timePerDay: "5-7h", 
    englishLevel: 9,
    content: ["Music", "Art", "Fashion"],
    startDate: "Feb 1, 2024",
    socialsSetUp: false,
    countriesBlocked: ["North Korea"],
    ofVerified: true,
    cost: 2900,
    guaranteeDays: 30,
    middlemanAvailable: true,
    isOnline: true
  }
]

const Index = () => {
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleViewProfile = (profile: any) => {
    setSelectedProfile(profile)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="glass-card border-b border-card-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <Star className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                  InfluencerHub
                </h1>
                <p className="text-xs text-muted-foreground">Premium Creator Marketplace</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Browse
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                How it Works
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Support
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button className="gradient-primary neon-glow" size="sm">
                <UserPlus className="w-4 h-4 mr-2" />
                Become a Seller
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <Badge variant="premium" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Premium Creator Contracts
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Buy Influencer Contracts,{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Make Money
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with verified creators ready to promote your products. 
            Secure deals with middleman protection and guaranteed results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="gradient-primary neon-glow">
              <Search className="w-5 h-5 mr-2" />
              Explore Creators
            </Button>
            <Button variant="outline" size="lg" className="glass-card">
              <TrendingUp className="w-5 h-5 mr-2" />
              See Success Stories
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-success" />
              <span>Middleman Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-warning" />
              <span>4.9/5 Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-primary" />
              <span>1000+ Verified Creators</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        {/* Filters */}
        <FilterBar />

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Available Creators</h2>
            <p className="text-muted-foreground">
              {mockProfiles.length} verified profiles ready for business
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="success">{mockProfiles.filter(p => p.isOnline).length} Online</Badge>
            <Badge variant="middleman">{mockProfiles.filter(p => p.middlemanAvailable).length} Middleman Available</Badge>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onView={handleViewProfile}
            />
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        profile={selectedProfile}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;
