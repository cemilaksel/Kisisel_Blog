
import { useState, useEffect } from 'react';
import { CEMIL_DATA } from './constants';
import { PortfolioData } from './types';

/**
 * Controller Hook: Decouples the View from the data source.
 * Handles potential async loading or data transformation.
 */
export const usePortfolio = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a minor delay or direct fetch from the model
    setData(CEMIL_DATA);
    setIsLoading(false);
  }, []);

  const handleEmailContact = () => {
    if (data) {
      window.location.href = `mailto:${data.email}`;
    }
  };

  const openLinkedIn = () => {
    if (data?.linkedin) {
      window.open(data.linkedin, '_blank', 'noopener,noreferrer');
    }
  };

  return {
    data,
    isLoading,
    actions: {
      handleEmailContact,
      openLinkedIn
    }
  };
};
