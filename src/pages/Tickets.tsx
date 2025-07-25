// Tickets.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Star, Calendar, Clock, MapPin, CreditCard } from "lucide-react";

const Tickets = () => {
  const navigate = useNavigate();
  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({});
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const ticketTypes = [
    {
      id: "festival-pass",
      name: "Festival Pass",
      description: "Access to all screenings and events for 5 days",
      price: 299,
      originalPrice: 399,
      features: [
        "All screenings",
        "Opening & Closing ceremonies",
        "Director Q&As",
        "VIP lounge access"
      ],
      badge: "Best Value",
      badgeColor: "bg-yellow-500"
    },
    {
      id: "day-pass",
      name: "Single Day Pass",
      description: "Access to all screenings for one selected day",
      price: 89,
      features: ["All day screenings", "Selected Q&As", "Festival materials"],
      badge: "Popular",
      badgeColor: "bg-primary"
    },
    {
      id: "single-screening",
      name: "Single Screening",
      description: "Ticket for one specific screening",
      price: 25,
      features: ["One screening", "Program booklet"]
    },
    {
      id: "vip-experience",
      name: "VIP Experience",
      description: "Premium access with exclusive perks",
      price: 599,
      features: [
        "All Festival Pass benefits",
        "Meet & greet with directors",
        "Premium seating",
        "Welcome reception",
        "Exclusive merchandise"
      ],
      badge: "Exclusive",
      badgeColor: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
    }
  ];

  const events = [
    {
      id: "opening",
      name: "Opening Night Gala",
      date: "March 15",
      time: "7:00 PM",
      venue: "Grand Theater"
    },
    {
      id: "spotlight",
      name: "Director's Spotlight",
      date: "March 16",
      time: "3:00 PM",
      venue: "Cinema Palace"
    },
    {
      id: "outdoor",
      name: "Outdoor Screening",
      date: "March 17",
      time: "8:30 PM",
      venue: "Outdoor Pavilion"
    },
    {
      id: "closing",
      name: "Closing Ceremony",
      date: "March 19",
      time: "6:00 PM",
      venue: "Grand Theater"
    }
  ];

  const updateTicketQuantity = (ticketId: string, quantity: number) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [ticketId]: Math.max(0, quantity)
    }));
  };

  const getTotalPrice = () => {
    return Object.entries(selectedTickets).reduce((total, [ticketId, quantity]) => {
      const ticket = ticketTypes.find((t) => t.id === ticketId);
      return total + (ticket ? ticket.price * quantity : 0);
    }, 0);
  };

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center p-6">
      <div className="relative bg-zinc-900 text-white rounded-xl max-w-4xl w-full max-h-[90vh] p-6 border border-zinc-700 overflow-hidden flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-2 right-14 text-gray-400 hover:text-red-500 text-xl font-bold rounded-full w-9 h-9 flex items-center justify-center bg-zinc-900 z-10"
        >
          ✕
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 space-y-10 mt-2">
          <h2 className="text-3xl font-bold text-center">CineSpectra Festival Tickets</h2>

          {/* Ticket Selection */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Select Your Tickets</h3>
            <div className="space-y-6">
              {ticketTypes.map((ticket) => (
                <Card
                  key={ticket.id}
                  className="bg-zinc-800 border border-zinc-700 transform transition-all duration-200 hover:scale-[1.02]"
                >
                  <CardHeader>
                    <div className="flex justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {ticket.name}
                          {ticket.badge && (
                            <Badge className={ticket.badgeColor + " text-white"}>
                              {ticket.badge}
                            </Badge>
                          )}
                        </CardTitle>
                        <p className="text-sm text-zinc-400">{ticket.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl text-yellow-400 font-bold">${ticket.price}</div>
                        {ticket.originalPrice && (
                          <div className="line-through text-sm text-zinc-500">
                            ${ticket.originalPrice}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm text-zinc-300 mb-4">
                      {ticket.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center border-t pt-4">
                      <span className="text-sm">Quantity:</span>
                      <div className="flex gap-2 items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateTicketQuantity(ticket.id, (selectedTickets[ticket.id] || 0) - 1)
                          }
                          disabled={!selectedTickets[ticket.id]}
                          className="hover:bg-yellow-600"
                        >
                          −
                        </Button>
                        <span className="w-8 text-center font-medium">
                          {selectedTickets[ticket.id] || 0}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateTicketQuantity(ticket.id, (selectedTickets[ticket.id] || 0) + 1)
                          }
                          className="hover:bg-yellow-600"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Featured Events</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {events.map((event) => (
                <Card key={event.id} className="bg-zinc-800 border border-zinc-700">
                  <CardContent className="p-4 space-y-1 text-sm text-zinc-300">
                    <h4 className="font-semibold text-white">{event.name}</h4>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.venue}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Customer Info */}
          {getTotalTickets() > 0 && (
            <>
              <h3 className="text-xl font-semibold">Your Information</h3>
              <Card className="bg-zinc-800 border border-zinc-700">
                <CardContent className="p-4 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        value={customerInfo.email}
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={customerInfo.phone}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="Enter your phone number"
                    />
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Summary */}
          {getTotalTickets() > 0 && (
            <>
              <h3 className="text-xl font-semibold">Order Summary</h3>
              <Card className="bg-zinc-800 border border-zinc-700">
                <CardContent className="p-4 space-y-4">
                  {Object.entries(selectedTickets)
                    .filter(([_, quantity]) => quantity > 0)
                    .map(([ticketId, quantity]) => {
                      const ticket = ticketTypes.find((t) => t.id === ticketId);
                      if (!ticket) return null;
                      return (
                        <div key={ticketId} className="flex justify-between">
                          <span>
                            {ticket.name} × {quantity}
                          </span>
                          <span>${ticket.price * quantity}</span>
                        </div>
                      );
                    })}
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-yellow-400">${getTotalPrice()}</span>
                  </div>
                  <Button className="w-full mt-4 bg-yellow-500 text-black hover:bg-yellow-400">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Payment
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
