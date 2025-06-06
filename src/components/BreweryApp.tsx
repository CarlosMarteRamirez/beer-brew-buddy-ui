
import { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Beer, Comment, NewComment } from '../types/beer';
import { comments as initialComments } from '../data/beerData';
import BeerCard from './BeerCard';
import BeerModal from './BeerModal';

const BreweryApp = () => {
  const [beers, setBeers] = useState<any[]>();
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [selectedBeer, setSelectedBeer] = useState<Beer | null>(null);

  const [beerss, setBeerss] = useState<any>();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');

  const styles = Array.from(new Set(beers.map(beer => beer.style))).sort();

  const handleAddComment = (newComment: NewComment) => {
    if (selectedBeer) {
      const comment: Comment = {
        id: Date.now().toString(),
        beerId: selectedBeer.id,
        userName: newComment.userName,
        comment: newComment.comment,
        rating: newComment.rating,
        date: new Date()
      };
      setComments([...comments, comment]);
      console.log('Nuevo comentario agregado:', comment);
    }
  };

  useEffect(() =>
        {
          (async () =>
          {
            try
            {
              const response = await fetch(`${import.meta.env.VITE_Api}api/Beers`);

              if (!response.ok) throw new Error("Error al cargar las cervezas");

              const raw = await response.json();

              setBeers(raw);
            }
            catch (error)
            {
              console.error(`Error al cargar las provincias: ${error}`);
            }
          })();
        }, []);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            🍺 <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Cervecería Artesanal
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre las mejores cervezas artesanales, lee reseñas y comparte tu experiencia
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar cervezas, cervecerías o estilos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {beers.length} de {beers.length} cervezas
          </p>
        </div>

        {/* Beer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beers.map((beer) => (
            <BeerCard
              key={beer.id}
              beer={beer}
              onClick={setSelectedBeer}
            />
          ))}
        </div>

        {beers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍺</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No se encontraron cervezas
            </h3>
            <p className="text-gray-500">
              Intenta con otros términos de búsqueda o filtros
            </p>
          </div>
        )}

        {/* Modal */}
        {selectedBeer && (
          <BeerModal
            beer={selectedBeer}
            comments={comments}
            onClose={() => setSelectedBeer(null)}
            onAddComment={handleAddComment}
          />
        )}
      </div>
    </div>
  );
};

export default BreweryApp;
