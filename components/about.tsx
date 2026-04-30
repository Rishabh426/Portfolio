export function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">About</h2>
          <p className="text-muted-foreground">Who I am and what I do</p>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl">
          <p className="text-lg">
            I&apos;m a full-stack developer with a strong foundation in Data Structures and Algorithms, having solved 700+ problems on competitive programming platforms.
          </p>
          <p className="text-lg">
            My journey across Codeforces, CodeChef, and LeetCode has strengthened my problem-solving abilities and algorithmic thinking, which I apply to building scalable backend systems and high-performance applications.
          </p>
          <p className="text-lg">
            I specialize in backend architecture, systems design, and creating efficient, well-structured solutions for production environments.
          </p>
        </div>
      </div>
    </section>
  );
}
