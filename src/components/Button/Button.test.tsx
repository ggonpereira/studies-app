import { render } from '@testing-library/react';
import Button from './index';

describe('test button component', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Button>Button Test 1</Button>);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render with "Button Test 2" message inside', () => {
    const { getByRole } = render(<Button>Button Test 2</Button>);

    const button = getByRole('button');
    expect(button).toHaveTextContent('Button Test 2');
  });

  it('should have the type "submit"', () => {
    const { getByRole } = render(<Button type="submit">Button Test 3</Button>);

    const button = getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
