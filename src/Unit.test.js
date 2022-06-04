import { render, screen } from '@testing-library/react'
import Index from '../src/pages/Favorites'

describe('Favorites Component', () => {
   
    test('Deve conter um botão para chamar favoritos', () => {
        render(<Index />);

        const ButtonFavorite = screen.getByRole("button");

    });

    
});
