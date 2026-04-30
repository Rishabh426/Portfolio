import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "sharmarishabh9900@gmail.com",
      href: "mailto:sharmarishabh9900@gmail.com",
    },
    {
      label: "GitHub",
      value: "https://github.com/Rishabh426",
      href: "https://github.com/Rishabh426",
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/rishabhsharma3579/",
      href: "https://www.linkedin.com/in/rishabhsharma3579/",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <Card
              key={contact.label}
              className="p-6 border border-border hover:border-muted-foreground/50 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  {contact.label}
                </p>
                <p className="text-foreground font-medium break-all">
                  {contact.value}
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full mt-4 hover:bg-secondary/5"
              >
                <a href={contact.href}>Connect</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
