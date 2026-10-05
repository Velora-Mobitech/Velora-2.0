import { motion } from "framer-motion";
import {
  DollarSign,
  Receipt,
  Route,
  ShieldAlert,
  ClockAlert,
  Flame,
  UserCheck,
  TrendingDown,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const BenefitsSection = () => {
  const hardMonetaryCosts = [
    {
      icon: <DollarSign className="w-7 h-7 text-primary" />,
      title: "Spot-Ride Surcharges",
      description:
        "Emergency replacement rides marked up at 2.5x–3x contractual tariffs during driver no-shows.",
    },
    {
      icon: <Receipt className="w-7 h-7 text-primary" />,
      title: "Minimum Guarantee Traps",
      description:
        "Fixed vehicle retainers and minimum billing thresholds paid despite low actual seat utilization.",
    },
    {
      icon: <Route className="w-7 h-7 text-primary" />,
      title: "Dead Kilometre Bleed",
      description:
        "Unmonitored empty vehicle repositioning and non-revenue transit kilometres buried in bulk invoicing.",
    },
    {
      icon: <TrendingDown className="w-7 h-7 text-primary" />,
      title: "Billed Odometer Discrepancies",
      description:
        "Systemic spread between raw GPS telematics actuals and vendor-reported billing line items.",
    },
    {
      icon: <ClockAlert className="w-7 h-7 text-primary" />,
      title: "Dispute & Reconciliation Drag",
      description:
        "Costly administrative cycles reconciling disputed vendor SLA penalties and contractual deductions.",
    },
  ];

  const nonMonetizedRisks = [
    {
      icon: <ClockAlert className="w-7 h-7 text-primary" />,
      title: "Shift Production Delays",
      description:
        "Downstream operational downtime caused by delayed gate arrivals for mission-critical shifts.",
    },
    {
      icon: <ShieldAlert className="w-7 h-7 text-primary" />,
      title: "Safety & Compliance Exposure",
      description:
        "Escort protocol breaches, route deviation anomalies, and female employee safety compliance risks.",
    },
    {
      icon: <Flame className="w-7 h-7 text-primary" />,
      title: "Dispatcher Firefighting",
      description:
        "Transport teams spending 100+ hours monthly on tactical emergency re-routing instead of strategic sourcing.",
    },
    {
      icon: <UserCheck className="w-7 h-7 text-primary" />,
      title: "Commuter Friction & Attrition",
      description:
        "Chronic arrival unpredictability impacting employee satisfaction, workplace attendance, and retention.",
    },
  ];

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full glass">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              The Failure Economics Framework
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            A failed trip costs more than{" "}
            <br />
            <span className="text-gradient font-medium">the replacement ride.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Velora strictly separates direct cash drain from ground-truth operational risk.
          </p>
          <div className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-xs md:text-sm font-mono text-primary">
            Effective True Cost = Contract Tariff + Compound Failure Burden
          </div>
        </div>

        {/* Hard Monetary Costs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              Hard Monetary Costs
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Direct, auditable financial leakage appearing on monthly vendor invoices and expense ledgers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardMonetaryCosts.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass hover:border-primary/20 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Non-Monetized Risk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              Non-Monetized Operational Risk
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Critical operational consequences that should not be artificially monetized, but directly impact enterprise reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonMonetizedRisks.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass hover:border-primary/20 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">{benefit.icon}</div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
