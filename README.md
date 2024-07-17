A flexible and customizable React component for animated number counting.

## Installation

Install the package using npm:

```bash
npm install react-countplus
```

## Usage

Here's a basic example of how to use the `CountPlus` component:

```jsx
import React from "react";
import { CountPlus } from "react-countplus";

const App = () => {
  return (
    <div>
      <CountPlus
        start={0}
        end={1249.23}
        duration={2.5}
        decimals={2}
        prefix="EUR "
        suffix=" left"
        separator=" "
        decimal=","
        delay={500}
        onStart={() => console.log("Counting started!")}
        onUpdate={(value) => console.log("Current value:", value)}
        onEnd={() => console.log("Counting completed!")}
      />
    </div>
  );
};

export default App;
```

## Props

The `CountPlus` component accepts the following props:

| Prop Name   | Type     | Description                                                    | Default Value |
|-------------|----------|----------------------------------------------------------------|---------------|
| `start`     | number   | The number to start counting from                              | 0             |
| `end`       | number   | The final number to count up to (required)                     | -             |
| `duration`  | number   | Duration of the count animation in seconds                     | 2             |
| `decimals`  | number   | Number of decimal places to show                               | 0             |
| `separator` | string   | Character used as the thousands separator                      | ","           |
| `decimal`   | string   | Character used as the decimal point                            | "."           |
| `prefix`    | string   | String to display before the number                            | ""            |
| `suffix`    | string   | String to display after the number                             | ""            |
| `delay`     | number   | Delay in milliseconds before starting the animation            | 0             |
| `onStart`   | function | Callback function called when the animation starts             | -             |
| `onUpdate`  | function | Callback function called on each update with the current value | -             |
| `onEnd`     | function | Callback function called when the animation completes          | -             |

## Features

- Smooth counting animation
- Customizable duration and easing
- Support for decimal numbers
- Prefix and suffix support
- Customizable thousand separator and decimal point
- Delay option for starting the animation
- Start, update, and end callbacks

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute to this project.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.
