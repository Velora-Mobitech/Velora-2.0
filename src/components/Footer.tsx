import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="font-medium text-lg hover:text-primary transition-colors text-left"
              >
                Velora
              </button>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Independent, vendor-neutral mobility intelligence reconciling telematics, vendor invoices, and contracts into actionable ground truth.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/company/velora-mobitech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/Velora-Mobitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://twitter.com/VeloraMobitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.instagram.com/velora.mobitech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-foreground">Intelligence Engines</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("intelligence")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Cost Intelligence
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("intelligence")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Utilization Intelligence
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("intelligence")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Vendor Intelligence
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("intelligence")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Failure Intelligence
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("intelligence")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Sustainability Intelligence
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-foreground">Decisions & Stack</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Data Harmonization Flow
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("decisions")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Decision Engine Standard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("calculator")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Opportunity Estimator
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("validation")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Design Partner Program
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-foreground">Validation & Action</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      navigate("/get-demo");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-sm font-medium text-primary hover:underline text-left"
                  >
                    Get a Mobility Diagnostic →
                  </button>
                </li>
                <li>
                  <a
                    href="#validation"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("validation");
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pre-Validation Methodology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy & Telemetry Governance
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/analytics")}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Site Telemetry & Analytics
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Velora Mobitech. Enterprise Mobility Intelligence. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
