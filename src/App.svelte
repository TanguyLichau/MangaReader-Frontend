<script>
  // fake {_id: '639ef90b3cb2d827312c8044', name: 'test', lastChapterRead: 10, __v: 0}
  // pour changer une valeur $mangasListStore[0].name
  // pour ajouter mangasListStore.update((current) => return [...current, nouvel objet])

  import MangaList from "./mangaList.svelte";

  /*
  if (test === true) {
    mangasListStore.update((current) => {
      let obj = current.find((i) => i.name === "bengbeng");
      if (obj) {
        obj.lastChapterRead = 696969;
      }
      return current;
    });
  }*/
</script>

<MangaList />
