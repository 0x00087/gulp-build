import * as flsFunction from './modules/function.js';

flsFunction.isWebp();

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  slidesPerView: 1,
  allowTouchMove: false,

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  breakpoints: {
    1280: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    708: {
      slidesPerView: 2,
    },
  },
});

/* Modal Handler */
const specData = [
  {
    id: 1,
    title: 'ФИНАНСЫ<br>(КОЛЛЕДЖ ВЯТГУ)',
    form: 'заочная с применением дистанционных технологий',
    spec: [],
    link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=292febfe40ed719c1565a65f4d51d757d45add82dc6eca399784fefd98423b29&profile_id=9305',
  },
  {
    id: 2,
    title: 'ТЕХНОСФЕРНАЯ БЕЗОПАСНОСТЬ<br>(МАГИСТРАТУРА)',
    form: 'заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'безопасность технологических процессов и производств',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=1078516a055dada1ab262c11e6431498d0eca341e374f84baf2207873805c65a&profile_id=9043',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=1078516a055dada1ab262c11e6431498d0eca341e374f84baf2207873805c65a&profile_id=9043',
  },
  {
    id: 3,
    title: 'БИЗНЕС-ИНФОРМАТИКА<br>(БАКАЛАВРИАТ)',
    form: 'очно-заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'архитектура предприятия',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=5492e40105def275f66db65afe267c8460eec4816c41db85eac9634fc72e5964&profile_id=9115',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=5492e40105def275f66db65afe267c8460eec4816c41db85eac9634fc72e5964&profile_id=9115',
  },
  {
    id: 4,
    title: 'ПЕДАГОГИЧЕСКОЕ ОБРАЗОВАНИЕ<br>(БАКАЛАВРИАТ)',
    form: 'заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'история',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=09e115a7a80c6617bbe7c4044f330d5a82ad8d3a58956726f0a854d7739f03e7&profile_id=9202',
      },
      {
        name: 'менеджмент в образовании',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=38fb0d6844449d8543b96570dc3e8f91760a484c31b785165f64ebed90ea3517&profile_id=9204',
      },
      {
        name: 'начальное образование',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=da6ea7961418cea72c7b277bc91c28678c0e943abde8d5900926e96886c72236&profile_id=9203',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%D0%B8%D0%B0%D1%82%2F%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%82%D0%B5%D1%82&on_site_form_ob=%D0%97%D0%B0%D0%BE%D1%87%D0%BD%D0%B0%D1%8F+%28%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%29&on_base=%D0%9E%D0%B1%D1%89%D0%B5%D0%B3%D0%BE+%2F+%D0%92%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE&other=',
  },
  {
    id: 5,
    title: 'ЮРИСПРУДЕНЦИЯ<br>(МАГИСТРАТУРА) ',
    form: 'заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'адвокатура и нотариата',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=08da913b6acc3dea05f5cee6d8d132ec527e362159a67646d3eed15dc487ea22&profile_id=9114',
      },
      {
        name: 'защита трудовых и социальных прав',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=08da913b6acc3dea05f5cee6d8d132ec527e362159a67646d3eed15dc487ea22&profile_id=9105',
      },
      {
        name: 'организация юридической службы',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=08da913b6acc3dea05f5cee6d8d132ec527e362159a67646d3eed15dc487ea22&profile_id=9109',
      },
      {
        name: 'правовое обеспечение государственного и муниципального управления',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=08da913b6acc3dea05f5cee6d8d132ec527e362159a67646d3eed15dc487ea22&profile_id=9117',
      },
      {
        name: 'прокурорская и судебная деятельность',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=08da913b6acc3dea05f5cee6d8d132ec527e362159a67646d3eed15dc487ea22&profile_id=9095',
      },
      {
        name: 'теория и практика применения уголовного закона',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=08da913b6acc3dea05f5cee6d8d132ec527e362159a67646d3eed15dc487ea22&profile_id=9152',
      },
      {
        name: 'цивилистика: материальные и процессуальные аспекты',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=08da913b6acc3dea05f5cee6d8d132ec527e362159a67646d3eed15dc487ea22&profile_id=9104',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=%D0%9C%D0%B0%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0&on_site_form_ob=%D0%97%D0%B0%D0%BE%D1%87%D0%BD%D0%B0%D1%8F+%28%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%29&on_base=%D0%9E%D0%B1%D1%89%D0%B5%D0%B3%D0%BE+%2F+%D0%92%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE&other=',
  },
  {
    id: 6,
    title: 'ЭКОНОМИКА<br>(БАКАЛАВРИАТ) ',
    form: 'очно-заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'бухгалтерский учет, анализ и аудит',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=cff171c039dd1087ca2db3201e32b84fecd1de709b4286a22ba17a4b00964635&profile_id=9098',
      },
      {
        name: 'финансы и кредит',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=18cd3cc50bc4681855f160fb76ed48b6fd842c942534913a0b2cc294ea30f316&profile_id=9090',
      },
      {
        name: 'экономика предприятий и организаций',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=a8e1c5ad1d4449a233f4e3cdd5c43fa704d052359296ec448aa7551243da2ab5&profile_id=9106',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%D0%B8%D0%B0%D1%82%2F%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%82%D0%B5%D1%82&on_site_form_ob=%D0%9E%D1%87%D0%BD%D0%BE-%D0%B7%D0%B0%D0%BE%D1%87%D0%BD%D0%B0%D1%8F+%28%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%29&on_base=%D0%9E%D0%B1%D1%89%D0%B5%D0%B3%D0%BE+%2F+%D0%92%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE&other=',
  },
  {
    id: 7,
    title: 'ПЕДАГОГИЧЕСКОЕ ОБРАЗОВАНИЕ<br>(магистратура) ',
    form: 'заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'бухгалтерский учет, анализ и аудит',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=49f4c046e75f1c03a6a94402fad2048a6fd61b95760c09138ba1f8835f7d0e37&profile_id=9088',
      },
      {
        name: 'управление проектами и программами в образовании',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=b0730b4d02acfe09e06184a9dd6b5bcc413c0f48edaa1d5dd2e890ff24e639c9&profile_id=9140',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=%D0%9C%D0%B0%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0&on_site_form_ob=%D0%97%D0%B0%D0%BE%D1%87%D0%BD%D0%B0%D1%8F+%28%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%29&on_base=%D0%9E%D0%B1%D1%89%D0%B5%D0%B3%D0%BE+%2F+%D0%92%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE&other=',
  },
  {
    id: 8,
    title: 'ПСИХОЛОГО-<br>ПЕДАГОГИЧЕСКОЕ ОБРАЗОВАНИЕ<br>(бакалавриат) ',
    form: 'заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'педагогика и психология дошкольного образования',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=1754b4a1b994db20634b3b0687aff7346d74df735e689f45d17144a508998910&profile_id=9200',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=1754b4a1b994db20634b3b0687aff7346d74df735e689f45d17144a508998910&profile_id=9200',
  },
  {
    id: 9,
    title: 'ЗЕМЕЛЬНО-<br>ИМУЩЕСТВЕННЫЕ ОТНОШЕНИЯ<br>(КОЛЛЕДЖ)',
    form: 'заочная с применением дистанционных технологий',
    spec: [],
    link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=d4bc0afece2eb258e10c40a621263b471d19ef476896e6d4644537d0bf0f3f15&profile_id=9298',
  },
  {
    id: 10,
    title: 'СТРОИТЕЛЬСТВО<br>(БАКАЛАВРИАТ) ',
    form: 'очно-заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'промышленное и гражданское строительство',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=69c0e62c41f6af619aec19f8f6f259d0849ffa3e5a4111f9142b4d3941e63200&profile_id=9064',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=69c0e62c41f6af619aec19f8f6f259d0849ffa3e5a4111f9142b4d3941e63200&profile_id=9064',
  },
  {
    id: 11,
    title: 'УПРАВЛЕНИЕ ПЕРСОНАЛОМ<br>(БАКАЛАВРИАТ) ',
    form: 'очно-заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'управление персоналом организации',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=1d2e08f3640b74f4d08572a8c8c0d770d34d57207234b4a7ad81bc04c6b2d364&profile_id=9077',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=1d2e08f3640b74f4d08572a8c8c0d770d34d57207234b4a7ad81bc04c6b2d364&profile_id=9077',
  },
  {
    id: 12,
    title: 'ГОСУДАРСТВЕННОЕ И МУНИЦИПАЛЬНОЕ<br>УПРАВЛЕНИЕ<br>(бакалавриат) ',
    form: 'заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'региональное управление и местное самоуправление',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=b3c10fecd52154498f727c1ad24ae24af36b1c02100c829454f569df73506248&profile_id=9081',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=b3c10fecd52154498f727c1ad24ae24af36b1c02100c829454f569df73506248&profile_id=9081',
  },
  {
    id: 13,
    title: 'ЮРИСПРУДЕНЦИЯ<br>(БАКАЛАВРИАТ)',
    form: 'очно-заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'гражданско-правовой',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=deba96db590b480db56866478ee22ed7106306eebf2c449fa490322e72d47e27&profile_id=9205',
      },
      {
        name: 'уголовно-правовой',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=ab2d4d0462ffa89edf5544ca78be4f3ff37d50af8981389e9764e2f6961a7d8b&profile_id=9206',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%D0%B8%D0%B0%D1%82%2F%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%82%D0%B5%D1%82&on_site_form_ob=%D0%97%D0%B0%D0%BE%D1%87%D0%BD%D0%B0%D1%8F+%28%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%29&on_base=%D0%9E%D0%B1%D1%89%D0%B5%D0%B3%D0%BE+%2F+%D0%92%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE&other=',
  },
  {
    id: 14,
    title: 'ЭКОНОМИКА<br>(магистратура) ',
    form: 'заочная с применением дистанционных технологий',
    spec: [
      {
        name: 'бухгалтерский учет и контроль',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=b3b5d5e6ddd1ae54d9b29add6399a4a1b13dc697f7a7a84bad09b0c50fa5b889&profile_id=9061',
      },
      {
        name: 'экономическая безопасность организации',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=79efa67cbd6f016ef571e4a8680b42f454401c09a61dd2a25069ab3fcd31eb23&profile_id=9063',
      },
      {
        name: 'экономика предприятий и организаций',
        link: 'https://new.vyatsu.ru/admission/admission_special/detail.php?oop_code=81b97c3c37cfa616a5729ff7bc66b50ee89ed5a224774f9e73c7f8729a4a9c74&profile_id=9059',
      },
    ],
    link: 'https://new.vyatsu.ru/admission/admission_special/?on_site_level=%D0%9C%D0%B0%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0&on_site_form_ob=%D0%97%D0%B0%D0%BE%D1%87%D0%BD%D0%B0%D1%8F+%28%D0%B4%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%29&on_base=%D0%9E%D0%B1%D1%89%D0%B5%D0%B3%D0%BE+%2F+%D0%92%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE&other=',
  },
];

let swiperWrapper = document.querySelector('.swiper-wrapper');
swiperWrapper.addEventListener('click', (event) => {
  if (event.target.closest('.swiper-slide')) {
    let modal = document.querySelector('.modal');
    let modalTitle = document.querySelector('.modal__title');
    let modalItem = document.querySelectorAll('.modal__item');
    let modalButton = document.querySelector('.modal__button');
    let modalImage = document.querySelector('.modal__picture');

    modal.classList.add('active');

    let currentEl = [...swiperWrapper.children].indexOf(event.target.closest('.swiper-slide')) - 4;

    modalTitle.innerHTML = specData[currentEl]['title'];

    modalItem[0].innerHTML = '<span>Форма обучения: </span>';
    modalItem[0].innerHTML += specData[currentEl]['form'];

    if (specData[currentEl]['spec'].length > 0) {
      modalItem[1].innerHTML = '<span>Профили: </span>';
      specData[currentEl]['spec'].forEach((element) => {
        modalItem[1].innerHTML +=
          "<a href='" + element['link'] + "' target='_blank'>" + element['name'] + '</a>; ';
      });
    } else {
      modalItem[1].innerHTML = '';
    }

    modalButton.href = specData[currentEl]['link'];
    modalImage.src = 'images/carousel/' + specData[currentEl]['id'] + '.png';
  }
});

let closeButton = document.querySelector('.modal__close');

closeButton.addEventListener('click', (event) => {
  let modal = document.querySelector('.modal');
  modal.classList.remove('active');
});

let modal = document.querySelector('.modal');

modal.addEventListener('click', (event) => {
  modal.classList.remove('active');
});

/* Advertisement Handler */
const advertisementData = [
  {
    id: 1,
    text: 'Дистанционное образование равноценно традиционному заочному: учебные программы не отличаются друг от друга.<br><br>После окончания ВУЗа обучающийся получает диплом государственного образца. ',
  },
  {
    id: 2,
    text: 'Индивидуальный подход является частью учебного процесса, он помогает вовлечь всех студентов в активную учебную деятельность.<br><br>Индивидуальный подход полностью адаптирует содержание, методы и темпы образовательного процесса, дает возможность обучающемуся постоянно контролировать затраты своих сил и работать в оптимальное для себя время, что, естественно, позволяет достигать высоких результатов обучения.',
  },
  {
    id: 3,
    text: 'При дистанционном обучении не требуется искать учебные материалы самостоятельно, все они находятся в личном кабинете.<br><br>Доступ к ним круглосуточный. Это удобно, если нужно уточнить информацию или обновить знания.',
  },
  {
    id: 4,
    text: 'Программа дистанционного образования может предполагать целый набор способов предоставления информации:   обычную и электронную почту, телефон, факс, Интернет, а также аудио и видеоконференции. <br><br>Взаимодействие между обучающимся и преподавателем может быть синхронным (взаимодействие в реальном времени) или асинхронным (такой формат отличается большой гибкостью и дает возможность студенту выбирать удобное для него время работы над материалом курса). ',
  },
  {
    id: 5,
    text: 'Получать образование на расстоянии может каждый обучающийся без привязки к месту, находясь в любой точке России или в одной из зарубежных стран.<br><br>Это очень удобная и доступная форма учебы для работающих людей, для женщин в декрете и домохозяек, для людей с ограниченными физическими возможностями и для тех, у кого нет возможности постоянно посещать занятия в университете. ',
  },
  {
    id: 6,
    text: 'Дистанционный формат обучения сочетается с большой долей самостоятельной работы студента, что является активной мыслительной деятельностью. У обучающегося есть возможность прослушать материал повторно. <br><br>Кроме того, обучающийся находится в постоянном онлайн-контакте с однокурсниками и преподавателями — что является поддерживающей средой, а также площадкой, где можно получить ответы на все вопросы. Всё это делает вас более увлечённым, а ваши знания качественнее.',
  },
];

let currentEl = 0;
let advertisementText = document.querySelector('.advertisement__text');
let prevButton = document.querySelector('.advertisement__prev');
let nextButton = document.querySelector('.advertisement__next');
let advertisementClose = document.querySelector('.advertisement__close');
let advertisementColumn = document.querySelector('.advertisement__column');

prevButton.addEventListener('click', () => {
  if (currentEl == 0) {
    currentEl = 5;
  } else {
    currentEl--;
  }

  [...advertisementColumn.children].forEach((element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  });

  [...advertisementColumn.children][currentEl].classList.add('active');

  advertisementText.innerHTML = advertisementData[currentEl]['text'];
});

nextButton.addEventListener('click', () => {
  if (currentEl == 5) {
    currentEl = 0;
  } else {
    currentEl++;
  }

  [...advertisementColumn.children].forEach((element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  });

  [...advertisementColumn.children][currentEl].classList.add('active');

  advertisementText.innerHTML = advertisementData[currentEl]['text'];
});

advertisementClose.addEventListener('click', () => {
  let advertisementWindow = document.querySelector('.advertisement__window');
  advertisementWindow.classList.remove('active');

  [...advertisementColumn.children].forEach((element) => {
    if (element.classList.contains('active')) {
      element.classList.remove('active');
    }
  });
});

advertisementColumn.addEventListener('click', (event) => {
  if (event.target.closest('.advertisement__item')) {
    currentEl = [...advertisementColumn.children].indexOf(
      event.target.closest('.advertisement__item'),
    );

    [...advertisementColumn.children].forEach((element) => {
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      }
    });

    event.target.closest('.advertisement__item').classList.add('active');

    advertisementText.innerHTML = advertisementData[currentEl]['text'];

    let advertisementWindow = document.querySelector('.advertisement__window');
    advertisementWindow.classList.add('active');
  }
});

advertisementColumn.addEventListener('mouseover', (event) => {
  if (event.target.closest('.advertisement__item')) {
    currentEl = [...advertisementColumn.children].indexOf(
      event.target.closest('.advertisement__item'),
    );

    let gridTemplate = document.querySelector('.advertisement__grid');

    gridTemplate.classList.add('disabled');

    for (let i = 0; i < [...gridTemplate.children].length; i++) {
      if (currentEl != i) {
        [...gridTemplate.children][i].classList.add('disabled');
      }
    }
  }
});

advertisementColumn.addEventListener('mouseout', (event) => {
  if (event.target.closest('.advertisement__item')) {
    let gridTemplate = document.querySelector('.advertisement__grid');

    gridTemplate.classList.remove('disabled');

    for (let i = 0; i < [...gridTemplate.children].length; i++) {
      if ([...gridTemplate.children][i].classList.contains('disabled')) {
        [...gridTemplate.children][i].classList.remove('disabled');
      }
    }
  }
});

/* SWITCHER */
let switcher = document.querySelector('.footer__switcher');

switcher.addEventListener('click', (event) => {
  document.querySelector('.footer__switch').classList.toggle('active');
});

let disabledInput = document.querySelector('.footer__input');

disabledInput.addEventListener('click', (event) => {
  event.stopPropagation();
});
