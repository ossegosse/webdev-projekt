import "./ImageCard.scss";

/* type ImageCardProps = {
    image: string;
    author: string;
    title: string;
    description: string;
    } */

const BlogCard = [
  {
    image: "image-currency.jpg",
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image: "image-restaurant.jpg",
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    image: "image-plane.jpg",
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    image: "image-confetti.jpg",
    author: "by Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
  },
];

export const ImageCard = () => {
  return (
    <div className="imagecard-container">
      {BlogCard.map((card, index) => {
        return (
          <div key={index} className="image-card">
            <img className="image" src={card.image} alt={card.title} />
            <section className="blog__container">
              <p className="author">{card.author}</p>
              <h3 className="title">{card.title}</h3>
              <p className="description">{card.description}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};
