import { Component, OnInit,ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(public translate:TranslateService) { }
  language:any;

  ngOnInit() {
    this.checkLang()
  }

  show = false;
  modal_title:string;
  modal_text:string;
  modal_url:string;
  menupanel = false;
  modal_object:any;
  show_modal_text = false;
  modal_bg = false;
  selectedCard;

  lang = 'ru';

  @ViewChild('modal') modal;
  // @ViewChild('menu') menu;

  list_of_cards = [
    {
      "image_url":"../assets/img/flag.jpg",
      "bg_url":"../assets/img/image_5-min.png",
      "date":"1900-1991",
      "name_ru":"Казахстан и новые независимые государства",
      "name_kk":"Қазақстан және жаңа тәуелсіз мемлекеттер",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz».",
        "iframe_path":"../../assets/iframe/story_html5.html"
    },
    {
      "image_url":"../assets/img/image_2-min.png",
      "bg_url":"../assets/img/image_5-min.png",
      "date":"1900-1991",
      "name_ru":"Казахстан и новые независимые государства",
      "name_kk":"Қазақстан және жаңа тәуелсіз мемлекеттер",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz».",
        "iframe_path":"../../assets/iframe/story_html5.html"
    },
    {
      "image_url":"../assets/img/image_1-min.png",
      "bg_url":"../assets/img/image_5-min.png",
      "date":"1900-1992",
      "name_ru":"Казахстан и новые независимые государства",
      "name_kk":"Қазақстан және жаңа тәуелсіз мемлекеттер",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz».",
        "iframe_path":"../../assets/iframe/story_html5.html"
    },
    {
      "image_url": "../assets/img/image_3-min.png",
      "bg_url":"../assets/img/image_5-min.png",
      "date": "1900-1993",
      "name_ru":"Казахстан и новые независимые государства",
      "name_kk":"Қазақстан және жаңа тәуелсіз мемлекеттер",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz».",
        "iframe_path":"../../assets/iframe/story_html5.html"
    },
    {
      "image_url":"../assets/img/image_4-min.png",
      "bg_url":"../assets/img/image_5-min.png",
      "date":"1900-1994",
      "name_ru":"Казахстан и новые независимые государства",
      "name_kk":"Қазақстан және жаңа тәуелсіз мемлекеттер",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz».",
        "iframe_path":"../../assets/iframe/story_html5.html"

    },
    {
      "image_url":"../assets/img/image_1-min.png",
      "bg_url":"../assets/img/image_5-min.png",
      "date":"1900-1995",
      "name_ru":"Казахстан и новые независимые государства",
      "name_kk":"Қазақстан және жаңа тәуелсіз мемлекеттер",
      "text":"  Новая книга Президента Нурсултана Назарбаева «Эра независимости» — это фундаментальный кейс о том, как нужно управлять изменениями в масштабах государства, как «зарядить» нацию на модернизационный прорыв и как исторические возможности превратить в действительность. В ней также раскрываются смыслы и значения трех волн модернизации Казахстана, описываются уникальные примеры публичной и личностной дипломатии.\n" +
        "\n" +
        "Особенно интересно читать персональные воспоминания Главы государства о его встречах с первыми лицами мировой политики. На страницах книги можно встретить формальные и неформальные диалоги с председателями КНР Цзян Цзэминем и Си Цзиньпинем, президентами России Ельциным, Путиным, президентами США Дж. Бушем старшим и младшим, лидерами европейских государств Тэтчер, Саркози, Шредером и многими другими.\n" +
        "\n" +
        "В сегодняшнем мире, полном противоречий и конфронтаций, быть одинаково признанным и уважаемым политиком в странах с разно-полярными взглядами чрезвычайно сложно. Однако это, безусловно, удается нашему Президенту и его сегодняшнее признание в мире, а также факты, изложенные в книге, этому яркое подтверждение. Его всесторонняя компетентность позволяет разбираться практически во всех вопросах, связанных с государственным строительством, от различных отраслей реальной экономики до чувствительных вопросов дипломатии.\n" +
        "\n" +
        "Один из эпизодов книги хорошо описывает эту характерную черту Президента. Например, в книге он вспоминает, как детально рассказывал Президенту США Дж. Бушу-старшему о технологиях транспортировки и химического состава одного из крупнейших месторождений Казахстана. Тогда американский лидер был впечатлен такими подробностями и был уверен, что его собеседник — нефтяник по образованию, поскольку профессиональные политики редко разбираются в технологических тонкостях производственного процесса. Все это говорит о достаточно серьезном подходе Главы государства к любым вопросам государственной политики.\n" +
        "\n" +
        "Все права защищены.\n" +
        "\n" +
        "При использовании материалов primeminister.kz в любых целях, кроме личных, гиперссылка на веб-сайт primeminister.kz обязательна.\n" +
        "\n" +
        "При использовании материалов primeminister.kz:\n" +
        "\n" +
        "– в печатных изданиях или в иных формах на материальных носителях – бумага, пленка и т. п., пользователь обязан в каждом случае указывать, что источником материалов является веб-сайт www.primeminister.kz;\n" +
        "\n" +
        "– в Интернете или иных формах использования в электронном виде, пользователь в каждом случае использования обязан размещать гиперссылку на главную страницу веб-сайта Премьер-Министра РК «www.primeminister.kz».",
        "iframe_path":"../../assets/iframe/story_html5.html"
    }
  ];

  checkLang(){
    let lang = localStorage.getItem('lang');
    if(lang == "ru"){
      this.language = 1;
    }
    else{
      this.language = 2;
    }
  }

  showData(item){
    this.show = !this.show;
    console.log(item)
    this.modal_object = item;
  }

  disable(){
    this.show = !this.show;
    this.modal_bg = !this.modal_bg;
  }

  closeModal(){
    this.disable();
  }

  overlayClicked(e){
      if(e.path.indexOf(this.modal.nativeElement)===-1){
        this.disable();
      }
  }

  showMenu(){
    this.menupanel = !this.menupanel;
  }

  changeLang(lang) {
      if(lang == "kk"){
        localStorage.setItem('lang',lang);
        this.translate.setDefaultLang(lang);
        location.reload();
      }
      else{
        localStorage.setItem('lang','ru');
        this.translate.setDefaultLang('ru');
        location.reload();
      }
  }
}