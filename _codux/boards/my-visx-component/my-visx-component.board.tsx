import { createBoard } from '@wixc3/react-board';
import MyVisxComponent from '../../../src/components/my-visx-component/my-visx-component';

export default createBoard({
    name: 'MyVisxComponent',
    Board: () => <MyVisxComponent width={1500} height={1000} />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
