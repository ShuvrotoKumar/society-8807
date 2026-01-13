export interface Transaction {
  id: string;
  date: string;
  type: 'Buy' | 'Sell' | 'Dividend';
  security: string;
  shares: number;
  price: number;
  total: number;
}

export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
}

export function formatPercent(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}

export function calculatePortfolioValue(holdings: Array<{ shares: number; price: number }>): number {
  return holdings.reduce((total, holding) => total + (holding.shares * holding.price), 0);
}

export function calculateTotalReturn(holdings: Array<{ value: number; cost: number }>): number {
  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);
  const totalCost = holdings.reduce((sum, h) => sum + h.cost, 0);
  return ((totalValue - totalCost) / totalCost) * 100;
}

export function getMarketStatus(): 'open' | 'closed' | 'pre-market' | 'after-hours' {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  
  // Weekend
  if (day === 0 || day === 6) return 'closed';
  
  // Pre-market (4:00 AM - 9:30 AM ET)
  if (hour >= 4 && hour < 9) return 'pre-market';
  
  // Market hours (9:30 AM - 4:00 PM ET)
  if (hour >= 9 && hour < 16) return 'open';
  
  // After-hours (4:00 PM - 8:00 PM ET)
  if (hour >= 16 && hour < 20) return 'after-hours';
  
  return 'closed';
}

export function generateMockMarketData(symbols: string[]): MarketData[] {
  return symbols.map(symbol => ({
    symbol,
    price: Math.random() * 1000 + 50,
    change: (Math.random() - 0.5) * 20,
    changePercent: (Math.random() - 0.5) * 10,
    volume: Math.floor(Math.random() * 10000000),
    marketCap: Math.random() * 1000000000000
  }));
}
