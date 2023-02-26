import { fireEvent, screen } from '@testing-library/react';
import { 
    renderWithTranslation 
} from 'shared/lib/tests/renderWithTranslation/renderWtihTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('render component', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar/>);
        const toogleButton = screen.getByTestId('sidebar-toggle');
        expect(toogleButton).toBeInTheDocument();
        fireEvent.click(toogleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
