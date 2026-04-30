"use client";

export function BottomNav() {
  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "LeetCode", href: "https://leetcode.com/u/Rishabh__1234/" },
    {
      label: "CodeForces",
      href: "https://codeforces.com/profile/call_me_sharma",
    },
    { label: "CodeChef", href: "https://www.codechef.com/users/callmesharma" },
    { label: "Twitter", href: "https://x.com/Ronnie004681166" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rishabhsharma3579/",
    },
    { label: "GitHub", href: "https://github.com/Rishabh426" },
  ];

  return (
    <div className="border-t border-border/50 px-8 py-4 bg-background/50 backdrop-blur-sm flex items-center justify-center gap-8 flex-wrap">
      {navItems.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-muted-foreground hover:text-foreground transition-colors font-mono text-xs uppercase tracking-wide hover:underline underline-offset-4"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
