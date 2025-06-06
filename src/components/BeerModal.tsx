
import { useState } from 'react';
import { X, Calendar } from 'lucide-react';
import { Beer, Comment, NewComment } from '../types/beer';
import StarRating from './StarRating';
import CommentForm from './CommentForm';

interface BeerModalProps {
  beer: Beer;
  comments: Comment[];
  onClose: () => void;
  onAddComment: (comment: NewComment) => void;
}

const BeerModal = ({ beer, comments, onClose, onAddComment }: BeerModalProps) => {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const beerComments = comments.filter(comment => comment.beerId === beer.id);

  const handleAddComment = (comment: NewComment) => {
    onAddComment(comment);
    setShowCommentForm(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{beer.name}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="font-medium text-amber-600">{beer.brewery}</span>
              <span>•</span>
              <span>{beer.style}</span>
              <span>•</span>
              <span className="font-medium">{beer.abv}% ABV</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-700 mb-4">{beer.description}</p>
              
              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <StarRating rating={beer.averageRating} />
                  <span className="font-semibold text-lg">{beer.averageRating.toFixed(1)}</span>
                </div>
                <span className="text-gray-600">•</span>
                <span className="text-gray-600">{beer.totalRatings} reseñas</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-slate-800">
                  Reseñas ({beerComments.length})
                </h3>
                {!showCommentForm && (
                  <button
                    onClick={() => setShowCommentForm(true)}
                    className="beer-button"
                  >
                    Escribir Reseña
                  </button>
                )}
              </div>

              {showCommentForm && (
                <div className="mb-6">
                  <CommentForm
                    onSubmit={handleAddComment}
                    onCancel={() => setShowCommentForm(false)}
                  />
                </div>
              )}

              <div className="space-y-4">
                {beerComments.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>Aún no hay reseñas para esta cerveza.</p>
                    <p className="text-sm">¡Sé el primero en compartir tu opinión!</p>
                  </div>
                ) : (
                  beerComments.map((comment) => (
                    <div key={comment.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-slate-800">{comment.userName}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <StarRating rating={comment.rating} size="sm" />
                            <span className="text-sm text-gray-600">
                              {comment.rating}.0
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {formatDate(comment.date)}
                        </div>
                      </div>
                      <p className="text-gray-700">{comment.comment}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerModal;
