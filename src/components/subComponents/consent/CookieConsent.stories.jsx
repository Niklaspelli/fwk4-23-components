import CookieConsent from "./CookieConsent";

export default {
  title: "Components/Consent",
  component: CookieConsent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {};

export const Custom = {
  args: {
    title: "Vi värdesätter din integritet.",
    subTitle: "Klicka här för att läsa villkor!",
    acceptBtnText: "Acceptera",
    declineBtnText: "Avböj",
    subLink: "Klicka här",
    onAccept: () => console.log("Cookie Consent Accepted"),
    onDecline: () => console.log("Cookie Consent Declined"),
    onSubClick: () => console.log("Custom subtitle clicked"),
  },
};
