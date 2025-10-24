import { pgClient } from "../loaders/pgsqlConnection.js";

//EN Lng
const en = {
  navbar: {
    home: "home",
    order: "order",
    customer: "our customer",
    about: "about us",
    contact: "contact us",
  },
  login: {
    login: "Log in",
    emailLabel: "Enter you email address",
    emailPlaceholder: "Email Address",
    emptyEmail: "Please enter a valid email address",
    validEmail: "Please enter a valid email address",
    passwordLabel: "Enter you password",
    passwordPlaceholder: "Password",
    emptyPassword: "This field cannot be empty",
    logInBtn: "Log in",
    register: "Register",
    forgetPassword: "Forgotten password?",
    shortPassword: "This field must be at least 4 characters long.",
    userNotExist: "The user does not exist",
  },
  footer: {
    title: "123 Fakturera",
    home: "Home",
    order: "Order",
    contact: "Contact us",
    copyright: "© Lättfaktura, CRO no. 638537, 2025. All rights reserved. ",
  },
  dashMenu: {
    menu: "Menu",
    invoices: "Invoices",
    customers: "Customers",
    business: "My Busuness",
    invoiceJournal: "Invoice Journal",
    priceList: "Price List",
    multipleInvoicing: "Multiple Invoicing",
    unpaidInvoices: "Unpaid Invoices",
    offer: "Offer",
    inventoryControl: "Inventory Control",
    memberInvoicing: "Memeber Invoicing",
    importExport: "Import/Export",
    logout: "Logout",
  },
  productCol: {
    articleNo: "Article No.",
    productService: "Product/Service",
    inPrice: "In Price",
    price: "Price",
    unit: "Unit",
    inStock: "In Stock",
    description: "Description",
  },
  productAction: {
    newProduct: "New Product",
    priceList: "Price List",
    advancedMode: "Advanced mode",
    searchArticlePlaceholder: "Search Article No ..",
    searchProduct: "Search Product ..",
  },
  terms: {
    terms: "Terms",
    close: "Close and Go Back",

    termDesc1:
      "<b>BY</b> clicking Invoice Now, you choose to register according to the information that you have typed in and the text on the registration page and the terms here, and you at the same time accept the terms here.",
    termDesc2: "You can use the program FOR FREE for 14 days.",
    termDesc3:
      "123 Fakturera is so easy and self-explanatory that the chance that you will need support is minimal, but if you should need support, we are here for you, with our office manned for the most part of the day. After the trial period, the subscription continues and costs SEK 99 excluding VAT per month, which is billed annually. \nIf you do not want to keep the program, just cancel the trial period by giving notice before 14 days from registration.",
    termDesc4:
      "You have of course the right to terminate the use of the program without any costs, by giving us notice per email before 14 days from registration, that you do not want to continue with the program, and you then of course do not pay anything.",
    termDesc5:
      "If we do not receive such a notice from you before 14 days from registration, then the order, for natural reasons, cannot be changed. With registration it is meant the date and time when you did choose to press the button Invoice Now.",
    termDesc6: "Billing is for one year at a time.",
    termDesc7:
      "The price for 123 Fakturera (offer price SEK 99 per month / ordinary price SEK 159 per month) is for the annual fee Start for one year's use of the program.",
    termDesc8:
      "(When using the offer price of SEK 99, the one-year period is calculated from registration.)",
    termDesc9: "All prices are excluding. VAT.",
    termDesc10:
      "Offer, Inventory Control, Member Invoicing, Multiuser version and English printout are (or can be) additional modules that can be ordered later.",
    termDesc11:
      "Intermediation, as well as invoicing, may take place from K-Soft Sverige AB, Box 2826, 187 28 Täby. In the future, we may choose to cooperate with another company for e.g. intermediation and invoicing. However, the customer relationship is with us. The payment is made to the company from which the invoice comes.",
    termDesc12:
      "The annual fee is on a continuous basis, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.",
    termDesc13:
      "The introductory offer ( SEK 99 per month) is for the annual fee Start for the first year. After the first year, the ordinary price is billed, which is currently, for annual fee Start, one hundred and fifty-nine kroner per month, for annual fee Remote control, three hundred kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.",
    termDesc14:
      "If you choose to keep the program by not notifying us by email within 14 days of registration that you do not wish to continue with the program, you accept that you will pay the invoice for your order. Failure to pay the invoice or late payment does not give the right to cancel the order. We are happy to help you with logo at a cost price.",
    termDesc15:
      "License for the use of 123 Fakturera is of course sold in accordance with applicable laws.",
    termDesc16:
      "In order to be able to help you more easily and provide you with support, as well as to comply with the laws, we, for natural reasons, have to store your information.",
    termDesc17:
      "In connection with the storage of information, the law requires that we provide you with the following information:",
    termDesc18:
      "If you order as a private person, you have the right to cancel as stated by law. Your information is stored so that we can help you, etc. We will use it to be able to help you if you need help, follow the laws regarding bookkeeping, etc. When there are upgrades and the like, we may send you offers and the like about our products and services by email or the like. You may be contacted by email, post and telephone. If you don't want to be contacted, just send us an email about it.",
    termDesc19:
      "You can at any time ask not to be sent information about upgrades by email, letter or the like, and we will of course not do that. You send such a request to us by email, post or similar.",
    termDesc20:
      "For natural reasons, we have to store, process and move your data. Your information is stored until further notice. You give us permission to store, process and move your data, as well as to send you offers and the like by email, letter and the like, and tell others that you are customer. Due to the way it works with software, permission also needs to be given to other parties. The permission is therefore granted to us, as well as to the companies and/or person(s) who own the software, the source code, the website and the like. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control us. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control the companies (if any), which own or will own the software, source code, website and the like. It is also given to current and future persons (if any) who own or will own the software, source code, website and the like. This applies both to current and future products and services. It is also given to another company,  (like K-Soft Sverige AB), which we can use to send/sell products, upgrades and the like, either by intermediation or otherwise.",
    termDesc21:
      "You of course have the right to request access to, change and deletion of the information we hold about you. You also have the right to request restriction of data processing, and to object to data processing and the right to data portability. You have the right to complain to the supervisory authority. You can find more legal information about us [here](/us). The laws of Ireland are the applicable laws. Placing an order is of course completely voluntary. Of course, we do not use any automated profiling or decisions.",
    termDesc22:
      "If you wish to contact us, please use the information on this website.",
    termDesc23:
      "Click on Invoice Now to register according to the information you have entered and the terms here. (Date and time of admission are entered automatically in our registers.)",
    termDesc24:
      "Our experience is that our customers are very satisfied with the way we work and hope and believe that this will also be your experience.",
    termDesc25: "Have a great day!",
  },
};

// SVN lang
const svn = {
  navbar: {
    home: "hem",
    order: "Beställ",
    customer: "Våra Kunder",
    about: "om oss",
    contact: "kontakta oss",
  },
  login: {
    login: "Logga in",
    emailLabel: "Skriv in din epost adress",
    emailPlaceholder: "Epost adress",
    emptyEmail: "Vänligen skriv in en giltig epost adress",
    validEmail: "Please enter a valid email address",
    passwordLabel: "Skriv in ditt lösenord",
    passwordPlaceholder: "Lösenord",
    emptyPassword: "Detta fält kan inte vara tomt",
    logInBtn: "Logga in",
    register: "Registrera dig",
    forgetPassword: "Glömt lösenord?",
    shortPassword: "Detta fält måste innehålla minst 4 tecken",
    userNotExist: "Användaren finns inte",
  },
  footer: {
    title: "123 Fakturera",
    home: "Hem",
    order: "Beställ",
    contact: "Kontakta oss",
    copyright: "© Lättfaktura, CRO no. 638537, 2025. All rights reserved. ",
  },
  dashMenu: {
    menu: "Meny",
    invoices: "Fakturor",
    customers: "Kunder",
    business: "Mitt Företag",
    invoiceJournal: "Fakturajournal",
    priceList: "Prislista",
    multipleInvoicing: "Massfakturering",
    unpaidInvoices: "Obetalda Fakturor",
    offer: "Erbjudande",
    inventoryControl: "Lagerkontroll",
    memberInvoicing: "Medlemsfakturering",
    importExport: "Import/Export",
    logout: "Logga ut",
  },
  productCol: {
    articleNo: "Artikel Nr.",
    productService: "Produkt/Tjänst",
    inPrice: "Inpris",
    price: "Pris",
    unit: "Enhet",
    inStock: "I Lager",
    description: "Beskrivning",
  },
  productAction: {
    newProduct: "Ny Produkt",
    priceList: "Prislista",
    advancedMode: "Avancerat Läge",
    searchArticlePlaceholder: "Sök Artikel Nr ..",
    searchProduct: "Sök Produkt ..",
  },
  terms: {
    terms: "Villkor",
    close: "Stäng och gå tillbaka",
    termDesc1:
      "<b>GENOM ATT</b> klicka på Fakturera Nu så väljer ni att registrera enligt den information som ni har lagt in och texten på registrerings sidan och villkoren här, och accepterar samtidigt villkoren här.",
    termDesc2: "Ni kan använda programmet GRATIS i 14 dagar.",
    termDesc3:
      "123 Fakturera är så lätt och självförklarande att chansen för att du kommer behöva support är minimal, men om du skulle behöva support, så är vi här för dig, med vårt kontor bemannat större delen av dygnet. Efter provperioden så fortsätter abonnemanget och kostar 99 kronor exkl. moms per månad, som faktureras årligen. Om du inte vill behålla programmet, så är det bara att avbryta provperioden genom att ge oss besked inom 14 dagar från registrering.",
    termDesc4:
      "Ni har självklart rätt att avsluta användningen av programmet utan kostnad, genom att ge oss besked per email inom 14 dagar från registrering, att ni inte vill fortsätta med programmet, och betalar då självklart inte heller något.",
    termDesc5:
      "Om vi inte inom 14 dagar från registrering mottar sådant besked från er, så kan ordern av naturliga orsaker inte ändras. Med registrering menas det datum och klockslag då ni valde att trycka på knappen Fakturera Nu.",
    termDesc6: "Fakturering sker för ett år i taget.",
    termDesc7:
      "Priset för 123 Fakturera (specialpris kr 99:- / ord. pris kr 159:- per månad) är för årsavgift Start för ett års användning av programmet.",
    termDesc8:
      "(Vid användning av specialpriset kr 99:- så räknas ett års perioden från registrering.)",
    termDesc9: "Alla priser är exkl. moms.",
    termDesc10:
      "Offert, Lagerstyrning, Medlemsfakturering, Fleranvändarversion och Engelsk utskrift är (eller kan vara) tilläggsmoduler som kan beställas senare.",
    termDesc11:
      "Förmedling, samt fakturering kan komma att ske från K-Soft Sverige AB, Box 2826, 187 28 Täby. Vi kan i framtiden välja att samarbeta med annat företag för t.ex. förmedling och fakturering. Kundförhållandet är dock självklart med oss. Betalningen görs till det företag som fakturan kommer från.",
    termDesc12:
      "Årsavgiften är löpande men om ni inte vill fortsätta att använda programmet, så är det bara att ge besked trettio dagar innan ingången av nästföljande ett års period.",
    termDesc13:
      "Introduktionspriset (kr 99:- per månad) är för årsavgift Start för det första året. Efter det första året faktureras ord. pris vilket för närvarande är, för årsavgift Start, ett hundra och femtinio kronor per månad, för årsavgift Fjärrstyrning, tre hundra kronor per månad och för årsavgift Pro, tre hundra och trettiotre kronor per månad. Efter ett år faktureras årsavgift Fjärrstyrning som standard men ni kan välja Start eller Pro genom att ge besked när som helst innan förfallodagen.",
    termDesc14:
      "Om ni väljer att behålla programmet genom att inte ge oss besked per email innan 14 dagar från registrering, om att ni inte vill fortsätta med programmet, så accepterar ni att ni kommer att betala fakturan för er beställning. Att inte betala fakturan eller sen betalning ger inte rätt till att annullera beställningen. Vi hjälper gärna att fiksa logo för er till självkostpris.",
    termDesc15:
      "Licens för användning av 123 Fakturera säljs självklart enligt gällande lagar.",
    termDesc16:
      "I samband med lagring av information så kräver lagen att vi ger er följande information: ",
    termDesc17:
      "Om ni beställer som privatperson så har ni den ångerrätt som lagen fastställer. Er information sparas så att vi kan hjälpa er m.m. Vi kommer använda den för att kunna hjälpa er om ni behöver hjälp, följa lagarna ang. bokföring m.m. När det kommer uppgraderingar och liknande, kan vi komma att skicka er erbjudande och liknande om våra produkter och tjänster per email eller liknande. Ni kan också komma att bli kontaktad per email, post och telefon. Om ni inte vill bli kontaktad, bara skicka oss en email ang. det.",
    termDesc18:
      "För att lättare kunna hjälpa er och ge er support samt för att följa lagarna, måste vi av naturliga orsaker spara er information.",
    termDesc19:
      "Ni kan när som helst begära att inte få tillsänt information om uppgraderingar per email, brev eller liknande och vi kommer då självklart inte att göra det. Sådan begäran skickar ni till oss per email, brev eller liknande.",
    termDesc20:
      "Av naturliga orsaker måste vi spara, databehandla och flytta era data. Er information sparas tills vidare. Ni ger oss medgivande till att lagra, databehandla och flytta era data, samt att skicka er erbjudanden och liknande per email, brev och liknande, samt att informera andra om att ni är kund. Pga. sättet det fungerar på med programvara behöver medgivandet också ges till andra parter. Medgivandet ges därför till oss, samt till de företag och/eller person/personer som äger programvaran, källkod, hemsidan och liknande. Det ges också till nuvarande och framtida företag ägda och/eller kontrollerade av en eller flera av de som i dag äger och/eller kontrollerar oss. Det ges också till nuvarande och framtida personer (om några) som äger eller kommer till att äga programvaran, källkod, hemsidan och liknande. Detta både för nuvarande och framtida produkter och tjänster. Det ges också till ett annat företag, (som K-Soft Sverige AB), som vi kan använda för att skicka/sälja produkter, uppgraderingar och liknande, antingen genom att under förmedla programvaran eller på annat sätt.",
    termDesc21:
      "Ni har självklart rätt att begära tillgång till, rättelse eller radering av informationen vi har om er. Ni har också rätt att begära begränsning av behandlingen av era uppgifter, eller att invända mot behandling samt rätten till dataportabilitet. Ni har självklart rätt att klaga till tillsynsmyndighet. Mer juridisk info om oss hittar ni [här](/us). Det är lagarna i Irland som är gällande lagar. Det är självklart helt frivilligt att lägga er order. Vi använder självklart inte någon automatiserad profilering och inte heller något automatiserat beslutsfattande.",
    termDesc22:
      "Om ni vill kontakta oss, vänligen använd då informationen på denna hemsidan.",
    termDesc23:
      "Klicka på Fakturera Nu för att registrera i enlighet med den information som ni har lagt in och villkoren här. (Datum och tidpunkt för inläggningen läggs in automatiskt i våra register.)",
    termDesc24:
      "Vår erfarenhet är att våra kunder är mycket nöjda med sättet vi arbetar på och vi hoppas och tror att det också kommer att bli er upplevelse.",
    termDesc25: "Ha en trevlig dag!",
  },
};

// Populate Languages
export const populateLanguage = async () => {
  const client = await pgClient();

  const queries = `INSERT INTO languages (language, code, logo, navbar, login, footer, terms, dashmenu, productcolumn, productaction)
   VALUES
    ('English', 'en', 'https://storage.123fakturere.no/public/flags/GB.png', '${JSON.stringify(
      en.navbar
    ).replace(/'/g, "''")}', '${JSON.stringify(en.login).replace(
    /'/g,
    "''"
  )}', '${JSON.stringify(en.footer).replace(/'/g, "''")}', '${JSON.stringify(
    en.terms
  ).replace(/'/g, "''")}', '${JSON.stringify(en.dashMenu).replace(
    /'/g,
    "''"
  )}', '${JSON.stringify(en.productCol).replace(
    /'/g,
    "''"
  )}', '${JSON.stringify(en.productAction).replace(/'/g, "''")}'
    ),
    ('Svenska', 'svn', 'https://storage.123fakturere.no/public/flags/SE.png', '${JSON.stringify(
      svn.navbar
    ).replace(/'/g, "''")}', '${JSON.stringify(svn.login).replace(
    /'/g,
    "''"
  )}', '${JSON.stringify(svn.footer).replace(/'/g, "''")}', '${JSON.stringify(
    svn.terms
  ).replace(/'/g, "''")}', '${JSON.stringify(svn.dashMenu).replace(
    /'/g,
    "''"
  )}', '${JSON.stringify(svn.productCol).replace(
    /'/g,
    "''"
  )}', '${JSON.stringify(svn.productAction).replace(/'/g, "''")}'
   );`;

  try {
    await client.query(queries);
    console.log("Table 'languages' populated successfully!");
  } catch (err) {
    console.error("Error populating languages:", err.message);
  }
};
