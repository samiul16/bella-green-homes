"use client";
import React from "react";
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { motion } from "framer-motion";

// --- Types ---

interface LinkGroupProps {
  title: string;
  links: string[];
}

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

// --- Data Constants ---

const FOOTER_LINKS = {
  homeDesigns: [
    "All Home Designs",
    "Single Storey Home Designs",
    "Double Storey Home Designs",
    "Acreage Home Designs",
    "Split Level Home Designs",
    "Narrow Block",
    "Dual Occupancy",
    "Duplex Home Designs",
    "Granny Flat",
  ],
  displayHomes: [
    "All Display Locations",
    "Display Homes Sydney",
    "Display Homes Wollongong, Illawarra & South Coast",
    "Display Homes Newcastle, Hunter & Central Coast",
    "Display Homes Port Macquarie",
  ],
  houseLand: ["All House & Land Packages"],
  buildWithUs: [
    "Why Mojo Homes",
    "Building Process",
    "Steel Frames",
    "Brochures & Resources",
    "Where We Build",
    "Knockdown Rebuild",
    "Knockdown Rebuild Sydney",
    "MyChoice Design Studio",
    "MyChoice Home Loans",
  ],
  offices: [
    "Sydney Office",
    "Hunter Office",
    "Port Macquarie Office",
    "South Coast Office",
    "Corporate Office",
  ],
  careers: ["Job Opportunities"],
};

// --- Components ---

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 border shadow-xs border-black/20 rounded-full flex items-center justify-center text-black hover:bg-[#12a807] hover:text-white hover:border-[#12a807]/20 transition-all duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

const FooterColumn: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="flex flex-col space-y-8">{children}</div>;

const LinkGroup: React.FC<LinkGroupProps> = ({ title, links }) => (
  <div className="flex flex-col items-start">
    <h3 className="text-brand-red font-display font-bold text-xs tracking-[0.15em] uppercase mb-6">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-brand-dark/80 hover:text-brand-red transition-colors duration-200 text-sm font-medium block relative group overflow-hidden"
          >
            <span className="relative z-10">{link}</span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Footer Component ---

const Footer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full overflow-hidden"
    >
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="border-b border-brand-dark/10"
      >
        <div className="max-w-8xl mx-auto px-4 md:px-20 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
            {/* Logo & Socials Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full lg:w-auto justify-center lg:justify-start"
            >
              {/* Logo Placeholder */}
              <div className="text-brand-red font-display font-bold text-2xl whitespace-nowrap">
                Bella Homes
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: <Facebook size={18} />, href: "#" },
                  { icon: <Linkedin size={18} />, href: "#" },
                  { icon: <Instagram size={18} />, href: "#" },
                  { icon: <Twitter size={18} />, href: "#" },
                  { icon: <Youtube size={18} />, href: "#" },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <SocialIcon href={social.href} icon={social.icon} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full lg:w-auto justify-center lg:justify-end text-center md:text-left"
            >
              <div className="flex flex-col md:items-end">
                <span className="text-xs font-bold text-brand-dark/40 tracking-widest uppercase mb-1">
                  Get In Touch
                </span>
                <div className="flex flex-col items-center md:items-end">
                  <p className="font-medium text-brand-dark text-lg">
                    Call us on 1200 996 656
                  </p>
                  <p className="text-brand-dark/70 text-sm mt-1">
                    From 9am - 5pm, Mon - Fri
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-[#12a807] hover:text-white text-black font-semibold py-2.5 px-6 rounded-full shadow-xs transition-all duration-300 border border-black/20 border-brand-dark/5 text-sm cursor-pointer"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Grid Links */}
      <div className="max-w-8xl mx-auto px-4 md:px-20 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FooterColumn>
              <LinkGroup
                title="Home Designs"
                links={FOOTER_LINKS.homeDesigns}
              />
            </FooterColumn>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FooterColumn>
              <LinkGroup
                title="Display Homes"
                links={FOOTER_LINKS.displayHomes}
              />
              <LinkGroup
                title="House & Land Packages"
                links={FOOTER_LINKS.houseLand}
              />
            </FooterColumn>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <FooterColumn>
              <LinkGroup
                title="Build With Us"
                links={FOOTER_LINKS.buildWithUs}
              />
            </FooterColumn>
          </motion.div>

          {/* Column 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FooterColumn>
              <LinkGroup
                title="Office Location Details"
                links={FOOTER_LINKS.offices}
              />
              <LinkGroup title="Careers" links={FOOTER_LINKS.careers} />
            </FooterColumn>
          </motion.div>
        </motion.div>

        {/* Bottom Copyright Area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 pt-8 border-t border-brand-dark/10 flex flex-col md:flex-row justify-between items-center text-xs text-brand-dark/50 gap-4"
        >
          <p>© 2025 Bella Homes Pty Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-red transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-red transition-colors">
              Terms & Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- App Component ---
export default function Footerr() {
  return <Footer />;
}
