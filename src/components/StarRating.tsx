
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const StarRating = ({ 
  rating, 
  maxRating = 5, 
  size = 'md', 
  interactive = false, 
  onRatingChange 
}: StarRatingProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  return (
    <div className="beer-rating">
      {[...Array(maxRating)].map((_, index) => {
        const starRating = index + 1;
        const isFilled = starRating <= rating;
        const isPartial = starRating - 0.5 <= rating && starRating > rating;

        return (
          <button
            key={index}
            onClick={() => handleStarClick(starRating)}
            disabled={!interactive}
            className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform duration-200`}
          >
            <Star 
              className={`${sizeClasses[size]} ${
                isFilled 
                  ? 'fill-amber-400 text-amber-400' 
                  : isPartial 
                    ? 'fill-amber-200 text-amber-400'
                    : 'text-gray-300'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
