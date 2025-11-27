import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { CounterProvider } from './Countercontext';
import userEvent from '@testing-library/user-event';
test('increment, decrement work correctly', async () => {
render(
<CounterProvider>
<Counter />
</CounterProvider>
);
});