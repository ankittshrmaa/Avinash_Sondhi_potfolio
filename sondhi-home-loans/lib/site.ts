// All placeholder content lives here. Swap in Avinash's real details before launch.
export const site = {
  name: "Avinash Sondhi",
  title: "Branch Manager",
  region: "[City] region", // placeholder: which city/region does he manage?
  initials: "AS",
  // Employer details from rwmloans.com licensing page; verify on nmlsconsumeraccess.org before launch.
  company: {
    name: "RWM Home Loans",
    legal: "Residential Wholesale Mortgage, Inc. dba RWM Home Loans",
    nmls: "79445",
    licenses:
      "California Residential Mortgage Lending Act License #4131353. Real Estate Corporation License with MLO endorsement #01174642, California Department of Real Estate.",
    url: "https://rwmloans.com",
    since: 1994,
  },
  phone: "(555) 010-0142",
  email: "avinash@example.com",
  nmls: "0000000",
  dre: "00000000",
  stats: [
    { value: "15+", label: "years in mortgage lending" },
    { value: "600+", label: "California families financed" },
    { value: "$250M+", label: "in home loans funded" },
  ],
  programs: [
    { name: "Home purchase", detail: "Conventional loans for primary homes, with pre-approval letters agents take seriously." },
    { name: "Refinance", detail: "Lower your payment, shorten your term, or take cash out for a remodel." },
    { name: "FHA and VA", detail: "Lower down payments for qualified buyers, and zero down for eligible veterans." },
    { name: "Jumbo", detail: "Loans above the conforming limit, common in high-cost California counties." },
    { name: "First-time buyer", detail: "CalHFA and other down payment assistance programs, explained without the jargon." },
    { name: "Investment property", detail: "DSCR and bank-statement loans for rentals and self-employed borrowers." },
  ],
  steps: [
    { name: "Talk", detail: "A 20-minute call about your goals, income and budget." },
    { name: "Pre-approval", detail: "Documents reviewed and a pre-approval letter, usually within a day." },
    { name: "Loan estimate", detail: "Your options in writing, with every cost listed." },
    { name: "Closing", detail: "Avinash manages appraisal, underwriting and escrow through to funding." },
  ],
  // Photos: free Unsplash License stock (images.unsplash.com), illustrative only, not the financed properties.
  loans: [
    { city: "San Jose", type: "Jumbo purchase", amount: 1240000, days: 21, note: "Beat two competing offers", img: "/images/home-san-jose.jpg" },
    { city: "Irvine", type: "FHA, first-time buyer", amount: 612000, days: 27, note: "3.5% down, seller-paid costs", img: "/images/home-irvine.jpg" },
    { city: "San Diego", type: "VA purchase", amount: 785000, days: 25, note: "Zero down for a Navy veteran", img: "/images/home-san-diego.jpg" },
    { city: "Sacramento", type: "DSCR investor", amount: 468000, days: 19, note: "Qualified on rental income", img: "/images/home-sacramento.jpg" },
    { city: "Fremont", type: "Cash-out refinance", amount: 540000, days: 23, note: "Funded a kitchen remodel", img: "/images/home-fremont.jpg" },
    { city: "Palm Springs", type: "Second home purchase", amount: 695000, days: 24, note: "10% down on a vacation home", img: "/images/home-palm-springs.jpg" },
  ],
  reviews: [
    { quote: "He explained every number on the estimate and never rushed us. We closed two days early.", who: "First-time buyers, Elk Grove" },
    { quote: "Our bank said no because I am self-employed. Avinash found a loan that worked and kept his word on the timeline.", who: "Business owner, Fremont" },
    { quote: "I have sent him more than thirty clients. Every one of them closed on schedule.", who: "Real estate agent, San Diego" },
  ],
};

export const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
