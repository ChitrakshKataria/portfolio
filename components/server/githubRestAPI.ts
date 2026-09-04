export async function getReadmeFromGH(owner: string, repo: string) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`,
    {
        headers: {
            Accept: "application/vnd.github.raw+json"
        },
        next: {
            revalidate: 36000,
        },
    }
  )

  if (!response.ok) {
    return null;
  }

  return response.text()
}
