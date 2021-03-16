interface GithubUserData {
  id: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  gists_url: string;
  starred_url: string;
  organizations_url: string;
  type: string;
  site_admin: string;
  name: string;
  company: string;
  blog: string;
  bio: string;
  public_repos: string;
  followers: string;
  following: string;
  created_at: string;
}

interface GithubUser {
  id: string;
  readonly teste: string;
}

//PARTIAL precisa parcialmente de algumas informações
function printGithubUserDataPartial(user: Partial<GithubUserData>) {
  console.log(user);
}

// Pick = Pega apenas os valores que eu preciso da interface
function printGithubUserDataPick(
  user: Pick<GithubUserData, "followers" | "following">
) {
  console.log(user.followers);
  console.log(user.following);
}

// Omit = Omit valores da interface
function printGithubUserDataOmit(user: Omit<GithubUserData, "login">) {
  console.log(user.avatar_url);
  console.log(user.following);
}

// Readonly
// ou Readonly <GithubUser>
const newGitHubUser: GithubUser = {
  id: "2",
  teste: "oii",
};

newGitHubUser.id = "200";
newGitHubUser.teste = "400";

printGithubUserDataPick({ followers: "oi", following: "dois" });
printGithubUserDataPartial({ bio: "Oi" });
