const API_URL = "http://localhost:3000";

function fetchJSON(response) {
  return response.json();
}

export async function getJWT(user, pswd) {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pswd,
      }),
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getAllMangas() {
  try {
    const response = await fetch(`${API_URL}/manga`);
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function createManga(manga, jwt) {
  const JWT_TOKEN = jwt;
  try {
    const response = await fetch(`${API_URL}/manga`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JWT_TOKEN.token,
      },
      body: JSON.stringify({
        name: manga.name,
        lastChapterRead: manga.lastChapterRead,
        coverUrl: "",
        isFavorite: false,
      }),
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function updateMangaAPI(manga, jwt) {
  const JWT_TOKEN = jwt;
  try {
    const response = await fetch(`${API_URL}/manga/${manga._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JWT_TOKEN.token,
      },
      body: JSON.stringify({
        name: manga.name,
        lastChapterRead: manga.lastChapterRead,
        isFavorite: manga.isFavorite,
      }),
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteMangaAPI(mangaId, jwt) {
  const JWT_TOKEN = jwt;
  try {
    await fetch(`${API_URL}/manga/${mangaId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JWT_TOKEN.token,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
