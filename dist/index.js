

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/**
 * --------------------------------------------------------------------------
 * simple-react-modal
 * Licensed under MIT (https://github.com/B-techiexyz/simple-react-modal/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
function useOnClick(ref, handler) {
    React.useEffect(function () {
        var listener = function (event) {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        return function () {
            document.removeEventListener("mousedown", listener);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
}

___$insertStyle("/**\n * --------------------------------------------------------------------------\n * simple-react-modal\n * Licensed under MIT (https://github.com/B-techiexyz/simple-react-modal/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n.container {\n  position: fixed;\n  z-index: 1300;\n  inset: 0px;\n}\n\n.backDrop {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  z-index: -1;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-tap-highlight-color: transparent;\n  opacity: 1;\n  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.innerContainer {\n  height: 100%;\n  outline: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.innerPaper {\n  max-width: 500px;\n  display: flex;\n  max-height: calc(100% - 64px);\n  flex-direction: column;\n  margin: 32px;\n  position: relative;\n  overflow-y: auto;\n  color: rgba(0, 0, 0, 0.87);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.overFlowHidden {\n  overflow: hidden;\n}");

/**
 * --------------------------------------------------------------------------
 * simple-react-modal
 * Licensed under MIT (https://github.com/B-techiexyz/simple-react-modal/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var useEffect = React.useEffect, useRef = React.useRef;
function Modal(props) {
    var ref = useRef();
    useEffect(function () {
        if (props.visible) {
            document.body.classList.add("overFlowHidden");
        }
        return function () {
            document.body.classList.remove("overFlowHidden");
        };
    }, [props.visible]);
    useOnClick(ref, function () {
        return props.onCloseOutsideClick && props.onClose ? props.onClose() : undefined;
    });
    return props.visible ? (React.createElement("div", { className: "container", role: "presentation" },
        React.createElement("div", { className: "backDrop", "aria-hidden": "true" }),
        React.createElement("div", { className: "innerContainer", role: "none presentation", tabIndex: -1 },
            React.createElement("div", { className: "innerPaper", ref: ref }, props.children)))) : null;
}

exports.default = Modal;
//# sourceMappingURL=index.js.map
