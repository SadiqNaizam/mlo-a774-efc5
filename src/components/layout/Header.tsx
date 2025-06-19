import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react'; // Using ShieldCheck for an auth module theme

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span>AuthModule</span>
        </Link>
        {/* No navigation links as per "minimalist" and "no complex navigation links" requirement */}
      </div>
    </header>
  );
};

export default Header;