<template>
    <Layout>
        <div class="card mb-3">
            <g-image src="~/assets/thomas-richter-56177.jpg" class="img-fluid mb-4" alt="Responsive image"
                fit="contain" />
            <div class="card-body">
                <h5 class="card-title">УСТОЙЧИВОЕ РАЗВИТИЕ, КОРПОРАТИВНО - СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ И НЕФИНАНСОВАЯ
                    ОТЧЕТНОСТЬ</h5>
            </div>
        </div>

        <blockquote class="blockquote text-center">
            <p class="mb-0">Устойчивое развитие и нефинансовая отчетность</p>
        </blockquote>

        <div class="card mb-3">
            <div class="card-body">
                <p>Повысьте эффективность бизнеса за счет интеграции новых экологических, социальных и экономических
                    практик в своей повседневной деятельности и бизнес-решениях. Устойчивое развитие обеспечивает
                    беспрецедентные возможности для повышения рентабельности, эффективности, внедрения инноваций, а
                    также
                    помогает привлекать и удерживать талантливых сотрудников. Обратите благое намерение в прибыльные
                    действия для вашего бизнеса, повысьте значимость вашей деятельности в глазах клиентов и сотрудников.
                    На пути устойчивого развития, есть много вариантов повышения эффективности, которые появляются
                    каждый
                    день. Какие инициативы в области устойчивого развития дают самую большую отдачу? Что клиенты ожидают
                    от
                    вас?</p>
                <p>
                    ТОО "ЭкоМарин (EcoMarine)" поможет вам разобраться в путанице, чтобы понять и принять устойчивое
                    развитие в качестве возможности для бизнеса. При оказании услуг мы исходим из принципа - какие
                    мероприятия в области устойчивого развития и корпоративно - социальной ответственности будут
                    являться
                    обоюдно - выгодными как для компании, так и для местных сообществ.</p>
                <p>

                    Мы являемся компанией, которая стремится помочь вашему бизнесу. Наши эксперты учавствовали в самых
                    сложных проектах и трансформировали вызовы в возможности, одновременно вдохновляя руководство и
                    зажигая
                    страсть сотрудников. Мы специализируемся в области стратегии, управления изменениями, измерения
                    эффективности, оптимизации процессов и внедрения новых технологий.
                    Будем рады оказать высококвалифицированную помощь при решении любых поставленных задач в области
                    устойчивого развития и корпоративной социальной ответственности.
                </p>
                <h5>
                    Наши услуги включают:
                </h5>
                <div>
                    <ol class="list-counter-circle list-group">
                        <li>Разработка стратегии в области устойчивого развития и корпоративной социальной
                            ответственности.</li>
                        <li>Отчетность в области устойчивого развития и нефинансовой отчетности (GRI, AA 1000, SA 8000,
                            ISO 26000).</li>
                        <li>Устойчивое конкурентное позиционирование</li>
                        <li>Отчетность и консультации в области выбросов парниковых газов.</li>
                    </ol>
                </div>

            </div>
        </div>

        <div class="card mb-3">
            <div class="card-body">
                <g-link to="/portfolio" class="link"> &larr; Вернутся к услугам</g-link>
            </div>
        </div>

    </Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Sustainability'
        },
    }
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }

    /* CSS */
    .list-counter-circle {
        list-style: none;
        counter-reset: list;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .list-counter-circle>li {
        position: relative;
        display: block;
        height: 2rem;
        line-height: 2rem;
        margin-left: 1.75rem;
        margin-bottom: .25rem;
        padding-left: 1rem;
        padding-right: .5rem;
        color: #fff;
        background: #28a745;
        white-space: nowrap;
        border-radius: .25rem
    }

    .list-counter-circle>li:last-child {
        margin-bottom: 0;
    }

    .list-counter-circle>li::before {
        content: counter(list);
        counter-increment: list;
        position: absolute;
        left: -2rem;
        top: -.25rem;
        bottom: -.25rem;
        width: 2.5rem;
        line-height: 2rem;
        border-radius: 1.25rem;
        border: .25rem solid #fff;
        text-align: center;
        color: #fff;
        background: #28a745;
    }
</style>