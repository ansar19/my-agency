<template>
  <Layout>
    <div class="row">
      <div class="col-md-6">

        <Carousel :slides="slides" />

      </div>
      <div class="col-md-6">
        <h1 class="mt-2">ТОО "ЭкоМарин" (EcoMarine)</h1>
        <p class="font-big-1">Минимизация рисков является серьезной задачей для всех компаний. Вопросы, охраны
          окружающей среды, охраны здоровья, труда, промышленной безопасности, устойчивого развития и
          нормативно-правового регулирования являются значимыми рисками для большинства компании.</p>
        <p class="font-big-1">Благодаря эффективному управлению экологической и социальной деятельностью, рисками охраны
          здоровья и охраны труда, промышленной безопасностью ваша компания может успешно управлять современным вызовам
          и планировать будущие воздействия, тем самым экономя время и средства проектов.</p>
        <p class="font-big-1">С помощью наших специализированных услуг, мы помогаем нашим клиентам в управлении сложными
          и изменчивыми международными и местными нормативными требованиями для оптимизации бизнес-рисков.</p>
        <p class="font-big-1"><a href="mailto:info@ecomarine.kz"
            class="text-dark font-weight-bold"><u>info@ecomarine.kz</u></a></p>
      </div>
    </div>
    <div class="p-5 bg-light my-3">
      <h1 class="">ТОО "ЭкоМарин" (EcoMarine) это группа профессионалов с большим опытом работы как на
        производстве, так и в отрасли оказания инжиниринговых услуг, узнать подробнее о нашем подходе к ведению бизнеса
        вы можете узнать в разделе <g-link to="/about">"О компании"</g-link>.</h1>
    </div>

  </Layout>
</template>

<script>
  import Carousel from "../components/home/Carousel";
  export default {
    components: {
      Carousel
    },
    metaInfo: {
      title: 'Home'
    },
    data() {
      return {
        slides: [{
            type: 'ООС',
            title: 'Environmental',
            src: "~/assets/mark-koch-KiRlN3jjVNU-unsplash.jpg",
            description: "Sometime we can feel a bit dull in the morning and we need to produce our own sunshine energy."
          },
          {
            type: 'ОЗ, ОТ И ПБ',
            title: 'HSE',
            src: "~/assets/photo-1530475278652-5d941f9daa08.jpg",
            description: "So here are 17 wonderful, short positive quotes that my amazing colleague Hayley has collected for you."
          },
          {
            type: 'ОБУЧЕНИЕ',
            title: 'Training',
            src: "~/assets/daria-nepriakhina-21928.jpg",
            description: "Either way, I think we can all do with a bit more spark to help us perform miracles and live in joy."
          },
          {
            type: 'УСТОЙЧИВОЕ РАЗВИТИЕ',
            title: 'Sustainability',
            src: "~/assets/giuseppe-famiani-350158.jpg",
            description: "We also have a powerful and proven Law of Attraction gift which you can access by clicking the link below"
          },
        ]
      }
    }
  }
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }
</style>