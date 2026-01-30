import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoCardProps {
  symbol: string;
  name: string;
  price: number;
  changePercent24h: number;
  image: string;
}

export function CryptoCard({ symbol, name, price, changePercent24h, image }: CryptoCardProps) {
  const isPositive = changePercent24h >= 0;
  const changeColor = isPositive ? 'text-chart-1' : 'text-chart-3';
  const bgColor = isPositive ? 'bg-chart-1/10' : 'bg-chart-3/10';

  return (
    <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{image}</div>
          <div>
            <p className="font-bold text-sm">{symbol}</p>
            <p className="text-xs text-muted-foreground">{name}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-lg font-bold">${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

        <div className={`flex items-center gap-1 ${changeColor} ${bgColor} px-2 py-1 rounded-md w-fit`}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          <span className="text-sm font-semibold">
            {isPositive ? '+' : ''}{changePercent24h.toFixed(2)}%
          </span>
        </div>
      </div>
    </Card>
  );
}
