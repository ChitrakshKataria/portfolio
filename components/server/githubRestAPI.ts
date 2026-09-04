export async function getReadmeFromGH(owner: string, repo: string) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`,
    {
        headers: {
            Accept: "application/vnd.github.raw+json"
        },
            cache: "no-store", //for development only
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch README fomr GitHub")

}

  return response.text()
}
