// =============================================================
// CONFIGURACIÓN CENTRAL POR MARCA/SITIO
// Aquí vive todo lo que cambia entre BJXMODA, CEDICE, Kiu Models
// y León Fashion Film: textos, imágenes, colores, navegación y
// definición de los campos de cada formulario.
// Agregar una nueva marca en el futuro = agregar una entrada aquí
// (+ eventualmente una página si su layout es muy distinto).
// =============================================================

const IMG = {
  bjxmoda: (name) => `/images/bjxmoda/${name}`,
  cedice: (name) => `/images/cedice/${name}`,
  kiu: (name) => `/images/kiu-models/${name}`,
  leon: (name) => `/images/leon-fashion/${name}`,
  shared: (name) => `/images/shared/${name}`,
};

export const navLinks = [
  { to: '/', label: 'BJXMODA' },
  { to: '/cedice', label: 'CEDICE Guanajuato Moda' },
  { to: '/leon-fashion', label: 'León FF Guanajuato' },
  { to: '/kiu-models', label: 'Kiu Models' },
];

export const sites = {
  bjxmoda: {
    id: 'bjxmoda',
    project: 'bjxmoda',
    name: 'BJXMODA',
    title: 'BJXMODA',
    metaDescription:
      'BJXMODA es la plataforma que impulsa el talento, diseño y consumo local de moda en Guanajuato. Conoce a Paco Granados, nuestros proyectos y socios.',
    logoLight: IMG.bjxmoda('bjxmoda-blanco.svg'),
    logoDark: IMG.bjxmoda('bjxmoda-letra-negra.svg'),

    carouselGroups: [
      [
        { src: IMG.bjxmoda('cr-1.webp'), alt: 'Modelo BJXMODA 1' },
        { src: IMG.bjxmoda('cr-2.webp'), alt: 'Modelo BJXMODA 2' },
        { src: IMG.bjxmoda('cr-3.webp'), alt: 'Modelo BJXMODA 3' },
        { src: IMG.bjxmoda('cr-16.webp'), alt: 'Modelo BJXMODA 4' },
      ],
      [
        { src: IMG.bjxmoda('cr-5.webp'), alt: 'Modelo BJXMODA 5' },
        { src: IMG.bjxmoda('cr-6.webp'), alt: 'Modelo BJXMODA 6' },
        { src: IMG.bjxmoda('cr-7.webp'), alt: 'Modelo BJXMODA 7' },
        { src: IMG.bjxmoda('cr-8.webp'), alt: 'Modelo BJXMODA 8' },
      ],
      [
        { src: IMG.bjxmoda('cr-9.webp'), alt: 'Modelo BJXMODA 9' },
        { src: IMG.bjxmoda('cr-18.webp'), alt: 'Modelo BJXMODA 10' },
        { src: IMG.bjxmoda('cr-11.webp'), alt: 'Modelo BJXMODA 11' },
        { src: IMG.bjxmoda('cr-12.webp'), alt: 'Modelo BJXMODA 12' },
      ],
      [
        { src: IMG.bjxmoda('cr-10.webp'), alt: 'Modelo BJXMODA 13' },
        { src: IMG.bjxmoda('cr-15.webp'), alt: 'Modelo BJXMODA 14' },
        { src: IMG.bjxmoda('cr-19.webp'), alt: 'Modelo BJXMODA 15' },
        { src: IMG.bjxmoda('cr-17.webp'), alt: 'Modelo BJXMODA 16' },
      ],
    ],
    carouselLogo: IMG.bjxmoda('bjxmoda-blanco.svg'),

    about: {
      variant: 'simple',
      image: IMG.bjxmoda('Paco-1.jpg'),
      imageAlt: 'Paco Granados',
      title: 'Paco Granados',
      paragraphs: [
        'Licenciado en Ciencias de la Comunicación y Máster en Imagen, Paco Granados cuenta con más de 30 años de trayectoria en comunicación, producción y moda. Durante 18 años colaboró en Televisa del Bajío y ha participado en importantes proyectos de televisión, radio y pasarelas. En 2020 fundó ',
      ],
      highlight: 'BJXMODA',
      afterHighlight:
        ', plataforma dedicada a impulsar el talento, diseño y consumo local de Guanajuato, desarrollando proyectos como ',
      highlight2: 'León Fashion Film, Moda In y Más Que Moda.',
      afterHighlight2: ' Actualmente continúa promoviendo la industria de la moda y el emprendimiento en Guanajuato.',
      link: 'https://www.instagram.com/pacogranados?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      linkLabel: 'Redes Sociales',
    },

    videoSection: {
      variant: 'default',
      heading: 'BJXMODA SHORTS',
      description: 'Una colección de videos que reflejan estilo, identidad y visión creativa.',
      exploreLink: 'https://youtube.com/@bjxmoda2398?si=gqgk3PHPhsiiCQav',
      exploreLabel: 'Explorar canal',
      items: [
        {
          image: IMG.bjxmoda('mujeres-poderosas-1.webp'),
          title: 'Mujeres poderosas; artesanas, emprendedoras y creativas.',
          description:
            'Historias que inspiran desde la creatividad, el talento y la fuerza de mujeres que transforman la moda y el diseño local.',
          link: 'https://youtu.be/c8eTblMbQ68?si=tkqSrl2PrW0nU1eK',
        },
        {
          image: IMG.bjxmoda('producto-nacional.webp'),
          title: 'El consumo de productos nacionales',
          description: 'Las ventajas comerciales de poner de MODA al consumo local de Guanajuato y de México para el mundo',
          link: 'https://youtu.be/k6eEHldJf_8?si=ro9M3Hpcw7zKVwyr',
        },
        {
          image: IMG.bjxmoda('tendencia-moda.webp'),
          title: 'Las nuevas tendencias de México',
          description: 'Descubre las propuestas, estilos y tendencias que están redefiniendo la moda mexicana y el diseño creativo.',
          link: 'https://youtu.be/ci18YorI2vk?si=9mr8yl4xt36T3-bA',
        },
        {
          image: IMG.bjxmoda('ruta-diseno-gto-1.webp'),
          title: 'BJXMODA: La ruta del Diseño en GTO',
          description: 'Un recorrido visual por el talento, la innovación creativa que impulsa el diseño en Guanajuato.',
          link: 'https://youtu.be/RW-7YpxcS2w?si=GB_yXlMplwiAzk5T',
        },
        {
          image: IMG.bjxmoda('comunidad-bjxmoda.webp'),
          title: 'Comunidad BJXMODA',
          description: 'Conoce la esencia de una comunidad que une moda, creatividad y colaboración para impulsar el talento local.',
          link: 'https://youtu.be/Nj56-_BNxnc?si=UBzxbDMaVYaA4IND',
        },
        {
          image: IMG.bjxmoda('clausura-ruta.webp'),
          title: 'Clausura La Ruta del Diseño BJXMODA',
          description: 'Así se vivió el cierre de una experiencia llena de diseño, inspiración y momentos que celebran la creatividad mexicana.',
          link: 'https://youtu.be/4r1TF5e-cAY?si=dMyFYCK8eVYSRTgh',
        },
      ],
    },

    partners: {
      heading: 'BJXMODA Socios & Aliados',
      description: 'Colaboramos con marcas, creativas y empresas que comparten nuestra visión de la moda y la innovación',
      directoryLink: 'https://directoriobjxmoda.com/',
      directoryLabel: 'Ver Directorio Completo',
      items: [
        {
          image: IMG.bjxmoda('kiumodel-1.webp'),
          imageAlt: 'Kiumodels',
          name: 'Kiumodels',
          tags: ['Modelaje', 'Fashion Agency'],
          description: 'Agencia de talento y producción de moda - kiumodels',
          smallLabel: 'Agencia de Talento',
          footerName: 'KIUMODELS Agencia',
          link: 'https://www.instagram.com/kiumodels?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          reverse: false,
        },
        {
          image: IMG.bjxmoda('creativo-1.webp'),
          imageAlt: 'Creativohubmx',
          name: 'Creativohubmx',
          tags: ['Producción Audiovisual', 'Marketing Digital'],
          description: 'Plataforma creativa enfocada en la producción audiovisual y marketing digital.',
          smallLabel: 'Producción Audiovisual & Marketing',
          footerName: 'Creativohubmx',
          link: 'https://www.instagram.com/creativohubmx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          reverse: true,
        },
        {
          image: IMG.bjxmoda('leonfashion-1.webp'),
          imageAlt: 'León Fashion Film',
          name: 'León Fashion Film GTO',
          tags: ['Moda', 'Industria Fashion'],
          description: 'Plataforma y evento enfocado en la creación de fashion films que fusionan moda y cine.',
          smallLabel: 'Fashion Film & Producción',
          footerName: 'León Fashion Film GTO',
          link: 'https://www.instagram.com/leonffguanajuato?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          reverse: false,
        },
        {
          image: IMG.bjxmoda('cedice-small.webp'),
          imageAlt: 'CEDICE',
          name: 'CEDICE Guanajuato Moda',
          tags: ['Diseño de Moda', 'Capacitación creativa'],
          description: 'CEDICE dedicado al desarrollo del diseño, la capacitación y el emprendimiento en la industria de la moda',
          smallLabel: 'Diseño, Capacitación & emprendimiento',
          footerName: 'CEDICE Guanajuato Moda',
          link: 'https://www.instagram.com/cediceguanajuatomoda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          reverse: true,
        },
      ],
    },

    form: {
      variant: 'featured',
      id: 'form-bjxmoda',
      heading: '¿Te gustaría colaborar con nosotros?',
      description: 'Forma parte de la comunidad creativa de BJXMODA y conecta con nuevas oportunidades.',
      highlight: 'BJXMODA',
      image: IMG.bjxmoda('cr-14.webp'),
      imageAlt: 'Modelo',
      logo: IMG.bjxmoda('bjxmoda-letra-negra.svg'),
      submitLabel: 'Quiero Colaborar',
      extraField: {
        name: 'colaborador',
        label: 'Tipo de Colaborador',
        type: 'select',
        options: [
          { value: 'estudiante', label: 'Estudiante' },
          { value: 'emprendedor', label: 'Emprendedor' },
          { value: 'modelo', label: 'Modelo' },
          { value: 'influencer', label: 'Influencer' },
          { value: 'fotografo', label: 'Fotógrafo' },
          { value: 'diseñador', label: 'Diseñador' },
          { value: 'maquillista', label: 'Maquillista' },
          { value: 'stylist', label: 'Stylist' },
          { value: 'otro', label: 'Otro' },
        ],
      },
    },

    seo: {
      title: 'BJXMODA | Talento, diseño y moda en Guanajuato',
      description:
        'BJXMODA impulsa el talento, diseño y consumo local de moda en Guanajuato. Conoce nuestros proyectos, socios y forma parte de la comunidad.',
    },
  },

  cedice: {
    id: 'cedice',
    project: 'cedice',
    name: 'CEDICE Guanajuato Moda',
    title: 'CEDICE',
    logoLight: IMG.cedice('cedice-gto-moda.webp'),
    logoDark: IMG.cedice('cedice-gto-moda.webp'),

    carouselGroups: [
      [
        { src: IMG.cedice('1.webp'), alt: 'Modelo CEDICE 1' },
        { src: IMG.cedice('2.webp'), alt: 'Modelo CEDICE 2' },
        { src: IMG.cedice('3.webp'), alt: 'Modelo CEDICE 3' },
        { src: IMG.cedice('4.webp'), alt: 'Modelo CEDICE 4' },
      ],
      [
        { src: IMG.cedice('5.webp'), alt: 'Modelo CEDICE 5' },
        { src: IMG.cedice('6.webp'), alt: 'Modelo CEDICE 6' },
        { src: IMG.cedice('7.webp'), alt: 'Modelo CEDICE 7' },
        { src: IMG.cedice('8.webp'), alt: 'Modelo CEDICE 8' },
      ],
      [
        { src: IMG.cedice('9.webp'), alt: 'Modelo CEDICE 9' },
        { src: IMG.cedice('10.webp'), alt: 'Modelo CEDICE 10' },
        { src: IMG.cedice('11.webp'), alt: 'Modelo CEDICE 11' },
        { src: IMG.cedice('12.webp'), alt: 'Modelo CEDICE 12' },
      ],
      [
        { src: IMG.cedice('1.webp'), alt: 'Modelo CEDICE 1' },
        { src: IMG.cedice('2.webp'), alt: 'Modelo CEDICE 2' },
        { src: IMG.cedice('3.webp'), alt: 'Modelo CEDICE 3' },
        { src: IMG.cedice('4.webp'), alt: 'Modelo CEDICE 4' },
      ],
    ],
    carouselLogo: IMG.cedice('cedice-gto-moda.webp'),

    about: {
      variant: 'card',
      image: IMG.cedice('ced.webp'),
      imageAlt: 'CEDICE',
      imageTag: 'CEDICE',
      title: 'CEDICE',
      highlight: 'CEDICE',
      afterHighlight:
        ' "Centro Estatal de Diseño, Capacitación y Emprendimiento de Guanajuato en Moda" es un espacio donde creatividad, cultura e innovación se unen para impulsar la moda con identidad Guanajuatense',
      link: 'https://www.instagram.com/cediceguanajuatomoda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      linkLabel: 'Redes Sociales',
    },

    services: {
      heading: 'Impulsando la Comunidad Creativa',
      description:
        'Espacios que conectan talento, innovación y colaboración para fortalecer el ecosistema de moda y diseño en Guanajuato.',
      items: [
        {
          image: IMG.cedice('havla.webp'),
          imageAlt: 'HAVLAMX',
          title: 'Havla Mx',
          description:
            'HAVLA es un concepto dedicado a la moda, el diseño y la creatividad local, que reúne propuestas únicas de marcas, diseños, productos emergentes para conectar su talento con nuevas oportunidades y consumidores.',
          link: 'https://www.instagram.com/havlamx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        },
        {
          image: IMG.cedice('cplmena1.webp'),
          imageAlt: 'La Colmena Atelier',
          title: 'La Colmena Atelier',
          description:
            'La Colmena Atelier es un espacio de creación y confección donde el talento local da vida a nuevas propuestas de moda y diseño. Equipado para el desarrollo de piezas creativas, promueve la colaboración, la innovación y el crecimiento colectivo dentro de la comunidad creativa.',
          link: 'https://www.instagram.com/lacolmenaatelier?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        },
        {
          image: IMG.cedice('creativo.webp'),
          imageAlt: 'Creativo Hub',
          title: 'Creativo Hub',
          description:
            'Creativo Hub es un espacio de producción audiovisual diseñado para potenciar la imagen de marcas y creativos locales. Equipado para sesiones fotográficas y creación de contenido, permite desarrollar material visual de calidad profesional que fortalece la identidad y proyección de cada proyecto.',
          link: 'https://www.instagram.com/creativohubmx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        },
      ],
    },

    form: {
      variant: 'standard',
      id: 'cedice-form',
      heading: 'Encuentra Tu Espacio Creativo',
      description:
        'Completa tu registro y selecciona el área que mejor se adapte a tus intereses. Forma parte de una comunidad que impulsa la moda, el diseño y la creatividad en Guanajuato.',
      image: IMG.cedice('cr-14.webp'),
      imageAlt: 'Formulario',
      logoText: 'BJXMODA',
      submitLabel: 'Agendar reunión',
      extraField: {
        name: 'area_interes',
        label: 'Área de interés',
        type: 'select',
        options: [
          { value: 'havlamx', label: 'Havla Mx' },
          { value: 'colmena', label: 'La Colmena Atelier' },
          { value: 'creativo', label: 'Creativo Hub' },
        ],
      },
    },

    seo: {
      title: 'CEDICE Guanajuato Moda | Diseño, capacitación y emprendimiento',
      description:
        'CEDICE es el Centro Estatal de Diseño, Capacitación y Emprendimiento de Guanajuato en Moda. Conoce Havla Mx, La Colmena Atelier y Creativo Hub.',
    },
  },

  kiuModels: {
    id: 'kiu-models',
    project: 'kiu_models',
    name: 'Kiu Models',
    title: 'Kiu Models',
    logoLight: IMG.kiu('logo-kiu-sin-fondo.webp'),
    logoDark: IMG.kiu('logo-kiu-sin-fondo.webp'),

    carouselGroups: [
      [
        { src: IMG.kiu('1.webp'), alt: 'Modelo Kiu 1' },
        { src: IMG.kiu('1-1.webp'), alt: 'Modelo Kiu 2' },
        { src: IMG.kiu('1-2.webp'), alt: 'Modelo Kiu 3' },
        { src: IMG.kiu('1-3.webp'), alt: 'Modelo Kiu 4' },
      ],
      [
        { src: IMG.kiu('2.webp'), alt: 'Modelo Kiu 5' },
        { src: IMG.kiu('3.webp'), alt: 'Modelo Kiu 6' },
        { src: IMG.kiu('4.webp'), alt: 'Modelo Kiu 7' },
        { src: IMG.kiu('5.webp'), alt: 'Modelo Kiu 8' },
      ],
      [
        { src: IMG.kiu('6.webp'), alt: 'Modelo Kiu 9' },
        { src: IMG.kiu('7.webp'), alt: 'Modelo Kiu 10' },
        { src: IMG.kiu('8.webp'), alt: 'Modelo Kiu 11' },
        { src: IMG.kiu('9.webp'), alt: 'Modelo Kiu 12' },
      ],
      [
        { src: IMG.kiu('10.webp'), alt: 'Modelo Kiu 13' },
        { src: IMG.kiu('11.webp'), alt: 'Modelo Kiu 14' },
        { src: IMG.kiu('12.webp'), alt: 'Modelo Kiu 15' },
        { src: IMG.kiu('13.webp'), alt: 'Modelo Kiu 16' },
      ],
    ],
    carouselLogo: IMG.kiu('kiu-logo.webp'),

    about: {
      variant: 'card',
      image: IMG.kiu('con1.webp'),
      imageAlt: 'Kiu Models',
      imageTag: 'Kiu Models',
      title: 'Kiu Models',
      highlight: 'Kiu Models',
      afterHighlight:
        ' Agencia y producción de talentos Guanajuatenses, la cuál busca colocar al talento local en plataformas dentro de la industria de la moda, audiovisual y creativa. Contando con más de 100 talentos de municipios como San Francisco del Rincón, León, Irapuato, Salamanca, Acámbaro, Apaseo El Grande, Celaya, Jalpa de Cánovas, entre otros.',
      link: 'https://www.instagram.com/kiumodels?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      linkLabel: 'Redes Sociales',
    },

    talents: {
      heading: 'Más de 100 talentos en Guanajuato',
      description:
        'Con presencia en León, Irapuato, Celaya, Salamanca, Acámbaro, San Francisco del Rincón y más municipios, impulsamos el talento local dentro de la industria de la moda, el audiovisual y los sectores creativos.',
      items: [
        { image: IMG.kiu('jessica-de-anda-moreno.jpg'), name: 'Jessica de Anda Moreno', instagram: 'Jesss_deandam' },
        { image: IMG.kiu('monique-kubli.jpg'), name: 'Monique kubli', instagram: 'Kubli_monique' },
        { image: IMG.kiu('axel-prado.jpg'), name: 'Axel Prado', instagram: 'axel_.glzz' },
        { image: IMG.kiu('rodrigo-villegas.png'), name: 'Rodrigo Villegas', instagram: 'rockstarspaceboy' },
      ],
    },

    form: {
      variant: 'standard',
      id: 'kiu-models-form',
      heading: 'Únete en "El ABC de las pasarelas"',
      description:
        'Completa tu registro y sé parte de una red de talentos que representa e impulsa el potencial creativo de Guanajuato.',
      image: IMG.kiu('con1.webp'),
      imageAlt: 'Formulario',
      logoText: 'KIUMODELS',
      submitLabel: 'Agendar reunión',
      extraField: {
        name: 'ciudad_residencia',
        label: 'Ciudad de Residencia',
        type: 'text',
        placeholder: 'Ingresa tu ciudad',
      },
    },

    seo: {
      title: 'Kiu Models | Agencia de talento en Guanajuato',
      description:
        'Kiu Models es la agencia y productora de talento de Guanajuato, con más de 100 talentos en la industria de la moda, el audiovisual y lo creativo.',
    },
  },

  leonFashion: {
    id: 'leon-fashion',
    project: 'leon_fashion',
    name: 'León Fashion Film',
    title: 'León Fashion Film',
    logoLight: IMG.leon('logo-lff-gto-1.webp'),
    logoDark: IMG.leon('logo-lff-gto-1.webp'),

    carouselGroups: [
      [
        { src: IMG.leon('1.webp'), alt: 'Modelo LFF 1' },
        { src: IMG.leon('2.webp'), alt: 'Modelo LFF 2' },
        { src: IMG.leon('3.webp'), alt: 'Modelo LFF 3' },
        { src: IMG.leon('4.webp'), alt: 'Modelo LFF 4' },
      ],
      [
        { src: IMG.leon('5.webp'), alt: 'Modelo LFF 5' },
        { src: IMG.leon('6.webp'), alt: 'Modelo LFF 6' },
        { src: IMG.leon('7.webp'), alt: 'Modelo LFF 7' },
        { src: IMG.leon('8.webp'), alt: 'Modelo LFF 8' },
      ],
      [
        { src: IMG.leon('9.webp'), alt: 'Modelo LFF 9' },
        { src: IMG.leon('10.webp'), alt: 'Modelo LFF 10' },
        { src: IMG.leon('11.webp'), alt: 'Modelo LFF 11' },
        { src: IMG.leon('12.webp'), alt: 'Modelo LFF 12' },
      ],
      [
        { src: IMG.leon('13.webp'), alt: 'Modelo LFF 13' },
        { src: IMG.leon('14.webp'), alt: 'Modelo LFF 14' },
        { src: IMG.leon('14.webp'), alt: 'Modelo LFF 14b' },
        { src: IMG.leon('15.webp'), alt: 'Modelo LFF 15' },
      ],
    ],
    carouselLogo: IMG.leon('logo-lff-gto-1.webp'),

    about: {
      variant: 'simple',
      image: IMG.leon('19.webp'),
      imageAlt: 'LeonFF',
      imageTag: '',
      title: 'Acerca de León Fashion Film Guanajuato',
      afterHighlight:
        'León Fashion Film es una plataforma; concurso y comunidad audiovisual que recurre al diseño, la moda y estilo de vida para promover la identidad de la ciudad y sus usuarios por medio de las categorías Experiencia Guanajuato, Vida Nacional y Sin Fronteras.',
      link: 'https://www.instagram.com/leonffguanajuato?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      linkLabel: 'Redes Sociales',
    },

    editions: {
      heading: 'León Fashion Film Guanajuato',
      description:
        'Un espacio donde la moda, el diseño y la producción audiovisual generan historias que inspiran, conectan y promueven la identidad de cada territorio.',
      rows: [
        { label: 'LFF · 1ª EDICIÓN', images: [IMG.leon('1v1.webp'), IMG.leon('1v2.webp'), IMG.leon('1v3.webp'), IMG.leon('1v4.webp')] },
        { label: 'LFF · 2ª EDICIÓN', images: [IMG.leon('2v1.webp'), IMG.leon('2v2.webp'), IMG.leon('2v3.webp'), IMG.leon('2v4.webp')] },
        { label: 'LFF · 3ª EDICIÓN', images: [IMG.leon('3v1.webp'), IMG.leon('3v2.webp'), IMG.leon('3v3.webp'), IMG.leon('3v4.webp')] },
        { label: 'LFF · 4ª EDICIÓN', images: [IMG.leon('4v1.webp'), IMG.leon('4v2.webp'), IMG.leon('4v3.webp'), IMG.leon('4v4.webp')] },
        { label: 'LFF · 5ª EDICIÓN', images: [IMG.leon('5v1.webp'), IMG.leon('5v2.webp'), IMG.leon('5v3.webp'), IMG.leon('5v4.webp')] },
        { label: 'LFF · 6ª EDICIÓN', images: [IMG.leon('6v1.webp'), IMG.leon('6v2.webp'), IMG.leon('6v3.webp'), IMG.leon('6v4.webp')] },
      ],
    },

    videoSection: {
      variant: 'serif',
      heading: 'PROYECTOS AUDIOVISUALES',
      description:
        'Una selección de producciones que reflejan la creatividad, la moda y la narrativa visual impulsadas por León Fashion Film Guanajuato, plataforma que promueve el talento audiovisual y la identidad cultural a través del fashion film.',
      exploreLink: 'https://youtube.com/@leonfashionfilm5588?si=Dh7fEBJj2tYbN1Gy',
      exploreLabel: 'Explorar contenido',
      items: [
        {
          image: IMG.leon('1.webp'),
          tag: 'León Fashion Film',
          title: 'El Jardín de las Flores',
          description: 'Una historia que explora la conexión entre la vida y aquellos que continúan floreciendo en nuestros recuerdos.',
          link: 'https://youtu.be/QsyHe2Ca8aE?si=CNRS8YHgEAx5flFI',
        },
        {
          image: IMG.leon('2.webp'),
          tag: 'León Fashion Film',
          title: 'La Ricerca - Kiresty García',
          description:
            'Producción audiovisual realizada por Kiresty García, reconocida con el segundo lugar en la primera edición de León Fashion Film Guanajuato.',
          link: 'https://youtu.be/Oi0WvphRyI8?si=5d6-NcLqW-NECxn-',
        },
        {
          image: IMG.leon('3.webp'),
          tag: 'León Fashion Film',
          title: 'Rosa Mexicano',
          description: 'Una producción audiovisual que forma parte de la selección de Fashion Films presentados en León Fashion Film Guanajuato.',
          link: 'https://youtu.be/-Z40YWg-O4Q?si=0UloayURzcMCR-AS',
        },
        {
          image: IMG.leon('4.webp'),
          tag: 'León Fashion Film',
          title: 'El Origen',
          description: 'Una propuesta audiovisual que explora el origen, la identidad y los elementos que dan forma a una historia visual única.',
          link: 'https://youtu.be/vXjCnTtLq9s?si=Y_YEp0XYBmR_QARu',
        },
        {
          image: IMG.leon('5.webp'),
          tag: 'León Fashion Film',
          title: 'Evolution — Brandon Roldán',
          description:
            'Producción audiovisual de Brandon Roldán, reconocida con el segundo lugar en la primera edición de León Fashion Film Guanajuato.',
          link: 'https://youtu.be/3XAp36ctOXY?si=Wif_Wv9SJT2ZRA4a',
        },
        {
          image: IMG.leon('6.webp'),
          tag: 'León Fashion Film',
          title: 'Rebozo',
          description:
            'Fashion Film de Mitzi Sánchez (Estado de México), ganadora de la categoría "Esto es León" en la tercera edición de León Fashion Film Guanajuato.',
          link: 'https://youtu.be/sypVuixOQxw?si=rxZdCKBpcUIx_sXS',
        },
      ],
    },

    filmfreeway: {
      eyebrow: 'FilmFreeway',
      heading: 'LFF · CONVOCATORIAS',
      description:
        'Además de León Fashion Film, contamos con nuestro perfil oficial en FilmFreeway, plataforma donde publicamos convocatorias y procesos de inscripción para proyectos audiovisuales.',
      link: 'https://filmfreeway.com/LeonFashionfilm',
      linkLabel: 'VISITAR PERFIL',
    },

    form: {
      variant: 'standard',
      id: 'leon-fashion-form',
      heading: 'Descubre el Universo de León Fashion Film',
      description:
        'Explora los proyectos, convocatorias y producciones que forman parte de una plataforma dedicada a impulsar la creatividad, la moda y la narrativa audiovisual en Guanajuato.',
      image: IMG.leon('19.webp'),
      imageAlt: 'Formulario',
      logoText: 'León Fashion Film',
      submitLabel: 'Solicitar Información',
      extraField: {
        name: 'area_interes',
        label: 'Área de interés',
        type: 'select',
        options: [
          { value: 'Experiencia Guanajuato', label: 'Experiencia Guanajuato' },
          { value: 'Vida Nacional', label: 'Vida Nacional' },
          { value: 'Sin Fronteras', label: 'Sin Fronteras' },
        ],
      },
    },

    seo: {
      title: 'León Fashion Film Guanajuato | Moda, diseño y cine',
      description:
        'León Fashion Film es la plataforma, concurso y comunidad audiovisual que une moda, diseño y cine para promover la identidad de Guanajuato.',
    },
  },
};

export const footerData = {
  logo: IMG.shared('logo-blanco.svg'),
  tagline: 'BJXMODA la plataforma de impulso para el talento del Bajio en Mexico',
  copyright: '© BJXMODA Todos los derechos reservados 2026',
  socials: [
    { icon: 'fa-facebook-f', label: 'Facebook', href: 'https://www.facebook.com/BJXmoda/' },
    { icon: 'fa-instagram', label: 'Instagram', href: 'https://www.instagram.com/bjxmoda' },
    { icon: 'fa-youtube', label: 'YouTube', href: 'https://youtube.com/@bjxmoda2398?si=l4rIAK2Ux9Y8qk1q' },
    { icon: 'fa-tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@bjxmoda?is_from_webapp=1&sender_device=pc' },
  ],
};

export const adminData = {
  logo: IMG.shared('logo-negro.svg'),
  boards: [
    { key: 'bjxmoda', label: 'BJXMODA', project: 'bjxmoda', extraFieldKey: 'colaborador', extraLabel: 'Colaborador' },
    { key: 'cedice', label: 'CEDICE', project: 'cedice', extraFieldKey: 'area_interes', extraLabel: 'Área de interés' },
    { key: 'kiu_models', label: 'KIUMODELS', project: 'kiu_models', extraFieldKey: 'ciudad_residencia', extraLabel: 'Ciudad' },
    { key: 'leon_fashion', label: 'LEÓN FASHION FILM', project: 'leon_fashion', extraFieldKey: 'area_interes', extraLabel: 'Área de interés' },
  ],
};

export default sites;
