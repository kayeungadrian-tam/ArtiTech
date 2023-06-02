import { createBoard } from '@wixc3/react-board';
import BlogPost from '../../../views/blog';

export default createBoard({
    name: 'BlogPost',
    Board: () => <BlogPost />,
    environmentProps: {
        canvasHeight: 903,
        canvasWidth: 1258,
        windowHeight: 756
    }
});
