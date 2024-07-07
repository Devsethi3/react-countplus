markdown
# react-countplus

A flexible and customizable React component for animated number counting.

## Installation

Install the package using npm:

```bash
npm install react-countplus
```

## Usage

Here's a basic example of how to use the `CountUp` component:

```jsx
import React from "react";
import { CountUp } from "react-countplus";

const App = () => {
  return (
    <div>
      <h1>Enhanced CountUp Component</h1>
      <CountUp
        end={1000}
        duration={5}
        prefix="$"
        suffix=" USD"
        separator=","
        formatFunction={(value) => value.toFixed(2)}
        onStart={() => console.log("Counting started!")}
        onUpdate={(value) => console.log("Current value:", value)}
        onComplete={() => console.log("Counting completed!")}
      />
    </div>
  );
};

export default App;
```

## Props

The `CountUp` component accepts the following props:

| Prop Name        | Type     | Description                                                     | Default Value |
| ---------------- | -------- | --------------------------------------------------------------- | ------------- |
| `end`            | number   | The final number to count up to (required)                      | -             |
| `start`          | number   | The number to start counting from                               | 0             |
| `duration`       | number   | Duration of the count animation in seconds                      | 2             |
| `easingFunction` | function | Custom easing function for the animation                        | easeOutQuad   |
| `formatFunction` | function | Custom function to format the displayed number                  | toString      |
| `prefix`         | string   | String to display before the number                             | ""            |
| `suffix`         | string   | String to display after the number                              | ""            |
| `separator`      | string   | Character used as the thousands separator                       | ","           |
| `onStart`        | function | Callback function called when the animation starts              | -             |
| `onUpdate`       | function | Callback function called on each update with the current value  | -             |
| `onComplete`     | function | Callback function called when the animation completes           | -             |

## Features

- Smooth counting animation
- Customizable duration and easing
- Prefix and suffix support
- Thousand separator
- Custom formatting function
- Start, update, and complete callbacks

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute to this project.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.