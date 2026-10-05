import { motion } from "framer-motion";
import { Database, FileSpreadsheet, MapPin, Receipt, Shield, Cpu, Layers } from "lucide-react";

const LogoCarousel = () => {
  const dataStreams = [
    { label: "ETMS Trip Telematics", icon: Database },
    { label: "Raw GPS & Odometer Logs", icon: MapPin },
    { label: "Vendor Invoiced Line Items", icon: Receipt },
    { label: "Contract Tariffs & SLAs", icon: Shield },
    { label: "Shift Rosters & Attendance", icon: Layers },
    { label: "ERP Ledgers (SAP / Oracle)", icon: Cpu },
    { label: "Fuel & Toll Actuals", icon: FileSpreadsheet },
  ];

  const extendedStreams = [...dataStreams, ...dataStreams, ...dataStreams];

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-10 border-y border-border/40 mt-16">
      <div className="container px-4 text-center mb-6">
        <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground">
          Harmonizing Disconnected Data Sources Across Your Mobility Stack
        </span>
      </div>
      <motion.div 
        className="flex space-x-6"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "1.5rem"
        }}
      >
        {extendedStreams.map((stream, index) => {
          const Icon = stream.icon;
          return (
            <div
              key={`stream-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-border/60 shrink-0 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium tracking-wide whitespace-nowrap">
                {stream.label}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;