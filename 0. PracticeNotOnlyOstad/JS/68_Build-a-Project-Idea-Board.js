// Build a Project Idea Board

const projectStatus = {
  PENDING: {
    description: "Pending Execution",
  },
  SUCCESS: {
    description: "Executed Successfully",
  },
  FAILURE: {
    description: "Execution Failed",
  },
};

class ProjectIdea {
  status = projectStatus.PENDING;

  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(ProjectIdea) {
    this.ideas.push(ProjectIdea);
  }

  unpin(ProjectIdea) {
    const index = this.ideas.indexOf(ProjectIdea);
    this.ideas.splice(index, 1);
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach((idea) => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });
    return result;
  }
}
