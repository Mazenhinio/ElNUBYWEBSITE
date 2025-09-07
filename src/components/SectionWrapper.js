import React from 'react';

// Standardized full-width container that matches hero section
export const FullWidthContainer = ({ children, className = "", ...props }) => (
  <section 
    className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </section>
);

// Standardized section content wrapper
export const SectionContent = ({ children, className = "", ...props }) => (
  <div 
    className={`relative w-full max-w-7xl mx-auto px-6 lg:px-8 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Glass morphism section with backdrop blur
export const GlassSection = ({ children, className = "", ...props }) => (
  <div 
    className={`relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Standardized section title with consistent styling
export const SectionTitle = ({ children, className = "", ...props }) => (
  <h2 
    className={`text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight font-cairo mb-6 ${className}`}
    {...props}
  >
    {children}
  </h2>
);

// Standardized section description
export const SectionDescription = ({ children, className = "", ...props }) => (
  <p 
    className={`text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-cairo max-w-4xl ${className}`}
    {...props}
  >
    {children}
  </p>
);

// Decorative section divider (full-width line with centered glow dot)
export const SectionDivider = ({ className = "", ...props }) => (
  <div className={`w-full py-6 ${className}`} style={{ backgroundColor: '#000435' }} {...props}>
    <div className="relative h-0.5 bg-gradient-to-r from-transparent via-[#ED8721] to-transparent w-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#ED8721] shadow-[0_0_20px_rgba(237,135,33,0.5)]" />
    </div>
  </div>
);

// Legacy wrapper for backward compatibility
const SectionWrapper = ({ children, fullWidth = false }) => {
  if (fullWidth) {
    return (
      <FullWidthContainer>
        <SectionContent>
          {children}
        </SectionContent>
      </FullWidthContainer>
    );
  }
  
  return (
    <SectionContent>
      {children}
    </SectionContent>
  );
};

export default SectionWrapper; 