<template>
  <Layout>
    <div class="min-vh-40 d-flex flex-column justify-content-end">
      <div class="row">
        <div class="col-md-6">
          <h5 class="display-2">Хотите обсудить совместный проект?</h5>
        </div>
        <div class="col-md-5 offset-md-1">
          <div class="form-group">
            <label class="font-weight-bold">Связатся с нами</label>
            <h4 class="font-weight-light"><a href="mailto:info@ecomarine.kz">info@ecomarine.kz</a></h4>
            <h2 class="font-weight-light"><a href="tel:+77026818820">+7 702 681-88-20</a></h2>
              <h1 class="font-weight-light">
                  <a href="https://www.facebook.com/ecomarinekz/" target="_blank"><span class="mr-2"><font-awesome :icon="['fab', 'facebook-square']"/></span></a>
                  <a href="https://twitter.com/ecomarinekz" target="_blank"><span class="mr-2"><font-awesome :icon="['fab', 'twitter-square']"/></span></a>
                  <a href="https://www.instagram.com/ecomarinekz/" target="_blank"><span class="mr-2"><font-awesome :icon="['fab', 'instagram']"/></span></a>
                  <a href="https://t.me/ecomarinekz" target="_blank"><span class="mr-2"><font-awesome :icon="['fab', 'telegram']"/></span></a>
              </h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Contact!'
        }
    }
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }
</style>