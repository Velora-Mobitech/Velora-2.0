import {
  DollarSign,
  PieChart,
  Award,
  AlertTriangle,
  Leaf,
} from "lucide-react";

export const features = [
  {
    title: "Cost Intelligence",
    description:
      "Benchmark ₹/trip and ₹/seat-km across corridors. Reconcile GPS actuals against invoiced lines to isolate billing anomalies and contract tariff variances.",
    icon: <DollarSign className="w-5 h-5 text-primary" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png",
  },
  {
    title: "Utilization Intelligence",
    description:
      "Map seat occupancy curves, identify parallel corridors running under 35% capacity, eliminate dead kilometers, and right-size vehicle allocations.",
    icon: <PieChart className="w-5 h-5 text-primary" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png",
  },
  {
    title: "Vendor Intelligence",
    description:
      "Calculate vendor effective true costs, evaluate gate arrival punctuality, benchmark cross-supplier reliability, and identify chronic SLA breach hotspots.",
    icon: <Award className="w-5 h-5 text-primary" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png",
  },
  {
    title: "Failure Intelligence",
    description:
      "Quantify unfulfilled bookings, driver no-shows, and emergency spot-ride surcharges (2.5x–3x contractual tariffs) to measure compound failure economics.",
    icon: <AlertTriangle className="w-5 h-5 text-primary" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png",
  },
  {
    title: "Sustainability Intelligence",
    description:
      "Track precise CO₂ per passenger-km, quantify gate idling emissions, audit BRSR/CSRD Scope-3 disclosures, and model route-level EV feasibility.",
    icon: <Leaf className="w-5 h-5 text-primary" />,
    image: "/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png",
  },
];
