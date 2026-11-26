import { useState, useEffect } from "react";

enum PetAction {
  EAT = "EAT",
  PLAY = "PLAY",
  SLEEP = "SLEEP",
}

enum PetMood {
  HAPPY,
  EXCITED,
  CONTENT,
  SAD,
  TIRED,
  SICK,
  HUNGRY,
}

const moodVisuals: Record<PetMood, string> = {
  [PetMood.HAPPY]: "😄",
  [PetMood.EXCITED]: "🤩",
  [PetMood.CONTENT]: "🙂",
  [PetMood.SAD]: "😢",
  [PetMood.TIRED]: "😴",
  [PetMood.SICK]: "🤢",
  [PetMood.HUNGRY]: "🤤",
};

const clamp = (val: number) => Math.max(0, Math.min(100, val));

const getMood = (hunger: number, energy: number, happiness: number): PetMood => {
  if (hunger > 70) return PetMood.HUNGRY;
  if (energy < 30) return PetMood.TIRED;
  if (happiness < 30) return PetMood.SAD;
  if (happiness > 80 && energy > 70) return PetMood.EXCITED;
  if (happiness > 60) return PetMood.HAPPY;
  return PetMood.CONTENT;
};

export const PetGame = () => {
  const [petName, setPetName] = useState("");
  const [inputName, setInputName] = useState("");
  const [started, setStarted] = useState(false);
  const [hunger, setHunger] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [happiness, setHappiness] = useState(100);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => {
      setHunger(100);
      setEnergy(100);
      setHappiness(0);
    }, 30000);
    return () => clearTimeout(timer);
  }, [started]);

  const handleAction = (action: PetAction) => {
    if (action === PetAction.EAT) {
      setHunger((h) => (h === 0 ? 0 : clamp(h - 15)));
      setEnergy((e) => (e === 100 ? 100 : clamp(e + 10)));
    } else if (action === PetAction.PLAY) {
      setEnergy((e) => (e === 0 ? 0 : clamp(e - 15)));
      setHappiness((hp) => (hp === 100 ? 100 : clamp(hp + 15)));
    } else if (action === PetAction.SLEEP) {
      setHunger((h) => (h === 100 ? 100 : clamp(h + 15)));
      setEnergy((e) => (e === 100 ? 100 : clamp(e + 20)));
    }
  };

  if (!started) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputName.trim()) return;
          setPetName(inputName.trim());
          setStarted(true);
        }}>
        <label htmlFor="pet-name">Name your pet</label>
        <input id="pet-name" type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
        <button type="submit">Start</button>
      </form>
    );
  }

  const mood = getMood(hunger, energy, happiness);

  return (
    <div>
      <h2 className="pet-name">{petName}</h2>
      <div>{moodVisuals[mood]}</div>
      <div>
        <div className="stat">
          Hunger: <span className="stat-value">{hunger}</span>
        </div>
        <div className="stat">
          Happiness: <span className="stat-value">{happiness}</span>
        </div>
        <div className="stat">
          Energy: <span className="stat-value">{energy}</span>
        </div>
      </div>
      <div>
        <button id="eat-action" onClick={() => handleAction(PetAction.EAT)}>
          Eat
        </button>
        <button id="play-action" onClick={() => handleAction(PetAction.PLAY)}>
          Play
        </button>
        <button id="sleep-action" onClick={() => handleAction(PetAction.SLEEP)}>
          Sleep
        </button>
      </div>
    </div>
  );
};
