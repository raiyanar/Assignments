const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Back-End Development", className: "backend" },
};

// 1. timeAgo
function timeAgo(timestamp) {
  const now = Date.now();
  const then = new Date(timestamp).getTime();
  const diffMs = now - then;

  const minutes = diffMs / (1000 * 60);
  if (minutes < 60) {
    return `${Math.floor(minutes)}m ago`;
  }

  const hours = minutes / 60;
  if (hours < 24) {
    return `${Math.floor(hours)}h ago`;
  }

  const days = hours / 24;
  return `${Math.floor(days)}d ago`;
}

// 2. viewCount
function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }
  return views;
}

// 3. forumCategory
function forumCategory(id) {
  const category = allCategories[id] || {
    category: "General",
    className: "general",
  };
  const { category: name, className } = category;
  return `<a href="${forumCategoryUrl}${className}/${id}" class="category ${className}">${name}</a>`;
}

// 4. avatars
function avatars(posters, users) {
  return posters
    .map((poster) => {
      const user = users.find((u) => u.id === poster.user_id);
      if (!user) return "";

      let src = user.avatar_template.replace("{size}", 30);
      if (src.startsWith("/")) {
        src = avatarUrl + src;
      }

      return `<img src="${src}" alt="${user.name}">`;
    })
    .join("");
}

// 5. showLatestPosts
function showLatestPosts(data) {
  const { users, topic_list } = data;
  const topics = topic_list.topics;

  const rows = topics
    .map((topic) => {
      const {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      } = topic;

      const titleAnchor = `<a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>`;
      const categoryAnchor = forumCategory(category_id);

      const replies = posts_count - 1;
      const viewsDisplay = viewCount(views);
      const lastActivity = timeAgo(bumped_at);

      return `<tr>
        <td>${titleAnchor}${categoryAnchor}</td>
        <td><div class="avatar-container">${avatars(posters, users)}</div></td>
        <td>${replies}</td>
        <td>${viewsDisplay}</td>
        <td>${lastActivity}</td>
      </tr>`;
    })
    .join("");

  document.querySelector("#posts-container").innerHTML = rows;
}

// 6. fetchData
async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
