<template>
  <div class="card-post full-width">
    <div class="card-post__image">
      <img src="https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro-foco-1024x670.jpg" alt="cachorro">
      <p><span class="card-post__category">Categoria</span></p>
    </div>

    <div class="card-post__content">
      <h1>Titulo</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
    </div>

    <div class="card-post__author">
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGH0reuYDLSlA/profile-displayphoto-shrink_200_200/0/1613651082514?e=1622073600&v=beta&t=R46px1RFUYurcLxxEwo-x9_3O75hqDhhxxAywmLALYg" alt="autor">
      <div class="card-post__author-infomation">
        <p><span>Nome autor</span></p>
        <p>Data de postagem: <span>19/07/2019</span></p>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .card-post{
    min-height: 300px;
    background-color: white;
    position: relative;
    border-radius: 30px;

    &__category{
      position: absolute;
      top: 25px;
      right: 0;
      background-color: $primary;
      color: white;
      padding: 3px 10px;
      border-radius: 10px 0 0 10px
    }

    &__image{
      height: 50%;
    }

    & img{
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      width: 100%;
      height: 150px;
    }

    & h1{
        font-size: 28px;
        margin: 0 10px;
        line-height: 36px;
      }

    & p{
      margin: 0 10px;
      font-size: 12px;
    }

    &__author{
      display: flex;
      justify-content: initial;
      align-items: center;
      margin: 20px 10px 10px 10px;

      & > img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      & p{
        font-size: 10px;

        & span{
          color: $primary;
        }
      }
    }
  }
</style>
