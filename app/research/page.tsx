import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Ancient Greek Texts</h1>
        <p className="text-xl text-muted-foreground max-w-4xl">
          A Comprehensive Guide to Important Works and Where to Find Them
        </p>
      </section>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <p>
          Ancient Greek literature stands as a testament to the enduring power of human creativity and intellectual exploration, 
          offering profound insights into the human condition and the rich tapestry of ancient Greek civilization. From epic 
          poems that have captivated audiences for millennia to philosophical treatises that continue to shape our understanding 
          of the world, these texts provide a window into the minds and hearts of those who laid the foundations of Western 
          thought and culture.
        </p>
      </div>

      <Tabs defaultValue="texts" className="mb-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="texts">Important Texts</TabsTrigger>
          <TabsTrigger value="online">Online Libraries</TabsTrigger>
          <TabsTrigger value="physical">Physical Libraries</TabsTrigger>
          <TabsTrigger value="academic">Academic Resources</TabsTrigger>
          <TabsTrigger value="sites">Archaeological Sites</TabsTrigger>
        </TabsList>

        <TabsContent value="texts" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Important Ancient Greek Texts</CardTitle>
              <CardDescription>
                The vast corpus of ancient Greek literature encompasses a diverse range of genres, including epic poetry, 
                tragedy, comedy, history, philosophy, and scientific treatises.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Author</TableHead>
                      <TableHead>Work</TableHead>
                      <TableHead>Genre</TableHead>
                      <TableHead>Themes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Homer</TableCell>
                      <TableCell>Iliad</TableCell>
                      <TableCell>Epic Poetry</TableCell>
                      <TableCell>War, honor, wrath, fate, the relationship between humans and gods</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Homer</TableCell>
                      <TableCell>Odyssey</TableCell>
                      <TableCell>Epic Poetry</TableCell>
                      <TableCell>Journey, adventure, perseverance, cunning, homecoming</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Aeschylus</TableCell>
                      <TableCell>Oresteia</TableCell>
                      <TableCell>Tragedy</TableCell>
                      <TableCell>Justice, revenge, the cycle of violence, family conflicts</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sophocles</TableCell>
                      <TableCell>Oedipus Rex</TableCell>
                      <TableCell>Tragedy</TableCell>
                      <TableCell>Fate, free will, human suffering, the quest for truth, the consequences of ignorance</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sophocles</TableCell>
                      <TableCell>Antigone</TableCell>
                      <TableCell>Tragedy</TableCell>
                      <TableCell>Loyalty, duty, civil disobedience, the conflict between individual conscience and the laws of the state</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Euripides</TableCell>
                      <TableCell>Medea</TableCell>
                      <TableCell>Tragedy</TableCell>
                      <TableCell>Revenge, betrayal, the power of passion, the consequences of defying social norms</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Euripides</TableCell>
                      <TableCell>The Bacchae</TableCell>
                      <TableCell>Tragedy</TableCell>
                      <TableCell>Dionysian ecstasy, the clash between reason and instinct, the dangers of religious fervor</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Hesiod</TableCell>
                      <TableCell>Theogony</TableCell>
                      <TableCell>Didactic Poetry</TableCell>
                      <TableCell>Greek mythology, the origins of the cosmos, the genealogy of the gods</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Hesiod</TableCell>
                      <TableCell>Works and Days</TableCell>
                      <TableCell>Didactic Poetry</TableCell>
                      <TableCell>Everyday life, agricultural practices, morality, justice</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Plato</TableCell>
                      <TableCell>Republic</TableCell>
                      <TableCell>Philosophy</TableCell>
                      <TableCell>Justice, morality, ideal society, the role of the philosopher, the nature of reality</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Plato</TableCell>
                      <TableCell>Symposium</TableCell>
                      <TableCell>Philosophy</TableCell>
                      <TableCell>Love, desire, beauty, the nature of the soul</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Aristotle</TableCell>
                      <TableCell>Poetics</TableCell>
                      <TableCell>Literary Theory</TableCell>
                      <TableCell>The art of poetry, tragedy, comedy, epic poetry, the elements of drama</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Herodotus</TableCell>
                      <TableCell>Histories</TableCell>
                      <TableCell>History</TableCell>
                      <TableCell>The Greco-Persian Wars, the history and cultures of the ancient world</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Apollonius of Rhodes</TableCell>
                      <TableCell>Jason and the Golden Fleece</TableCell>
                      <TableCell>Epic Poetry</TableCell>
                      <TableCell>Adventure, heroism, the quest for the Golden Fleece, the power of love and magic</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Plutarch</TableCell>
                      <TableCell>Greek Lives</TableCell>
                      <TableCell>Biography</TableCell>
                      <TableCell>The lives of prominent Greek figures, their personalities, achievements, and the times in which they lived</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Nikos Kazantzakis</TableCell>
                      <TableCell>Zorba the Greek (modern novel)</TableCell>
                      <TableCell>Philosophical Fiction</TableCell>
                      <TableCell>Life, death, friendship, love, the struggle between the physical and intellectual aspects of existence, inspired by ancient Greek ideals</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="text-xl font-semibold">Further Insights into Specific Works</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Apollonius of Rhodes' Jason and the Golden Fleece</h4>
                    <p>
                      This epic poem, written in the third century BC, had a significant influence on later poets, 
                      including Catullus, Ovid, and Virgil, particularly in the development of their own epic works.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Plato's Republic</h4>
                    <p>
                      This influential work explores the concept of an ideal society ruled by philosopher-kings and 
                      includes the famous "simile of the cave," which illustrates the importance of knowledge and wisdom 
                      in liberating individuals from illusion and leading them to true understanding.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="online" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Online Libraries with Ancient Greek Texts</CardTitle>
              <CardDescription>
                The digital age has made accessing ancient Greek texts easier than ever before. Numerous online libraries 
                offer a wealth of resources for scholars, students, and anyone interested in exploring these literary treasures.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="general">
                  <AccordionTrigger>General Collections</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Perseus Digital Library</h4>
                        <p className="text-muted-foreground">
                          Hosted by Tufts University, the Perseus Digital Library is a comprehensive resource for the study 
                          of ancient Greece and Rome. It offers a vast collection of Greek and Latin texts, along with English 
                          translations, commentaries, and tools for linguistic analysis. It also includes a valuable "Abbreviation Help" 
                          feature that assists users in understanding the abbreviations commonly used in classical texts.
                        </p>
                        <Link href="http://www.perseus.tufts.edu/hopper/" className="text-primary hover:underline mt-2 inline-block">
                          Visit Perseus Digital Library
                        </Link>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Internet Classics Archive</h4>
                        <p className="text-muted-foreground">
                          Hosted by the Massachusetts Institute of Technology (MIT), this archive offers a collection of over 
                          400 classical works in English translation, including many Greek texts.
                        </p>
                        <Link href="http://classics.mit.edu/" className="text-primary hover:underline mt-2 inline-block">
                          Visit Internet Classics Archive
                        </Link>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Project Gutenberg</h4>
                        <p className="text-muted-foreground">
                          This online library provides a vast collection of public domain ebooks, including many ancient Greek 
                          texts in both Greek and English translation.
                        </p>
                        <Link href="https://www.gutenberg.org/" className="text-primary hover:underline mt-2 inline-block">
                          Visit Project Gutenberg
                        </Link>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Google Books</h4>
                        <p className="text-muted-foreground">
                          Google Books offers a vast collection of digitized books, including many ancient Greek texts. While 
                          some works may be available only in snippets or limited previews, it can be a useful resource for 
                          finding specific editions or translations.
                        </p>
                        <Link href="https://books.google.com/" className="text-primary hover:underline mt-2 inline-block">
                          Visit Google Books
                        </Link>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Internet Archive</h4>
                        <p className="text-muted-foreground">
                          This non-profit digital library offers a wide range of digitized materials, including out-of-copyright 
                          books, archived web pages, and historical newspapers. It can be a valuable resource for finding older 
                          editions or translations of ancient Greek texts.
                        </p>
                        <Link href="https://archive.org/" className="text-primary hover:underline mt-2 inline-block">
                          Visit Internet Archive
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="specialized">
                  <AccordionTrigger>Specialized Collections</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Theoi Greek Mythology</h4>
                        <p className="text-muted-foreground">
                          This website provides a curated collection of ancient Greek texts related to mythology, arranged 
                          chronologically from Hesiod to Virgil.
                        </p>
                        <Link href="https://www.theoi.com/" className="text-primary hover:underline mt-2 inline-block">
                          Visit Theoi Greek Mythology
                        </Link>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">The Chicago Homer</h4>
                        <p className="text-muted-foreground">
                          This multilingual database focuses on the works of Homer, providing the original Greek texts along 
                          with tools for analyzing the distinctive features of early Greek epic poetry. This makes it a 
                          particularly valuable resource for scholars and students of Homer.
                        </p>
                        <Link href="https://homer.library.northwestern.edu/" className="text-primary hover:underline mt-2 inline-block">
                          Visit The Chicago Homer
                        </Link>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Library of Ancient Texts Online (LATO)</h4>
                        <p className="text-muted-foreground">
                          This website serves as a comprehensive catalog of online copies of ancient Greek texts, both in Greek 
                          and in translation. It gathers links to texts available free of charge from various sources, making it 
                          a valuable resource for finding specific works.
                        </p>
                        <Link href="https://sites.google.com/site/ancienttexts/" className="text-primary hover:underline mt-2 inline-block">
                          Visit Library of Ancient Texts Online
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="authoritative">
                  <AccordionTrigger>Authoritative Editions and Translations</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Loeb Classical Library</h4>
                        <p className="text-muted-foreground">
                          This digital library offers a vast collection of Greek and Latin texts, with facing-page English 
                          translations. It provides a user-friendly interface for browsing, searching, and annotating texts.
                        </p>
                        <Link href="https://www.loebclassics.com/" className="text-primary hover:underline mt-2 inline-block">
                          Visit Loeb Classical Library
                        </Link>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Oxford World's Classics</h4>
                        <p className="text-muted-foreground">
                          This series offers accessible editions of many important Greek texts, providing authoritative texts 
                          and helpful annotations for a wider audience.
                        </p>
                        <Link href="https://global.oup.com/academic/content/series/o/oxford-worlds-classics-owc/" className="text-primary hover:underline mt-2 inline-block">
                          Visit Oxford World's Classics
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="open-access">
                  <AccordionTrigger>Open Access Initiatives</AccordionTrigger>
                  <AccordionContent>
                    <div>
                      <h4 className="font-medium">Open Greek and Latin</h4>
                      <p className="text-muted-foreground">
                        This initiative aims to create an open educational resource with a corpus of digital texts, deep-reading 
                        tools, and open-source software. It is an ongoing project with a growing collection of freely accessible 
                        Greek texts.
                      </p>
                      <Link href="https://www.opengreekandlatin.org/" className="text-primary hover:underline mt-2 inline-block">
                        Visit Open Greek and Latin
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="physical" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Physical Libraries with Ancient Greek Texts</CardTitle>
              <CardDescription>
                While online libraries offer convenient access to digital versions of ancient Greek texts, physical libraries 
                continue to play a vital role in preserving and providing access to these important works.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">John Rylands Library</h3>
                  <p className="text-muted-foreground mb-4">Manchester, UK</p>
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Library interior" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <p className="mb-4">
                    The John Rylands Library holds a remarkable collection of rare books and manuscripts, including a first 
                    edition of Aesop's Fables printed in Greek around 1478. It also houses first editions of works by 
                    Apollonius Rhodius, Callimachus, Euripides, Lucian of Samosata, and the Greek Anthology.
                  </p>
                  <p>
                    These early printed editions offer valuable insights into the history of scholarship and the transmission 
                    of ancient Greek literature. The library's collection includes extensive holdings of works published in 
                    the Loeb and Teubner series of Classical texts.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">The University of Manchester Library</h3>
                  <p className="text-muted-foreground mb-4">Manchester, UK</p>
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="University library" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <p>
                    This library holds a vast collection of ancient Greek texts, including works by Aristotle, Theocritus, 
                    Aristophanes, Thucydides, Sophocles, Herodotus, Demosthenes, Plato, Aeschylus, and Hippocrates.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Preston Harris Library at the Guild Hall</h3>
                  <p className="text-muted-foreground mb-4">Preston, UK</p>
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                      alt="Library books" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <p>
                    The Harris Museum, Art Gallery & Library, which includes the Harris Library, is currently undergoing a 
                    major redevelopment project as part of the Harris Your Place initiative. While the museum and library 
                    are temporarily closed, they are expected to reopen in Spring 2025.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academic" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Resources for Ancient Greek Texts</CardTitle>
              <CardDescription>
                In addition to online and physical libraries, various academic resources provide valuable support for the 
                study and understanding of ancient Greek texts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Thesaurus Linguae Graecae (TLG)</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive digital library of Greek literature
                  </p>
                  <p>
                    This comprehensive digital library contains virtually all surviving ancient Greek texts from Homer to 
                    AD 600, along with a large number of texts from the Byzantine period. It is a valuable resource for 
                    scholars and researchers, offering a vast corpus of Greek literature for study and analysis.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Supplementum Epigraphicum Graecum Online</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Collection of Greek inscriptions
                  </p>
                  <p>
                    This resource collects newly published Greek inscriptions and publications on previously known documents, 
                    providing valuable insights into ancient Greek epigraphy.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Cambridge Greek Classics and Bryn Mawr Greek Commentaries</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Scholarly commentaries on Greek texts
                  </p>
                  <p>
                    These series offer scholarly commentaries on ancient Greek texts, providing grammatical, interpretive, 
                    and historical notes to aid in understanding and translation.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Tesserae</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tool for detecting allusions in texts
                  </p>
                  <p>
                    This freely available tool helps detect allusions in Latin and Greek texts, allowing researchers to 
                    compare individual texts or corpora and explore intertextual connections.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Academic Bible</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access to Greek biblical texts
                  </p>
                  <p>
                    This website provides free access to the Rahlfs-Hanhart edition of the Septuagint (the ancient Greek 
                    translation of the Hebrew Bible) and the UBS edition of the Greek New Testament.
                  </p>
                </div>
                
                <div className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Bibliotheca Augustana</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Digital collection of Greek texts
                  </p>
                  <p>
                    This digital collection includes a section with Greek texts based on various editions, offering a 
                    resource for accessing a range of works.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Tools for Translation and Analysis</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Alpheios</h4>
                    <p>
                      This robust reading tool, available as a browser extension and desktop application, provides support 
                      for reading and analyzing ancient Greek texts, including features such as vocabulary lookup and 
                      grammatical parsing.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Attikos</h4>
                    <p>
                      This iPhone app offers a collection of ancient Greek texts with enhanced features compared to Perseus, 
                      providing a mobile-friendly way to access and study these works.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Geoffrey Steadman's Texts and Commentaries</h4>
                    <p>
                      This resource provides texts with running vocabulary lists and extensive grammar notes, making it 
                      particularly helpful for students.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">YouTube Channels</h4>
                    <p>
                      Several YouTube channels offer guided translations and analyses of ancient Greek texts, such as 
                      LatinPerDiem, Daily Dose of Greek, and LOGOS K LOGOS (in Spanish).
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sites" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Archaeological Sites and Museums</CardTitle>
              <CardDescription>
                Archaeological sites in Greece offer a unique opportunity to encounter ancient Greek texts in their original contexts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Museums with Ancient Greek Texts</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Museum interior" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Ure Museum of Greek Archaeology</h4>
                      <p className="text-sm text-muted-foreground mb-2">Reading, UK</p>
                      <p className="text-sm">
                        Houses a collection of over 3,000 objects from ancient Greek, Greco-Roman, Egyptian, and Cypriot 
                        civilizations, including ceramic, metal, and stone artifacts.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1584652868574-0669f4292976?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Museum exhibit" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">The Harris Museum, Art Gallery & Library</h4>
                      <p className="text-sm text-muted-foreground mb-2">Preston, UK</p>
                      <p className="text-sm">
                        Has a diverse collection that includes ancient Greek artifacts and texts, with educational programs 
                        related to ancient Greece.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1569511166187-97eb6e387e19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Roman artifacts" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Ribchester Roman Museum</h4>
                      <p className="text-sm text-muted-foreground mb-2">Ribchester, UK</p>
                      <p className="text-sm">
                        Primarily focused on Roman antiquities, but displays artifacts from the Roman fort and settlement 
                        of Bremetennacum Veteranorum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Archaeological Sites in Greece</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Acropolis of Athens" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Athens</h4>
                      <p className="text-sm">
                        The Acropolis, the Ancient Agora, the Temple of Olympian Zeus, and the Panathenaic Stadium are just 
                        a few of the many archaeological sites in Athens that have yielded ancient Greek inscriptions and texts.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Delphi" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Delphi</h4>
                      <p className="text-sm">
                        The sanctuary of Delphi, located on the slopes of Mount Parnassus, was a major religious center in 
                        ancient Greece. Excavations have unearthed numerous inscriptions and texts, including the famous 
                        Delphic maxims inscribed on the Temple of Apollo.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1532699762702-c4d0499a683f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Knossos" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Knossos</h4>
                      <p className="text-sm">
                        The Palace of Knossos on the island of Crete was the center of the Minoan civilization. This intricate 
                        palace complex has yielded Linear B tablets, an early form of Greek writing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Santorini" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Akrotiri</h4>
                      <p className="text-sm">
                        This ancient Minoan town on the island of Santorini was buried by a volcanic eruption, preserving its 
                        buildings and artifacts remarkably well. Excavations have uncovered frescoes, pottery, and other objects.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Ancient Olympia" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Olympia</h4>
                      <p className="text-sm">
                        The site of the ancient Olympic Games, Olympia in the Peloponnese region, has yielded numerous 
                        inscriptions and texts related to the games and the religious practices associated with them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Conclusion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Ancient Greek texts offer a window into a world of profound intellectual and creative achievements. From epic 
                poetry and tragedy to philosophical treatises and historical accounts, these works continue to inspire and 
                challenge readers today.
              </p>
              <p>
                By exploring the diverse resources available—online libraries with their vast digital collections, physical 
                libraries with their rare editions and manuscripts, museums with their tangible artifacts, and archaeological 
                sites with their contextualized inscriptions—we can gain a comprehensive understanding of ancient Greek 
                literature and its enduring legacy.
              </p>
              <p>
                Each type of resource offers a unique perspective and complements the others, allowing us to delve deeper into 
                the world of ancient Greece and appreciate the richness and complexity of its literary heritage. As scholars 
                continue to research and uncover new texts and artifacts, our understanding of ancient Greek literature 
                continues to evolve, ensuring that these works remain a source of fascination and inspiration for generations 
                to come.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}