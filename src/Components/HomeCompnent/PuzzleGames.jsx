import React from 'react';
import { Link } from 'react-router';
import { useAuth } from '../../Hooks/useAuth';
import ToysCard from '../ToysCard';

const PuzzleGames = () => {
      const { toysData } = useAuth();
  const remoteToys = toysData.filter(
    (toys) => toys.category_name === "Puzzle Games"
  );

  return (
    <section>
      {/* title */}
      <div className="flex flex-wrap items-center justify-between gap-1">
        <p className="section-title">Puzzle Games Toys</p>
        <Link to={'/category/1'} className="all-items">More Toys</Link>
      </div>

      {/* remote control toys */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
        {remoteToys.map(
          (toys, index) =>
            index < 3 && <ToysCard key={toys.toyId} toys={toys} />
        )}
      </div>
    </section>
  );
};

export default PuzzleGames;