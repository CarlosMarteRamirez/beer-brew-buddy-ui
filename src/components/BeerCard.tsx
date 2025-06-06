
import { Beer } from '../types/beer';
import StarRating from './StarRating';

interface BeerCardProps {
  beer: Beer;
  onClick: (beer: Beer) => void;
}

const BeerCard = ({ beer, onClick }: BeerCardProps) => {
  return (
    <div 
      className="beer-card p-6 cursor-pointer transform hover:scale-105"
      onClick={() => onClick(beer)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-800 mb-1">{beer.name}</h3>
          <p className="text-amber-600 font-medium">{beer.brewery}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {beer.abv}% ABV
          </span>
        </div>
      </div>
      
      <div className="mb-4">
        <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
          {beer.style}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 text-sm line-clamp-2">{beer.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StarRating rating={beer.averageRating} size="sm" />
          <span className="text-sm font-medium text-slate-700">
            {beer.averageRating.toFixed(1)}
          </span>
        </div>
        <span className="text-xs text-gray-500">
          {beer.totalRatings} reseñas
        </span>
      </div>
    </div>
  );
};

export default BeerCard;
