"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";
import { Compass, FileSpreadsheet, ShieldAlert, TrendingDown, Users2, Landmark } from "lucide-react";

const stakeholderQuestions = [
  {
    role: "Transport & Mobility Heads",
    department: "Shift Operations",
    icon: <Compass className="w-5 h-5 text-primary" />,
    badge: "Operations",
    question:
      "Which routes are running below 35% seat capacity, and how do we safely consolidate parallel arterial corridors without risking shift arrival SLAs?",
  },
  {
    role: "Procurement & Strategic Sourcing",
    department: "Vendor Management",
    icon: <Landmark className="w-5 h-5 text-primary" />,
    badge: "Sourcing",
    question:
      "Which fleet vendor's low contractual tariff is actually costing 25%–35% more when factoring in emergency spot-ride surcharges and SLA penalties?",
  },
  {
    role: "Finance & FP&A Leadership",
    department: "Corporate Cost Control",
    icon: <TrendingDown className="w-5 h-5 text-primary" />,
    badge: "Finance",
    question:
      "Where is the leakage between monthly vendor invoiced mileage lines and raw GPS odometer telemetry in our corporate general ledger?",
  },
  {
    role: "Facilities & Workplace Operations",
    department: "Site Reliability",
    icon: <FileSpreadsheet className="w-5 h-5 text-primary" />,
    badge: "Facilities",
    question:
      "Why are late gate arrivals persisting across shift changeovers, and how many transport desk hours are lost firefighting driver no-shows?",
  },
  {
    role: "Corporate Security & EHS",
    department: "Compliance & Safety",
    icon: <ShieldAlert className="w-5 h-5 text-primary" />,
    badge: "Security",
    question:
      "How do we audibly verify female employee escort compliance, detect unauthorized route deviations, and track BRSR/CSRD Scope-3 emissions?",
  },
  {
    role: "Chief Operating Officer",
    department: "Executive Leadership",
    icon: <Users2 className="w-5 h-5 text-primary" />,
    badge: "Leadership",
    question:
      "How do we transition enterprise shift mobility from fragmented spreadsheets and vendor claims to an auditable, board-ready ground truth?",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-background border-t border-border/40">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-3 py-1 rounded-full glass">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              Enterprise Alignment
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Questions We Answer for{" "}
            <span className="text-gradient font-medium">Enterprise Stakeholders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Addressing the critical economic, operational, and governance questions faced across corporate leadership.
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {stakeholderQuestions.map((item, index) => (
                <Card
                  key={`${index}-1`}
                  className="w-[380px] shrink-0 glass hover:border-primary/30 transition-all duration-300 p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">
                        {item.role}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-4">
                        {item.department}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/80 leading-relaxed italic border-l-2 border-primary/40 pl-3">
                    "{item.question}"
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {stakeholderQuestions.map((item, index) => (
                <Card
                  key={`${index}-2`}
                  className="w-[380px] shrink-0 glass hover:border-primary/30 transition-all duration-300 p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">
                        {item.role}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-4">
                        {item.department}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/80 leading-relaxed italic border-l-2 border-primary/40 pl-3">
                    "{item.question}"
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
