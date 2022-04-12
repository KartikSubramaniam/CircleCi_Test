/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { fireEvent, render, waitFor } from "@testing-library/react-native";

it('renders correctly', () => {
  renderer.create(<App />);
});

it("Renders Message", async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(<App />);

  const button = getByText("Say Hello");
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId("printed-message")).toBeTruthy());

  expect(getByTestId("printed-message").props.children).toBe("Hello Tester");
  //expect(toJSON()).toMatchSnapshot();
});