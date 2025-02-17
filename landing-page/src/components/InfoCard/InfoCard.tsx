import "./InfoCard.scss";

const Card = [
  {
    icon: "icon-online.svg",
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: "icon-budgeting.svg",
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: "icon-onboarding.svg",
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: "icon-api.svg",
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export const InfoCard = () => {
  return (
    <div className="info-card-container">
      {Card.map((card, index) => {
        return (
          <div key={index} className="info-card">
            <img src={card.icon} alt="icon" className="info-card__icon" />
            <h2 className="info-card__title">{card.title}</h2>
            <p className="info-card__description">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
};
