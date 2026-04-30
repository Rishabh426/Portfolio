import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Profiles() {
  const profiles = [
    {
      name: "LeetCode",
      url: "#",
      description: "Solve algorithm challenges",
    },
    {
      name: "CodeChef",
      url: "#",
      description: "Competitive programming",
    },
    {
      name: "Codeforces",
      url: "#",
      description: "Programming contests",
    },
  ];

  return (
    <section id="profiles" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Coding Profiles
          </h2>
          <p className="text-muted-foreground">
            700+ DSA problems solved across multiple platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {profiles.map((profile) => (
            <Card
              key={profile.name}
              className="p-6 border border-border hover:border-muted-foreground/50 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {profile.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {profile.description}
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full mt-4 hover:bg-secondary/5"
              >
                <a href={profile.url}>Visit Profile</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
