export function MoodBoardItem({ color, image, description }) {
  return (
    <div style={{ backgroundColor: color }} className="mood-board-item">
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="red"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Description one"
        />
        <MoodBoardItem
          color="blue"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Description two"
        />
        <MoodBoardItem
          color="yellow"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Description three"
        />
        <MoodBoardItem
          color="green"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Description four"
        />
        <MoodBoardItem
          color="pink"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Description five"
        />
        <MoodBoardItem
          color="maroon"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Description six"
        />
      </div>
    </div>
  );
}
