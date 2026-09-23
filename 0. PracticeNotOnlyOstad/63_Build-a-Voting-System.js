const poll = new Map();

function addOption(option) {
  if (option === "") {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let result = "Poll Results:";

  for (const [option, voters] of poll) {
    result += `\n${option}: ${voters.size} votes`;
  }

  return result;
}

// Initial poll with at least 3 options and at least 3 total votes
poll.set("Turkey", new Set(["voter1", "voter2"]));
poll.set("Morocco", new Set(["voter3"]));
poll.set("Spain", new Set());
