import { createBoard } from '@wixc3/react-board';
import LandingPage from '../../../views/landingPage';

export default createBoard({
    name: 'LandingPage',
    Board: () => <LandingPage />
});
