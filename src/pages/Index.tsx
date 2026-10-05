import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Database, Stethoscope, Compass, Rocket, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import PricingCalculator from "@/components/PricingCalculator";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import IntegrationSection from "@/components/IntegrationSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useNavigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const Index = () => {
  const navigate = useNavigate();

  const navigateToGetDemo = () => {
    navigate("/get-demo");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-36 md:pt-44 pb-20"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 -z-10 bg-background/80" />

        <div className="max-w-4xl relative z-10 text-left">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass border border-border/80"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-foreground">
              Enterprise Mobility Intelligence
            </span>
            <span className="text-[11px] font-mono text-muted-foreground border-l border-border pl-2 hidden sm:inline-block">
              Pre-Validation
            </span>
          </motion.div>

          {/* Animated Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal mb-6 tracking-tight text-left">
            <span className="text-muted-foreground">
              <TextGenerateEffect words="Know where your" />
            </span>
            <br />
            <span className="text-foreground font-medium">
              <TextGenerateEffect words="enterprise mobility is losing money." delay={1.4} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl text-left leading-relaxed"
          >
            Velora turns fragmented transport, vendor and financial data into actionable mobility intelligence — helping enterprises identify cost leakage, operational inefficiencies and reliability risks before they become expensive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <Button
              size="lg"
              className="button-gradient"
              onClick={navigateToGetDemo}
            >
              Get a Mobility Diagnostic
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-border hover:border-primary/40 text-foreground"
              onClick={() => scrollToSection("validation")}
            >
              Talk to the Velora Team
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 flex items-center gap-2"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <p className="text-xs font-mono text-muted-foreground">
              Currently validating with enterprise mobility teams. Independent & vendor-neutral.
            </p>
          </motion.div>
        </div>

        {/* Hero Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="relative mx-auto max-w-5xl mt-16"
        >
          <div className="glass rounded-xl overflow-hidden border border-border/80 shadow-2xl">
            {/* Top Bar Label */}
            <div className="bg-background/90 px-4 py-2.5 border-b border-border/60 flex items-center justify-between text-xs font-mono">
              <span className="text-muted-foreground">
                Data Stream: ETMS Logs + Raw GPS Telematics + Invoices + Shift Rosters
              </span>
              <span className="text-primary font-semibold">
                ● Live Analytical Layer
              </span>
            </div>
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="Velora Mobility Intelligence Engine"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Data Harmonization Streams Carousel */}
      <LogoCarousel />

      {/* Core Problem & Illustrative Diagnostics */}
      <StatsSection />

      {/* Four-Step Sequence (Connect -> Diagnose -> Decide -> Execute) */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-3 py-1 rounded-full glass">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                Operational Sequence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal mb-4">
              Reporting tells you what happened.{" "}
              <br />
              <span className="text-gradient font-medium">Intelligence tells you what to do next.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How Velora translates chaotic telemetry and billing spreadsheets into high-conviction decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Step 1: Connect */}
            <div className="glass rounded-xl p-6 border border-border/60 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Database className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">01</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">CONNECT</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ingest and harmonize data across ETMS, GPS providers, vendor portals, and ERP general ledgers without requiring system replacement.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border/40 text-[11px] font-mono text-primary">
                Zero Workflow Disruption
              </div>
            </div>

            {/* Step 2: Diagnose */}
            <div className="glass rounded-xl p-6 border border-border/60 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">02</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">DIAGNOSE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Isolate billing discrepancies, odometer divergences, dead kilometers, low seat capacity corridors, and chronic SLA breach hotspots.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border/40 text-[11px] font-mono text-primary">
                Auditable Telemetry Proof
              </div>
            </div>

            {/* Step 3: Decide */}
            <div className="glass rounded-xl p-6 border-2 border-primary/40 shadow-lg shadow-primary/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-primary font-bold">03</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">DECIDE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Generate ranked, constraint-aware operational recommendations adhering strictly to safety mandates, detours, and tariff baselines.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border/40 text-[11px] font-mono text-primary font-semibold">
                Explainable Standard
              </div>
            </div>

            {/* Step 4: Execute */}
            <div className="glass rounded-xl p-6 border border-border/60 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between opacity-85">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-muted text-muted-foreground">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-muted px-2 py-0.5 rounded text-muted-foreground">
                    Future Vision
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">EXECUTE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Future capability to programmatically clear capacity across verified, compliant multi-provider fleets and market liquidity networks.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border/40 text-[11px] font-mono text-muted-foreground">
                Future Orchestration Layer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Specialized Intelligence Modules */}
      <div id="intelligence" className="bg-background">
        <FeaturesSection />
      </div>

      {/* Failure Economics Framework */}
      <div className="bg-background">
        <BenefitsSection />
      </div>

      {/* Decision Engine & Explainability Standard */}
      <div id="decisions" className="bg-background">
        <PricingSection />
      </div>

      {/* Mobility Diagnostic & Opportunity Estimator */}
      <div className="bg-background">
        <PricingCalculator />
      </div>

      {/* ETMS Integration & Harmonization Pipeline */}
      <div id="how-it-works" className="bg-background">
        <IntegrationSection />
      </div>

      {/* Stakeholder Perspectives */}
      <div className="bg-background">
        <TestimonialsSection />
      </div>

      {/* Validation & Design Partnership Section */}
      <section id="validation" className="py-24 bg-background border-t border-border/40">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 border border-border/80 text-center"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono uppercase tracking-wider text-primary">
              Design Partner Program
            </div>
            <h2 className="text-3xl md:text-5xl font-normal mb-6 tracking-tight">
              Help us build the right{" "}
              <span className="text-gradient font-medium">intelligence layer.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Velora is currently validating its mobility intelligence thesis with enterprise mobility teams. We are looking for forward-thinking organizations willing to share how corporate mobility is managed today, provide anonymized historical data where possible, and test whether these analytical insights lead to better board-level decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="button-gradient"
                onClick={navigateToGetDemo}
              >
                Become a Design Partner
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-border hover:border-primary/40 text-foreground"
                onClick={navigateToGetDemo}
              >
                Share Feedback
              </Button>
            </div>
            <p className="text-xs text-muted-foreground font-mono mt-6">
              100% NDA-protected. No enterprise workflow replacement required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Engineering Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="container px-4 py-20 bg-background border-t border-border/40"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 rounded-full glass">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                Team & Leadership
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building Independent <span className="text-gradient">Mobility Intelligence</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining deep domain experience in enterprise operations, spatial telematics, and data reconciliation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1 - Krishna Vamsi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border/60"
            >
              <div className="relative mb-6">
                <img
                  src="/lovable-uploads/krishna-vamsi.jpg"
                  alt="Krishna Vamsi Veerisetti"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">
                Krishna Vamsi Veerisetti
              </h3>
              <p className="text-primary font-medium text-sm mb-3">CEO & Founder</p>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Leading enterprise validation, partnerships, and research in mobility intelligence, corporate transport economics, and failure frameworks.
              </p>
              <div className="space-y-2 border-t border-border/40 pt-4">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono">kv@veloramobitech.systems</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono">+91 8688505081</span>
                </div>
              </div>
            </motion.div>

            {/* Team Member 2 - Vijaya Balaji */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border/60"
            >
              <div className="relative mb-6">
                <img
                  src="/lovable-uploads/vijaya-balaji.jpg"
                  alt="Vijaya Balaji Tatta"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">
                Vijaya Balaji Tatta
              </h3>
              <p className="text-primary font-medium text-sm mb-3">CTO & Co-Founder</p>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Architecting vendor-neutral telemetry reconciliation, high-throughput spatial algorithms, and constraint-aware operational decision engines.
              </p>
              <div className="space-y-2 border-t border-border/40 pt-4">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono">tvb@veloramobitech.systems</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono">+91 9347767825</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final Diagnostic CTA Section */}
      <section
        className="container px-4 py-20 relative bg-background border-t border-border/40"
        aria-label="Mobility Diagnostic CTA"
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background/80 backdrop-blur-lg border border-border rounded-2xl p-8 md:p-14 text-center relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-3 px-3 py-1 rounded-full glass">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              Ready to Discover Ground Truth?
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Find out where your mobility operation is losing value.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Share a few details about your enterprise shift transportation and we'll discuss whether a Mobility Efficiency Diagnostic makes sense for your organization.
          </p>
          <Button
            size="lg"
            className="button-gradient px-8 text-base"
            onClick={navigateToGetDemo}
          >
            Get a Mobility Diagnostic
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-background">
        <Footer />
      </div>
      <Analytics />
    </div>
  );
};

export default Index;
