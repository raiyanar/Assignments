const poll = new Map();

const addOption = (option) => {
  if (option === "") {
    return `Option cannot be empty.`;
  }

  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
};

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  let voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  if (!voters.has(voterId)) {
    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
  }
};

poll.set("Turkey", new Set(["voter1", "voter2"]));
poll.set("Bangladesh", new Set(["voter4"]));
poll.set("India", new Set());

const displayResults = () => {
  let results = "Poll Results:";
  for (const [option, ids] of poll) {
    results += `\n${option}: ${ids.size} votes`;
  }
  return results;
};
