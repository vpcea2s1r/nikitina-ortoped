"use client";

import { NAV_LINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav 
      style={{ 
        background: 'white', 
        padding: '1rem', 
        position: 'sticky', 
        top: 0,
        boxShadow: '0 2px 10px rgba(30,58,95,0.08)',
        zIndex: 100
      }}
      aria-label="Главная навигация"
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <span style={{ fontWeight: 600, color: '#1E3A5F' }}>Никитина М.Г.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }} role="navigation">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href + link.label}
              href={link.href} 
              style={{ color: '#4A90D9' }}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}