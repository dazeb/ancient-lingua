export interface Author {
  id: string;
  name: string;
  language: string;
  dates: string;
  bio: string;
  works: string[];
  image: string;
  imageAttribution?: string;
  imageLicense?: string;
  imageSource?: string;
  tags: string[];
  origin: string;
  notableFor?: string;
  detailedBio?: string;
  timeline?: Array<{date: string; description: string}>;
  workDetails?: Array<{
    title: string;
    date?: string;
    description: string;
    keyThemes: string[];
  }>;
  quotes?: Array<{
    text: string;
    source: string;
  }>;
  significance?: string;
  relatedAuthors?: Array<{
    id: string;
    name: string;
    relationship: string;
  }>;
  furtherReading?: Array<{
    title: string;
    author: string;
    year: string;
    link: string;
  }>;
  onlineTexts?: Array<{
    title: string;
    url: string;
    provider: string;
  }>;
}

export const grecoRomanAuthors: Author[] = [
  {
    id: "aeschines",
    name: "Aeschines",
    language: "Greek",
    dates: "390-314 B.C.E.",
    bio: "Aeschines was an Athenian statesman and one of the ten Attic orators. His rivalry with Demosthenes is well-documented, particularly regarding their opposing views on Philip II of Macedon.",
    works: ["Against Timarchus", "On the False Embassy", "Against Ctesiphon"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Aeschines.jpg",
    tags: ["Orator", "Politics"],
    origin: "Athens, Ancient Greece",
    notableFor: "Rivalry with Demosthenes and speeches supporting Philip II of Macedon"
  },
  {
    id: "aeschylus",
    name: "Aeschylus",
    language: "Greek",
    dates: "525-456 B.C.E.",
    bio: "Aeschylus was an ancient Greek tragedian often described as the father of tragedy. He expanded the number of characters in plays to allow for conflict between them and introduced the trilogy format.",
    works: ["Oresteia", "Prometheus Bound", "Seven Against Thebes", "The Persians"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Aischylos_B%C3%BCste.jpg",
    tags: ["Tragedian", "Drama"],
    origin: "Eleusis, Ancient Greece",
    notableFor: "Father of tragedy, innovations in dramatic form",
    detailedBio: `
      <p>Born in Eleusis, a small town about 27 kilometers northwest of Athens, in 525 BCE, Aeschylus grew up during a pivotal time in Greek history. He lived through the rise of democracy in Athens under Cleisthenes and witnessed the Persian Wars firsthand as a soldier, fighting in the historic Battle of Marathon (490 BCE) and possibly at Salamis (480 BCE).</p>
      
      <p>Military service was a formative experience for Aeschylus, and the Persian Wars would later feature prominently in his play "The Persians," the only extant Greek tragedy based on contemporary events rather than mythology.</p>
      
      <p>As a dramatist, Aeschylus is credited with fundamentally transforming Greek theater. Before him, plays typically featured a single actor interacting with the chorus. Aeschylus introduced a second actor, allowing for dramatic dialogue and conflict between characters. This innovation, along with his use of elaborate costumes, sets, and visual effects, laid the groundwork for the development of drama as an art form.</p>
      
      <p>Aeschylus was a prolific playwright, reportedly writing between 70 and 90 plays, though only seven have survived intact. He was the first of the three great Athenian tragedians, followed by Sophocles and Euripides, and his influence on the form and content of tragedy was profound.</p>
      
      <p>Aeschylus's works are characterized by their grand language, complex moral themes, and exploration of human suffering in relation to divine justice. His most famous work, the "Oresteia" trilogy, examines the cycle of vengeance and justice through the story of the House of Atreus.</p>
      
      <p>According to tradition, Aeschylus died in Sicily in 456 BCE. The apocryphal story claims he was killed when an eagle, mistaking his bald head for a rock, dropped a tortoise on him. This unlikely tale aside, his legacy as the "Father of Tragedy" remains secure, and his innovations in dramatic form and content continue to influence theater to this day.</p>
    `,
    timeline: [
      { date: "525 BCE", description: "Born in Eleusis, near Athens" },
      { date: "499 BCE", description: "Began producing tragedies in Athens' City Dionysia festival" },
      { date: "490 BCE", description: "Fought in the Battle of Marathon against the Persians" },
      { date: "484 BCE", description: "Won his first victory at the City Dionysia" },
      { date: "480 BCE", description: "Possibly fought in the Battle of Salamis" },
      { date: "472 BCE", description: "Produced 'The Persians', the earliest surviving Greek play" },
      { date: "458 BCE", description: "Produced the 'Oresteia' trilogy, his masterpiece" },
      { date: "456 BCE", description: "Died in Gela, Sicily" }
    ],
    workDetails: [
      {
        title: "Oresteia (trilogy)",
        date: "458 BCE",
        description: "The only surviving complete trilogy from Ancient Greece, consisting of Agamemnon, The Libation Bearers, and The Eumenides. It follows the curse of the House of Atreus through murder, vengeance, and the establishment of a new order of justice in Athens.",
        keyThemes: ["Justice", "Vengeance", "Gender conflict", "Transition from tribal blood feuds to civic justice"]
      },
      {
        title: "The Persians",
        date: "472 BCE",
        description: "The earliest surviving Greek tragedy, it depicts the Persian court as they learn of their defeat at the Battle of Salamis. Unique among surviving Greek tragedies for depicting recent historical events rather than mythological stories.",
        keyThemes: ["Hubris", "Divine punishment", "Grief", "National identity"]
      },
      {
        title: "Prometheus Bound",
        date: "Unknown (possibly 430s BCE)",
        description: "Depicts the punishment of the Titan Prometheus, who defied Zeus by stealing fire and giving it to humanity. Some scholars question Aeschylus's authorship of this play due to stylistic differences.",
        keyThemes: ["Tyranny vs. resistance", "Knowledge", "Suffering", "Progress"]
      },
      {
        title: "Seven Against Thebes",
        date: "467 BCE",
        description: "The third play in a Theban trilogy, it portrays the battle between Eteocles and Polynices, the sons of Oedipus, for control of Thebes.",
        keyThemes: ["Family curse", "Civil conflict", "Duty", "Fate"]
      }
    ],
    quotes: [
      {
        text: "There is no pain so great as the memory of joy in present grief.",
        source: "Agamemnon"
      },
      {
        text: "Zeus, whose will has marked the path of wisdom for mankind by stablishing the law that 'By suffering, knowledge is achieved.'",
        source: "Agamemnon"
      },
      {
        text: "It is not the oath that makes us believe the man, but the man the oath.",
        source: "Fragment"
      },
      {
        text: "Words are the physicians of a mind diseased.",
        source: "Fragment"
      }
    ],
    significance: `
      <p>Aeschylus's contributions to Western literature and culture are immense and enduring. As the "Father of Tragedy," he established paradigms of dramatic structure and themes that would influence not only his contemporaries but generations of playwrights throughout history.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Theatrical Innovations</h3>
      <p>By introducing a second actor to the stage, Aeschylus revolutionized drama, allowing for dynamic character interactions and dialogue. This seemingly simple change transformed theater from predominantly choral performances into the character-driven dramatic form we recognize today. He also enhanced the visual spectacle of drama with elaborate costumes, sets, and special effects.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Philosophical Impact</h3>
      <p>Aeschylus explored profound theological and ethical questions in his plays, particularly the relationship between human free will and divine justice. The Oresteia trilogy, with its movement from primitive blood vengeance to institutionalized civic justice, reflects the evolution of Greek ethical thought and has been interpreted as dramatizing the emergence of democratic legal principles in Athens.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Literary Legacy</h3>
      <p>His use of rich, metaphorical language, complex characters, and his exploration of human suffering have influenced countless writers. His dramatic techniques and themes echo through the works of Sophocles and Euripides, Shakespeare, Racine, O'Neill, and modern playwrights. The Oresteia, in particular, has been continuously reinterpreted and adapted over the centuries.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Political Relevance</h3>
      <p>Aeschylus wrote during the formative period of Athenian democracy, and his works engage directly with the political and social issues of his time. "The Persians" celebrates Greek victory while humanizing the defeated enemy, while the Oresteia examines the foundations of justice in the nascent democratic polis. These explorations of power, justice, and governance continue to resonate in political discourse.</p>
    `,
    relatedAuthors: [
      {
        id: "sophocles",
        name: "Sophocles",
        relationship: "Fellow tragedian who built upon Aeschylus's innovations"
      },
      {
        id: "euripides",
        name: "Euripides",
        relationship: "Younger tragedian who represented the next generation of Greek drama"
      },
      {
        id: "aristophanes",
        name: "Aristophanes",
        relationship: "Comic playwright who parodied Aeschylus in 'The Frogs'"
      }
    ],
    furtherReading: [
      {
        title: "Aeschylus: The Oresteia",
        author: "Simon Goldhill",
        year: "1992",
        link: "https://www.cambridge.org/core/books/aeschylus-the-oresteia/8DA4622476E128D7CDF5E8126F126858"
      },
      {
        title: "The Dramatic Theater of Aeschylus",
        author: "Anthony J. Podlecki",
        year: "1999",
        link: "https://www.jstor.org/stable/10.3998/mpub.15439"
      },
      {
        title: "Aeschylus and Athens: A Study in the Social Origins of Drama",
        author: "George Thomson",
        year: "1973",
        link: "https://www.amazon.com/Aeschylus-Athens-Study-Social-Origins/dp/1138009458"
      }
    ],
    onlineTexts: [
      {
        title: "Complete Works of Aeschylus",
        url: "http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0003",
        provider: "Perseus Digital Library"
      },
      {
        title: "The Oresteia Trilogy",
        url: "https://www.gutenberg.org/ebooks/14417",
        provider: "Project Gutenberg"
      },
      {
        title: "The Persians and Other Plays",
        url: "https://www.theoi.com/Text/AeschylusPersians.html",
        provider: "Theoi Classical Texts Library"
      }
    ]
  },
  {
    id: "aesop",
    name: "Aesop",
    language: "Greek",
    dates: "6th century B.C.E.",
    bio: "Aesop was a Greek fabulist credited with creating numerous fables now collectively known as Aesop's Fables. According to historical accounts, he was born a slave but gained his freedom through his wit.",
    works: ["Aesop's Fables", "The Tortoise and the Hare", "The Fox and the Grapes", "The Lion and the Mouse"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Seated_Euripides_Louvre_Ma343.jpg",
    imageAttribution: "Unknown artist",
    imageLicense: "pd",
    imageSource: "https://commons.wikimedia.org/wiki/File:Seated%20Euripides%20Louvre%20Ma343.jpg",
    tags: ["Fabulist", "Moral Tales"],
    origin: "Possibly Thrace, Phrygia, or Ethiopia (disputed)"
  },
  {
    id: "andocides",
    name: "Andocides",
    language: "Greek",
    dates: "440-391 B.C.E.",
    bio: "Andocides was an Athenian orator and politician who was implicated in the mutilation of the Herms in 415 B.C.E. He was exiled multiple times during his life due to political circumstances.",
    works: ["On the Mysteries", "On His Return", "On the Peace with Sparta", "Against Alcibiades"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/EB1911_Ceramics_Fig._27.%E2%80%94_Vase_by_Andocides.jpg",
    tags: ["Orator", "Politics"],
    origin: "Athens, Ancient Greece"
  },
  {
    id: "antiphon",
    name: "Antiphon",
    language: "Greek",
    dates: "480-411 B.C.E.",
    bio: "Antiphon was an Athenian orator and statesman, considered the founder of political oratory. He was a logographer (speech writer) who wrote speeches for others to deliver in court.",
    works: ["Tetralogies", "Against the Stepmother", "On the Murder of Herodes", "On the Choreutes"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Schale_des_Antiphon-Malers.JPG",
    tags: ["Orator", "Politics"],
    origin: "Rhamnus, Attica, Ancient Greece"
  },
  {
    id: "apollodorus",
    name: "Apollodorus",
    language: "Greek",
    dates: "140 B.C.E.",
    bio: "Apollodorus of Athens was a Greek scholar and grammarian. He studied under the Stoic philosopher Diogenes of Babylon and the grammarian Aristarchus of Samothrace.",
    works: ["Bibliotheca (Library)", "Chronicle", "On the Gods", "Glossary of Homeric Words"],
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Apollodorus_of_Damascus%2C_Greek_Architect_and_Engineer._Pic_01.jpg",
    tags: ["Scholar", "Mythology"],
    origin: "Athens, Ancient Greece",
    notableFor: "Compilation of Greek mythology"
  },
  {
    id: "apollonius",
    name: "Apollonius",
    language: "Greek",
    dates: "ca. 295 B.C.E.",
    bio: "Apollonius of Rhodes was a poet, scholar, and the head librarian of the Library of Alexandria. Despite being born in Alexandria, he was called 'Rhodian' because he spent much of his later life on the island of Rhodes.",
    works: ["Argonautica (The Voyage of the Argo)", "Foundation of Alexandria", "Foundation of Naucratis", "Foundation of Cnidus"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Apollonius_of_Tyana.jpg",
    tags: ["Poet", "Scholar"],
    origin: "Alexandria, Egypt"
  },
  {
    id: "apuleius",
    name: "Apuleius",
    language: "Latin",
    dates: "124-ca. 170 C.E.",
    bio: "Apuleius was a Latin-language prose writer, Platonist philosopher, and rhetorician. Born in Numidia (modern-day Algeria), he studied in Carthage, Athens, and Rome.",
    works: ["Metamorphoses (The Golden Ass)", "Apologia (A Discourse on Magic)", "Florida (Anthology of Speeches)", "On the God of Socrates"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Apuleius_-_Project_Gutenberg_eText_12788.png",
    tags: ["Philosopher", "Novelist"],
    origin: "Madauros, Numidia (modern Algeria)"
  },
  {
    id: "aristophanes",
    name: "Aristophanes",
    language: "Greek",
    dates: "450-388 B.C.E.",
    bio: "Aristophanes was an Athenian comic playwright and is considered the father of comedy. He wrote during the Peloponnesian War, and his works often satirized the political and social issues of Athens.",
    works: ["Lysistrata", "The Clouds", "The Birds", "The Frogs", "The Wasps", "The Knights"],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Aristophanes_-_Project_Gutenberg_eText_12788.png",
    tags: ["Comedian", "Playwright"],
    origin: "Athens, Ancient Greece",
    notableFor: "Old Comedy, political satire"
  },
  {
    id: "aristotle",
    name: "Aristotle",
    language: "Greek",
    dates: "384-322 B.C.E.",
    bio: "Aristotle was a Greek philosopher and polymath during the Classical period. Born in Stagira, he was a student of Plato and the tutor of Alexander the Great. His writings cover numerous subjects including physics, biology, metaphysics, ethics, and more.",
    works: ["Nicomachean Ethics", "Politics", "Poetics", "Metaphysics", "Physics", "De Anima (On the Soul)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
    imageAttribution: "After Lysippos - Jastrow (2006)",
    imageLicense: "Public Domain",
    imageSource: "https://commons.wikimedia.org/wiki/File:Aristotle_Altemps_Inv8575.jpg",
    tags: ["Philosopher", "Polymath"],
    origin: "Stagira, Chalcidice, Ancient Greece",
    detailedBio: `
      <p>Aristotle was born in 384 BCE in Stagira, a small coastal town in northern Greece. His father, Nicomachus, was the court physician to King Amyntas III of Macedonia, which may have influenced Aristotle's early interest in biology and natural sciences. After his father's death, Aristotle was raised under the guardianship of Proxenus of Atarneus.</p>
      
      <p>At the age of seventeen, Aristotle traveled to Athens to join Plato's Academy, the premier institution of learning in the Greek world. He remained there for nearly twenty years, first as a student and later as a teacher. Though greatly influenced by Plato, Aristotle eventually developed his own philosophical system, diverging from his mentor's idealism toward a more empirically grounded approach.</p>
      
      <p>Following Plato's death in 347 BCE, Aristotle left Athens and spent time in Asia Minor and the island of Lesbos, where he conducted extensive research on zoology and marine biology. In 343 BCE, he was invited by Philip II of Macedon to tutor his son, Alexander (later known as Alexander the Great). Aristotle spent several years educating the future conqueror, likely influencing Alexander's interest in exploration and natural history.</p>
      
      <p>Around 335 BCE, Aristotle returned to Athens and established his own school, the Lyceum. Here, he conducted research, taught students, and wrote many of his surviving works. The school became known as the Peripatetic School because of Aristotle's habit of walking while lecturing (peripatein means "to walk about" in Greek).</p>
      
      <p>Aristotle's intellectual scope was breathtaking. He made groundbreaking contributions to logic, metaphysics, ethics, politics, literary criticism, rhetoric, physics, biology, and more. He established the field of formal logic, developed a comprehensive system of ethics centered on human flourishing (eudaimonia), and laid the groundwork for the systematic study of the natural world that would influence scientific thought for centuries.</p>
      
      <p>When Alexander the Great died in 323 BCE, anti-Macedonian sentiment rose in Athens. Facing charges of impiety (similar to those that had led to Socrates' execution), Aristotle fled to Chalcis on the island of Euboea, reportedly stating that he would not allow Athens to "sin twice against philosophy." He died there in 322 BCE at the age of 62.</p>
      
      <p>Though only about a third of his written work has survived, Aristotle's influence on Western thought is unparalleled. His ideas shaped medieval Islamic and Christian philosophy, Renaissance science, and continue to be studied and debated in modern academic disciplines ranging from ethics to biology.</p>
    `,
    timeline: [
      { date: "384 BCE", description: "Born in Stagira, northern Greece" },
      { date: "367 BCE", description: "Joined Plato's Academy in Athens" },
      { date: "347 BCE", description: "Left Athens after Plato's death" },
      { date: "343-340 BCE", description: "Tutored Alexander the Great in Macedonia" },
      { date: "335 BCE", description: "Returned to Athens and founded the Lyceum" },
      { date: "335-323 BCE", description: "Taught and wrote major works at the Lyceum" },
      { date: "323 BCE", description: "Fled Athens after Alexander's death" },
      { date: "322 BCE", description: "Died in Chalcis on the island of Euboea" }
    ],
    workDetails: [
      {
        title: "Nicomachean Ethics",
        date: "c. 350 BCE",
        description: "Aristotle's most significant work on ethics, named either for his father or his son, both named Nicomachus. It examines the nature of happiness, virtue, and the good life for humans, arguing that eudaimonia (often translated as 'happiness' or 'flourishing') is the highest good.",
        keyThemes: ["Virtue ethics", "Eudaimonia (happiness/flourishing)", "The golden mean", "Friendship", "Intellectual virtues"]
      },
      {
        title: "Politics",
        date: "c. 350 BCE",
        description: "A work of political philosophy where Aristotle examines the origins and nature of the state, various political systems, citizenship, justice, and the ideal constitution. He famously defined humans as 'political animals' naturally inclined to live in communities.",
        keyThemes: ["Political systems", "Citizenship", "Justice", "Constitutional theory", "Education"]
      },
      {
        title: "Poetics",
        date: "c. 335 BCE",
        description: "The earliest surviving work of dramatic theory and literary criticism. Aristotle analyzes tragedy, epic poetry, and comedy, establishing concepts like catharsis, mimesis, and the unity of action that have influenced literary theory for millennia.",
        keyThemes: ["Tragedy", "Mimesis (imitation)", "Catharsis", "Plot structure", "Character development"]
      },
      {
        title: "Metaphysics",
        date: "c. 350-330 BCE",
        description: "A collection of works on 'first philosophy' dealing with existence, causality, substance, and the nature of being. The title comes from the Greek 'meta ta physika' meaning 'after the Physics,' reflecting its position in the collection of Aristotle's works.",
        keyThemes: ["Being qua being", "Substance", "The four causes", "The unmoved mover", "Actuality and potentiality"]
      },
      {
        title: "Physics",
        date: "c. 350 BCE",
        description: "Aristotle's central work on natural philosophy, examining the principles of nature, motion, space, time, and causality. Unlike modern physics, it combines philosophical reasoning with empirical observation.",
        keyThemes: ["Motion", "The four causes", "Nature (physis)", "Time and infinity", "Change and continuity"]
      }
    ],
    quotes: [
      {
        text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        source: "Nicomachean Ethics (paraphrased)"
      },
      {
        text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
        source: "Attributed (similar sentiment in Nicomachean Ethics)"
      },
      {
        text: "Man is by nature a political animal.",
        source: "Politics"
      },
      {
        text: "The whole is greater than the sum of its parts.",
        source: "Metaphysics"
      },
      {
        text: "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
        source: "Nicomachean Ethics (paraphrased)"
      }
    ],
    significance: `
      <p>Aristotle's influence on Western thought is so profound and pervasive that the philosopher Alfred North Whitehead once remarked that Western philosophy consists of "a series of footnotes to Plato" – yet one could equally argue that science, logic, and many other disciplines are, to a significant extent, footnotes to Aristotle.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Scientific Method</h3>
      <p>Aristotle established methodical investigation of the natural world based on observation and classification. While his specific scientific conclusions were often incorrect by modern standards, his emphasis on systematic observation and categorization formed the basis for the development of scientific inquiry. His works on biology were particularly groundbreaking, with detailed observations of hundreds of species that wouldn't be surpassed until the Renaissance.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Logic</h3>
      <p>Aristotle essentially created formal logic as a discipline. His syllogistic logic, outlined in the "Organon," was the predominant system of logic until the 19th century. He identified various forms of reasoning and fallacies, and established rules for valid arguments that remain foundational to critical thinking.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Ethics and Politics</h3>
      <p>His virtue ethics, which focuses on developing excellent character rather than following rules or maximizing utility, continues to be a major tradition in moral philosophy. His political theory, with its analysis of different constitutions, justice, and citizenship, laid groundwork for political science. His conception of politics as concerned with the common good rather than merely power has influenced political thought from Thomas Aquinas to modern communitarians.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Metaphysics</h3>
      <p>Aristotle's metaphysical concepts – substance, essence, the four causes, actuality and potentiality – provided a framework for understanding reality that dominated philosophical and theological thought for centuries. His concept of the Unmoved Mover influenced both Islamic and Christian theology, particularly through thinkers like Avicenna and Thomas Aquinas.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Literary Theory and Rhetoric</h3>
      <p>The "Poetics" established foundational concepts in literary criticism that remain influential, including the analysis of tragedy, the concept of catharsis, and the importance of plot. His work on rhetoric systematized the art of persuasion and argumentation.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Historical Influence</h3>
      <p>Aristotle's works were preserved and developed in the Byzantine Empire and the Islamic world before being reintroduced to Western Europe in the 12th and 13th centuries, where they profoundly shaped Scholastic philosophy. His authority was such that he was simply known as "The Philosopher" throughout the Middle Ages. During the Scientific Revolution, modern science emerged partly through challenging Aristotelian physics while retaining his emphasis on empirical observation.</p>
      
      <p>Even today, Aristotelian concepts and problems remain central to many fields, from ethics and political theory to biology and metaphysics. His intellectual framework continues to shape how we understand the world, often in ways so fundamental that we no longer recognize their Aristotelian origins.</p>
    `,
    relatedAuthors: [
      {
        id: "plato",
        name: "Plato",
        relationship: "Teacher and philosophical predecessor"
      },
      {
        id: "epicurus",
        name: "Epicurus",
        relationship: "Developed an alternative philosophical system"
      },
      {
        id: "marcus-aurelius",
        name: "Marcus Aurelius",
        relationship: "Stoic philosopher influenced by Aristotelian ethics"
      }
    ],
    furtherReading: [
      {
        title: "Aristotle: The Desire to Understand",
        author: "Jonathan Lear",
        year: "1988",
        link: "https://www.cambridge.org/core/books/aristotle/96386A3BC569752BD25A75FB830FC5A9"
      },
      {
        title: "The Cambridge Companion to Aristotle",
        author: "Jonathan Barnes (editor)",
        year: "1995",
        link: "https://www.cambridge.org/core/books/cambridge-companion-to-aristotle/5E932F25197B3C081BEA3F9D037E1B01"
      },
      {
        title: "Aristotle's Children: How Christians, Muslims, and Jews Rediscovered Ancient Wisdom and Illuminated the Middle Ages",
        author: "Richard E. Rubenstein",
        year: "2003",
        link: "https://www.harcourt.com/aristotles-children/"
      }
    ],
    onlineTexts: [
      {
        title: "Complete Works of Aristotle",
        url: "http://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0051",
        provider: "Perseus Digital Library"
      },
      {
        title: "Nicomachean Ethics",
        url: "https://www.gutenberg.org/ebooks/8438",
        provider: "Project Gutenberg"
      },
      {
        title: "Politics",
        url: "https://www.gutenberg.org/ebooks/6762",
        provider: "Project Gutenberg"
      }
    ]
  },
  {
    id: "marcus-aurelius",
    name: "Marcus Aurelius",
    language: "Greek",
    dates: "121-180 C.E.",
    bio: "Marcus Aurelius was Roman Emperor from 161 to 180 CE and a Stoic philosopher. Despite being emperor during a time of military conflict and plague, he is known for his philosophical writings which reflect on self-improvement and rationality.",
    works: ["Meditations (Ta eis heauton)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Epicurus_Massimo_Inv197306.jpg",
    imageAttribution: "Wikimedia Commons",
    imageLicense: "pd",
    imageSource: "https://commons.wikimedia.org/wiki/File:Epicurus%20Massimo%20Inv197306.jpg",
    tags: ["Emperor", "Stoic"],
    origin: "Rome, Roman Empire",
    notableFor: "Stoic philosophy, 'Meditations'"
  },
  {
    id: "augustus",
    name: "Augustus",
    language: "Latin",
    dates: "63 B.C.E.-14 C.E.",
    bio: "Augustus (born Gaius Octavius, later Gaius Julius Caesar Octavianus) was the first Roman Emperor, ruling from 27 BCE until his death. He transformed the Roman Republic into the Roman Empire and presided over a period of relative peace and prosperity.",
    works: ["Res Gestae Divi Augusti (The Deeds of the Divine Augustus)", "Various letters and edicts"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Caesar_augustus.jpg",
    tags: ["Emperor", "Statesman"],
    origin: "Rome, Roman Republic"
  },
  {
    id: "bacchylides",
    name: "Bacchylides",
    language: "Greek",
    dates: "5th century B.C.E.",
    bio: "Bacchylides was a Greek lyric poet from the island of Ceos. He was the nephew of the poet Simonides and a contemporary of Pindar. Bacchylides wrote victory odes for athletic competitions and dithyrambs for religious festivals.",
    works: ["Epinicia (Victory Odes)", "Dithyrambs", "Various fragments"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Bacchylides_1.png",
    tags: ["Poet", "Lyricist"],
    origin: "Iulis, Ceos (modern Kea), Greek islands"
  },
  {
    id: "julius-caesar",
    name: "Julius Caesar",
    language: "Latin",
    dates: "100-44 B.C.E.",
    bio: "Gaius Julius Caesar was a Roman general, statesman, and historian who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire. He expanded Rome's territory through conquest.",
    works: ["Commentarii de Bello Gallico (Commentaries on the Gallic War)", "Commentarii de Bello Civili (Commentaries on the Civil War)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bust_of_Gaius_Iulius_Caesar_in_Naples.jpg",
    tags: ["General", "Statesman"],
    origin: "Rome, Roman Republic",
    notableFor: "Military conquest of Gaul, crossing the Rubicon, reform of the Roman calendar"
  },
  {
    id: "cicero",
    name: "Cicero",
    language: "Latin",
    dates: "106-43 B.C.E.",
    bio: "Marcus Tullius Cicero was a Roman statesman, lawyer, scholar, philosopher, and one of Rome's greatest orators. He came from a wealthy municipal family and rose to the consulship despite being a 'novus homo' (new man) without senatorial ancestors.",
    works: ["De Republica (On the Republic)", "De Oratore (On the Orator)", "Tusculanae Disputationes", "De Officiis (On Duties)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Marcus_Tullius_Cicero.jpg",
    tags: ["Orator", "Philosopher"],
    origin: "Arpinum, Roman Republic (modern Arpino, Italy)"
  },
  {
    id: "demades",
    name: "Demades",
    language: "Greek",
    dates: "380-319 B.C.E.",
    bio: "Demades was an Athenian orator and statesman known for his improvisational speaking ability. Initially a sailor, he rose to prominence as a politician. Unlike many of his contemporaries, he was pro-Macedonian and worked with Philip II and Alexander the Great.",
    works: ["On the Twelve Years", "Various speeches (mostly lost)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Carmille.jpg",
    tags: ["Orator", "Politician"],
    origin: "Athens, Ancient Greece"
  },
  {
    id: "demosthenes",
    name: "Demosthenes",
    language: "Greek",
    dates: "384-322 B.C.E.",
    bio: "Demosthenes was an Athenian statesman and orator, considered the greatest of ancient Greek orators. Born to a wealthy family, he overcame a speech impediment through rigorous practice. He is best known for his speeches opposing Philip II of Macedon's expansion.",
    works: ["Philippics", "Olynthiacs", "On the Crown", "Against Meidias", "Against Aristocrates"],
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Demosthenes_orator_Louvre.jpg",
    tags: ["Orator", "Statesman"],
    origin: "Athens, Ancient Greece"
  },
  {
    id: "dinarchus",
    name: "Dinarchus",
    language: "Greek",
    dates: "360-292 B.C.E.",
    bio: "Dinarchus was the last of the ten Attic orators. Born in Corinth, he moved to Athens where he worked as a logographer (speech writer). He was particularly active during the Harpalus affair, when Alexander the Great's treasurer fled to Athens with stolen funds.",
    works: ["Against Demosthenes", "Against Aristogeiton", "Against Philocles"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Isaeus_-_Isaeus_Dinarchus_Lycurgus_Aeschines_et_Demades%2C_1822.djvu",
    tags: ["Orator", "Logographer"],
    origin: "Corinth, Ancient Greece"
  },
  {
    id: "diodorus",
    name: "Diodorus",
    language: "Greek",
    dates: "1st century B.C.E.",
    bio: "Diodorus Siculus was a Greek historian from Agyrium in Sicily. He wrote a universal history, known as the Bibliotheca historica (Historical Library), in 40 books. This ambitious work covered events from mythological times to his own era.",
    works: ["Bibliotheca historica (Historical Library)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Diodorus_Siculus_Bibliotheca_historica_1559_Basel.jpg",
    tags: ["Historian", "Scholar"],
    origin: "Agyrium, Sicily (modern Agira, Italy)"
  },
  {
    id: "epictetus",
    name: "Epictetus",
    language: "Greek",
    dates: "55-105 C.E.",
    bio: "Epictetus was a Greek Stoic philosopher born a slave in Hierapolis, Phrygia. After gaining his freedom, he taught philosophy in Rome until Emperor Domitian banished philosophers from the city, after which he established a school in Nicopolis, Epirus.",
    works: ["Discourses", "Enchiridion (Handbook)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Epictetus.jpg",
    tags: ["Philosopher", "Stoic"],
    origin: "Hierapolis, Phrygia (modern Pamukkale, Turkey)"
  },
  {
    id: "epicurus",
    name: "Epicurus",
    language: "Greek",
    dates: "341-270 B.C.E.",
    bio: "Epicurus was an ancient Greek philosopher and the founder of Epicureanism, a highly influential school of philosophy. Born on the island of Samos to Athenian parents, he established his school, known as 'The Garden,' in Athens.",
    works: ["On Nature", "Principal Doctrines", "Vatican Sayings", "Letter to Herodotus", "Letter to Pythocles", "Letter to Menoeceus"],
    image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Epicurus_Massimo_Inv197306.jpg",
    tags: ["Philosopher", "Ethicist"],
    origin: "Samos, Ancient Greece"
  },
  {
    id: "plato",
    name: "Plato",
    language: "Greek",
    dates: "428-348 B.C.E.",
    bio: "Plato was an Athenian philosopher during the Classical period in Ancient Greece, founder of the Platonist school of thought and the Academy, the first institution of higher learning in the Western world. He was the student of Socrates and the teacher of Aristotle.",
    works: ["Republic", "Symposium", "Phaedo", "Timaeus", "Theaetetus", "Apology"],
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    imageAttribution: "Marie-Lan Nguyen / Wikimedia Commons",
    imageLicense: "Public Domain",
    imageSource: "https://commons.wikimedia.org/wiki/File:Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    tags: ["Philosopher", "Metaphysics"],
    origin: "Athens, Ancient Greece",
    notableFor: "Theory of Forms, founding the Academy, Socratic dialogues"
  },
  {
    id: "socrates",
    name: "Socrates",
    language: "Greek",
    dates: "470-399 B.C.E.",
    bio: "Socrates was a Greek philosopher from Athens who is credited as the founder of Western philosophy and among the first moral philosophers of the ethical tradition of thought. He was the mentor of Plato and a major influence on Aristotle.",
    works: ["No written works - known through the accounts of his students, primarily Plato and Xenophon"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Socrates_Louvre.jpg",
    imageAttribution: "Sting, CC BY-SA 2.5, via Wikimedia Commons",
    imageLicense: "CC BY-SA 2.5",
    imageSource: "https://commons.wikimedia.org/wiki/File:Socrates_Louvre.jpg",
    tags: ["Philosopher", "Ethics"],
    origin: "Athens, Ancient Greece",
    notableFor: "Socratic method, philosophical irony, ethics"
  },
  {
    id: "euclid",
    name: "Euclid",
    language: "Greek",
    dates: "ca. 300 B.C.E.",
    bio: "Euclid was a Greek mathematician often referred to as the 'Father of Geometry.' He taught at the Library of Alexandria during the reign of Ptolemy I. Little is known about his life, but his mathematical works have been enormously influential.",
    works: ["Elements", "Data", "Optics", "Phaenomena", "Division of Figures", "Sectio Canonis (Division of the Scale)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Euklid-von-Alexandria_1.jpg",
    tags: ["Mathematician", "Geometer"],
    origin: "Alexandria, Ancient Egypt"
  },
  {
    id: "euripides",
    name: "Euripides",
    language: "Greek",
    dates: "484-406 B.C.E.",
    bio: "Euripides was an ancient Greek tragedian, one of the three great playwrights of classical Athens (along with Aeschylus and Sophocles). He wrote approximately 92 plays, of which 18 or 19 have survived complete.",
    works: ["Medea", "The Bacchae", "Hippolytus", "Electra", "The Trojan Women", "Iphigenia in Aulis"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Seated_Euripides_Louvre_Ma343.jpg",
    imageAttribution: "Unknown artist",
    imageLicense: "pd",
    imageSource: "https://commons.wikimedia.org/wiki/File:Seated%20Euripides%20Louvre%20Ma343.jpg",
    tags: ["Tragedian", "Playwright"],
    origin: "Athens, Ancient Greece"
  },
  {
    id: "galen",
    name: "Galen",
    language: "Greek",
    dates: "129-216 C.E.",
    bio: "Galen of Pergamon was a Greek physician, surgeon, and philosopher in the Roman Empire. He was the most accomplished medical researcher of antiquity, whose theories dominated Western medical science for over a millennium.",
    works: ["On the Natural Faculties", "On the Usefulness of the Parts of the Body", "On the Doctrines of Hippocrates and Plato"],
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Galenus_of_Pergamum.jpg",
    tags: ["Physician", "Philosopher"],
    origin: "Pergamon, Roman Empire (modern Bergama, Turkey)"
  },
  {
    id: "herodotus",
    name: "Herodotus",
    language: "Greek",
    dates: "484-430 B.C.E.",
    bio: "Herodotus was an ancient Greek historian born in Halicarnassus, Caria (modern-day Bodrum, Turkey). He is known as 'The Father of History' for his systematic collection, organization, and critical evaluation of historical events, particularly the Greco-Persian Wars.",
    works: ["Histories (The Histories of Herodotus)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Herodotus_Massimo_Inv124478.jpg",
    tags: ["Historian", "Ethnographer"],
    origin: "Halicarnassus, Ancient Greece (modern Bodrum, Turkey)"
  },
  {
    id: "hesiod",
    name: "Hesiod",
    language: "Greek",
    dates: "700 B.C.E.",
    bio: "Hesiod was an ancient Greek poet generally thought to have been active between 750 and 650 BCE, around the same time as Homer. He is credited with two major works: 'Theogony' and 'Works and Days.'",
    works: ["Theogony", "Works and Days", "Shield of Heracles"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Pseudo-Seneca_BM_GR1962.8-24.1.jpg",
    tags: ["Poet", "Theologian"],
    origin: "Boeotia, Ancient Greece"
  },
  {
    id: "hippocrates",
    name: "Hippocrates",
    language: "Greek",
    dates: "460-377 B.C.E.",
    bio: "Hippocrates was an ancient Greek physician of the Age of Pericles, considered one of the most outstanding figures in the history of medicine. He is referred to as the 'Father of Medicine' for establishing medicine as a profession distinct from philosophy.",
    works: ["Hippocratic Corpus", "On the Sacred Disease", "On Ancient Medicine", "Aphorisms", "Epidemics"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Hippocrates_rubens.jpg",
    tags: ["Physician", "Medical Writer"],
    origin: "Kos, Ancient Greece"
  },
  {
    id: "hirtius",
    name: "Hirtius",
    language: "Latin",
    dates: "90-43 B.C.E.",
    bio: "Aulus Hirtius was a Roman general, politician, and writer who served as one of Julius Caesar's legates during the Gallic Wars and the civil war against Pompey. He was elected consul for 43 BCE but died in battle at Mutina fighting against Mark Antony.",
    works: ["De Bello Gallico (Book 8)", "De Bello Alexandrino (On the Alexandrian War)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Commentariesofcj00caesuoft.djvu",
    tags: ["General", "Historian"],
    origin: "Roman Republic"
  },
  {
    id: "homer",
    name: "Homer",
    language: "Greek",
    dates: "800 B.C.E.",
    bio: "Homer is the presumed author of the Iliad and the Odyssey, two epic poems that are foundational works of ancient Greek literature. The question of whether Homer was a historical person remains open, with some scholars suggesting that the poems were composed by multiple poets over time.",
    works: ["Iliad", "Odyssey", "Homeric Hymns (attributed)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Homer_bust%2C_Farnese_collection_%28Naples%29.jpg",
    imageAttribution: "NikonZ7II, CC BY-SA 4.0, via Wikimedia Commons",
    imageLicense: "CC BY-SA 4.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Homer_bust,_Farnese_collection_(Naples).jpg",
    tags: ["Poet", "Epic"],
    origin: "Various cities claim him (disputed)",
    notableFor: "Foundational works of Western literature",
    detailedBio: `
      <p>Homer is the legendary author of the Iliad and the Odyssey, two epic poems that are the central works of ancient Greek literature. The question of his historical existence remains one of literature's great enigmas. Ancient Greek culture was permeated by references to Homer and these two epic poems, which were used to teach ethics, history, and eloquence.</p>
      
      <p>The poems are traditionally dated to the 8th or 7th century BCE, with some scholars suggesting they were composed between 750 and 650 BCE. The epics are written in Homeric Greek, also known as Epic Greek, a literary amalgam of different Greek dialects and traditions.</p>
      
      <p>The Iliad narrates several significant episodes of the Trojan War, focusing on the wrath of the Greek hero Achilles. The Odyssey follows the Greek hero Odysseus's perilous voyage home after the Trojan War. Together, these epics provided the basis of Greek education and culture throughout antiquity.</p>
      
      <p>The 'Homeric Question' – concerning the identity of Homer and the authorship of the Iliad and Odyssey – has been one of the most debated topics in classical scholarship. Some scholars believe 'Homer' represents an entire tradition of oral poetry rather than a single person.</p>
    `,
    timeline: [
      { date: "c. 1200 BCE", description: "Traditional date of the Trojan War, the subject of the Iliad" },
      { date: "c. 800-700 BCE", description: "Probable period of composition of the Homeric epics" },
      { date: "566 BCE", description: "First known performance of Homeric poems at the Panathenaic festival in Athens" },
      { date: "c. 150 BCE", description: "Alexandrian scholars create the canonical texts of the Iliad and Odyssey" }
    ],
    workDetails: [
      {
        title: "Iliad",
        date: "c. 8th century BCE",
        description: "An epic poem focusing on the wrath of Achilles during the Trojan War. The narrative covers only a few weeks in the final year of the war, but its influence on literature and art has been immense.",
        keyThemes: ["Wrath and pride", "Honor and glory", "Fate and the gods", "War and mortality"]
      },
      {
        title: "Odyssey",
        date: "c. 8th century BCE",
        description: "Follows the Greek hero Odysseus's ten-year journey home after the Trojan War. The epic explores themes of homecoming, hospitality, and the relationship between gods and mortals.",
        keyThemes: ["Homecoming (nostos)", "Cunning and wisdom", "Hospitality (xenia)", "Loyalty and perseverance"]
      },
      {
        title: "Homeric Hymns",
        date: "7th-6th centuries BCE",
        description: "A collection of hymns to various gods traditionally attributed to Homer, though most scholars believe they were composed by later poets in the Homeric style.",
        keyThemes: ["Divine power", "Religious devotion", "Mythological narratives"]
      }
    ],
    quotes: [
      {
        text: "Sing, O muse, of the rage of Achilles, son of Peleus, that brought countless ills upon the Achaeans.",
        source: "Iliad, Opening lines"
      },
      {
        text: "Tell me, O Muse, of the man of many devices, who wandered full many ways after he had sacked the sacred citadel of Troy.",
        source: "Odyssey, Opening lines"
      },
      {
        text: "Even his griefs are a joy long after to one that remembers all that he wrought and endured.",
        source: "Odyssey"
      }
    ]
  }
];

export const otherAuthors: Author[] = [
  {
    id: "confucius",
    name: "Confucius",
    language: "Chinese",
    dates: "551-479 B.C.E.",
    bio: "Confucius was a Chinese philosopher and politician of the Spring and Autumn period. The philosophy of Confucius, also known as Confucianism, emphasized personal and governmental morality, correctness of social relationships, justice, kindness, and sincerity.",
    works: ["Analects", "Five Classics (traditionally attributed in part)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Confucius_Statue_at_the_Confucius_Temple.jpg",
    tags: ["Philosopher", "Ethicist"],
    origin: "State of Lu (modern Shandong Province, China)",
    notableFor: "Founding Confucianism, influence on Chinese thought and culture",
    detailedBio: `
      <p>Confucius (孔子, Kǒng Zǐ) was born in the state of Lu during the Spring and Autumn period of ancient China. His teachings emphasized personal and governmental morality, correctness of social relationships, and justice and sincerity.</p>
      
      <p>Though he experienced both success and failure in his political career, his philosophical teachings became the foundation of Chinese society for over two millennia. His ideas were preserved and developed by his disciples in the Analects.</p>
    `,
    timeline: [
      { date: "551 BCE", description: "Born in the State of Lu" },
      { date: "501 BCE", description: "Appointed Governor of Zhongdu" },
      { date: "497 BCE", description: "Became Minister of Justice in Lu" },
      { date: "479 BCE", description: "Death in Lu" }
    ],
    workDetails: [
      {
        title: "Analects",
        date: "compiled c. 475-221 BCE",
        description: "A collection of sayings and ideas attributed to Confucius and his contemporaries, later compiled by his followers.",
        keyThemes: ["Moral cultivation", "Social harmony", "Good governance", "Filial piety"]
      }
    ]
  },
  {
    id: "lao-tzu",
    name: "Lao-tzu",
    language: "Chinese",
    dates: "6th century B.C.E.",
    bio: "Lao Tzu (also romanized as Laozi) was an ancient Chinese philosopher and writer. He is the reputed author of the Tao Te Ching, the founder of philosophical Taoism, and a deity in religious Taoism and traditional Chinese religions.",
    works: ["Tao Te Ching (The Book of the Way and its Virtue)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lao_Tzu_-_Project_Gutenberg_eText_15250.jpg",
    tags: ["Philosopher", "Mystic"],
    origin: "State of Chu (disputed)",
    notableFor: "Founding Taoism, writing the Tao Te Ching"
  },
  {
    id: "sun-tzu",
    name: "Sun Tzu",
    language: "Chinese",
    dates: "4th century B.C.E.",
    bio: "Sun Tzu was a Chinese general, military strategist, writer, and philosopher who lived in the Eastern Zhou period of ancient China. He is traditionally credited as the author of The Art of War, an influential work of military strategy that has affected Western and East Asian philosophy and military thinking.",
    works: ["The Art of War"],
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Bamboo_book_-_closed_-_UCR.jpg",
    tags: ["Strategist", "Philosopher"],
    origin: "State of Qi or Wu (disputed)",
    notableFor: "Military strategy, The Art of War"
  },
  {
    id: "ferdowsi",
    name: "Ferdowsi",
    language: "Persian",
    dates: "935-1020 C.E.",
    bio: "Ferdowsi was a Persian poet and the author of Shahnameh (Book of Kings), which is the world's longest epic poem created by a single poet, and the national epic of Greater Iran. Ferdowsi is celebrated as the most influential figure in Persian literature.",
    works: ["Shahnameh (Book of Kings)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Ferdowsi_Square_%28Tehran%29.jpg",
    tags: ["Poet", "Epic"],
    origin: "Tus, Khorasan (modern Iran)",
    notableFor: "Writing the Shahnameh, preserving Persian language and culture"
  },
  {
    id: "omar-khayyam",
    name: "Omar Khayyam",
    language: "Persian",
    dates: "1048-1141 C.E.",
    bio: "Omar Khayyam was a Persian mathematician, astronomer, philosopher, and poet. He was born in Nishapur, in northeastern Iran. As a mathematician, he is known for his work on the classification and solution of cubic equations. As a poet, he is known for his quatrains (rubaiyat).",
    works: ["Rubaiyat of Omar Khayyam", "Treatise on Demonstration of Problems of Algebra", "Explanations of the Difficulties in the Postulates of Euclid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Omar_Khayyam2.JPG",
    tags: ["Poet", "Mathematician"],
    origin: "Nishapur, Khorasan (modern Iran)",
    notableFor: "Poetry, mathematics, astronomy"
  },
  {
    id: "sadi",
    name: "Sa'di",
    language: "Persian",
    dates: "1213-1291 C.E.",
    bio: "Saadi Shirazi, better known by his pen name Saadi, was a major Persian poet and prose writer of the medieval period. He is recognized for the quality of his writings and for the depth of his social and moral thoughts.",
    works: ["Bustan (The Orchard)", "Gulistan (The Rose Garden)"],
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Saadi_Tomb.jpg",
    tags: ["Poet", "Moralist"],
    origin: "Shiraz, Fars (modern Iran)",
    notableFor: "Moral poetry and prose, influence on Persian literature"
  }
];
