import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, FileCheck2, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingDown className="w-8 h-8 text-primary" />,
      number: "< 35%",
      label: "Seat Load Inefficiency",
      description: "Parallel corridors running under capacity while paying fixed vehicle guarantees",
      tag: "ILLUSTRATIVE BENCHMARK",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary" />,
      number: "2.5x – 3x",
      label: "Spot-Ride Markup",
      description: "Compound failure burden for emergency replacement cabs during vendor no-shows",
      tag: "ILLUSTRATIVE BENCHMARK",
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-primary" />,
      number: "4% – 11%",
      label: "Invoice Spread",
      description: "Discrepancies identified between raw GPS odometer logs and invoiced vendor lines",
      tag: "ILLUSTRATIVE BENCHMARK",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      number: "120+ Hrs",
      label: "Monthly Escalations",
      description: "Transport desk hours absorbed by manual dispatcher fires and SLA dispute cycles",
      tag: "ILLUSTRATIVE BENCHMARK",
    },
  ];

  return (
    <section id="why-velora" className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-3 py-1 rounded-full glass">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              The Operational Reality
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Your mobility data knows the answer.{" "}
            <br />
            <span className="text-gradient font-medium">It's just scattered everywhere.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprises generate millions of spatial and financial datapoints across ETMS, GPS logs, vendor invoices, contracts, rosters, and ERP ledgers. Velora reconciles this fragmented data into auditable truth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="glass rounded-xl p-8 hover:border-primary/20 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-base font-semibold text-primary mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-border/50">
                  <span className="text-[10px] tracking-wider font-mono uppercase text-muted-foreground/80 bg-background/50 px-2 py-0.5 rounded">
                    {stat.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
