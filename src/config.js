export const CONTACT = {
  whatsappNumber: "56944019952",
  instagram: "https://instagram.com/chacinpc",
  facebook: "https://facebook.com/chacinpc",
  github: "https://github.com/chcinriverajoseg",
  linkedin: "https://www.linkedin.com/in/jose-chacin-946a4330b",
  portfolioUrl: "https://cine-joseito.vercel.app",
  location: "Valparaíso — Concón, Chile",
};

export const whatsappLink = (message) => {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};


