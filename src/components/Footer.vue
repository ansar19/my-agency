<template>
    <div class="py-5 row">
        <div class="col-md-2 col-6">
            <p><b>ССЫЛКИ</b></p>
            <ul class="list-unstyled font-big-1-2 font-weight-light">
                <li>
                    <g-link to="/">Главная</g-link>
                </li>
                <li>
                    <g-link to="/about">О компании</g-link>
                </li>
                <li>
                    <g-link to="/portfolio">Услуги</g-link>
                </li>
                <li>
                    <g-link to="/blog">Блог</g-link>
                </li>
                <li>
                    <g-link to="/contact">Контакты</g-link>
                </li>
            </ul>
        </div>
        <div class="col-md-2 col-6">
            <p><b>МЕДИА</b></p>
            <ul class="list-unstyled font-big-1-2 font-weight-light">
                <li>
                    <a href="https://twitter.com/ecomarinekz" target="_blank">Twitter</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/ecomarinekz/" target="_blank">Instagram</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/ecomarinekz/" target="_blank">Facebook</a>
                </li>
                <li>
                    <a href="https://t.me/ecomarinekz" target="_blank">Telegram</a>
                </li>
                <li>
                    <a href="https://medium.com/@ecomarinekz" target="_blank">Medium</a>
                </li>
            </ul>
        </div>
        <div class="col-md-6 offset-md-2 col-12 mt-3 mt-md-0">
            <!-- <div class="form-group mb-5">
                <label class="font-weight-bold">РАССЫЛКА</label>
                <div class="input-group mb-3 border-bottom">
                    <input type="text" class="form-control border-0" placeholder="Электронная почта получателя"
                        aria-label="Enter your email address" aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary border-0" type="button"
                            id="button-addon2">ПОДПИСАТЬСЯ</button>
                    </div>
                </div>
            </div> -->
            <div class="form-group">
                <label class="font-weight-bold">НАПИСАТЬ</label>
                <h4 class="font-weight-light"><a href="mailto:info@ecomarine.kz">info@ecomarine.kz</a></h4>
            </div>
        </div>
        <div class="container pt-5 text-muted small">
            <p class="mb-0">&copy; {{ currentYear }} ЭкоМарин.</p>
            <p>Все права защищены</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                currentYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>