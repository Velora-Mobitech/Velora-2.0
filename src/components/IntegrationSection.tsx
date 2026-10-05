import { motion } from "framer-motion";
import { Database, FileSpreadsheet, Layers, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const IntegrationSection = () => {
  const navigate = useNavigate();

  const dataStreams = [
    {
      icon: <Database className="w-5 h-5 text-primary" />,
      name: "ETMS & Trip Telematics",
      description: "Harmonizes with existing trip dispatch tools, drop logs, and GPS traces without disrupting operations.",
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-primary" />,
      name: "Vendor Invoices & Tariffs",
      description: "Ingests contractual tariff tables, minimum guarantee retainers, and itemized billing spreadsheets.",
    },
    {
      icon: <Layers className="w-5 h-5 text-primary" />,
      name: "Shift Rosters & HR Data",
      description: "Cross-checks shift attendance schedules, female escort requirements, and pickup compliance protocols.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-primary" />,
      name: "ERP & Finance Ledgers",
      description: "Reconciles approved transport expenditure against SAP, Oracle, and internal cost center budgets.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background border-t border-border/40">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-3 px-3 py-1 rounded-full glass">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                System Compatibility
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">
              Not another transport{" "}
              <br />
              <span className="text-gradient font-medium">management system.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Velora does not replace your daily dispatcher or driver application. Instead, it sits as an <strong className="text-foreground font-semibold">independent, vendor-neutral intelligence layer</strong> above your existing mobility stack—reconciling GPS actuals against invoiced lines, benchmarking vendor reliability, and translating raw data into board-ready decisions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {dataStreams.map((stream, index) => (
                <motion.div
                  key={stream.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 glass rounded-lg"
                >
                  <div className="text-primary mt-1 shrink-0">{stream.icon}</div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">
                      {stream.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stream.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => {
                navigate("/get-demo");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="button-gradient"
            >
              Request Integration Architecture
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Right Visual: Stack Comparison & Reconciliation Flow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass rounded-2xl p-8 border border-border/70 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border/50">
                <span className="text-xs font-mono uppercase text-muted-foreground tracking-wider">
                  Harmonization Pipeline
                </span>
                <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded">
                  Vendor-Neutral
                </span>
              </div>

              {/* Existing Stack */}
              <div className="p-4 rounded-xl bg-background/50 border border-border/60">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  01. Existing Mobility Stack
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  Executes Daily Trips & Telematics
                </div>
                <p className="text-xs text-muted-foreground">
                  Captures dispatcher inputs, driver GPS routes, and vendor monthly billing spreadsheets.
                </p>
              </div>

              {/* Reconciliation Arrow */}
              <div className="flex justify-center -my-2 text-primary font-mono text-xs">
                ▼ Telemetry + Invoices + Contracts Feed
              </div>

              {/* Velora Core */}
              <div className="p-5 rounded-xl bg-primary/5 border-2 border-primary/40 relative">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  02. Velora Intelligence Layer
                </div>
                <div className="text-base font-semibold text-foreground mb-2">
                  Reconciliation • Audit • Benchmarking
                </div>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Reconciles GPS odometer traces against invoiced mileage lines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Calculates Vendor Effective True Cost including failure burdens
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Generates 5-part explainable recommendations with verified constraints
                  </li>
                </ul>
              </div>

              {/* Output */}
              <div className="p-4 rounded-xl bg-background/50 border border-border/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                    03. Executive Output
                  </div>
                  <div className="text-xs text-foreground font-medium">
                    Board-Ready Economic & Operational Truth
                  </div>
                </div>
                <span className="text-[11px] font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  Actionable
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
