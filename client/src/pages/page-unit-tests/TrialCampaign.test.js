import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TrialCampaign from '../TrialCampaign';
import '@testing-library/jest-dom';

// Test to check if selecting a character and continuing works as expected
test('selects a character and continues', async () => {
    // Render the component within a Memory Router
    render(
        <MemoryRouter>
            <TrialCampaign />
        </MemoryRouter>
    );
  
    fireEvent.click(screen.getByText(/Select this Character/i));

    const selectedText = await waitFor(() => screen.queryByText(text => text.includes('You have selected:')));

    expect(selectedText).toBeInTheDocument();
    
    fireEvent.click(screen.getByText(/Continue/i));
});
