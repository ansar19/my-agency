<template>
  <Layout>
    <div class="row">
      <figure>
      <g-image src="~/assets/john-schnobrich-FlPc9_VocJ4-unsplash.jpg" class="img-fluid mb-4" alt="О компании"
        fit="contain" />
      </figure>
      <div class="col-md-4 d-flex flex-column justify-content-top">
        <h1>Миссия</h1>
        <p class="font-big-1">Миссия "ЭкоМарин (EcoMarine)" расти как здоровая, развивающаяся компания, удовлетворяющая
          нужды клиентов.</p>
        <h1 class="mb-3">Ценности нашей компании:</h1>

        <div class="callout callout-success mb-1 mt-1">
            <b>Люди.</b> <p>Мы обязуемся обращаться с каждым человеком с достоинством и
            уважением, а также приветствовать
            многообразие, сотрудничество, открытый диалог и командную работу.</p>
        </div>

        <div class="callout callout-success mb-1 mt-1">
            <b>Безопасность.</b> <p>Мы стремимся к тому, чтобы каждый день проходил без
            инцидентов и травм.</p>
        </div>

        <div class="callout callout-success mb-1 mt-1">
            <b>Высокие стандарты.</b> <p>Мы стремимся к непрерывному повышению качества, уровня
            обслуживания с должным уровнем внимания к деталям. Мы ориентируемся на качество, а не на количество.</p>
        </div>

        <div class="callout callout-success mb-1 mt-1">
            <b>Технологии.</b> <p>Мы стремимся к инновациям и технологическому лидерству в нашей
            работе.</p>
        </div>

        <div class="callout callout-success mb-1 mt-1">
            <b>Охрана окружающей среды.</b> <p>Мы стремимся обеспечить долгосрочное благоприятное
            состояние окружающей среды, а также защитить рентабельность и активы наших клиентов.</p>
        </div>

        <!-- <p class="font-big-1">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
          Aenean dignissim pellentesque felis.</p> -->
        <!-- <p class="font-big-1">
          <g-link to="/portfolio" class="text-dark font-weight-bold"><u>View Portfolio</u></g-link>
        </p> -->
      </div>

      <div class="col-md-8">
        <h1 class="mb-3">Принципы работы нашей компании</h1>
        <div class="row">
          <div class="col-md-4" v-for="(teamMember, index) in teamMembers" v-bind:key="index">
            <TeamMember :team-member="teamMember" />
          </div>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
  import TeamMember from "../components/team/Team-Member";
  export default {
    components: {
      TeamMember
    },
    metaInfo: {
      title: 'Про нас'
    },
    data() {
      return {
        teamMembers: [{
            index: 0,
            name: "Простота",
            description: "Мы регулярно стараемся сократить, автоматизировать или максимально упростить наши политики и процедуры. Лучшим принципом для нас является простота, основанная на принципе - KISS (акроним для «Keep it short and simple») - Короче и проще. Принцип KISS утверждает, что большинство систем работают лучше всего, если они остаются простыми, а не усложняются. "
          },
          {
            index: 1,
            name: "Честность",
            description: "Честность и добросовестность один из наших основных принципов, мы предпочтем озвучить конструктивную критику чем умолчим о реальных последствиях тех или иных решений. "
          },
          {
            index: 2,
            name: "Доверие",
            description: "Мы понимаем, что развитие нашей компании зависит от членов нашей команды, которое невозможно без должного уровня доверия. Мы поощряем наших сотрудников за проявление инициативы по улучшению деятельности компании или личном улучшении. "
          },
          {
            index: 3,
            name: "Открытость",
            description: "Мы открыты ко всему новому и стараемся привнести в работу нашей компании лучшие наработки из других отраслей и направлений с учетом адаптации, и отраслевой специфики.  "
          },
          {
            index: 4,
            name: "Постоянное улучшение",
            description: "Мы понимаем, что мы не можем быть везде и всегда во всем лучшими. Поэтому, мы стараемся следовать пути постоянного улучшения самих себя, нашей компании и общества. "
          },
          {
            index: 5,
            name: "Минимизация иерархии",
            description: "Мы стремимся к сокращению списка должностей, отделов и упрощения иерархии. Мы предпочитаем состав ролей исходя из потребностей и целей клиента на основании навыков и знаний членов команды, которая позволяет держать низкими накладные расходы компании. "
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