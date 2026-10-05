import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";
import { useNavigate } from "react-router-dom";

const RecommendationCard = ({
  tag,
  name,
  impact,
  description,
  features,
  isPriority,
  isSelected,
  onSelect,
  onAction,
}: {
  tag: string;
  name: string;
  impact: string;
  description: string;
  features: string[];
  isPriority?: boolean;
  isSelected: boolean;
  onSelect: () => void;
  onAction: () => void;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    onClick={onSelect}
    className={`cursor-pointer relative ${isSelected ? "z-10" : ""}`}
  >
    <div
      className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none z-20 ${
        isSelected ? "border-2 border-primary shadow-lg shadow-primary/30" : ""
      }`}
    />
    <CardSpotlight
      className={`h-full transition-all duration-300 ${
        isSelected
          ? "border-primary"
          : isPriority
          ? "border-primary/80"
          : "border-border hover:border-primary/50"
      }`}
    >
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1">
              {tag}
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-muted-foreground bg-background/60 px-2 py-0.5 rounded border border-border/60">
              Illustrative Example
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-2 text-foreground leading-snug">{name}</h3>
          
          <div className="mb-4">
            <span className="text-3xl font-bold text-foreground">{impact}</span>
            <span className="text-xs text-muted-foreground ml-2 font-mono">projected value</span>
          </div>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{description}</p>

          <div className="text-xs font-semibold text-foreground/90 uppercase tracking-wider mb-3">
            Explainable Evidence & Constraints
          </div>

          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-muted-foreground leading-normal">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAction();
          }}
          className={`w-full transition-all duration-300 ${
            isSelected
              ? "button-gradient shadow-lg shadow-primary/30"
              : "button-gradient"
          }`}
        >
          Explore In Diagnostic
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </CardSpotlight>
  </motion.div>
);

export const PricingSection = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<string>(
    "Shift Late-Night Capacity: Vendor A → B"
  );

  const recommendationData = [
    {
      tag: "Route Optimization",
      name: "Consolidate 17 Low-Occupancy Routes",
      impact: "₹31.4L / yr",
      description:
        "Merge parallel arterial corridors running below 35% seat capacity during morning and evening shift changeovers.",
      features: [
        "Observed Evidence: 90 days GPS logs showing <35% seat load",
        "Tariff Baseline: Standard 7-seater SUV contractual rate",
        "Constraint Enforced: Female escort protocols & max 12-min detour",
        "Expected Impact: Net elimination of 14 redundant vehicle retainers",
      ],
      isPriority: false,
    },
    {
      tag: "Vendor Rebalancing",
      name: "Shift Late-Night Capacity: Vendor A → B",
      impact: "₹18.6L / yr",
      description:
        "Reallocate 23 midnight pick-up schedules from Vendor A to Vendor B based on effective failure economics.",
      features: [
        "Observed Evidence: Vendor A has 14.2% no-show rate after 10 PM",
        "Failure Economics: Emergency spot-ride markups averaging 2.8x",
        "Constraint Enforced: Verified vehicle buffers for Vendor B",
        "Expected Impact: 68% drop in escalations + net cost recovery",
      ],
      isPriority: true,
    },
    {
      tag: "Invoice Reconciliation",
      name: "Audit Vendor C Odometer Divergence",
      impact: "₹9.2L Recoverable",
      description:
        "Flag systematic variance between billed vendor invoice mileage and raw telematics odometer traces.",
      features: [
        "Observed Evidence: 8.4% spread between billed km and GPS traces",
        "Contract Baseline: Active contractual telematics audit clawback",
        "Constraint Enforced: Normal toll-booth detour tolerance of 1.5 km",
        "Expected Impact: Actionable credit note for immediate recovery",
      ],
      isPriority: false,
    },
  ];

  return (
    <section id="decisions" className="container px-4 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-block mb-3 px-3 py-1 rounded-full glass">
          <span className="text-xs uppercase tracking-wider font-semibold text-primary">
            The Decision Engine
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-normal mb-4"
        >
          Don't stop at the diagnosis.{" "}
          <br />
          <span className="text-gradient font-medium">Decide what changes next.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          Velora rejects black-box algorithms. Every recommendation satisfies a five-part anatomical standard: Actionable Directive, Observed Evidence, Explicit Assumptions, Realistic Constraints, and Expected Impact.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {recommendationData.map((tier) => (
          <RecommendationCard
            key={tier.name}
            tag={tier.tag}
            name={tier.name}
            impact={tier.impact}
            description={tier.description}
            features={tier.features}
            isPriority={tier.isPriority}
            isSelected={selectedCard === tier.name}
            onSelect={() => setSelectedCard(tier.name)}
            onAction={() => {
              navigate("/get-demo");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          Velora does not stop at reporting what happened. <span className="text-foreground">It recommends what should happen next.</span>
        </p>
      </div>
    </section>
  );
};
