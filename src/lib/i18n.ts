import { info } from "console";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: 'en',

  resources: {
    en: {
      translation: {
        hi: "Hi",
        im: "I'm Eugene Kuleshov",
        developer: "developer",
        resume: "resume",
        light: "Light",
        dark: "Dark",
        system: "System",

        quickInfo: "Quick info",
        aboutMe: "About me",
        yearsOld: "years old",
        basedIn: "Based in",
        omsk: "Omsk",
        russia: "Russia",
        selfTaught: "Self-taught",
        developmentEnjoyer: "development enjoyer",
        yearsExperience: "years of work experience",
        skills: "Skills",

        aboutSumParagraph1: "One day when I was 13, I was browsing the internet and came across an article that changed my life! It was all about how to create a simple program on",
        batch: "Batch",
        aboutSumParagraph2: "After reading the article and experimenting with my first program, I was hooked! I decided to keep learning and started exploring more complex programming languages.",
        aboutSumParagraph3_1: "After a while, I came across something that changed everything.",
        python: "Python",
        aboutSumParagraph3_2: "! I was instantly hooked and decided to dive into backend development.",
        aboutSumParagraph4: "Couple of months of reading tons of books, guides on the internet, and practicing the principle of «if I think of it, I do it» and I finally was thrilled to find my first paid order and then my first job.",
        aboutSumParagraph5: "Since then, I've been on a non-stop journey of growth and improvement, constantly learning and applying new practices and technologies.",
        aboutSumParagraph6_1: "My approach is to embrace the full spectrum of development technologies and not to limit myself to just one field or technology. To me, they are a",
        tool: "tool",
        aboutSumParagraph6_2: ", and a programmer is someone who knows how to",
        master: "master",
        and: "and",
        apply: "apply",
        aboutSumParagraph6_3: "this tool to solve real-world problems in business.",

        services: "Services",
        backendEngineering: "Backend engineering",
        frontendCreation: "Interactive frontend creation",
        blockchainDevelopment: "Blockchain development",
        automationAndQA: "Automation & Quality Assurance",
        architecting: "Architecting scalable systems",
      }
    },
    ru: {
      translation: {
        hi: "Привет",
        im: "Я Евгений Кулешов",
        developer: "разработчик",
        resume: "резюме",
        light: "Светлая",
        dark: "Темная",
        system: "Системная",

        quickInfo: "Немного информации",
        aboutMe: "Обо мне",
        yearsOld: "лет",
        basedIn: "Нахожусь в",
        omsk: "Омск",
        russia: "Россия",
        selfTaught: "Самоучка,",
        developmentEnjoyer: "наслаждающийся программированием",
        yearsExperience: "лет рабочего опыта",
        skills: "Навыки",

        aboutSumParagraph1: "Однажды, когда мне было 13 лет, я скроллил интернет и наткнулся на статью, рассказывающую о том, как можно создать простую программу на языке",
        aboutSumParagraph2: "Прочитав статью вдоль и поперек, а также экспериментируя со своей первой программой, я решил на этом не останавливаться и начал изучать более сложные языки программирования.",
        aboutSumParagraph3_1: "Через некоторое время изучений и поисков своего языка, я наткнулся на",
        aboutSumParagraph3_2: " и, можно сказать, влюбился с первого взгляда, решив начать в сфере backend разработки.",
        aboutSumParagraph4: "Спустя пару месяцев чтения книг, гайдов в интернете и практики по принципу «пришло в голову - сделал» я нашел свой первый оплачиваемый заказ, а после и свою первую работу.",
        aboutSumParagraph5: "С тех пор я нахожусь на безостановочном пути роста и совершенствования, постоянно изучая и применяя новые практики и технологии.",
        aboutSumParagraph6_1: "Я не ограничиваю себя одной сферой или технологией. Для меня технологии разработки - это в первую очередь",
        tool: "инструмент",
        aboutSumParagraph6_2: ", а программист - человек, который умеет",
        master: "изучить",
        and: "и",
        apply: "применить",
        aboutSumParagraph6_3: "этот инструмент в деле.",

        services: "Сферы",
        backendEngineering: "Backend-разработка",
        frontendCreation: "Создание интекративного frontend'а",
        blockchainDevelopment: "Блокчейн разработка",
        automationAndQA: "Автоматизация & Тестирование",
        architecting: "Разработка архитектуры масштабируемых систем",
      }
    },
  }
});

export default i18n;
