
import { useState } from 'react';
import { NewComment } from '../types/beer';
import StarRating from './StarRating';

interface CommentFormProps {
  onSubmit: (comment: NewComment) => void;
  onCancel: () => void;
}

const CommentForm = ({ onSubmit, onCancel }: CommentFormProps) => {
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName && comment && rating > 0) {
      onSubmit({ userName, comment, rating });
      setUserName('');
      setComment('');
      setRating(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-amber-50 p-6 rounded-lg border border-amber-200">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Agregar Reseña</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-slate-700 mb-2">
            Tu nombre
          </label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Calificación
          </label>
          <StarRating 
            rating={rating} 
            interactive={true} 
            onRatingChange={setRating}
            size="lg"
          />
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-slate-700 mb-2">
            Tu reseña
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none"
            placeholder="Comparte tu experiencia con esta cerveza..."
            required
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="beer-button flex-1"
            disabled={!userName || !comment || rating === 0}
          >
            Enviar Reseña
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
