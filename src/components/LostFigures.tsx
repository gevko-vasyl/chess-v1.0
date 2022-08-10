import React, { FC } from 'react';

import { Figure } from '../models/figures/Figure';

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => (
  <div className="lost">
    <h3>{title}</h3>
    {figures.map((el) => (
      <div key={el.id}>
        {el.name} {el.logo && <img src={el.logo} alt={el.name} width={20} height={20} />}
      </div>
    ))}
  </div>
);

export default LostFigures;
