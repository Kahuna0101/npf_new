import { BenefitsPageProps } from "@/components/BenefitsTabs";
import { PensionAdministrationBoxProps } from "@/components/PensionAdministrationBox";
import { QuickActionsBoxProps } from "@/components/QuickActionsBox";
import { PensionPageProps } from "@/components/PensionFeatures";
import { careerWhyProps } from "@/app/(root)/(pages)/careers/page";
import { FaqsDataProps } from "@/components/FaqTabs";
import { valueProps } from "@/app/(root)/(pages)/about-us/page";
import { ContactDataProps } from "@/components/ContactTabs";
import { enrollmentDataProps, KeyBenefitsDataProps } from "@/app/(root)/(pages)/pencare/page";
import { MultiFundsProps } from "@/app/(root)/(pages)/multi-funds/page";

export const NavbarLinks: { title: string; href?: string; children?: { icon: string; title: string; href: string }[] }[] = [
  { title: "Home", href: "/" },
  {
    title: "Pension Administration",
    children: [
      { icon: "/images/retirement.png", title: "Retirement Savings Account (RSA)", href: "/retirement-savings-account" },
      { icon: "/images/hand-gear.png", title: "Voluntary Contributions (VC)", href: "/voluntary-contributions" },
      { icon: "/images/mortgage.png", title: "RSA Mortgage Equity Contribution", href: "/mortgage-equity-contribution" },
      { icon: "/images/personal-pension.png" ,title: "Personal Pension Plan (PPP)", href: "/personal-pension-plan" },
      { icon: "/images/multi-fund.png", title: "Multi Funds", href: "/multi-funds" },
      { icon: "/images/health-care.png", title: "PenCare", href: "/pencare" }
    ]
  },
  { title: "Benefits", href: "/benefits" },
  {
    title: "Resources",
    children: [
      { icon: "/images/calculator.png", title: "Pension Calculator", href: "/pension-calculator" },
      { icon: "/images/downloads.png", title: "Forms & Downloads", href: "/forms-downloads" },
      { icon: "/images/question.png", title: "FAQs", href: "/faqs" },
      { icon: "/images/downloads.png", title: "Audited Accounts", href: "/audited-accounts" },
      { icon: "/images/careers.png", title: "Careers", href: "/careers" },
      { icon: "/images/newsletter.png", title: "Newsletters", href: "/newsletters" },
      { icon: "/images/gallery.png", title: "Gallery", href: "/galley" },
    ]
  },
  {
    title: "About Us",
    children: [
      { icon: "/images/about.png", title: "Who We Are", href: "/about-us" },
      { icon: "/images/directors.png", title: "Board of Directors", href: "/directors" },
      { icon: "/images/managements.png", title: "Management Team", href: "/managements" },
    ]
  },
  { title: "Contact", href: "/contact" },
]

export const socialLinks: { icon: string; href: string; alt: string; color: string }[] = [
  {
    icon: "/icons/facebook.svg",
    href: "https://www.facebook.com/groups/NPFPensions/?ref=share&mibextid=CTbP7E",
    alt: "facebook",
    color: "#1877F2"
  },
  {
    icon: "/icons/twitter.svg",
    href: "https://x.com/NPFPensionsLtd?s=09",
    alt: "twitter",
    color: "#1DA1F2"
  },
  {
    icon: "/icons/instagram.svg",
    href: "https://www.instagram.com/npfpensionslimited?igsh=NXFhczZ3bTJla2Nv",
    alt: "instagram",
    color: "#C13584"
  },
  {
    icon: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/npf-pensions-limited-380321209",
    alt: "linkedin",
    color: "#0077B5"
  },
  {
    icon: "/icons/whatsapp.svg",
    href: "www.whatsapp.com",
    alt: "whatsapp",
    color: "#25D366"
  },
]

export const quickLinks: { title: string; href: string }[] = [
  { title: "About Us", href: "/about-us" },
  { title: "PenCom", href: "https://www.pencom.gov.ng/" },
  { title: "Pension Calculator", href: "/pension-calculator" },
  { title: "Whistleblower", href: "/whistleblower" },
  { title: "Benefits", href: "/benefits" },
  { title: "PenCare", href: "/pencare" },
  { title: "Newsletters", href: "/newsletters" },
  { title: "FAQs", href: "/faqs" },
  { title: "Gallery", href: "/gallery" },
  { title: "Privacy Policy", href: "/privacy-policy" }
]

export const services: { title: string; href: string }[] = [
  { title: "Retirement Savings Account (RSA)", href: "/retirement-savings-account" },
  { title: "Voluntary Contributions (VC)", href: "/voluntary-contributions" },
  { title: "RSA Mortgage Equity Contribution", href: "/mortgage-equity-contribution" },
  { title: "Personal Pension Plan (PPP)", href: "/personal-pension-plan" },
  { title: "Multi Funds", href: "/multi-funds" },
]

export const contacts: { title: string; href?: string }[] = [
  { title: "(+234) 2094603401", href: "tel:+2342094603401" },
  { title: "info@npfpensions.com", href: "mailto:info@npfpensions.com" },
  { title: "NPF Pensions House Plot 3820, R.B. Dikko Road, Off Shehu Shagari Way, Central Business District (CBD) Abuja - Nigeria.", href: "https://www.google.com/maps/search/?api=1&query=NPF%20Pensions%20House%20Plot%203820%2C%20R.B.%20Dikko%20Road%2C%20Off%20Shehu%20Shagari%20Way%2C%20Central%20Business%20District%20(CBD)%20Abuja%20-%20Nigeria." },
]

export const pensionAdministrationData: PensionAdministrationBoxProps[] = [
  {
    title: "Retirement Savings Account (RSA)",
    description: "Secure your retirement with our comprehensive RSA management services.",
    href: "/retirement-savings-account",
    icon: "/icons/retirement.svg"
  },
  {
    title: "Voluntary Contributions (VC)",
    description: "Boost your retirement savings with additional voluntary contributions.",
    href: "/voluntary-contributions",
    icon: "/icons/voluntary.svg"
  },
  {
    title: "RSA Mortgage Equity Contribution",
    description: "See your RSA balance to secure your dream home.",
    href: "/mortgage-equity-contribution",
    icon: "/icons/mortgage.svg"
  },
]

export const quickActionsData: QuickActionsBoxProps[] = [
  {
    title: "Pension Calculator",
    description: "Calculate your retirement projections",
    href: "/pension-calculator",
    icon: "/icons/calculator.svg"
  },
  {
    title: "Forms & Downloads",
    description: "Access important documents",
    href: "/forms-downloads",
    icon: "/icons/downloads.svg"
  },
  {
    title: "FAQs",
    description: "Find answers to common questions",
    href: "/faqs",
    icon: "/icons/question.svg"
  },
  {
    title: "Audited Accounts",
    description: "Access Audited documents",
    href: "/audited-accounts",
    icon: "/icons/downloads.svg"
  },
  {
    title: "DRE Portal",
    description: "Access your account",
    href: "https://pensionrecap.pencom.gov.ng/",
    icon: "/icons/portal.svg"
  },
  {
    title: "PenCom",
    description: "National Pension Commission",
    href: "https://www.pencom.gov.ng/",
    icon: "/images/pencom.png"
  },
  {
    title: "First Pension",
    description: "First Pension Custodian",
    href: "https://firstpensioncustodian.com/",
    icon: "/images/First-Pension-Custiodian.png"
  },
]

export const whyChooseData: { title: string, description: string, }[] = [
  {
    title: 'Trusted Excellence',
    description: "Tailored exclusively for members of the Nigeria Police Force.",
  },
  {
    title: 'Customer-Centric',
    description: "Dedicated to addressing and resolving the unique pension challenges faced by police personnel.",
  },
  {
    title: 'Strong Performance',
    description: "Proven track record of delivering consistently high returns on investment (ROI).",
  },
]

export const pensionPageData: PensionPageProps[] = [
  {
    title: "Retirement Savings Account (RSA)",
    description: "Unlock the value of your Retirement Savings Account (RSA) to make homeownership a reality. Our RSA Mortgage Equity Contribution option is designed to help you use part of your pension savings toward your dream property.",
    features: ["Secure Pension Management You Can Trust: At NPF Pensions Ltd, your RSA is professionally managed under strict PenCom regulations to ensure safety and compliance.", "Transparent & Convenient Access: Track your balance, contributions, and statements anytime through our digital platforms and customer service channels.", "Consistent, Competitive Returns: We focus on stable investment performance to grow your retirement savings responsibly over time.", "Dedicated Support Nationwide: With our branch network and responsive service teams, NPF Pensions Ltd ensures that every RSA holder gets prompt support wherever they are."],
    benefits: ["Lump-Sum Payment: A one-off payment from your RSA at retirement.", "Monthly Pension Payments: Regular programmed withdrawals for steady income.", "Pension Enhancement: Eligible retirees can apply for pension enhancement."]
  },
  {
    title: "Voluntary Contributions (VC)",
    description: "Our voluntary contributions (vc) is designed with your financial security in mind. We combine professional investment management with personalized service to ensure your retirement savings grow consistently over time.",
    features: ["Flexible Top-Up Savings: NPF Pensions Ltd allows you to add voluntary contributions at your convenience to increase your long-term wealth.", "Enjoy Tax Savings: You can reduce your taxable income through voluntary contributions, allowing you to save more while paying less in taxes—especially when contributions are kept for the required minimum period.", "Faster Wealth Growth: Your VC is invested to earn competitive returns, helping your savings grow over time.", "Quick Access to Funds: You can withdraw a portion of your VC after the regulatory waiting period, giving you the flexibility to meet financial needs without touching your main RSA balance."],
    benefits: ["Increased retirement income", "Tax deductions on contributions", "Flexible withdrawal options", "Compound growth potential"]
  },
  {
    title: "RSA Mortgage Equity Contribution",
    description: "Our rsa mortgage equity contribution is designed with your financial security in mind. We combine professional investment management with personalized service to ensure your retirement savings grow consistently over time.",
    features: ["Up to 25% of RSA balance", "Competitive interest rates", "Flexible repayment terms", "Maintained retirement savings"],
    benefits: ["Homeownership opportunity", "Lower mortgage rates", "Continued retirement savings", "Flexible repayment options"]
  },
  {
    title: "Personal Pension Plan (PPP)",
    description: `Secure Your Future, On Your Terms
    
    The Personal Pension Plan (PPP) is a flexible and voluntary retirement savings scheme introduced by the National Pension Commission (PenCom) in line with Section 2(3) of the Pension Reform Act (PRA) 2014.
    
    It is specifically designed to expand pension coverage to self-employed individuals and employees of organizations with fewer than three staff, ensuring that more Nigerians especially within the informal sector can enjoy financial security in retirement.`,
    features: ["Trusted pension expertise", "Strong compliance with regulatory standards", "Customer-focused service delivery", "Secure and seamless contribution channels"],
    benefits: ["Retirement Savings (for long-term security)", "Contingent Savings (accessible under specific guidelines)", "Funds are professionally managed and securely held under strict regulatory oversight", "Partial withdrawals may be allowed from the contingent portion, in line with PenCom guidelines"]
  }
]

export const multifundData: MultiFundsProps[] = [
  {
    title: "Fund I – High Risk / High Return (Optional)",
    criteria: ["Designed for contributors with a higher risk tolerance seeking potentially higher returns.", "Equity Exposure: Minimum of 20% and maximum of 75% in variable income instruments (e.g., equities)." ],
    eligibility: ["Contributors aged 49 years and below.", "Must opt in through a formal request."]
  },
  {
    title: "Fund II – Medium Risk / Medium Return",
    criteria: ["Offers a balanced portfolio with moderate risk and return potential.", "Equity Exposure: Minimum of 10% and maximum of 55% in variable income instruments." ],
    eligibility: ["Default fund for contributors aged 49 years and below.", "Contributors from Fund III may switch to this fund upon formal request."]
  },
  {
    title: "Fund III – Moderate Risk (Pre-Retirement Fund)",
    criteria: ["Designed for contributors nearing retirement, focusing on capital preservation with moderate growth.", "Equity Exposure: Minimum of 5% and maximum of 20% in variable income instruments." ],
    eligibility: ["Mandatory for contributors aged 50 years and above." ]
  },
  {
    title: "Fund IV – Low Risk (Retiree Fund)",
    criteria: ["Focused on capital preservation and stable returns for retirees.", "Equity Exposure: Typically 0%, with a maximum of 10% at the Fund Manager’s discretion." ],
    eligibility: ["Exclusively for retirees."]
  },
  {
    title: "Key Notes",
    criteria: [`"Variable income instruments” refer mainly to equity investments, which carry higher risk but offer potential for higher returns.`, "Switching between funds (where permitted) requires a formal request and must comply with regulatory guidelines.", "Your choice of fund should reflect your risk tolerance, age, and retirement goals."],
  }
]

export const howItWorksData: string[] = [
  "Complete our simple application form", "Provide required documentation", "Make your initial contribution", "Start growing your retirement savings"
]

export const keybenefitsData: KeyBenefitsDataProps[] = [
  {
    img: "/icons/form.svg",
    title: "Simple Enrollment",
    description: "Quick and straightforward enrollment process requiring minimal documentation and your explicit informed consent.",
  },
  {
    img: "/icons/health-care.svg",
    title: "No Cost Healthcare",
    description: "Access healthcare services from designated HMO facilities at absolutely no cost to you as an eligible retiree.",
  },
  {
    img: "/icons/guard.svg",
    title: "Data Protection",
    description: "Your personal information is handled with strict adherence to applicable data protection requirements and privacy standards.",
  }
]

export const enrollmentData: enrollmentDataProps[] = [
  {
    title: "Download & Review",
    description: "Download and carefully review the Consent Letter document provided. Take time to understand all terms and conditions.",
  },
  {
    title: "Complete the Form",
    description: "Fill the consent form correctly with your accurate information including name, RSA PIN, and contact details.",
  },
  {
    title: "Provide Consent",
    description: "Submit your consent either electronically via the provided link or by signing and returning the physical copy.",
  }
]

export const benefitsPageData: BenefitsPageProps[] = [
  {
    value: "retirement-withdrawal",
    tabsTitle: "Retirement & Withdrawal",
    title: "Retirement Benefits",
    description: "Access your full retirement benefits when you reach retirement age or meet the qualifying conditions.",
    features: ["fully consolidated RSA Balance", "Monthly pension option", "Lump sum withdrawal"],
    requirements: ["Reached age 50 with 5 years of service", "Reached retirement age as specified by employer", "Voluntary retirement with employer consent"],
    process: ["Submit retirement application form", "Provide required documentation", "Choose payment option (lump sum or annuity)", "Receive your benefits within 30 days"],
    bgImg: "/images/vc-bg.jpg"
  },
  {
    value: "programmed-withdrawal",
    tabsTitle: "Programmed Withdrawal",
    title: "Programmed Withdrawal",
    description: "Receive regular monthly payments from your RSA while keeping your funds invested for continued growth.",
    features: ["Regular monthly income", "Continued investment growth", "Flexible payment schedule"],
    requirements: ["Reached age 50 with 5 years of service", "Retirees who choose structured payments", "RSA balance can support minimum monthly payments"],
    process: ["Calculate sustainable withdrawal rate", "Submit application with required documents", "Set up monthly payment schedule", "Receive regular payments for life expectancy period"],
    bgImg: "/images/benefits-withdrawal-bg.jpg"
  },
  {
    value: "temporary-access",
    tabsTitle: "25% Temporary Access",
    title: "25% Temporary Access",
    description: "Access up to 25% of your RSA balance for urgent financial needs while keeping the remaining 75% for retirement.",
    features: ["Emergency access", "Up to 25% of balance", "Quick processing"],
    requirements: ["Unemployed for 4 months or more", "No monthly salary or pension", "Submitted required documentation"],
    process: ["Provide proof of unemployment", "Submit temporary access application", "Complete verification process", "Receive 25% of your RSA balance"],
    bgImg: "/images/rsa-bg.jpg"
  },
  {
    value: "bloc-payment",
    tabsTitle: "En Bloc Payment",
    title: "En Bloc Payment",
    description: "Receive your entire RSA balance as a lump sum payment if your total balance is below the prescribed threshold.",
    features: ["Full balance withdrawal", "One-time payment", "Complete account closure"],
    requirements: ["Balance below specified threshold", "Reached retirement age", "Unable to secure annuity with the balance"],
    process: ["Verify RSA balance threshold", "Submit en bloc payment application", "Complete required documentation", "Receive full payment within 30 days"],
    bgImg: "/images/vc-bg.jpg"
  },
  {
    value: "death-benefits",
    tabsTitle: "Death Benefits",
    title: "Death Benefits",
    description: "Ensure your loved ones are taken care of with comprehensive death benefits from your RSA.",
    features: ["Fully consolidated RSA Balance", "Survivor benefits", "Quick claim process"],
    requirements: ["Designated beneficiaries", "Proper documentation of death", "Valid nomination or will"],
    process: ["Notify NPF Pensions Limited of death", "Submit death certificate and required documents", "Verify beneficiary information", "Process payment to beneficiaries"],
    bgImg: "/images/benefits-withdrawal-bg.jpg"
  }
]

export const faqData: FaqsDataProps[] = [
  {
    value: "generalQuestions",
    category: "General Questions",
    faqs: [
            {
        question: "When do I qualify for retirement benefits?",
        answer: "You become eligible upon reaching retirement age or opting for early retirement in line with your organization's policy and the Pension Reform Act."
      },
      {
        question: "What documents are required to process my benefits?",
        answer: `*   Completed application forms
                  *   Valid ID
                  *   Retirement letter
                  *   Age/birth certificate
                  *   Bank details
                  *   Passport photo
                  *   Any additional supporting documents
                  `
      },
      {
        question: "How long does processing take?",
        answer: "Once all documents are complete and your RSA is consolidated, processing takes 48 hours."
      },
      {
        question: "Can I switch between PW and Annuity?",
        answer: "Yes, you can move from Programmed Withdrawal to Annuity, but switching back is not allowed."
      },
      {
        question: "I have a Retirement Savings Account with my PFA. Why do I have to re-register?",
        answer:
          "This exercise is to obtain your most current and accurate data which will enable N.P.F Pensions Limited (NPFPL) communicate effectively and render better services to you. Your existing RSA PIN will not change but will be transferred along with your RSA balance and previous data discarded. This will also afford the opportunity to obtain Biometric data in line with new PENCOM guidelines which will soon be introduced and made mandatory."
      },
      {
        question: "Must I wear my uniform in the passport I am providing and must it be on a white background?",
        answer:
          "Your passport photograph should be on a white background irrespective of what you wear. You can decide to take it with uniform or mufti."
      },
      {
        question: "Can I change my Next of Kin or register more than one person as Next of Kin on my account?",
        answer:
          "Yes, you can. Your Next Of Kin (NOK) can be updated, by either visiting our office or by sending an e-mail to us with the following details:Full Name and details of previous NOK Full Name of proposed NOK, Gender of NOK, Relationship, Contact Mobile phone Number of NOK, Correspondence address and, Email Address of NOK"
      }
    ]
  },
  {
    value: "retirementSavingsAccount",
    category: "Retirement Savings Account",
    faqs: [
      {
        question: "As police personnel am I entitled to 25% RSA mortgage?",
        answer: `To be eligible for the 25% RS withdrawal for mortgage? You must:
            a. Be active in service
            b. Have an RSA
            c. Complete the Data Recapture Exercise
            d. Have 60 months (5 years) of combined employer and employee contributions
            e. Have more than three years left before retirement.`
      },
      {
        question: "How can I resolve the zero-balance problem of my RSA",
        answer: "Complete a nominal Roll Update form with your Pension Desk Officer in your command. Complete and submit your payslip to any of our office or service Centre"
      },
      {
        question: "Can I withdraw my contributions before retirement?",
        answer: "Yes, you can withdraw up to 25% of your RSA balance if you suffer job loss  or retire before 50 years of age."
      },
      {
        question: "Does this registration nullify my existing RSA balance?",
        answer:
          "Your current RSA Balance is still intact. It would be transferred to NPFPL, with additional contributions that will ensue, it will be managed efficiently in line with PECOM guidelines to generate returns on your behalf."
      },
      {
        question: "I have not been receiving e-mails or SMS alerts from my PFA?",
        answer:
          "This may be as a result of many reasons ranging from change in your telephone number/ email address to absence of valid records with the PFA. This is why NPFPL has embarked upon re-registration exercise to ensure your current data is obtained for effective communication."
      },
      {
        question: "I have not been receiving my RSA statement for some time. What is wrong?",
        answer:
          "During the current re-registration exercise by NPFPL you have been requested to provide the Address of your Employer's office and state of posting. This will ensure your RSA Statement is delivered regularly yto you in your office location. Each time you are reposted you should visit any of our offices or send us an email to update to such information from your employer and will be able to reach you at you new location."
      },
      {
        question: "Where it appears that my monthly remittances are less than the amount being deducted from my monthly salary, what do I do?",
        answer:
          "Kindly notify the Pension Desk Officer in your Command/ Division and NPFPL providing a copy of your payslip to ensure that your records are updated on Nominal Roll to be submitted to the National Pension Commission for a reconciliation of your Pension Contributions and remittances"
      },
      {
        question: "Why does my account balance fluctuate?",
        answer:
          "The difference observed in your RSA balance is a result of the changes in the RSA fund's unit price. These price changes are a reflection of the investment performance of the fund in the short run. The unit price of the RSA Fund is computed by dividing the Net Asset Value (NAV) of the fund (which comprises the contributions + appreciation) by number of units created. The daily fluctuate arises from price movements of stocks which can constitute up to 25% of the fund's investment."
      },
      {
        question: "Would I be given a new PIN now that my contribution has been transferred to NPFPL?",
        answer:
          "No, your Personal Identification Number (PIN) is unique and does not change. You are to maintain the same PIN number from your former PFA."
      }
    ]
  },
  {
    value: "voluntaryContributions",
    category: "Voluntary Contributions",
    faqs: [
      {
        question: "How can I make additional contributions into my account?",
        answer:
          "Such additional contributions are called Voluntary Contributions are additional personal contributions that can be made alongside your RSA; this remittance must come to us through your employer. The payment schedule provided to your employer has a column to be filled with the amount of your choice. Please note that since Voluntary Contributions are not mandatory, it could be any amount of your choice. Also note that the Voluntary Contributions made will be remitted into your existing RSA PIN and your statement of account will show the details of your Voluntary Contributions to enable you to monitor the growth of your Voluntary Contributions please note that in line with recent guidelines, withdrawal from Voluntary Contributions made within five years of existence will attract Personal Income Tax deduction on amounts withdrawn."
      }
    ]
  },
  {
    value: "benefitsWithdrawals",
    category: "Benefits & Withdrawals",
    faqs: [
      {
        question: "What benefits can I access when I retire?",
        answer: "You can receive a lump-sum payment and choose between Programmed Withdrawal or Annuity for your monthly pension, based on eligibility."
      },
  {
    question: "How can one temporarily exit from the scheme?",
    answer:
      "You can temporarily exit from the scheme voluntarily when you disengage from active service before attaining the retirement age based on the terms of your employment. This is also applicable if you are retiring in accordance with the terms and conditions of your employment but less than 50 years of age and you do not secure another employment in (4) four months. You can request to be paid a lump sum up to a maximum of 25% of the balance in your RSA. Upon attaining the age of 50 years, you can access the balance of 75% either as an en-bloc payment or through programmed withdrawals."
  },
  {
    question: "Why are pay slips required for retirement benefits processing?",
    answer:
      "The provision of copies of the last three months' payslip for normal retirement is a PENCOM requirement, even for balances less than N550,000. The RSA balances as at the time of applying, may be exclusive of the accrued rights and when paid may be N550,000"
  },
  {
    question: "Where can a death certificate be obtained?",
    answer:
      "A death certificate can be obtained from the hospital. However, if the deceased did not die in a hospital, a death certificate can be obtained from the National Population Commission."
  },
  {
    question: "What can be done to expedite the processing of a survivor benefit?",
    answer:
      "We strongly advise that all contributors should draw up a will. This will eliminate the lengthy delays faced by the survivor in obtaining from the National Population Commission."
  },
  {
    question: "What is the age limit for contribution to be accessed?",
    answer:
      "A contributor can access the balance in his/her RSA when he/she has retired or attained the age of 50 years, whichever comes later. If she/her retires or is rendered redundant by his/her employer, before attaining the age of 50 years he/she can access 25% of his/her RSA balance immediately."
  },
  {
    question: "Why must a disengaged staff wait for four months to access funds in his/her RSA?",
    answer:
      "This is in compliance with the Pension Reform Act (Revised 2014) which states that a contributor who is yet to attain the age of 50 years can access 25% of his/her RSA balance after four months of being rendered redundant by his/her employer. This provision is based on the assumption that contributor younger than 5o years can still get another job since pension funds are expected to be reserved for old age."
  },
  {
    question: "What factors affect the amount of retirement benefit a retiree receives?",
    answer:
      "The retirement benefits of a retiree is determined by the parameters such as RSA balance at retirement and Gender amongst others."
  }
]
  }
];

export const careerWhyData: careerWhyProps[] = [
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and mental health support.",
    icon: "/icons/heart.svg"
  },
  {
    title: "Career Growth",
    description: "Professional development opportunities, training programs, and clear career paths.",
    icon: "/icons/growth.svg"
  },
  {
    title: "Recognition",
    description: "Performance-based bonuses, employee recognition programs, and achievement awards.",
    icon: "/icons/award.svg"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working arrangements, generous leave policies, and family support.",
    icon: "/icons/users.svg"
  },
]

export const valuesData: valueProps[] = [
  {
    title: "Security & Accountability",
    description: "We safeguard contributors' funds with strict compliance, sound governance, and responsible investment practices.",
    icon: "/icons/guard.svg"
  },
  {
    title: "Service Excellence",
    description: "We are committed to delivering timely, responsive, and professional service that puts our clients' needs first.",
    icon: "/icons/excellence.svg"
  },
  {
    title: "Commitment to Our Stakeholders",
    description: "We serve with dedication, respect, and fairness, ensuring every client's retirement future is secure.",
    icon: "/icons/heart.svg"
  },
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings, ensuring transparency and trust in managing our clients' retirement funds.",
    icon: "/icons/users.svg"
  },
  {
    title: "Innovation",
    description: "We continuously improve our systems, processes, and service channels to provide seamless pension solutions.",
    icon: "/icons/excellence.svg"
  },
]

export const contactData: ContactDataProps[] = [
  {
    value: "northCentral",
    category: "North-Central Region",
    branches: [
      {
        office: "Regional Office",
        address: "NPF Pensions Limited, Shendam Road, Opposite Ministry of Local Government and Chieftaincy Affairs Lafia."
      },
      {
        office: "Regional Manager",
        address: "Nurudeen A. Isa"
      },
      {
        office: "Phone No",
        address: "08037869385"
      },
      {
        office: "Email",
        address: "Nurudeen.Isa@npfpensions.com, NorthCentral@npfpensions.com"
      },
      {
        office: "Police Staff College",
        address: "Off Jos-Abuja Road, Bukuru Jos, Plateau State."
      },
      {
        office: "Zone 4",
        address: "Adjacent to ‘B’ Division High Level Makurdi, Benue State"
      },
      {
        office: "Nasarawa State",
        address: "Police State Command Headquarters, Off Shandam Road, Lafia Nasarawa State."
      },
      {
        office: "Benue State",
        address: "Police State Command Headquarters, Barracks Road GRA Makurdi, Benue State."
      },
      {
        office: "Kwara State",
        address: "Police State Command Head quarters, Along Government House Road, Ahmadu Bello Way, Ilorin, Kwara State"
      },
      {
        office: "Zone 7",
        address: "Police Zonal Command Conakry Close Plot 3, Wuse Zone 3 Abuja."
      },
      {
        office: "Plateau State",
        address: "Police State Command Headquarters, Angulu Jos Division, Old Airport Junction Jos, Plateau State."
      },
      {
        office: "Kogi State",
        address: "Police State Command Headquarters, Murtala Mohammed Way Lokoja, Kogi State."
      },
      {
        office: "Zone 8",
        address: "Police Zonal Command, Katsina Ala Road Opposite Kogi Complex Stadium Lokoja, Kogi State."
      },
      {
        office: "FCT",
        address: "FCT Police Command Headquarters, Zaria Street Opposite Old Cbn Garki Abuja."
      },
      {
        office: "Niger State",
        address: "Police State Command Headquarters Yakubu Lami Road, Dutsen Kura Minna, Niger State."
      },
      {
        office: "Police Pension Office",
        address: "517 Sylvester Ugoh Crescent, off Idris Ibrahim Crescent, Behind Ecobank Jabi Abuja."
      },
    ]
  },
  {
    value: "northWest",
    category: "North-West Region",
    branches: [
      {
        office: "Regional Office",
        address: "No. 2 Gaya Road, Off Umaru Babura Road, Bompai, Kano, Kano State, Nigeria."
      },
      {
        office: "Regional Manager",
        address: "Hafizu T. Usman"
      },
      {
        office: "Phone No",
        address: "08030946348"
      },
      {
        office: "Email",
        address: "Hafizu.Usman@npfpensions.com, NorthWest@npfpensions.com"
      },
      {
        office: "Kaduna State",
        address: "Police State Command Headquarters, Pmb 2019 Sarki Abdurrahman Way, Daura Road, Katsina, Katsina State"
      },
      {
        office: "Zone 1",
        address: "Police Zonal Command Headquarters Zone 1, B.U.K Road, Kano, Kano State"
      },
      {
        office: "Kano State",
        address: "Police State Command Headquarters, Bompai Road, Kano, Kano State"
      },
      {
        office: "Zamfara State",
        address: "Police State Command Headquarters, Unguwar Gwaza, Kaura Namoda Road, Gusau, Zamfara State"
      },
      {
        office: "Jigawa State",
        address: "Police State Command Headquarters, Pmb 7090 Justice Tijjani Abubakar Street, Tukur Site Dutse, Jigawa State"
      },
      {
        office: "Zone 10",
        address: "Police Zonal Command Headquarters, Modibbo Adama Road, Marina, Sokoto State"
      },
      {
        office: "Police College Kaduna",
        address: "Independence Way, Kaduna, Kaduna State"
      },
      {
        office: "Kebbi State",
        address: "Police State Command Headquarters, Umar Atu Kalgo Road, Gwadangaji Birnin Kebbi, Kebbi State"
      },
      {
        office: "Polac Kano",
        address: "Police Academy Wudil, Maiduguri Road, Wudil, Kano State"
      },
      {
        office: "Sokoto State",
        address: "Police State Command Headquarters, Gwandu Road, Sokoto, Sokoto State"
      },
    ]
  },
  {
    value: "southEast",
    category: "South-East Region",
    branches: [
      {
        office: "Regional Office",
        address: "Plot 5, Ebeano Housing Estate, Enugu, Enugu State."
      },
      {
        office: "Regional Manager",
        address: "Ejike Utazi"
      },
      {
        office: "Phone No",
        address: "08064692056"
      },
      {
        office: "Email",
        address: "ejike.utazi@npfpensions.com, SouthEast@npfpensions.com"
      },
      {
        office: "Imo State",
        address: "Police Command Headquarters, Imo State"
      },
      {
        office: "Police College",
        address: "Police College Oji-River"
      },
      {
        office: "Enugu State",
        address: "Police Command Headquarters, Enugu State."
      },
      {
        office: "Ebonyi State",
        address: "Police Command Headquarters, Abakaliki, Ebonyi State."
      },
      {
        office: "Force CID",
        address: "Police Force CID Unit, Enugu State."
      },
      {
        office: "Police College",
        address: "Police Detective College, Enugu State."
      },
      {
        office: "Zone 9",
        address: "Pension Office, AIG Zone 9 Umuahia."
      },
      {
        office: "Abia State",
        address: "Pension Office, Police Command Headquarters, Abia State."
      },
      {
        office: "Force CID",
        address: "Pension Office, States CID, Anambra State"
      }
    ]
  },
  {
    value: "northEast",
    category: "North-East Region",
    branches: [
      {
        office: "Regional Office",
        address: "Off Goodluck Ebele Jonathan Street, Opposite Old Nigeria Civil Defense Office, Federal Low-cost, Gombe, Gombe State"
      },
      {
        office: "Regional Manager",
        address: "Ibrahim Bamusa"
      },
      {
        office: "Phone No",
        address: "08033696585"
      },
      {
        office: "Email",
        address: "ibrahim.bamusa@npfpensions.com, NorthEast@npfpensions.com"
      },
      {
        office: "Police College",
        address: "Kano/Jos Road Maiduguri, Borno State."
      },
      {
        office: "Bauchi State",
        address: "Police State Command Headquarters, Yandoka Road, Bauchi, Bauchi State."
      },
      {
        office: "Yobe State",
        address: "Area Command, Gudjuba Road, Damaturu, Yobe State"
      },
      {
        office: "Gombe State",
        address: "Police State Command Headquarters, Ashaka Road, Gombe, Gombe State."
      },
      {
        office: "Borno State",
        address: "Police State Command Headquarters, A4-Kano/Jos Road Maiduguri, Borno State"
      },
       {
        office: "Zone 15",
        address: "Kano/Jos road  Maiduguri, Borno State"
      },
      {
        office: "Zone 12",
        address: "Police Zonal Command Headquarters, Near Ministry Of Finance, Ahamdu Bello Way, Bauchi, Bauchi State."
      },
      {
        office: "Adamawa State",
        address: "Police State Command Headquarters, Kofare Road Jimeta, Adamawa State"
      },
      {
        office: "Zone 3",
        address: "Police Zonal Command Headquarters, Kofare Road Jimeta, Adamawa State"
      },
      {
        office: "Taraba State",
        address: "Police State Command Headquarters, Emir's Drive Jalingo, Taraba State."
      }
    ]
  },
  {
    value: "southSouth",
    category: "South-South Region",
    branches: [
      {
        office: "Regional Office",
        address: "Plot 4, Lord Ugboma Crescent, Off Abacha Road, Behind Casablanca, G.R.A, Port Harcourt, Rivers State."
      },
      {
        office: "Regional Manager",
        address: "Deborah Shittu"
      },
      {
        office: "Phone No",
        address: "08023042488, 09037870544"
      },
      {
        office: "Email",
        address: "Deborah.Shittu@npfpensions.com, SouthSouth@npfpensions.com"
      },
      {
        office: "Cross River State",
        address: "Police Pension Office. Cross River State Police Command Headquarters, Diamond Hill, Calabar."
      },
      {
        office: "Akwa Ibom State",
        address: "Police Pension Office. Akwa-Ibom State Police Command Headquarters, Ikot Akpan Abia, Uyo."
      },
      {
        office: "Rivers State",
        address: "Police Pension/Insurance Office. Harold Wilson Drive, Borokiri, Port Harcourt"
      },
      {
        office: "Edo State",
        address: "Police Pension Office Office, Edo State Police Command Headquarters, Vincent Agenmonmen Avenue, By Mega Filling Station, Off Sapele Road, GRA Benin City"
      },
      {
        office: "Bayelsa State",
        address: "Police Pension Office. Bayelsa State Police Command Headquarters, Captain Amangala Street, Ovom Yenagoa"
      },
      {
        office: "Zone 6",
        address: "Police Pension Office. Zone 6 Command Headquarters, Murtala Mohammed Highway, Calabar"
      },
      {
        office: "Delta State",
        address: "Police Pension Office. Delta State Police Command Headquarters, Okpanam Road, Asaba"
      }
    ]
  },
  {
    value: "southWest",
    category: "South-West Region",
    branches: [
      {
        office: "Regional Office",
        address: "No. 37A Remi Fani-Kayode Street, GRA, Ikeja, Lagos State."
      },
      {
        office: "Regional Manager",
        address: "Kayode Oyebisi - Oba."
      },
      {
        office: "Phone No",
        address: "07018122240"
      },
      {
        office: "Email",
        address: "kayode_oyebisi-oba@NPFPensions.com, SouthWest@npfpensions.com"
      },
      {
        office: "FHQ Annex",
        address: "Police Force Headquarters Annex Obalende, Lagos."
      },
      {
        office: "Ogun State",
        address: "Police Pension Office, Police Command Headquarter, Eleweran, Ogun State."
      },
      {
        office: "Ondo State",
        address: "Police Command Headquarter, Igbaratoro Road Akure, Ondo State."
      },
      {
        office: "Osun State",
        address: "Police Pension Office, Opposite CP's Quarters GRA  Oke Fia, Osun State"
      },
      {
        office: "Ekiti State",
        address: "Police Command Headquarters, Iyin Road, Ado-Ekiti, Ekiti State."
      },
      {
        office: "Lagos State",
        address: "Police Command Head quarter, Muize Banire Street, GRA Ikeja, Lagos"
      },
      {
        office: "Oyo State",
        address: "Police Command Headquarters, Eleyele Ibadan, Oyo State"
      },
      {
        office: "Police College Ikeja",
        address: "Police Pension Office, Police College Ikeja 27 Oba Akinjobi Way Ikeja , Lagos State."
      },
      {
        office: "Airport Command Lagos",
        address: "Airport Police Command Ikeja, Lagos State."
      },
      {
        office: "Zonal Command Lagos",
        address: "Zone 2 Headquarters Onikan, Lagos State"
      },
      {
        office: "Force CID Lagos",
        address: "Force CID Alagbon, Lagos State"
      },
      {
        office: "AIG Zone XI",
        address: "Zone XI Police HQ Osogbo, Lagos State"
      }
    ]
  },
]
