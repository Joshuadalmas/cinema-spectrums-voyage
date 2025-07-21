// src/pages/Tickets.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export default function Tickets() {
  const navigate = useNavigate();

  const handleBooking = () => {
    toast({ title: "🎟️ Ticket Booked!", description: "Your ticket has been reserved." });
    setTimeout(() => navigate("/"), 3000); // Optional redirect to home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <Card className="max-w-md w-full bg-neutral-900 border border-neutral-700 rounded-2xl shadow-lg p-6">
        <CardContent>
          <h1 className="text-3xl font-bold mb-4 text-center">🎬 Book Your Tickets</h1>
          <div className="mb-4">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="e.g. Jordan Peele" />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="mb-4">
            <Label htmlFor="film">Select Film</Label>
            <select
              id="film"
              className="bg-neutral-800 text-white p-2 rounded-md w-full border border-neutral-600"
            >
              <option>Midnight Mirage</option>
              <option>Echoes of Silence</option>
              <option>Spectrum: Beyond the Frame</option>
            </select>
          </div>
          <Button className="w-full mt-2" onClick={handleBooking}>
            Confirm Ticket
          </Button>
          <div className="mt-4 text-sm text-center text-neutral-400">
            <Badge>Powered by CineSpectra</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
