import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Arnaud" },
      _id: 1,
      description: "This is a description",
      image:
        "https://as2.ftcdn.net/v2/jpg/09/16/73/05/1000_F_916730552_oYJ3wWFUEW6ot0BwOjR5UQJOScAvpeOV.jpg",
      category: "robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 2, name: "Jean" },
      _id: 2,
      description: "This is a description",
      image:
        "https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg",
      category: "robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="blue_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed ib Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
