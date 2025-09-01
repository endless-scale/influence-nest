import { useState } from "react"
import { Filter, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FilterBar() {
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [ageRange, setAgeRange] = useState([18, 35])
  const [englishLevel, setEnglishLevel] = useState([1])
  const [middlemanOnly, setMiddlemanOnly] = useState(false)
  const [ofVerified, setOfVerified] = useState(false)
  const [immediateAvailable, setImmediateAvailable] = useState(false)

  return (
    <Card className="glass-card p-6 mb-6 sticky top-4 z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary" />
          <h3 className="font-semibold">Filters</h3>
        </div>
        <Button variant="ghost" size="sm" className="ml-auto">
          <X className="w-4 h-4 mr-1" />
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {/* Search */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-sm font-medium mb-2 block">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search profiles..." 
              className="pl-9 glass"
            />
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Price Range</label>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={10000}
              min={0}
              step={100}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Age Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Age Range</label>
          <div className="px-2">
            <Slider
              value={ageRange}
              onValueChange={setAgeRange}
              max={40}
              min={18}
              step={1}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{ageRange[0]}y</span>
            <span>{ageRange[1]}y</span>
          </div>
        </div>

        {/* English Level */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Min English Level</label>
          <div className="px-2">
            <Slider
              value={englishLevel}
              onValueChange={setEnglishLevel}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Level {englishLevel[0]}/10
          </div>
        </div>

        {/* Toggles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Middleman Available</label>
            <Switch checked={middlemanOnly} onCheckedChange={setMiddlemanOnly} />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">OF Verified</label>
            <Switch checked={ofVerified} onCheckedChange={setOfVerified} />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Available Now</label>
            <Switch checked={immediateAvailable} onCheckedChange={setImmediateAvailable} />
          </div>
        </div>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
        <Badge variant="outline">Price: ${priceRange[0]} - ${priceRange[1]}</Badge>
        <Badge variant="outline">Age: {ageRange[0]}-{ageRange[1]}y</Badge>
        <Badge variant="outline">English: {englishLevel[0]}+/10</Badge>
        {middlemanOnly && <Badge variant="middleman">Middleman Only</Badge>}
        {ofVerified && <Badge variant="verified">OF Verified</Badge>}
        {immediateAvailable && <Badge variant="success">Available Now</Badge>}
      </div>
    </Card>
  )
}