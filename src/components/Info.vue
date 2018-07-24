<template lang="pug">
  .content: .infos(v-for='record of info')
    p.title.is-4 {{ record.name }}
    .document(v-for='document in record.records')
      .document__icons.icon: i.document__icon.fa.fa-circle-o
      .document__content
        p.document__date {{ document.date }}
        img.document__img(:src="document.img")
        p.document__description {{ document.description }}
</template>

<script>
import info from "../data/info";
export default {
  data: () => ({ info })
};
</script>

<style lang="scss">
.document {
  display: flex;
  position: relative;
  margin-bottom: 1.6rem;

  &:not(:last-child)::before {
    content: "";
    background-color: #dbdbdb;

    width: 0.2em;
    height: 100%;

    top: 1.7em;
    left: 0.63em;
    position: absolute;
  }

  &__icons {
    padding-top: 0.4em;
    flex: 0 0 auto;
  }

  &__icon {
    color: #777;
  }

  &__content {
    flex: 1 1 auto;
    padding: 0 0 0.2rem 1.5rem;
  }

  &__date {
    font-size: 1.2rem;
    color: #000;
  }
}
</style>
