import Button from "@/components/common/Button";
import style from "./news.module.css";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Card from "@/components/common/Card";

const dummyPosts = [
  {
    id: 1,
    title: "Optimizing Rust Backends for Minecraft Multiplayer",
    excerpt:
      "Deep dive into how we use Bevy and Rust to handle thousands of concurrent connections efficiently.",
    category: "Engineering",
    date: "Oct 24, 2025",
    author: "MineHighVN",
    image: "https://placehold.co/600x400/212529/ffffff?text=Rust+Backend",
  },
  {
    id: 2,
    title: "The Future of Bedrock Servers: What to Expect",
    excerpt:
      "Exploring the new protocols and features coming to our custom Bedrock server implementation.",
    category: "Game Dev",
    date: "Oct 20, 2025",
    author: "MineHighVN",
    image: "https://placehold.co/600x400/d32f2f/ffffff?text=Bedrock+Server",
  },
  {
    id: 3,
    title: "UI/UX Principles for Modern Game Launchers",
    excerpt:
      "How we designed the new Overlix launcher to be both functional and aesthetically pleasing.",
    category: "Design",
    date: "Oct 15, 2025",
    author: "DesignTeam",
    image: "https://placehold.co/600x400/0056b3/ffffff?text=UI+Design",
  },
];

export default function Home() {
  return (
    <DefaultLayout>
      <section className={style.hero}>
        <div className={style.heroContent}>
          <span className={style.heroLabel}>Featured Update</span>
          <h1 className={style.heroTitle}>Overlix 2.0: The Next Generation</h1>
          <p className={style.heroDesc}>
            Experience lower latency, new game modes, and a completely rewritten
            engine powered by cutting-edge technology.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <Button>Read Article</Button>
            <Button variant="outline">View Changelog</Button>
          </div>
        </div>
        <div className={style.heroImage}>
          {/* <Image
            width={0}
            height={0}
            unoptimized
            src="https://placehold.co/800x500/003d82/ffffff?text=Overlix+2.0+Launch"
            alt="Hero"
          /> */}
        </div>
      </section>

      <section>
        <h2 className={style.sectionTitle}>Latest DevLogs</h2>
        <div className={style.grid}>
          {dummyPosts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              author={post.author}
              image={post.image}
            />
          ))}
        </div>
      </section>

      <section className={style.newsletter}>
        <h2 className={style.newsletterTitle}>Stay in the Loop</h2>
        <p className={style.newsletterDesc}>
          Subscribe to our newsletter to get the latest updates on Overlix
          development and game servers.
        </p>
        <Button
          variant="outline"
          style={{ borderColor: "white", color: "white" }}
        >
          Subscribe Now
        </Button>
      </section>
    </DefaultLayout>
  );
}
