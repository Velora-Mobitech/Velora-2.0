import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Calculator, Users, Building2, TrendingDown, ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DiagnosticInputs {
  monthlySpend: number;
  employeeCount: number;
  shifts: number;
  vendorCount: number;
  hasTelematicsAudit: boolean;
  hasSpotReliance: boolean;
}

export const PricingCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<DiagnosticInputs>({
    monthlySpend: 3500000,
    employeeCount: 450,
    shifts: 2,
    vendorCount: 4,
    hasTelematicsAudit: false,
    hasSpotReliance: true,
  });

  // Identifiable Savings: Theoretical mathematical opportunity (corridor overlap, dead km, billing anomalies)
  const calculateIdentifiable = (): number => {
    let rate = 0.11; // 11% baseline mathematical leakage
    if (!inputs.hasTelematicsAudit) rate += 0.035; // +3.5% invoice reconciliation spread
    if (inputs.hasSpotReliance) rate += 0.025; // +2.5% failure surcharge leakage
    if (inputs.vendorCount > 3) rate += 0.015; // vendor fragmentation penalty
    return Math.round(inputs.monthlySpend * rate);
  };

  // Implementable Savings: Realistic operational capture accounting for safety constraints & SLA buffers
  const calculateImplementable = (): number => {
    const identifiable = calculateIdentifiable();
    // Operations realistically capture ~55-65% of mathematical ceiling due to detour/escort rules
    return Math.round(identifiable * 0.62);
  };

  const calculateAnnualizedImplementable = (): number => {
    return calculateImplementable() * 12;
  };

  return (
    <section className="py-24 bg-background border-t border-border/40" id="calculator">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 rounded-full glass">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary">
              Diagnostic Estimator
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Model Your Mobility{" "}
            <span className="text-gradient font-medium">Opportunity Ceiling</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estimate identifiable vs. implementable efficiency opportunities across billing reconciliation, route consolidation, and vendor failure economics.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 md:p-8 glass border-border/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="monthlySpend">Approx. Monthly Mobility Spend (₹)</Label>
                <div className="relative">
                  <Input
                    id="monthlySpend"
                    name="monthlySpend"
                    type="number"
                    step="50000"
                    value={inputs.monthlySpend}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        monthlySpend: parseInt(e.target.value) || 0,
                      })
                    }
                    className="pl-4"
                    min="100000"
                  />
                </div>
                <span className="text-[11px] text-muted-foreground">
                  Current spend across fleet vendors and spot cabs
                </span>
              </div>

              <div className="space-y-2">
                <Label htmlFor="employees">Daily Employees Using Transport</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="employees"
                    name="employees"
                    type="number"
                    value={inputs.employeeCount}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        employeeCount: parseInt(e.target.value) || 0,
                      })
                    }
                    className="pl-10"
                    min="10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shifts">Operating Shifts per Day</Label>
                <Select
                  value={String(inputs.shifts)}
                  onValueChange={(val) =>
                    setInputs({ ...inputs, shifts: parseInt(val) || 1 })
                  }
                  name="shifts"
                >
                  <SelectTrigger id="shifts">
                    <SelectValue placeholder="Select shifts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 General Shift</SelectItem>
                    <SelectItem value="2">2 Rotational Shifts</SelectItem>
                    <SelectItem value="3">3 Shifts (24/7 Operations)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vendorCount">Active Fleet Vendors / FSPs</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="vendorCount"
                    name="vendorCount"
                    type="number"
                    value={inputs.vendorCount}
                    onChange={(e) =>
                      setInputs({
                        ...inputs,
                        vendorCount: parseInt(e.target.value) || 1,
                      })
                    }
                    className="pl-10"
                    min="1"
                    max="20"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-3">
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-background/40 border border-border/40">
                  <div>
                    <Label htmlFor="telematics" className="text-xs font-semibold cursor-pointer">
                      Automated GPS-to-Invoice Audit
                    </Label>
                    <p className="text-[11px] text-muted-foreground">
                      Do you currently cross-verify raw odometer logs against billed lines?
                    </p>
                  </div>
                  <Switch
                    id="telematics"
                    checked={inputs.hasTelematicsAudit}
                    onCheckedChange={(checked) =>
                      setInputs({ ...inputs, hasTelematicsAudit: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-background/40 border border-border/40">
                  <div>
                    <Label htmlFor="spot" className="text-xs font-semibold cursor-pointer">
                      Spot-Ride / On-Demand Backup
                    </Label>
                    <p className="text-[11px] text-muted-foreground">
                      Do operations rely on emergency ad-hoc cabs for vendor no-shows?
                    </p>
                  </div>
                  <Switch
                    id="spot"
                    checked={inputs.hasSpotReliance}
                    onCheckedChange={(checked) =>
                      setInputs({ ...inputs, hasSpotReliance: checked })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 glass rounded-xl text-center border-border/60">
                <div className="inline-block px-2.5 py-0.5 rounded bg-muted/60 text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Identifiable Opportunity
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Theoretical Mathematical Ceiling
                </h3>
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  ₹{calculateIdentifiable().toLocaleString()}
                  <span className="text-xs font-normal text-muted-foreground"> / month</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Unconstrained corridor overlap, dead km & billing spread
                </p>
              </div>

              <div className="p-6 glass rounded-xl text-center border-primary/30 shadow-lg shadow-primary/5">
                <div className="inline-block px-2.5 py-0.5 rounded bg-primary/10 text-[10px] font-mono uppercase tracking-wider text-primary mb-2 font-medium">
                  Implementable Opportunity
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">
                  Realistic Operational Recovery
                </h3>
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  ₹{calculateImplementable().toLocaleString()}
                  <span className="text-xs font-normal text-muted-foreground"> / month</span>
                </p>
                <p className="text-xs text-primary/80 font-mono mt-2">
                  ~₹{(calculateAnnualizedImplementable() / 100000).toFixed(1)}L annual potential opportunity
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground mb-4 max-w-xl mx-auto">
                <span className="font-semibold text-foreground/80">ILLUSTRATIVE ESTIMATE:</span> Realized savings depend on verified telemetry audits, route network topologies, and contract terms. We never promise synthetic guaranteed returns.
              </p>
              <Button
                onClick={() => {
                  navigate("/get-demo");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="button-gradient"
              >
                Get a Mobility Diagnostic <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingCalculator;
