import { NextResponse } from "next/server";

const USERNAME = "Rishabh426";

function computeStreaks(dates: string[]): { current: number; longest: number } {
  if (!dates.length) return { current: 0, longest: 0 };

  const unique = Array.from(new Set(dates)).sort();

  let longest = 1;
  let temp = 1;
  for (let i = 1; i < unique.length; i++) {
    const prev = new Date(unique[i - 1]);
    const curr = new Date(unique[i]);
    const diff = (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      temp++;
      longest = Math.max(longest, temp);
    } else {
      temp = 1;
    }
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let current = 0;
  const check = new Date(today);
  while (true) {
    const dateStr = check.toISOString().split("T")[0];
    if (unique.includes(dateStr)) {
      current++;
      check.setDate(check.getDate() - 1);
    } else {
      break;
    }
  }

  return { current, longest };
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  console.log(token);

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  try {
    const reposRes = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner`,
      { headers, next: { revalidate: 3600 } },
    );

    if (!reposRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repos" },
        { status: reposRes.status },
      );
    }

    const repos: { name: string; fork: boolean }[] = await reposRes.json();
    const ownRepos = repos.filter((r) => !r.fork).map((r) => r.name);

    const since = new Date();
    since.setFullYear(since.getFullYear() - 1);
    const sinceISO = since.toISOString();

    const commitDateArrays = await Promise.all(
      ownRepos.slice(0, 20).map(async (repo) => {
        try {
          const res = await fetch(
            `https://api.github.com/repos/${USERNAME}/${repo}/commits?author=${USERNAME}&since=${sinceISO}&per_page=100`,
            { headers, next: { revalidate: 3600 } },
          );
          if (!res.ok) return [];
          const commits: { commit: { author: { date: string } } }[] =
            await res.json();
          return commits.map((c) => c.commit.author.date.split("T")[0]);
        } catch {
          return [];
        }
      }),
    );

    const allDates = commitDateArrays.flat();
    const totalCommits = allDates.length;
    const { current, longest } = computeStreaks(allDates);

    return NextResponse.json({
      currentStreak: current,
      longestStreak: longest,
      totalCommits,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
