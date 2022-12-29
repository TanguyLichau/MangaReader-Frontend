const API_URL = "";

async function fetchJSON(response) {
  return response.json();
}

export async function getAllMangas() {
  try {
    const response = await fetch(`${API_URL}/manga`);
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function createManga(manga) {
  try {
    const response = await fetch(`${API_URL}/manga`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: manga.name,
        lastChapterRead: manga.lastChapterRead,
      }),
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function updateManga(manga) {
  try {
    const response = await fetch(`${API_URL}/manga/${manga._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: manga.name,
        lastChapterRead: manga.lastChapterRead,
      }),
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteManga(mangaId) {
  try {
    await fetch(`${API_URL}/manga/${mangaId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
}
