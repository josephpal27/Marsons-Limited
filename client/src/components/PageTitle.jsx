import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Setting Power In Motion - Marsons Limited";
    let description = "";

    // Static routes
    if (location.pathname === "/") {
      title = "Setting Power In Motion - Marsons Limited";
      description = "";
    }

    else if (location.pathname === "/about") {
      title = "About Us - Marsons Limited";
      description = "";
    }

    else if (location.pathname === "/contact") {
      title = "Contact Us - Marsons Limited";
      description = "";
    }

    // Investor corner dynamic pages
    else if (location.pathname.startsWith("/investor-corner")) {

      const slug = location.pathname.split("/")[2];

      const slugTitles = {
        "financials": "Financials - Marsons Limited",
        "regulation": "Regulation 46(2) - Marsons Limited",
        "corporate-governance": "Corporate Governance - Marsons Limited",
        "shareholding-pattern": "Shareholding Pattern - Marsons Limited",
        "notices-and-results": "Notices & Results - Marsons Limited",
        "policies": "Policies - Marsons Limited",
        "unclaimed-dividend": "Unclaimed Dividend - Marsons Limited",
        "contact-details": "Investor Contact Details - Marsons Limited"
      };

      title = slugTitles[slug] || "Investor Corner - Marsons Limited";
    }

    document.title = title;

    let metaTitle = document.querySelector("meta[name='title']");
    let metaDesc = document.querySelector("meta[name='description']");

    if (metaTitle) metaTitle.setAttribute("content", title);
    if (metaDesc) metaDesc.setAttribute("content", description);

  }, [location]);

  return null;
};

export default PageTitle;