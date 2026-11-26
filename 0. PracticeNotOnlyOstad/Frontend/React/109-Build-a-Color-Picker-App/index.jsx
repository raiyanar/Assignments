const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const changeColorValue = (e) => {
    setColor(e.target.value);
  };

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <input
        onChange={changeColorValue}
        id="color-input"
        value={color}
        type="color"
      />
    </div>
  );
};
