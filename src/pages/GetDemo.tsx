import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building,
  Users,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Layers,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GetDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    companyName: "",
    role: "",
    employeeCount: "",
    dailyTrips: "",
    vendorCount: "",
    currentETMS: "",
    biggestChallenge: "",
    shareData: "yes",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Diagnostic request submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-36 md:pt-44 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass border border-border/80"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
              Mobility Efficiency Diagnostic
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-normal mb-6 tracking-tight">
            Find out where your mobility{" "}
            <br />
            <span className="text-gradient font-medium">
              operation is losing value.
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Share a few details about your enterprise shift transportation. Our team will review your parameters and discuss whether an independent Mobility Efficiency Diagnostic makes sense for your organization.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground bg-background/50 px-3 py-1 rounded-full border border-border/60">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            100% NDA Protected • Non-intrusive historical telemetry audit
          </div>
        </div>
      </motion.section>

      {/* Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="container px-4 pb-20"
      >
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 border border-border/80 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-3xl font-bold">
                  ✓
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Diagnostic Request Received
                </h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-foreground">{formData.name}</strong>. Our enterprise mobility research team at Velora will review your parameters for <strong className="text-foreground">{formData.companyName}</strong> and contact you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="glass border-border mt-4"
                >
                  Submit Another Response
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact & Company Details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                    <Building className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold">
                      Stakeholder & Company Profile
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        placeholder="e.g. Priya Sharma"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="workEmail">Work Email *</Label>
                      <Input
                        id="workEmail"
                        type="email"
                        placeholder="priya@company.com"
                        value={formData.workEmail}
                        onChange={(e) => handleInputChange("workEmail", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        placeholder="e.g. Acme Enterprises India"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role / Title *</Label>
                      <Select
                        value={formData.role}
                        onValueChange={(value) => handleInputChange("role", value)}
                      >
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transport_head">Transport / Mobility Head</SelectItem>
                          <SelectItem value="facilities_ops">Facilities / Workplace Operations</SelectItem>
                          <SelectItem value="procurement">Procurement / Strategic Sourcing</SelectItem>
                          <SelectItem value="finance">Finance / FP&A</SelectItem>
                          <SelectItem value="security_ehs">Corporate Security / EHS</SelectItem>
                          <SelectItem value="executive">COO / Executive Leadership</SelectItem>
                          <SelectItem value="other">Other Mobility Stakeholder</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Mobility Scale & Operations */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                    <Layers className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold">
                      Mobility Operation Scope
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="employeeCount">Employees on Transport *</Label>
                      <Input
                        id="employeeCount"
                        placeholder="e.g. 500"
                        value={formData.employeeCount}
                        onChange={(e) => handleInputChange("employeeCount", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dailyTrips">Approx. Daily Trips</Label>
                      <Input
                        id="dailyTrips"
                        placeholder="e.g. 180 trips/day"
                        value={formData.dailyTrips}
                        onChange={(e) => handleInputChange("dailyTrips", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vendorCount">Number of Fleet Vendors</Label>
                      <Input
                        id="vendorCount"
                        placeholder="e.g. 3 vendors"
                        value={formData.vendorCount}
                        onChange={(e) => handleInputChange("vendorCount", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentETMS">Current ETMS / Transport Software</Label>
                      <Select
                        value={formData.currentETMS}
                        onValueChange={(value) => handleInputChange("currentETMS", value)}
                      >
                        <SelectTrigger id="currentETMS">
                          <SelectValue placeholder="Select primary system" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moveinsync">MoveInSync</SelectItem>
                          <SelectItem value="safetrax">Safetrax</SelectItem>
                          <SelectItem value="routematic">Routematic</SelectItem>
                          <SelectItem value="whistle">Whistle</SelectItem>
                          <SelectItem value="custom">In-House Custom Tool</SelectItem>
                          <SelectItem value="spreadsheets">Spreadsheets / Manual Dispatch</SelectItem>
                          <SelectItem value="other">Other System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="biggestChallenge">Biggest Mobility Challenge</Label>
                      <Select
                        value={formData.biggestChallenge}
                        onValueChange={(value) => handleInputChange("biggestChallenge", value)}
                      >
                        <SelectTrigger id="biggestChallenge">
                          <SelectValue placeholder="Select primary challenge" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="invoice_leakage">Invoice Verification & Odometer Leakage</SelectItem>
                          <SelectItem value="low_occupancy">Low Route Occupancy & Capacity Waste</SelectItem>
                          <SelectItem value="no_shows">Driver No-Shows & Spot Cab Surcharges</SelectItem>
                          <SelectItem value="vendor_benchmarking">Cross-Vendor True Cost Benchmarking</SelectItem>
                          <SelectItem value="safety_compliance">Female Safety Escort & Detour Compliance</SelectItem>
                          <SelectItem value="sustainability">BRSR / Scope-3 CO₂ Reporting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Validation & Data Sharing Readiness */}
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-background/50 border border-border/70 space-y-3">
                    <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-primary" />
                      Willing to share anonymized historical data for diagnostic?
                    </Label>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Velora runs offline, non-intrusive audits on anonymized historical GPS logs, sample invoices, and drop manifests to reveal hidden economic opportunity.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      {[
                        { val: "yes", label: "Yes, open to sample audit" },
                        { val: "discuss", label: "Discuss NDA & scope first" },
                        { val: "no", label: "Exploratory discussion only" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => handleInputChange("shareData", opt.val)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium text-left border transition-all ${
                            formData.shareData === opt.val
                              ? "bg-primary/10 border-primary text-primary"
                              : "glass border-border text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Operational Context (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Share any specific routes, shift timings, or vendor concerns you'd like us to focus on..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full button-gradient text-base font-semibold py-6">
                  Request a Mobility Diagnostic
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-[11px] text-center text-muted-foreground font-mono">
                  No software installation required. Velora acts as an independent analytical layer.
                </p>
              </form>
            )}
          </div>
        </div>
      </motion.section>

      {/* Meet the Team / Leadership Section - Commented out from UI for now
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="container px-4 py-16 border-t border-border/40"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Talk Directly with Velora Leadership
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Our founders personally oversee every enterprise diagnostic to ensure rigorous evidence and audit standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            // Team Member 1
            <div className="glass rounded-2xl p-6 text-center border border-border/60">
              <img
                src="/lovable-uploads/krishna-vamsi.jpg"
                alt="Krishna Vamsi Veerisetti"
                className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/20 mb-4"
              />
              <h3 className="text-lg font-semibold mb-0.5">
                Krishna Vamsi Veerisetti
              </h3>
              <p className="text-primary font-medium text-xs mb-2">CEO & Founder</p>
              <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                Enterprise validation, vendor economics & mobility diagnostics
              </p>
              <div className="space-y-1.5 text-xs font-mono text-muted-foreground">
                <div className="flex items-center justify-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>kv@veloramobitech.systems</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>+91 8688505081</span>
                </div>
              </div>
            </div>

            // Team Member 2
            <div className="glass rounded-2xl p-6 text-center border border-border/60">
              <img
                src="/lovable-uploads/vijaya-balaji.jpg"
                alt="Vijaya Balaji Tatta"
                className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/20 mb-4"
              />
              <h3 className="text-lg font-semibold mb-0.5">
                Vijaya Balaji Tatta
              </h3>
              <p className="text-primary font-medium text-xs mb-2">CTO & Co-Founder</p>
              <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                Telemetry reconciliation engines & spatial routing intelligence
              </p>
              <div className="space-y-1.5 text-xs font-mono text-muted-foreground">
                <div className="flex items-center justify-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>tvb@veloramobitech.systems</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>+91 9347767825</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      */}

      <Footer />
    </div>
  );
};

export default GetDemo;
