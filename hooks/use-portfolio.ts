import { useState, useEffect } from 'react';

interface Holding {
  id: string;
  name: string;
  symbol: string;
  shares: number;
  value: number;
  change: number;
  changePercent: number;
}

interface PortfolioData {
  totalValue: number;
  monthlyChange: number;
  holdings: number;
  sectors: number;
  dailyChange: number;
  holdingsList: Holding[];
}

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        // Mock portfolio data - in real app, this would be an API call
        const mockData: PortfolioData = {
          totalValue: 125430,
          monthlyChange: 12.5,
          holdings: 24,
          sectors: 6,
          dailyChange: 2340,
          holdingsList: [
            {
              id: '1',
              name: 'Apple Inc.',
              symbol: 'AAPL',
              shares: 50,
              value: 8750,
              change: 2.3,
              changePercent: 2.3
            },
            {
              id: '2',
              name: 'Microsoft Corp.',
              symbol: 'MSFT',
              shares: 30,
              value: 11250,
              change: 1.8,
              changePercent: 1.8
            },
            {
              id: '3',
              name: 'Tesla Inc.',
              symbol: 'TSLA',
              shares: 25,
              value: 5000,
              change: -0.5,
              changePercent: -0.5
            }
          ]
        };
        
        setPortfolio(mockData);
      } catch (error) {
        console.error('Failed to fetch portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  const addHolding = async (holding: Omit<Holding, 'id'>) => {
    // Mock add holding - in real app, this would be an API call
    const newHolding: Holding = {
      ...holding,
      id: Date.now().toString()
    };
    
    if (portfolio) {
      setPortfolio({
        ...portfolio,
        holdingsList: [...portfolio.holdingsList, newHolding],
        holdings: portfolio.holdings + 1
      });
    }
  };

  const removeHolding = async (holdingId: string) => {
    // Mock remove holding - in real app, this would be an API call
    if (portfolio) {
      const updatedHoldings = portfolio.holdingsList.filter(h => h.id !== holdingId);
      setPortfolio({
        ...portfolio,
        holdingsList: updatedHoldings,
        holdings: portfolio.holdings - 1
      });
    }
  };

  return {
    portfolio,
    loading,
    addHolding,
    removeHolding
  };
}
