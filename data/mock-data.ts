import type { BettingSite } from "../types"

const defaultTerms = "18+ | T&Cs apply | BeGambleAware.org"

const rawSites: Omit<BettingSite, "score">[] = [
  {
    id: "spreadex",
    name: "Spreadex",
    logo: "/spreadex.webp",
    bonus: "Bet £10, Get £60 in Free Bets",
    welcomeOffer: "£60 Free Bets",
    terms: "18+  | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "Bank Transfer"],
    link: "https://www.spreadex.com/",
    reviews: 8509,
  },
  {
    id: "midnite",
    name: "Midnite",
    logo: "/midnite.webp",
    bonus: "Get £30 in Free Bets",
    welcomeOffer: "£30 Free Bets",
    terms: "18+ | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com",
    reviews: 8623,
  },
  {
    id: "betfred",
    name: "Betfred",
    logo: "/betfred.webp",
    bonus: "Get £50 Free Bets",
    welcomeOffer: "£50 Free Bets",
    terms: "18+  | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.betfred.com/",
    reviews: 9312,
  },
  {
    id: "boylesports",
    name: "BoyleSports",
    logo: "/boylesports.webp",
    bonus: "£40 Welcome Offer",
    welcomeOffer: "New Customers Only",
    terms: "18+ | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.boylesports.com",
    reviews: 8974,
  },

  {
    id: "ladbrokes",
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    bonus: "Only £5 to Claim £30 Welcome Bonus",
    welcomeOffer: "£30 Welcome Bonus",
    terms: "18+ | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.ladbrokes.com/",
    reviews: 9187,
  },
  {
    id: "betvictor",
    name: "BetVictor",
    logo: "/betvictor.webp",
    bonus: "Get £30 Free Bets",
    welcomeOffer: "£30 Free Bets",
    terms: "18+ | T&Cs apply | BeGambleAware.org",
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com/",
    reviews: 8841,
  },

]

/** Ranking: 1st place = highest score (9.8), descending by 0.1 */
export const bettingSites: BettingSite[] = rawSites.map((site, index) => ({
  ...site,
  score: Math.round((9.8 - index * 0.15) * 10) / 10,
}))
