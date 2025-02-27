import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About AncientLingua</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Bridging ancient wisdom with modern technology
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-4">
            AncientLingua was created to make ancient languages accessible to everyone, 
            from scholars and students to history enthusiasts and curious minds.
          </p>
          <p className="text-lg mb-4">
            We believe that understanding ancient languages provides unique insights into 
            human history, philosophy, and culture that continue to be relevant today.
          </p>
          <p className="text-lg">
            By combining advanced language processing technology with scholarly expertise, 
            we aim to create the most accurate and contextually rich translation platform 
            for ancient languages.
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1603826773128-fefac9c74bab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Ancient Greek architecture" 
            fill 
            className="object-cover"
          />
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Linguistic Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We combine advanced computational linguistics with expert human knowledge to ensure 
                translations capture the nuances of ancient languages, including context-specific 
                meanings and cultural references.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every translation includes historical and cultural context, helping users understand 
                not just what words mean, but how they were used and understood in their original setting.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Educational Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our platform is designed to be educational, providing grammatical analysis, 
                alternative meanings, and etymological information to help users deepen their 
                understanding of ancient languages.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Dr. Elena Papadopoulos" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Dr. Elena Papadopoulos</h3>
            <p className="text-muted-foreground">Classical Languages Expert</p>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Dr. Marcus Aurelius" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Dr. Marcus Aurelius</h3>
            <p className="text-muted-foreground">Latin Scholar</p>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Dr. Sophia Chen" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Dr. Sophia Chen</h3>
            <p className="text-muted-foreground">Computational Linguistics</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <p className="text-center mb-6">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <div className="space-y-4 text-center">
              <p>
                <strong>Email:</strong> info@ancientlingua.com
              </p>
              <p>
                <strong>Address:</strong> 123 Scholar Avenue, Athens, Greece
              </p>
              <p>
                <strong>Follow us:</strong> @AncientLingua
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}