import TopBar from './TopBar';
import useDarkMode from '../hooks/useDarkMode';
import { render } from "@testing-library/react";

test('dark-mdoe class on document when true', () => {
    const {} = render(<TopBar />);
})