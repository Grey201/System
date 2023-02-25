const menuLinks = document.querySelectorAll('.header__menu-link');

menuLinks.forEach((link) =>
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    const id = link.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  })
);

const heroContant = [
  {
    title: 'Разработано 2000+ приложений',
    image: 'hero_1',
    subtitle:
      'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
  },
  {
    title: 'Бесплатные приложения',
    image: 'hero_2',
    subtitle:
      'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
  },
  {
    title: 'Тысячи довольных клиентов',
    image: 'hero_3',
    subtitle:
      'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов',
  },
];

const heroDots = document.querySelectorAll('.hero__dot');
const heroImage = document.querySelector('.hero__image');
const heroTitle = document.querySelector('.hero__title');
const heroSubtitle = document.querySelector('.hero__subtitle');

heroDots.forEach((dot, index) =>
  dot.addEventListener('click', () => {
    heroDots.forEach((el) => el.classList.remove('active'));
    dot.classList.add('active');
    heroImage.src = `assets/${heroContant[index].image}.jpg`;
    heroTitle.textContent = heroContant[index].title;
    heroSubtitle.textContent = heroContant[index].subtitle;
  })
);

const caption = [
  'Создаем кастомизированные программы и сервисы для развития управленческих команд в российских и международных компаниях',
  'Помогаем руководителям и командам колл-центров создать полный цикл по поддержке клиентов и организовать контроль качества',
  ' Разрабатываем локальные защищенные корпоративные хранилища, а также осуществляем поддержку на протяжении всего времени пользования',
];

const featuresItems = document.querySelectorAll('.features__item');
const featureCaption = document.querySelector('.features__caption');

featuresItems.forEach((item, index) =>
  item.addEventListener('click', () => {
    featuresItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');
    featureCaption.textContent = caption[index];
  })
);
