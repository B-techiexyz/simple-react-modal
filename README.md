# simple-react-modal
> a simple modal component for react

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)[![Downloads](https://img.shields.io/npm/dt/react-just-modal.svg)](https://www.npmjs.com/package/react-just-modal)

## Installation

```bash
npm install --save react-just-calendar
```

## Usage

```tsx
import React, { Component } from 'react'

import Modal from 'react-just-modal'

class Example extends Component {
  render() {
    return (
      <Modal visible={true} onCloseOutsideClick={true}>
        <div>Simple modal</div>
      </Modal>
    )
  }
}
```

## simple-react-modal Props

| Prop                           | Type       | Description                                                                           |
| :----------------------------- | :--------- | :------------------------------------------------------------------------------------ |
| **`visible`**           | `boolean`    | to open or close modal |
| **`onCloseOutsideClick`**           | `boolean`    | to open or close modal when outside click |
| **`onClose`**           | `function`    | callback to close modal |
| **`className`**           | `string`    | style |


## Screenshots

<img width="1675" alt="Screenshot" src="https://user-images.githubusercontent.com/42475339/111897736-a5913480-8a47-11eb-8221-1845583eb1c2.png">


## Authors

* [azadhmhd](https://github.com/azadhmhd)


## License

MIT © [Btechiexyz](https://github.com/Btechiexyz)
