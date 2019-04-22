<template lang="html">
    <header class="masthead text-white text-center" id="header">
       <div class="overlay"></div>
       <div class="container">
         <div class="row">
           <div class="col-xl-9 mx-auto">
             <h1 class="mb-5">Wiki Loves Earth 2018</h1>
             <h3 class="mb-5">Concurso fotográfico de espacios naturales protegidos abierto a todo el mundo</h3>
           </div>
         </div>
         <div class="row">
             <div class="col-xl-9 mx-auto">
                 <router-link :to="{ hash: 'participa' }" activeClass="active" class="btn btn-primary">Participar</router-link>
                 <router-link :to="{ name: 'Acerca' }" activeClass="active" class="btn btn-secondary">Conocer más</router-link>
                 <br>
                 <br>
                 <social-sharing url="https://wle.cl/"
                                       title="Participa en el concurso fotográfico Wiki Loves Earth Chile"
                                       hashtags="wleChile"
                                       twitter-user="wikimedia_cl"
                                       inline-template>
                    <div>
                   <div class="btn btn-info">
                       <network network="twitter"> Envía un tweet </network>
                   </div>
                   <div class="btn btn-info">
                       <network network="facebook"> Comparte en facebook </network>
                   </div>
                 </div>
                 </social-sharing>
             </div>
         </div>
       </div>
     </header>
</template>

<script>
import SocialSharing from 'vue-social-sharing';
export default {
  components: {
    SocialSharing
  },
  data() {
    return {
      rotate: 0,
      imgs: ['7/7b/Laguna_Quillelhue%2C_Puesco_-_Flickr_-_Pato_Novoa.jpg', '9/90/Lago_Conguillio_Homebanner.jpg', '4/49/Cuernos_del_Paine_from_Lake_Pehoé.jpg', '4/45/Milodon_cave.JPG', '9/9a/Salar_de_Surire_banner.jpg']
    }
  },
  mounted() {
    this.setbackground()
  },
  methods: {
    setbackground() {
      window.setTimeout(this.setbackground, 25000);
      let idx = this.rotate % this.imgs.length;
      document.getElementById('header').style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/' + this.imgs[idx] + ')';
      this.rotate++;

    }
  }
}
</script>
