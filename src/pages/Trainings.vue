<template>
    <Layout>
        <div class="card mb-3">
            <g-image src="~/assets/neonbrand-1-aA2Fadydc-unsplash.jpg" class="img-fluid mb-4" alt="Responsive image"
                fit="contain" />
            <div class="card-body">
                <h5 class="card-title">ОБУЧЕНИЕ</h5>
            </div>
        </div>

        <blockquote class="blockquote text-center">
            <p class="mb-0">Знание сила</p>
        </blockquote>

        <div class="row">
            <div class="col-md-6">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Производственная экология</h5>
                        <p class="card-text"><small class="text-muted">- курс предназначен для экологов, работающих на
                                производственных
                                предприятиях, и покрывает все основные направления необходимые для осуществления
                                деятельности на высоком профессиональном уровне: системы управления охраной окружающей
                                среды
                                на предприятии, управление отходами, управление разливами, проведение инвентаризации,
                                мониторинга, написание технических заданий и объемов работ, законодательные и иные
                                требования, системы очистки сточных вод и воздуха, рекультивация.</small></p>

                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Курс по Природоохранному проектированию</h5>
                        <p class="card-text"><small class="text-muted">- позволяет подготовить эколога проектировщика
                                для работы в организациях,
                                оказывающих услуги в области природоохранного проектирования и нормирования, включает
                                практические навыки для проведения качественной инвентаризации, проведения расчетов,
                                общественных слушаний и оформления документации для природоохранного проектирования и
                                нормирования. Мы готовы поделится нашим многолетним опытом оказания услуг проектирования
                                и
                                согласования проектной документации в рамках данного курса.</small></p>

                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Устойчивое развитие и корпоративно-социальная ответственность</h5>
                        <p class="card-text"><small class="text-muted"> - представляет собой комплексный подход к
                                управлению организациями, ориентированный на создание и умножение долгосрочных
                                экономических, социальных и экологических выгод. Данный курс дает представление о том,
                                как правильно выстраивать в организациях стратегию устойчивого развития,
                                энергоэффективности, взаимодействие с заинтересованными сторонами, управление
                                морально-этическими аспектами и подготовить нефинансовый или интегрированной
                                отчет.</small></p>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Промышленная безопасность, охрана труда и здоровья</h5>
                        <p class="card-text"><small class="text-muted">Промышленная безопасность и охрана труда
                                охватывает разнообразные темы от вопросов построения систем управления ОЗ, ОТ и ПБ,
                                написания политик и процедур, анализ и оценку рисков, методов и способов проведения
                                обучения, создания систем ключевых показателей эффективности, а также отработке
                                практических навыков управления травматизмом, аварийностью, безопасного
                                вождения.</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="callout callout-success">
            Мы также можем взять на себя разработку и внедрение пакета обучения для вашей компании, на основе
            законодательных требования, требований международных организации, стандартов и оценки рисков применительно к
            вашей отрасли. Напишите нам о том какие вызовы стоят перед вами, и мы обязательно вам поможем!
        </div>

        <div class="videoWrapper mb-3">
            <!-- Copy & Pasted from YouTube -->
            <iframe width="560" height="315" src="https://www.youtube.com/embed/coUldfkygxQ" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            
        </div>
        <p class="card-text"><small class="text-muted">Пример реализованного нами видео-инструктажа для работников
                    уранового месторождения в Казахстане.</small></p>

        <div class="card mb-3">
            <div class="card-body">
                <g-link to="/portfolio" class="link"> &larr; Вернутся к услугам</g-link>
            </div>
        </div>

    </Layout>
</template>

<script>
    export default {
        components: {},
        metaInfo: {
            title: 'Обучение'
        },
    }
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }

    .callout {
        padding: 20px;
        margin: 20px 0;
        border: 1px solid #eee;
        border-left-width: 5px;
        border-radius: 3px;
    }

    .callout h4 {
        margin-top: 0;
        margin-bottom: 5px;
    }

    .callout p:last-child {
        margin-bottom: 0;
    }

    .callout code {
        border-radius: 3px;
    }

    .callout+.bs-callout {
        margin-top: -5px;
    }

    .callout-default {
        border-left-color: #777;
    }

    .callout-default h4 {
        color: #777;
    }

    .callout-primary {
        border-left-color: #428bca;
    }

    .callout-primary h4 {
        color: #428bca;
    }

    .callout-success {
        border-left-color: #5cb85c;
    }

    .callout-success h4 {
        color: #5cb85c;
    }

    .callout-info {
        border-left-color: #5bc0de;
    }

    .callout-info h4 {
        color: #5bc0de;
    }

    .callout-bdc {
        border-left-color: #29527a;
    }

    .callout-bdc h4 {
        color: #29527a;
    }

    .videoWrapper {
        position: relative;
        padding-bottom: 56.25%;
        /* 16:9 */
        padding-top: 25px;
        height: 0;
    }

    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>