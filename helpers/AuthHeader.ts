export function authHeader(): { Authorization: string } {
  // return authorization header with jwt token
  let localUser: string | null = localStorage.getItem("user");
  let user: { token: string } | null = localUser
    ? JSON.parse(localUser)["currentUser"]
    : null;
  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return { Authorization: "" };
  }
}
