export const CONTACT_CONFIG = {
  // Link oficial de WhatsApp da NOX4
  whatsappUrl: 'https://wa.me/5512991914612?text=Ol%C3%A1%20gostaria%20de%20aumentar%20minhas%20vendas',
  whatsappNumber: '5512991914612',
  whatsappDisplay: '(12) 99191-4612',
  getWhatsappUrl: (customMessage?: string) => {
    if (!customMessage) {
      return CONTACT_CONFIG.whatsappUrl;
    }
    return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
  },
};


