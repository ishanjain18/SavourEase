const BASE_URL = "http://127.0.0.1:8000";

export async function fetchRecommendations(body) {
  return fetch(`${BASE_URL}/recommendations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((res) => res.json())
    .then((data) => data);
}

export async function getFormOptions() {
  return fetch(`${BASE_URL}/options`)
    .then((res) => res.json())
    .then((data) => data);
}

const printer = async () => {
  fetchRecommendations().then((res) => console.log(res));
};